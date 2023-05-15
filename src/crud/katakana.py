from sqlalchemy import func
from sqlalchemy.orm import Session

from models import Katakana
from schemas import CreateKatakana


def create_katakana(db: Session, katakana: CreateKatakana):
    db_katakana = Katakana(katakana=katakana.katakana, romaji=katakana.romaji)
    db.add(db_katakana)
    db.commit()
    db.refresh(db_katakana)
    return db_katakana


def get_random_katakana(db: Session):
    return db.query(Katakana).order_by(func.random()).first()
