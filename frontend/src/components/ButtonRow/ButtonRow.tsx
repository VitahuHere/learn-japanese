import { Link } from "react-router-dom";
import { ButtonLinkType } from "../../types/ButtonLinkType";

export function ButtonRow({ paths }: { paths: ButtonLinkType[] }) {
  return (
    <>
      {paths.map((path) => {
        return (
          <div className="flex flex-col space-y-5 items-center" key={path.path}>
            <label className="text-white text-xl">{path.description}</label>
            <Link
              to={path.path}
              className="w-full h-fit p-5 text-center text-4xl text-blue-100 no-underline bg-red-500 rounded hover:bg-white hover:underline hover:text-red-500"
            >
              {path.text}
            </Link>
          </div>
        );
      })}
    </>
  );
}
