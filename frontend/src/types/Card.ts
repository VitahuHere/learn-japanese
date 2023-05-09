export type HiraganaCard = {
  id: number;
  hiragana: string;
  romaji: string;
  english: string;
};

export type Card = {
  title: string;
  fetchQuestion: () => object;
  submitAnswer: () => void;
};