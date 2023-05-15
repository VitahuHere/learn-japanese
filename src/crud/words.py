from sqlalchemy import func
from sqlalchemy.orm import Session

from models import Word
from schemas import CreateWord


def create_word(db: Session, word: CreateWord):
    db_word = Word(word=word.word, meaning=word.meaning, reading=word.reading)
    db.add(db_word)
    db.commit()
    db.refresh(db_word)
    return db_word


def get_random_word(db: Session):
    return db.query(Word).order_by(func.random()).first()
