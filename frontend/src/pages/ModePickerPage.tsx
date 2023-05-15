import { ButtonRow } from "../components/ButtonRow/ButtonRow";
import { Footer } from "../components/Footer/Footer";

export default function ModePickerPage({
  headerText,
  endpoints,
}: {
  headerText: string;
  endpoints: { path: string; text: string; description: string }[];
}) {
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-900 space-y-5">
      <div className="flex flex-col items-center h-screen space-y-5">
        <header className="text-5xl font-bold text-center w-fit pt-5 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600">
          {headerText}
        </header>
        <main className="flex flex-col justify-center items-center h-full">
          <h1 className="text-white py-16 text-3xl">
            Choose your learning mode:
          </h1>
          <div className="flex space-x-6">
            <ButtonRow paths={endpoints} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
