# main.py
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
import os
from dotenv import load_dotenv

# Carregar variáveis de ambiente
load_dotenv()

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    bot_secret = os.getenv('DUNO_BOT_SECRET')
    print('Request for index page received')
    return templates.TemplateResponse('index.html', {"request": request, "bot_secret": bot_secret})

if __name__ == '__main__':
    uvicorn.run('main:app', host='0.0.0.0', port=8000)