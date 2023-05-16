import { Footer } from "../components/Footer/Footer";
import { FC } from "react";

export default function CardPage({ Card }: { Card: FC }) {
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-900 space-y-10">
      <div className="flex flex-col h-screen w-screen items-center bg-zinc-900 space-y-10">
        <div className="flex flex-col items-center pt-5 pb-4 w-fit text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600">
          Learn Japanese
        </div>
        <main className="flex flex-col">
          <Card />
        </main>
      </div>
      <Footer />
    </div>
  );
}
