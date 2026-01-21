import urllib.parse

def generate_whatsapp_link(phone: str, text: str) -> str:
    encoded_text = urllib.parse.quote(text)
    phone_clean = phone.lstrip("+")  # ensure proper format
    return f"https://wa.me/{phone_clean}?text={encoded_text}"
