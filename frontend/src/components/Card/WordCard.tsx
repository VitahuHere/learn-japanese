import Card from "./Card";
import { fetchRandomWord } from "../../services/HttpService";
import { CardType } from "../../types/CardType";

export default function WordCard() {
  async function fetchData(): Promise<CardType> {
    const data = await fetchRandomWord();
    return {
      id: data.id,
      question: data.word,
      answer: data.meaning.split(",").map((s) => s.trim()),
    };
  }

  return Card(fetchData, "What does it mean?");
}
