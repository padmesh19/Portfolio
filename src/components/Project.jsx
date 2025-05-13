export default function Project() {
  const config = [
    {
      id: 1,
      bannerSrc: "Personal_Finance_banner.png",
      altText: "Personal Finance Manager",
      heading: "Personal Finance Manager",
      description:
        "Developed a full-stack finance app with expense tracking, budgeting, goal setting, secure authentication, data export, and interactive charts for better financial insights.",
      techStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Chart.js",
        "MFA",
      ],
      previewLink: "",
      sourceLink: "",
    },
    {
      id: 2,
      bannerSrc: "Learnix_banner.png",
      altText: "Learnix",
      heading: "Learnix (Full Stack LMS Website)",
      description:
        "Developed a full-stack LMS website enabling course creation, enrollment, progress tracking, and assessments, with secure user roles, real-time updates, and an intuitive, responsive UI for enhanced learning experiences",
      techStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Clerk Authentication",
        "Stripe",
      ],
      previewLink: "http://google.com",
      sourceLink: "http://google.com",
    },
    {
      id: 3,
      bannerSrc: "table-booking.png",
      altText: "Restaurant Table Booking App",
      heading: "Restaurant Table Booking App",
      description:
        "Built a full-stack reservation system with real-time table availability, secure authentication, and responsive UI, improving booking efficiency and user experience.",
      techStack: ["MySQL", "Express.js", "React.js", "Node.js", "JWT"],
      previewLink: "http://google.com",
      sourceLink: "http://google.com",
    },
    {
      id: 4,
      bannerSrc: "Chatify_banner.png",
      altText: "Chatify",
      heading: "Chatify",
      description:
        "Built a real-time chat application using the MERN stack with WebSocket integration, enabling instant messaging, user authentication, and responsive UI, delivering a seamless and secure communication experience.",
      techStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Socket.IO",
      ],
      previewLink: "http://google.com",
      sourceLink: "http://google.com",
    },
  ];
  return (
    <section
      id="projects"
      className="w-full dark:bg-gray-900 bg-gray-400/70 min-h-[740px] flex flex-col justify-center items-center"
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
        <div className="grid justify-center content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.map((project) => (
            <div
              key={project.id}
              className="dark:bg-slate-950 bg-slate-500/50 p-2 pb-4 w-full rounded-sm flex flex-col gap-4 shadow-lg"
            >
              <img
                src={project.bannerSrc}
                alt={project.altText}
                className="rounded-sm w-full min-h-60"
              />
              <div className="px-2 h-full flex flex-col justify-between gap-4">
                <div className="flex flex-col justify-center gap-2">
                  <h3 className="text-xl text-center font-bold dark:text-blue-800 text-blue-900">
                    {project.heading}
                  </h3>
                  <p className="text-sm font-semibold dark:text-gray-500 text-gray-800 text-justify">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <span className="text-lg uppercase font-bold text-amber-700 text-center">
                    Tech Stack
                  </span>
                  <ul className="flex  items-center flex-wrap gap-x-4 gap-y-2">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="text-xs font-semibold bg-slate-200 dark:bg-stone-400 px-2 py-1 rounded-sm uppercase text-gray-900"
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
                    className="py-1 px-4 font-semibold text-gray-900 cursor-pointer shadow-md bg-emerald-700 rounded-sm hover:scale-95"
                  >
                    Preview
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_"
                    className="py-1 px-4 font-semibold text-gray-900 cursor-pointer shadow-md bg-amber-700 rounded-sm hover:scale-95"
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
