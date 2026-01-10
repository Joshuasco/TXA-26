def generate_text_receipt(order_data: dict) -> str:
    text = f"TXA-26 Payment Receipt\n"
    text += f"Order ID: {order_data['order_id']}\n"
    text += f"Date: {order_data['createdAt']}\n"
    text += f"Email: {order_data['email']}\n"
    text += f"Phone: {order_data['phone']}\n"
    text += f"Type: {order_data['type']}\n"
    text += f"Items:\n"

    for item in order_data['items']:
        text += f"- {item['name']} x{item['quantity']} = NGN {item['price']}\n"

    text += f"Total: NGN {order_data['amount']}\n"
    text += "Thank you for your purchase!"
    return text
