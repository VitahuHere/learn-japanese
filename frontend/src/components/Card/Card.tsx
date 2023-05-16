import React, { useEffect, useRef, useState } from "react";
import { CardFormElement } from "../../types/CardForm";
import { CardType } from "../../types/CardType";

export default function Card(
  fetchData: () => Promise<CardType>,
  title: string
) {
  const [card, setCard] = useState({
    id: 0,
    question: "",
    answer: [],
  } as CardType);
  const [questionBgColor, setQuestionBgColor] = useState("bg-white");
  const [answerTextColor, setAnswerTextColor] = useState("text-black");
  const answerBox = useRef<HTMLInputElement>(null);

  function updateCard() {
    fetchData().then((card) => {
      setCard(card);
    });
  }

  useEffect(() => {
    updateCard();
  }, []);

  function handleSubmit(event: React.FormEvent<CardFormElement>) {
    event.preventDefault();
    const inputAnswer = event.currentTarget.answer.value;
    let time = 300;
    if (card.answer.includes(inputAnswer.toLowerCase())) {
      setQuestionBgColor("bg-green-700");
    } else {
      setQuestionBgColor("bg-red-700");
      setAnswerTextColor("text-white");
      time = 1500;
    }
    setCard({
      id: card.id,
      question: card.answer.map((answer) => answer).join(", "),
      answer: card.question.split(", "),
    });
    setTimeout(() => {
      setQuestionBgColor("bg-white");
      setAnswerTextColor("text-black");
      answerBox.current!.value = "";
      updateCard();
    }, time);
  }

  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-white text-center text-4xl">{title}</h1>
      <div
        className={
          "flex justify-center items-center max-w-xl rounded-md " +
          questionBgColor +
          " " +
          answerTextColor
        }
      >
        <span className="text-4xl py-5">{card.question}</span>
      </div>
      <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="answer"
          className="h-16 w-auto text-center rounded-md"
          name="answer"
          ref={answerBox}
        ></input>
        <input
          type="submit"
          className="h-10 w-auto bg-white hover:bg-slate-400 rounded-md"
        ></input>
      </form>
    </div>
  );
}
