from pydantic import BaseModel
from typing import Optional

class Biografia(BaseModel):
    nome: str
    profissao: str
