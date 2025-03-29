
export default function Skill({loaded, images}) {
  
  return (
    <div className="w-full h-screen pt-4 flex flex-col justify-center items-center gap-8">
      <div className="lg:w-[75%] w-[90%] mt-20 bg-slate-100/50 dark:bg-slate-700 rounded-lg mb-12 p-8 h-[80vh] overflow-y-scroll no-scrollbar flex flex-wrap justify-center items-center gap-8">
        {loaded && images.map((src, index) => (
          <div className="bg-white md:w-32 w-20 shadow-xl flex justify-center items-center rounded-md">
            <img src={src} key={index} className="rounded-md w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
