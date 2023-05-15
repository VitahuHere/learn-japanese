from fastapi import FastAPI, Depends, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from crud.katakana import get_random_katakana
from crud.words import get_random_word
from database import engine, SessionLocal, Base
from src.crud import get_random_hiragana


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


Base.metadata.create_all(bind=engine)
app = FastAPI(
    root_path="/api",
)
router = APIRouter(prefix="/api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@router.get("/cards/hiragana/random")
async def random_hiragana_card(db: Session = Depends(get_db)):
    return get_random_hiragana(db)


@router.get("/cards/katakana/random")
async def random_katakana_card(db: Session = Depends(get_db)):
    return get_random_katakana(db)


@router.get("/cards/words/random")
async def random_word_card(db: Session = Depends(get_db)):
    return get_random_word(db)


# @router.post("/cards/load")
# async def load_cards(db: Session = Depends(get_db)):
#     load_katakana(db)
#     load_words(db)


app.include_router(router)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        app,
        host="0.0.0.0",
    )
