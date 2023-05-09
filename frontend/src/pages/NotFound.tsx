import { ButtonRow } from "../components/ButtonRow/ButtonRow";

export default function NotFound() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 h-screen w-screen bg-zinc-900">
      <h1 className="text-4xl py-10 font-bold text-blue-500 col-span-full text-center">
        404
      </h1>
      <div className="flex justify-center items-center space-x-6 w-auto h-auto col-span-full">
        <ButtonRow paths={[{ path: "/", text: "Home" }]} />
      </div>
    </div>
  );
}
