import motor.motor_asyncio
from app.models import Biografia
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_DETAILS = os.getenv("MONGO_DETAILS")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)
database = client.danielvor
biografia_collection = database.get_collection("biografia")

async def get_biografia():
    biografia = []
    async for info in biografia_collection.find():
        biografia.append(Biografia(**info))
    return biografia
