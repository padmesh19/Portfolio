import {
  Contact,
  Sun,
  Moon,
  NotepadText,
  Settings,
  FolderGit2,
  Github,
  Linkedin,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Navbar() {
  console.log("navbar");
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.slice(1) || "/";
  const [activeMenu, setActiveMenu] = useState(pathname);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const menuItems = [
    { id: "about", label: "About", link: "about", icon: NotepadText },
    { id: "skills", label: "Skills", link: "skills", icon: Settings },
    { id: "projects", label: "Projects", link: "projects", icon: FolderGit2 },
    { id: "contact", label: "Contact", link: "contact", icon: Contact },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveMenu(id);
            history.replaceState(null, null, `#${id}`);
          }
        });
      },
      {
        threshold: 0.3, // Lower threshold to detect even short sections
      }
    );

    const sectionIds = ["hero", "about", "skills", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section) => observer.observe(section));

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) setActiveMenu(hash.replace("#", ""));
    };
    handleHashScroll();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="transition-all fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[2304px] py-2 md:px-8 px-2 bg-white dark:bg-slate-800 mx-auto rounded-b-md shadow-md z-50">
      <div className="text-slate-900 dark:text-slate-100 w-full h-full flex justify-between items-center sm:gap-3">
        <a
          href="#hero"
          onClick={() => setActiveMenu("hero")}
          className={`w-fit sm:py-1 sm:px-3 p-1 font-semibold rounded-sm text-center sm:flex justify-between gap-2 items-center`}
        >
          <img src="programmer.png" className="w-6" />
          <span
            className={`hidden sm:block hover:from-purple-800 hover:via-purple-800 hover:to-purple-800 text-xl 3xl:text-2xl comic bg-gradient-to-r bg-clip-text text-transparent ${
              activeMenu === "hero"
                ? "from-purple-700 via-purple-700 to-purple-700"
                : "from-emerald-600 via-indigo-600 to-blue-600"
            }`}
          >
            Padmesh
          </span>
        </a>
        <div className="flex items-center justify-center gap-4">
          {pathname === "/" &&
            menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  style={{flexBasis:0, flexGrow:1}}
                  href={`#${item.link}`}
                  onClick={() => setActiveMenu(item.link)}
                  className={`rounded-full sm:py-1 sm:px-3 p-1 font-semibold text-center ${
                    activeMenu === item.link
                      ? "text-white bg-purple-700 shadow-lg"
                      : "hover:text-purple-700"
                  }`}
                >
                  <span className="hidden sm:block text-md font-semibold">
                    {item.label}
                  </span>
                  <div className="relative group">
                    <Icon className="block sm:hidden" />
                    <span className="absolute top-full mb-1 left-1/2 -translate-x-1/2 px-3 py-2 text-xs text-yellow-400 bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none whitespace-nowrap z-10">
                      {item.label}
                    </span>
                  </div>
                </a>
              );
            })}
          {pathname === "projects" && (
            <span className="w-full text-center text-lg font-semibold">
              Projects
            </span>
          )}
          {pathname === "certifications" && (
            <span className="w-full text-center text-lg font-semibold">
              Certifications
            </span>
          )}
        </div>

        <div className="w-fit place-self-end p-1.5 rounded-sm flex justify-center items-center gap-4">
          <a
            target="_"
            href="https://www.linkedin.com/in/padmesh-g"
            className="md:block hidden text-lg text-slate-900 hover:text-purple-700 dark:text-slate-100"
          >
            <Linkedin />
          </a>
          <a
            target="_"
            href="https://github.com/padmesh19"
            className="md:block hidden text-lg text-slate-900 hover:text-purple-700 dark:text-slate-100"
          >
            <Github />
          </a>
          {darkMode ? (
            <div className="relative group cursor-pointer w-fit">
              <Sun
                className="text-center text-amber-500 hover:text-purple-700"
                onClick={toggleDarkMode}
              />
            </div>
          ) : (
            <div className="relative group cursor-pointer w-fit">
              <Moon
                className="text-slate-100 text-center hover:text-purple-700"
                onClick={toggleDarkMode}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
