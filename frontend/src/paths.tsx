import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import HiraRomaCard from "./components/Card/HiraRomaCard";
import RomaHiraCard from "./components/Card/RomaHiraCard";
import WordCard from "./components/Card/WordCard";
import KataRomaCard from "./components/Card/KataRomaCard";
import RomaKataCard from "./components/Card/RomaKataCard";

export const root = `${import.meta.env.VITE_HOST_URL}/api`;
console.log(root);

export const Paths = {
  hiragana: "/hiragana",
  hiraRoma: "hira-roma",
  romaHira: "roma-hira",
  katakana: "/katakana",
  kataRoma: "kata-roma",
  romaKata: "roma-kata",
  words: "/words",
  randomHiraganaCard: "/cards/hiragana/random",
  randomKatakanaCard: "/cards/katakana/random",
  randomWordCard: "/cards/words/random",
};

const ModePickerPage = lazy(() => import("./pages/ModePickerPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CardPage = lazy(() => import("./pages/CardPage"));

const HomeEndpoints = [
  {
    path: Paths.hiragana,
    text: "Hiragana",
    description: "Learn Hiragana",
  },
  { path: Paths.katakana, text: "Katakana", description: "Learn Katakana" },
  { path: Paths.words, text: "Words", description: "Learn Japanese words" },
];

const HiraganaPickEndpoints = [
  {
    path: Paths.hiraRoma,
    text: "Hiragana to Romaji",
    description: "Read Hiragana and write in Romaji",
  },
  {
    path: Paths.romaHira,
    text: "Romaji to Hiragana",
    description: "Read Romaji and write in Hiragana",
  },
];

const KatakanaPickEndpoints = [
  {
    path: Paths.kataRoma,
    text: "Katakana to Romaji",
    description: "Read Katakana and write in Romaji",
  },
  {
    path: Paths.romaKata,
    text: "Romaji to Katakana",
    description: "Read Romaji and write in Katakana",
  },
];

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ModePickerPage
              headerText="Learn Japanese"
              endpoints={HomeEndpoints}
            />
          }
        />
        <Route path={Paths.hiragana}>
          <Route
            index
            element={
              <ModePickerPage
                headerText="Learn Japanese Hiragana"
                endpoints={HiraganaPickEndpoints}
              />
            }
          />
          <Route
            path={Paths.hiraRoma}
            element={<CardPage Card={HiraRomaCard} />}
          />
          <Route
            path={Paths.romaHira}
            element={<CardPage Card={RomaHiraCard} />}
          />
        </Route>
        <Route path={Paths.katakana}>
          <Route
            index
            element={
              <ModePickerPage
                headerText="Learn Japanese Katakana"
                endpoints={KatakanaPickEndpoints}
              />
            }
          />
          <Route
            path={Paths.kataRoma}
            element={<CardPage Card={KataRomaCard} />}
          />
          <Route
            path={Paths.romaKata}
            element={<CardPage Card={RomaKataCard} />}
          />
        </Route>
        <Route path={Paths.words} element={<CardPage Card={WordCard} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
