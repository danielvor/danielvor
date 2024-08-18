from fastapi import APIRouter, Request, HTTPException
from .database import get_biografia
from fastapi.templating import Jinja2Templates

router = APIRouter()
templates = Jinja2Templates(directory="templates")

@router.get("/biografia")
async def get_biografia_route(request: Request):
    biografia = await get_biografia()
    if not biografia:
        raise HTTPException(status_code=404, detail="Biografia não encontradas")
    return templates.TemplateResponse("index.html", {"request": request, "biografia": biografia})