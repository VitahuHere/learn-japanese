import Card from "./Card";
import { fetchRandomHiraganaCard } from "../../services/HttpService";
import { CardType } from "../../types/CardType";

export default function RomaHiraCard() {
  async function fetchData(): Promise<CardType> {
    const data = await fetchRandomHiraganaCard();
    return {
      id: data.id,
      question: data.romaji,
      answer: [data.hiragana],
    };
  }

  return Card(fetchData, "Write this in Hiragana");
}
