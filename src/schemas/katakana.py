from pydantic import BaseModel


class KatakanaBase(BaseModel):
    katakana: str
    romaji: str


class CreateKatakana(KatakanaBase):
    class Config:
        orm_mode = True
