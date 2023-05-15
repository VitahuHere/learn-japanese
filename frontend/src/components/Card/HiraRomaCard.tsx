import Card from "./Card";
import { fetchRandomHiraganaCard } from "../../services/HttpService";
import { CardType } from "../../types/CardType";

export default function HiraRomaCard() {
  async function fetchData(): Promise<CardType> {
    const data = await fetchRandomHiraganaCard();
    return {
      id: data.id,
      question: data.hiragana,
      answer: [data.romaji],
    };
  }

  return Card(fetchData, "Write this in Romaji");
}
