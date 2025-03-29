export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <img src="Profile_image.jpg" className="w-44 lg:w-56 rounded-full" />
      <h2 className="text-6xl uppercase w-[80%] comic text-slate-900 dark:text-slate-100 text-center leading-snug font-bold">
        Hey, <span className="text-amber-600">I'm Padmesh</span>
      </h2>
      <div className="w-[80%] text-center flex flex-col gap-2">
        <h3 className="text-slate-900 dark:text-slate-100 font-bold text-3xl">
          Aspiring Full Stack Developer
        </h3>
        <h3 className="text-2xl text-slate-800 dark:text-slate-400 font-medium">
          Passionate about creating dynamic, responsive web applications
        </h3>
      </div>
    </div>
  );
}
