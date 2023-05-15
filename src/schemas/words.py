from pydantic import BaseModel


class WordBase(BaseModel):
    word: str
    meaning: str
    reading: str


class CreateWord(WordBase):
    class Config:
        orm_mode = True
