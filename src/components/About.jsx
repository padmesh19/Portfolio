import { Key } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../App";

export default function About() {
  console.log("about");
const {about} = useContext(AppContext)
  
  return (
    <section
      id="about"
      className="w-full min-h-screen h-full dark:bg-gray-900 bg-purple-200 flex flex-col justify-start items-center"
    >
      <div className="w-[90%] h-full mt-12 mb-12 py-8 rounded-md flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-sm tracking-wide font-semibold uppercase dark:text-slate-50/50 text-slate-900/50">
            Want to Know
          </span>
          <h2 className="text-2xl tracking-wide lg:text-3xl font-bold uppercase dark:text-slate-50 text-slate-900">
            About Me
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4">
          <img
            src="About-photo.png"
            className="min-w-[350px] place-self-center max-w-xl w-full h-fit p-4"
          />
          <div className="w-full">
            <ul className="text-lg text-justify lg:text-lg font-medium text-slate-700 dark:text-slate-300 flex flex-col gap-4">
              {about.map((line, index) => (
               <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
