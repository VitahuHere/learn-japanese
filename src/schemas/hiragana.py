from pydantic import BaseModel


class HiraganaBase(BaseModel):
    hiragana: str
    romaji: str


class CreateHiragana(HiraganaBase):
    class Config:
        orm_mode = True


class GetHiragana(HiraganaBase):
    id: int

    class Config:
        orm_mode = True
