import motor.motor_asyncio
from bson.objectid import ObjectId
from app.models import Biografia
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_DETAILS = os.getenv("MONGO_DETAILS")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)
database = client.danielvor
biografia_collection = database.get_collection("biografia")

async def get_biografia():
    biografia = await biografia_collection.find_one({"_id": ObjectId("id_da_sua_biografia")})
    return Biografia(**biografia)
