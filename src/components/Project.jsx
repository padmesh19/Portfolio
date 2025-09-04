import { useContext } from "react";
import { AppContext } from "../App";

export default function Project() {
  console.log("Project");
  const { projects } = useContext(AppContext);
  return (
    <section
      id="projects"
      className="w-full min-h-screen h-full dark:bg-gray-900 bg-purple-200 flex flex-col justify-start items-center"
    >
      <div className="w-[90%] h-[90%] mt-12 mb-12 py-8 rounded-md flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-sm tracking-wide font-semibold uppercase dark:text-slate-50/50 text-slate-900/50">
            Browse My Recent
          </span>
          <h2 className="text-2xl tracking-wide lg:text-3xl font-bold uppercase dark:text-slate-50 text-slate-900">
            Projects
          </h2>
        </div>
        <div className="grid justify-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all">
          {projects.map((project) => (
            <div
              key={project.id}
              className="dark:bg-slate-950 bg-white p-4 w-full shadow-lg duration-300 rounded-lg flex flex-col gap-4"
            >
              <img
                src={project.bannerSrc}
                alt={project.altText}
                className="w-full border aspect-video"
              />
              <div className="px-2 h-full flex flex-col justify-between gap-4">
                <div className="flex flex-col justify-center gap-2">
                  <h3 className="text-xl text-center font-bold dark:text-blue-800 text-indigo-950">
                    {project.heading}
                  </h3>
                  <p className="text-sm font-semibold dark:text-gray-500 text-gray-800 text-justify">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <span className="text-lg uppercase font-bold text-purple-700 text-center">
                    Tech Stack
                  </span>
                  <ul className="flex justify-center items-center flex-wrap gap-x-4 gap-y-2">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="text-xs font-semibold bg-purple-200 dark:bg-stone-400 px-3 py-1 rounded-full uppercase text-black"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-2 flex justify-center items-center gap-8 comic transition-all">
                  <a
                    href={project.previewLink}
                    target="_"
                    className="py-2 px-6 font-semibold text-gray-900 cursor-pointer shadow-md bg-emerald-500 rounded-full duration-150 transition-all ease-in hover:bg-emerald-600"
                  >
                    Preview
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_"
                    className="py-2 px-6 font-semibold text-gray-900 cursor-pointer shadow-md bg-amber-500 rounded-full hover:bg-amber-600"
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
