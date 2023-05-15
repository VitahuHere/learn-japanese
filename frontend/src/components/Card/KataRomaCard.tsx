import Card from "./Card";
import { fetchRandomKatakanaCard } from "../../services/HttpService";
import { CardType } from "../../types/CardType";

export default function KataRomaCard() {
  async function fetchData(): Promise<CardType> {
    const data = await fetchRandomKatakanaCard();
    return {
      id: data.id,
      question: data.katakana,
      answer: [data.romaji],
    };
  }

  return Card(fetchData, "Write this in Romaji");
}
