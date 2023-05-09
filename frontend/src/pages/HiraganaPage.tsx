import Card from "../components/Card/Card";
import { Footer } from "../components/Footer/Footer";

export default function HiraganaPage() {
  return (
    <div className="flex items-center flex-col h-screen w-screen bg-zinc-900 space-y-10">
      <div className="flex flex-col items-center pt-5 pb-4 w-fit text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600">
        Learn Japanese Hiragana
      </div>
      <main className="flex flex-col h-full">
        <Card />
      </main>
      <Footer />
    </div>
  );
}
