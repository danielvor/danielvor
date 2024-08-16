from pydantic import BaseModel

class Biografia(BaseModel):
    nome: str
    profissao: str
