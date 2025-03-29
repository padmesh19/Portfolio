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
    <div className="w-full h-screen pt-4 flex flex-col justify-center items-center">
      <div className="lg:w-[75%] w-[90%] bg-slate-100/50 dark:bg-slate-700 shadow-2xl mt-20 mb-12 p-8 h-[80vh] overflow-y-scroll no-scrollbar rounded-md grid grid-cols-1 lg:grid-cols-5 justify-items-center items-center gap-8">
        <img src="About-photo.png" className="max-w-96 min-w-80 w-full h-fit lg:col-span-2" />
        <div className="w-full flex flex-col gap-10 lg:col-span-3">
          <h4 className="text-2xl tracking-wide lg:text-3xl font-bold uppercase dark:text-slate-50 text-slate-900">
            About Me
          </h4>
          <ul className="text-md lg:text-lg font-medium text-slate-700 dark:text-slate-300 flex flex-col gap-4">
            <li>{config.line1}</li>
            <li>{config.line2}</li>
            <li>{config.line3}</li>
            <li>{config.line4}</li>
            <li>{config.line5}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
