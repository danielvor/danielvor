from fastapi import FastAPI
from app.routes import router
from fastapi.templating import Jinja2Templates

app = FastAPI()

# Configuração dos templates
templates = Jinja2Templates(directory="templates")

# Incluindo as rotas
app.include_router(router)

# Rota raiz
@app.get("/")
async def read_root():
    return {"message": "Bem-vindo à aplicação FastAPI!"}