import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact({resumeImg}) {
  
  return (
    <div className="w-full h-screen pt-4 flex flex-col justify-center items-center">
      <div className="lg:w-[75%] w-[90%] bg-slate-100/50 dark:bg-slate-700 shadow-2xl mt-20 mb-12 p-8 h-[80vh] overflow-y-scroll no-scrollbar rounded-md grid grid-cols-1 lg:grid-cols-6 justify-items-center gap-4">
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-center gap-12 ">
          {resumeImg && (
            <img src={resumeImg} className="w-56" />
          )}
          <div className="flex flex-col justify-center items-center gap-4">
            <h4 className="text-slate-800 text-center dark:text-slate-100 text-xl font-semibold">
              Download My Resume Here
            </h4>
            <a
              href="Padmesh_G.pdf"
              className="px-4 w-fit py-2 rounded-sm font-bold text-slate-100 bg-slate-900 hover:bg-slate-100/50 hover:text-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 shadow-2xl"
              download
            >
              Download
            </a>
          </div>
        </div>
        <span className="col-span-1 my-4 lg:m-0 border w-full h-0 lg:h-full lg:w-0 border-slate-900 dark:border-slate-100"></span>
        <div className="lg:col-span-3 col-span-1 flex flex-col justify-start text-center lg:mt-12 gap-16">
          <h4 className="text-slate-900 dark:text-slate-100 text-2xl font-bold">
            Connect With Me Through This
          </h4>
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col justify-center items-start gap-4 dark:bg-slate-900/50 bg-slate-100/50 shadow-xl p-4 rounded-lg">
              <a
                href="tel:8428154241"
                className="flex justify-items-center gap-4 text-lg text-slate-900 dark:text-slate-100"
              >
                <Phone />
                <span className="font-semibold">+91 84281 54241</span>
              </a>
              <a
                href="mailto:padmesh191101@gmail.com"
                className="flex justify-items-center gap-4 text-lg text-slate-900 dark:text-slate-100"
              >
                <Mail />
                <span className="font-semibold">padmesh191101@gmail.com</span>
              </a>
            </div>
            <div className="flex justify-around items-center dark:bg-slate-900/50 bg-slate-100/50 shadow-xl p-4 rounded-lg">
              <a
                href="https://www.linkedin.com/in/padmesh-g"
                className="flex justify-items-center gap-2 text-lg text-slate-900 dark:text-slate-100"
              >
                <Linkedin />
                <span className="font-semibold">Linkedin</span>
              </a>
              <a
                href="https://github.com/padmesh19"
                className="flex justify-items-center gap-2 text-lg text-slate-900 dark:text-slate-100"
              >
                <Github />
                <span className="font-semibold">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
