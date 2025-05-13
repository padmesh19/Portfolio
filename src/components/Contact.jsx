import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact({ resumeImg }) {
  return (
    <section
      id="contact"
      className="w-full dark:bg-slate-950 bg-slate-300 min-h-[700px] flex flex-col justify-center items-center transition-all"
    >
      <div className="w-[90%] h-[90%] min-h-[525px] bg-black/20 dark:bg-slate-700 shadow-xl mt-20 mb-12 p-8 overflow-y-scroll no-scrollbar rounded-md grid grid-cols-1 lg:grid-cols-6 justify-items-center gap-4">
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-center gap-12 ">
          <img src="resume.png" className="w-56" />
          <div className="flex flex-col justify-center items-center gap-4">
            <h4 className="text-slate-800 text-center dark:text-slate-100 text-xl font-semibold">
              Download My Resume Here
            </h4>
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://drive.google.com/file/d/1biWeZ_cjnkoTHu8C-knpPNn1vwZlBv84/view?usp=drive_link"
                target="_"
                className="px-4 w-fit py-2 rounded-sm font-bold text-slate-100 bg-slate-900 hover:bg-slate-100/50 hover:text-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 shadow-2xl"
                download
              >
                View Resume
              </a>
              <a
                href="Padmesh_Resume.pdf"
                className="px-4 w-fit py-2 rounded-sm font-bold text-slate-100 bg-slate-900 hover:bg-slate-100/50 hover:text-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 shadow-2xl"
                download
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <span className="col-span-1 my-4 lg:m-0 border w-full h-0 lg:h-full lg:w-0 border-slate-900 dark:border-slate-100"></span>
        <div className="lg:col-span-3 col-span-1 flex flex-col justify-center text-center gap-8">
          <h4 className="text-slate-900 dark:text-slate-100 text-2xl font-bold">
            Connect With Me Through This
          </h4>
          <div className="flex flex-col justify-between gap-8 transition-all">
            <div className="flex flex-col justify-center items-start gap-4 dark:bg-slate-900/50 bg-slate-100/50 shadow-xl p-4 rounded-lg">
              <a
                href="tel:8428154241"
                className="hover:scale-105 flex justify-items-center gap-4 text-lg text-slate-900 dark:text-slate-100"
              >
                <Phone />
                <span className="font-semibold">+91 84281 54241</span>
              </a>
              <a
                href="mailto:padmesh191101@gmail.com"
                className="hover:scale-105 flex justify-items-center gap-4 text-lg text-slate-900 dark:text-slate-100"
              >
                <Mail />
                <span className="font-semibold">padmesh191101@gmail.com</span>
              </a>
            </div>
            <div className="flex justify-around items-center dark:bg-slate-900/50 bg-slate-100/50 shadow-xl p-4 rounded-lg">
              <a
                target="_"
                href="https://www.linkedin.com/in/padmesh-g"
                className="hover:scale-105 flex justify-items-center gap-2 text-lg text-slate-900 dark:text-slate-100"
              >
                <Linkedin />
                <span className="font-semibold">Linkedin</span>
              </a>
              <a
                target="_"
                href="https://github.com/padmesh19"
                className="hover:scale-105 flex justify-items-center gap-2 text-lg text-slate-900 dark:text-slate-100"
              >
                <Github />
                <span className="font-semibold">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
