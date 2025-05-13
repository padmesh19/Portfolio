export default function Hero() {
  return (
    <section className="w-full min-h-screen dark:bg-slate-950 bg-slate-300 flex justify-center items-center transition-all">
      <div className="w-[90%] h-[90%] mt-20 mb-12 flex flex-col lg:flex-row-reverse justify-center items-center gap-16">
        <img src="developer_image.png" className="w-64 md:w-sm lg:w-md" />
        <div className="text-center lg:text-left flex flex-col gap-4">
          <h2 className="text-5xl md:text-6xl uppercase w-full comic text-slate-900 dark:text-slate-100 leading-snug font-semibold">
            Hey,{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              I'm Padmesh
            </span>
          </h2>
          <div className="w-full flex flex-col gap-2 text-xl ">
            <h3 className="text-xl md:text-3xl text-slate-900 dark:text-slate-100 font-bold">
              Aspiring Full Stack Developer
            </h3>
            <h3 className="text-xl md:text-2xl text-slate-800 dark:text-slate-400 font-medium">
              Passionate about creating dynamic, responsive web applications
            </h3>
          </div>
          <a
            href="https://drive.google.com/file/d/1biWeZ_cjnkoTHu8C-knpPNn1vwZlBv84/view?usp=drive_link"
            target="_"
            className="self-center lg:self-start px-4 mt-4 w-fit py-2 rounded-sm font-bold shadow-lg border-2 text-slate-900 dark:text-slate-200 border-slate-900 dark:border-slate-200 hover:bg-slate-900 dark:hover:bg-slate-200 dark:hover:text-slate-900 hover:text-slate-200"
            download
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
