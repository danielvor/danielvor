from fastapi import APIRouter, Request
from app.database import get_biografia
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="templates")

@router.get("/biografia")
async def get_biografia(request: Request):
    biografia = await get_biografia()
    return templates.TemplateResponse("index.html", {"request": request, "biografia": biografia})
