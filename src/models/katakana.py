from sqlalchemy import Column, Integer, String

from database import Base


class Katakana(Base):
    __tablename__ = "katakana"

    id = Column(Integer, primary_key=True, index=True)
    katakana = Column(String, unique=True, index=True)
    romaji = Column(String)
