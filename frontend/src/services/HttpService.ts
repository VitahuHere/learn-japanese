import axios from "axios";
import { Paths, root } from "../paths";
import { HiraganaCardType } from "../types/HiraganaCardType";
import { WordCardType } from "../types/WordCardType";
import { KatakanaCardType } from "../types/KatakanaCardType";

export async function fetchRandomHiraganaCard(): Promise<HiraganaCardType> {
  const response = await axios.get(root + Paths.randomHiraganaCard);
  return {
    id: response.data.id,
    hiragana: response.data.hiragana,
    romaji: response.data.romaji,
  };
}

export async function fetchRandomKatakanaCard(): Promise<KatakanaCardType> {
  const response = await axios.get(root + Paths.randomKatakanaCard);
  return {
    id: response.data.id,
    katakana: response.data.katakana,
    romaji: response.data.romaji,
  };
}

export async function fetchRandomWord(): Promise<WordCardType> {
  const response = await axios.get(root + Paths.randomWordCard);
  return {
    id: response.data.id,
    word: response.data.word,
    meaning: response.data.meaning,
    reading: response.data.reading,
  };
}
