import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";
import emailjs from "@emailjs/browser";

export default function Contact() {
  console.log("contact")
  const form = useRef();

  const [loading, setLoading] = useState(false);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = form.current.querySelectorAll("input, textarea");
    for (let input of inputs) {
      if (!input.value.trim()) {
        toast.warn("Please fill in all fields.");
        return;
      }
    }

    try {
      setLoading(true);
      const sendEmail = await emailjs.sendForm(
        "service_9hwg0rf",
        "template_f3wjwgq",
        form.current,
        "inzU2sKbNySUxWzNS"
      );
      if (sendEmail.status === 200) {
        toast.success("Message sent successfully!");
        form.current.reset();
        setLoading(false);
      }
    } catch (error) {
      toast.error("Something went wrong. Try again!");
      console.log("error", error);
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="w-full dark:bg-slate-950 bg-purple-300 min-h-screen flex flex-col justify-center items-center transition-all"
    >
      <div className="w-[90%] h-[90%] min-h-[80vh] bg-black/20 dark:bg-slate-700 shadow-xl mt-20 mb-12 p-8 overflow-y-scroll no-scrollbar rounded-md grid grid-cols-1 lg:grid-cols-7 justify-items-center gap-4">
        <div className="lg:col-span-3 w-full col-span-1 flex flex-col justify-center items-center text-center gap-8">
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold">
            Contact Me
          </h2>
          <form
            ref={form}
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col justify-center items-center gap-4 w-full lg:w-[90%] max-w-[350px] transition-all"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 w-full border-2 border-purple-700 dark:border-slate-900 bg-purple-100 dark:bg-slate-100 text-slate-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 dark:focus:ring-slate-900"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 w-full border-2 border-purple-700 dark:border-slate-900 bg-purple-100 dark:bg-slate-100 text-slate-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 dark:focus:ring-slate-900"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="p-2 w-full border-2 border-purple-700 dark:border-slate-900 bg-purple-100 dark:bg-slate-100 text-slate-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700 dark:focus:ring-slate-900"
            />

            <button
              type="submit"
              className="px-6 w-fit py-2 rounded-sm font-bold duration-150 transition-all ease-in cursor-pointer text-slate-100 bg-slate-900 hover:bg-purple-100 hover:text-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 shadow-lg shadow-slate-700 self-start"
            >
              {loading ? <Loader /> : <span>Send Message</span>}
            </button>
          </form>
        </div>
        <span className="col-span-1 my-4 lg:m-0 border w-full h-0 lg:h-full lg:w-0 border-slate-900 dark:border-slate-100"></span>
        <div className="lg:col-span-3 col-span-1 flex flex-col justify-center text-center gap-8">
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold">
            Connect With Me Through This
          </h2>
          <div className="flex flex-col justify-between gap-8 transition-all">
            <div className="flex flex-col justify-center items-start gap-4 dark:bg-slate-900/50 bg-purple-100 shadow-xl p-4 rounded-lg">
              <a
                href="tel:8428154241"
                className="hover:text-purple-700 flex justify-items-center gap-4 text-lg text-slate-900 dark:text-slate-100"
              >
                <Phone />
                <span className="font-semibold">+91 84281 54241</span>
              </a>
              <a
                href="mailto:padmesh191101@gmail.com"
                className="hover:text-purple-700 flex justify-items-center gap-4 text-lg text-slate-900 dark:text-slate-100"
              >
                <Mail />
                <span className="font-semibold">padmesh191101@gmail.com</span>
              </a>
            </div>
            <div className="flex justify-around items-center dark:bg-slate-900/50 bg-purple-100 shadow-xl p-4 rounded-lg">
              <a
                target="_"
                href="https://www.linkedin.com/in/padmesh-g"
                className="hover:text-purple-700 flex justify-items-center gap-2 text-lg text-slate-900 dark:text-slate-100"
              >
                <Linkedin />
                <span className="font-semibold">Linkedin</span>
              </a>
              <a
                target="_"
                href="https://github.com/padmesh19"
                className="hover:text-purple-700 flex justify-items-center gap-2 text-lg text-slate-900 dark:text-slate-100"
              >
                <Github />
                <span className="font-semibold">Github</span>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <h4 className="text-slate-900 text-center dark:text-slate-100 text-xl font-semibold">
                Download My Resume Here
              </h4>
              <div className="flex justify-center items-center gap-8 transition-all duration-300">
                <a
                  href="https://drive.google.com/file/d/1ksunZQkmkbYEiYMaKvyd2CCcdEG95eSn/view?usp=sharing"
                  target="_"
                  className="px-6 w-fit py-2 rounded-sm font-bold duration-150 transition-all ease-in cursor-pointer text-slate-100 bg-slate-900 hover:bg-purple-100 hover:text-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 shadow-lg shadow-slate-700"
                  download
                >
                  View Resume
                </a>
                <a
                  href="Padmesh_Resume.pdf"
                  className="px-6 w-fit py-2 rounded-sm font-bold duration-150 transition-all ease-in cursor-pointer text-slate-100 bg-slate-900 hover:bg-purple-100 hover:text-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 shadow-lg shadow-slate-700"
                  download
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
