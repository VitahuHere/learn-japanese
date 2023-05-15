from sqlalchemy import func
from sqlalchemy.orm import Session

from models import Hiragana
from schemas import CreateHiragana


def create_hiragana(db: Session, hiragana: CreateHiragana):
    db_hiragana = Hiragana(hiragana=hiragana.hiragana, romaji=hiragana.romaji)
    db.add(db_hiragana)
    db.commit()
    db.refresh(db_hiragana)
    return db_hiragana


def get_random_hiragana(db: Session):
    return db.query(Hiragana).order_by(func.random()).first()
