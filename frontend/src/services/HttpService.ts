import axios from "axios";
import { Paths, root } from "../paths";

export async function fetchRandomHiraganaCard() {
  const response = await axios.get(root + Paths.randomHiraganaCard);
  return {
    id: response.data.id,
    hiragana: response.data.hiragana,
    romaji: response.data.romaji,
    english: response.data.english,
  };
}
