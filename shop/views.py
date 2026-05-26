import json
import os
import urllib.error
import urllib.request

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


def home(request):
    return render(request, "shop/index.html")


PRODUCT_CONTEXT = """
NovaCart products:
- iPhone 16 Pro Max 256GB, Apple, Rs.139900, premium phone.
- Samsung Galaxy S25 Ultra, Samsung, Rs.124999, premium Android phone.
- Alienware Nova X Gaming Laptop, Rs.189990, gaming laptop.
- Sony WH-1000XM5 Headphones, Rs.26990, headphones.
- Apple Watch Ultra 2, Rs.79900, smartwatch.
- Nike Air Max Pulse Sneakers, Rs.8999, shoes.
- Urban Hoodie Oversized, Rs.1299, fashion.
- boAt Airdopes Supreme ANC, Rs.1499, earbuds.
- MuscleBlaze Whey Protein 1kg, Rs.2199, fitness.
- Logitech G Pro Gaming Keyboard, Rs.9999, gaming accessory.
- Minimal Desk Lamp Smart LED, Rs.899, home.
- Kindle Paperwhite Signature, Rs.15999, books.
- iPad Pro M4 11-inch 256GB, Rs.99900, tablet.
- Sony Alpha ZV-E10 Creator Camera, Rs.61990, camera.
- DJI Mini 4 Pro Fly More Drone, Rs.115999, drone.
- PlayStation 5 Slim Digital Edition, Rs.44990, console.
- Meta Quest 3 Mixed Reality Headset, Rs.52990, VR headset.
- Samsung Odyssey G7 32-inch Monitor, Rs.38990, gaming monitor.
- Google Nest Hub Max Smart Display, Rs.18999, smart home.
- Anker Prime 20000mAh Power Bank, Rs.7999, gadget.
Coupon: NOVA250 gives Rs.250 off. Delivery: same-day, next-day, express.
Payment: UPI, card, net banking, wallet, cash on delivery.
"""

CATALOG = [
    {"title": "iPhone 16 Pro Max 256GB", "brand": "Apple", "price": "Rs.1,39,900"},
    {"title": "Samsung Galaxy S25 Ultra", "brand": "Samsung", "price": "Rs.1,24,999"},
    {"title": "Alienware Nova X Gaming Laptop", "brand": "Alienware", "price": "Rs.1,89,990"},
    {"title": "Sony WH-1000XM5 Headphones", "brand": "Sony", "price": "Rs.26,990"},
    {"title": "Apple Watch Ultra 2", "brand": "Apple", "price": "Rs.79,900"},
    {"title": "Nike Air Max Pulse Sneakers", "brand": "Nike", "price": "Rs.8,999"},
    {"title": "Urban Hoodie Oversized", "brand": "NovaCart", "price": "Rs.1,299"},
    {"title": "boAt Airdopes Supreme ANC", "brand": "boAt", "price": "Rs.1,499"},
    {"title": "MuscleBlaze Whey Protein 1kg", "brand": "MuscleBlaze", "price": "Rs.2,199"},
    {"title": "Logitech G Pro Gaming Keyboard", "brand": "Logitech", "price": "Rs.9,999"},
    {"title": "Minimal Desk Lamp Smart LED", "brand": "Philips", "price": "Rs.899"},
    {"title": "Kindle Paperwhite Signature", "brand": "Amazon", "price": "Rs.15,999"},
    {"title": "iPad Pro M4 11-inch 256GB", "brand": "Apple", "price": "Rs.99,900"},
    {"title": "Sony Alpha ZV-E10 Creator Camera", "brand": "Sony", "price": "Rs.61,990"},
    {"title": "DJI Mini 4 Pro Fly More Drone", "brand": "DJI", "price": "Rs.1,15,999"},
    {"title": "PlayStation 5 Slim Digital Edition", "brand": "Sony", "price": "Rs.44,990"},
    {"title": "Meta Quest 3 Mixed Reality Headset", "brand": "Meta", "price": "Rs.52,990"},
    {"title": "Samsung Odyssey G7 32-inch Monitor", "brand": "Samsung", "price": "Rs.38,990"},
    {"title": "Google Nest Hub Max Smart Display", "brand": "Google", "price": "Rs.18,999"},
    {"title": "Anker Prime 20000mAh Power Bank", "brand": "Anker", "price": "Rs.7,999"},
]


def catalog_fallback(message):
    text = message.lower()
    if "iphone 15" in text:
        return "iPhone 15 is not listed in this demo catalog. The closest listed Apple phone is iPhone 16 Pro Max 256GB at Rs.1,39,900."
    for item in CATALOG:
        haystack = f"{item['title']} {item['brand']}".lower()
        if any(word in text for word in haystack.split() if len(word) > 3):
            return f"{item['title']} is available for {item['price']} in NovaCart."
    if "coupon" in text or "discount" in text:
        return "Use coupon NOVA250 for Rs.250 off during checkout."
    if "delivery" in text:
        return "NovaCart supports same-day, next-day, and express delivery in this demo."
    if "payment" in text:
        return "Payment options include UPI, card, net banking, wallet, and cash on delivery."
    return "I can help with prices, products, coupons, delivery, and payment. Try asking: price of iPhone, earbuds price, or coupon."


@csrf_exempt
def chat_api(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=405)

    try:
        body = json.loads(request.body.decode("utf-8"))
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON."}, status=400)

    message = str(body.get("message", "")).strip()
    cart = body.get("cart", [])
    if not message:
        return JsonResponse({"error": "Message is required."}, status=400)

    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY") or os.getenv("CHATBOT_API_KEY")
    model = os.getenv("GEMINI_MODEL", "gemini-2.0-flash")

    if not api_key:
        return JsonResponse(
            {
                "reply": catalog_fallback(message)
            }
        )

    cart_context = json.dumps(cart, ensure_ascii=True)
    prompt = (
        "You are NovaBot, a helpful online e-commerce assistant for NovaCart. "
        "Keep answers short, friendly, and focused on shopping help. "
        f"{PRODUCT_CONTEXT} Current cart JSON: {cart_context}\n\n"
        f"Customer: {message}"
    )
    payload = {
        "contents": [
            {
                "role": "user",
                "parts": [{"text": prompt}],
            }
        ],
        "generationConfig": {
            "temperature": 0.5,
            "maxOutputTokens": 220,
        },
    }

    request_data = json.dumps(payload).encode("utf-8")
    api_url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
    api_request = urllib.request.Request(
        api_url,
        data=request_data,
        headers={
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(api_request, timeout=30) as response:
            data = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="ignore")
        if exc.code in (400, 403, 404, 429):
            return JsonResponse(
                {
                    "reply": (
                        f"{catalog_fallback(message)} "
                        "Gemini is connected, but Google returned an API limit/configuration error for this key."
                    )
                }
            )
        return JsonResponse({"reply": f"Online chatbot API error: {detail[:240]}"}, status=502)
    except urllib.error.URLError as exc:
        return JsonResponse({"reply": f"Online chatbot network error: {exc.reason}"}, status=502)
    except TimeoutError:
        return JsonResponse({"reply": "Online chatbot timed out. Please try again."}, status=504)

    reply = "I could not generate a reply right now."
    candidates = data.get("candidates", [])
    if candidates:
        parts = candidates[0].get("content", {}).get("parts", [])
        reply = " ".join(part.get("text", "") for part in parts).strip() or reply
    return JsonResponse({"reply": reply})
