from sqlalchemy import Column, Integer, String

from database import Base


class Hiragana(Base):
    __tablename__ = "hiragana"

    id = Column(Integer, primary_key=True, index=True)
    hiragana = Column(String, unique=True, index=True)
    romaji = Column(String)
