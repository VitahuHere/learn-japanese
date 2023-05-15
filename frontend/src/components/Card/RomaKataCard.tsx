import Card from "./Card";
import { fetchRandomKatakanaCard } from "../../services/HttpService";
import { CardType } from "../../types/CardType";

export default function RomaKataCard() {
  async function fetchData(): Promise<CardType> {
    const data = await fetchRandomKatakanaCard();
    return {
      id: data.id,
      question: data.romaji,
      answer: [data.katakana],
    };
  }

  return Card(fetchData, "Write this in Katakana");
}
