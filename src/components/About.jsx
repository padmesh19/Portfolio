
export default function About() {

  const config = {
    line1:
      "Aspiring Full Stack Developer with a strong foundation in the MERN stack and a passion for building responsive, user-friendly web applications.",
    line2:
      "Completed Full Stack Development training at Guvi Geek Networks, focusing on real-world projects and modern technologies.",
    line3:
      "Hands-on experience in developing RESTful APIs, managing databases with MongoDB, and creating interactive UIs using React.",
    line4:
      "Holds a B.E. in Computer Science Engineering from NSN College of Engineering, Karur, with an 8.6 CGPA.",
    line5:
      "A quick learner with a growth mindset, eager to contribute to impactful software solutions.",
  };

  return (
    <section
      id="about"
      className="w-full min-h-[740px] h-full dark:bg-gray-900 bg-gray-400/70 flex flex-col justify-start items-center"
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
              <li>{config.line1}</li>
              <li>{config.line2}</li>
              <li>{config.line3}</li>
              <li>{config.line4}</li>
              <li>{config.line5}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
