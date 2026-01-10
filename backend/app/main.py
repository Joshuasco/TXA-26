from fastapi import FastAPI, Request
from pydantic import BaseModel
import requests
import os
from datetime  import datetime, timezone 
from dotenv import load_dotenv
from google.cloud import firestore
from fastapi.middleware.cors import CORSMiddleware
from .generateTextReceipt import generate_text_receipt
from .generateWhastsappLink import generate_whatsapp_link
# ------------------------
# Load environment variables
# ------------------------
load_dotenv()
FLW_SECRET_KEY = os.getenv("FLUTTERWAVE_SECRET_KEY")

# Firestore client
db = firestore.Client()

# ------------------------
# Initialize FastAPI
# ------------------------
app = FastAPI()

# Allow hosts
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# cors config 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # could also be ["*"] for development
    allow_credentials=True,
    allow_methods=["*"],    # allow GET, POST, OPTIONS, etc.
    allow_headers=["*"],    # allow any headers like Content-Type
)

# pydantic data model definition
class Item(BaseModel):
    name: str
    price: int
    quantity: int

class Order(BaseModel):
    orderId: str
    type: str
    items: list[Item]
    email: str
    phone: str
    amount: int


#Create Order instance on DB
@app.post("/create-order")
def create_order(order: Order):
    db.collection("orders").document(order.orderId).set({
        **order.dict(),
        "order_id": order.orderId,
        "status": "pending",
        "wa_link": "",
        "createdAt": datetime.now(timezone.utc).isoformat(),
    })
    return {"status": "order created"}


# ------------------------
# Webhook endpoint for Flutterwave
# ------------------------
# webhook url = https://a51331bb6f8d.ngrok-free.app/flutterwave-webhook
@app.post("/flutterwave-webhook")
def webhook(payload: dict):
    tx_id = payload["id"]
    tx_ref = payload["txRef"]
    
    # call flutterwave verification endpoint
    verify_url = f"https://api.flutterwave.com/v3/transactions/{tx_id}/verify"
    headers = {"Authorization": f"Bearer {FLW_SECRET_KEY}"}

    result = requests.get(verify_url, headers=headers).json()
    print(f'API PAYMENT VERIFICATION DTAS = {result}') #output returned datas in terminal

    
    # fetch firebase db
    status = result.get("status")
    order_ref = db.collection("orders").document(tx_ref)

    # update orders status on firebase db
    order_ref.update({
        "status": "success" if status == "success" else "failed",
        "paidAt": datetime.now(timezone.utc).isoformat()
    })

    # generate receipt
    order_data = order_ref.get().to_dict()
    text_receipt = generate_text_receipt(order_data)
    wa_link = generate_whatsapp_link(order_data["phone"], text_receipt)
    # update order with wa_link
    order_ref.update({"wa_link": wa_link})

    return {"status": "ok"}



