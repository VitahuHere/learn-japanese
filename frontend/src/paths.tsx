import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

export const root = "http://localhost:8000";

export const Paths = {
  hiragana: "/hiragana",
  hiraRoma: "hira-roma",
  romaHira: "roma-hira",
  words: "/words",
  randomHiraganaCard: "/cards/random",
};

const ModePickerPage = lazy(() => import("./pages/ModePickerPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const HiraganaPage = lazy(() => import("./pages/HiraganaPage"));

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

const HomeEndpoints = [
  {
    path: Paths.hiragana,
    text: "Hiragana",
    description: "Learn Hiragana characters",
  },
  { path: Paths.words, text: "Words", description: "Learn Japanese words" },
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
          <Route path={Paths.hiraRoma} element={<HiraganaPage />} />
          <Route path={Paths.romaHira} element={<HiraganaPage />} />
        </Route>
        <Route path={Paths.words} element={<HiraganaPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
