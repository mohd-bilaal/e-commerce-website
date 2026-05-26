const STORAGE_KEY = "quizmaster-progress-v1";

const quizShell = document.querySelector(".quiz-shell");

function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

document.querySelectorAll("[data-clear-progress]").forEach((link) => {
  link.addEventListener("click", clearProgress);
});

if (quizShell) {
  const state = {
    questions: [],
    current: 0,
    answers: {},
    endsAt: null,
    timer: null,
  };

  const loadingBox = document.querySelector("#loadingBox");
  const quizBox = document.querySelector("#quizBox");
  const questionText = document.querySelector("#questionText");
  const questionCategory = document.querySelector("#questionCategory");
  const optionsList = document.querySelector("#optionsList");
  const questionCounter = document.querySelector("#questionCounter");
  const answeredCounter = document.querySelector("#answeredCounter");
  const progressBar = document.querySelector("#progressBar");
  const timerBox = document.querySelector("#timer");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const submitBtn = document.querySelector("#submitBtn");
  const clearSavedBtn = document.querySelector("#clearSavedBtn");

  function saveProgress() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        questions: state.questions,
        current: state.current,
        answers: state.answers,
        endsAt: state.endsAt,
      })
    );
  }

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved || !Array.isArray(saved.questions) || saved.questions.length === 0) return false;
      if (!saved.endsAt || Date.now() > saved.endsAt) {
        clearProgress();
        return false;
      }
      state.questions = saved.questions;
      state.current = saved.current || 0;
      state.answers = saved.answers || {};
      state.endsAt = saved.endsAt;
      return true;
    } catch (error) {
      clearProgress();
      return false;
    }
  }

  async function fetchQuestions() {
    const response = await fetch("/api/questions/");
    if (!response.ok) throw new Error("Could not load questions.");
    const data = await response.json();
    state.questions = data.questions;
    state.current = 0;
    state.answers = {};
    state.endsAt = Date.now() + data.duration * 1000;
    saveProgress();
  }

  function renderQuestion() {
    const question = state.questions[state.current];
    if (!question) return;

    loadingBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    questionCategory.textContent = question.category;
    questionText.textContent = question.text;

    optionsList.innerHTML = question.options
      .map((option, index) => {
        const letter = String.fromCharCode(65 + index);
        const selected = state.answers[question.id] === option.key ? "selected" : "";
        return `
          <button class="option-btn ${selected}" data-answer="${option.key}">
            <span>${letter}</span>
            ${option.text}
          </button>`;
      })
      .join("");

    const answeredCount = Object.keys(state.answers).length;
    questionCounter.textContent = `Question ${state.current + 1} of ${state.questions.length}`;
    answeredCounter.textContent = `${answeredCount} answered`;
    progressBar.style.width = `${((state.current + 1) / state.questions.length) * 100}%`;
    prevBtn.disabled = state.current === 0;
    nextBtn.textContent = state.current === state.questions.length - 1 ? "Finish" : "Next";
    saveProgress();
  }

  function updateTimer() {
    const remaining = Math.max(0, state.endsAt - Date.now());
    const minutes = String(Math.floor(remaining / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
    timerBox.textContent = `${minutes}:${seconds}`;
    if (remaining <= 0) {
      clearInterval(state.timer);
      submitQuiz(true);
    }
  }

  async function submitQuiz(autoSubmit = false) {
    const unanswered = state.questions.length - Object.keys(state.answers).length;
    if (!autoSubmit && unanswered > 0) {
      const proceed = confirm(`${unanswered} questions are unanswered. Submit anyway?`);
      if (!proceed) return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
    const response = await fetch("/api/submit/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answers: state.answers,
        question_ids: state.questions.map((question) => question.id),
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      alert(data.error || "Could not submit quiz.");
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Quiz";
      return;
    }
    clearProgress();
    window.location.href = data.redirect_url;
  }

  optionsList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-answer]");
    if (!button) return;
    const question = state.questions[state.current];
    state.answers[question.id] = button.dataset.answer;
    renderQuestion();
  });

  prevBtn.addEventListener("click", () => {
    state.current = Math.max(0, state.current - 1);
    renderQuestion();
  });

  nextBtn.addEventListener("click", () => {
    if (state.current === state.questions.length - 1) {
      submitQuiz();
      return;
    }
    state.current = Math.min(state.questions.length - 1, state.current + 1);
    renderQuestion();
  });

  submitBtn.addEventListener("click", () => submitQuiz());

  clearSavedBtn.addEventListener("click", async () => {
    clearProgress();
    await fetchQuestions();
    renderQuestion();
    updateTimer();
  });

  async function bootQuiz() {
    try {
      if (!loadProgress()) {
        await fetchQuestions();
      }
      renderQuestion();
      updateTimer();
      state.timer = setInterval(updateTimer, 1000);
    } catch (error) {
      loadingBox.textContent = error.message;
    }
  }

  bootQuiz();
}
