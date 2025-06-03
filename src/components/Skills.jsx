export default function Skill() {
const images = [
  "html.png",
  "css.png",
  "tailwind.png",
  "javascript.png",
  "react.png",
  "redux.png",
  "nodejs.png",
  "express.png",
  "mysql.png",
  "mongodb.png",
  "mongoose.png",
  "git.png",
  "postman.png",
  "vscode.png",
];
  return (
    <section
      id="skills"
      className="w-full dark:bg-slate-950 bg-slate-300 min-h-[768px] flex flex-col justify-center items-center gap-8"
    >
      <div className="w-[90%] h-[90%] mt-12 mb-12 py-8 rounded-md flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-sm tracking-wide font-semibold uppercase dark:text-slate-50/50 text-slate-900/50">
            Explore My
          </span>
          <h2 className="text-2xl tracking-wide lg:text-3xl font-bold uppercase dark:text-slate-50 text-slate-900">
            Tech Skills
          </h2>
        </div>
        <div className="flex flex-wrap justify-around sm:justify-center items-center gap-8 transition-all ">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white md:w-36 w-28 lg:w-44 hover:scale-105 duration-200 shadow-lg flex justify-center items-center rounded-md"
            >
              <img src={src} className="rounded-md w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
