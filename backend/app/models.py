from pydantic import BaseModel

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