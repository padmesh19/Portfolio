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
import { useState } from "react";
import { useLocation } from "react-router";

export default function Header() {
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
    { id: "projects", label: "Projects", link: "projects", icon: FolderGit2},
    { id: "contact", label: "Contact", link: "contact", icon: Contact },
  ];
    
    return (
      <nav className="transition-all fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1382px] py-2 md:px-8 px-2 bg-slate-100 dark:bg-slate-800 mx-auto rounded-b-md z-50">
        <div className="text-slate-900 dark:text-slate-100 w-full h-full grid grid-cols-4 gap-1 sm:gap-3">
          <a
            href="/#"
            onClick={() => setActiveMenu("/")}
            className={`col-span-1 w-fit sm:py-1 sm:px-3 p-1 font-semibold hover:scale-110 rounded-sm text-center sm:flex justify-between gap-2 items-center`}
          >
            <img src="programmer.png" className="w-6" />
            <span
              className={`hidden sm:block text-xl comic hover:from-amber-600 hover:via-amber-600 hover:to-amber-600 bg-gradient-to-r bg-clip-text text-transparent ${
                activeMenu === "/"
                  ? "from-amber-600 via-amber-600 to-amber-600"
                  : "from-emerald-600 via-indigo-600 to-blue-600 "
              } `}
            >
              Padmesh
            </span>
          </a>
          <div className="w-full col-span-2 flex items-center justify-between gap-2">
            {pathname == "/" &&
              menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.link}`}
                    onClick={() => setActiveMenu(item.link)}
                    className={`hover:text-yellow-500 hover:scale-110 sm:w-full sm:py-1 sm:px-3 p-1 font-semibold rounded-sm text-center
                  ${activeMenu === item.link ? "text-amber-500" : ""} `}
                  >
                    <span className="hidden sm:block text-md font-semibold">
                      {item.label}
                    </span>
                    <div className="relative group w-fit">
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
              className="hover:scale-110 md:block hidden text-lg text-slate-900 dark:text-slate-100"
            >
              <Linkedin />
            </a>
            <a
              target="_"
              href="https://github.com/padmesh19"
              className="hover:scale-110 md:block hidden text-lg text-slate-900 dark:text-slate-100"
            >
              <Github />
            </a>
            {darkMode && (
              <div className="relative group w-fit">
                <Sun
                  className="text-center text-yellow-500 hover:scale-110"
                  onClick={toggleDarkMode}
                />
              </div>
            )}
            {!darkMode && (
              <div className="relative group w-fit">
                <Moon
                  className="text-slate-100 text-center hover:scale-110"
                  onClick={toggleDarkMode}
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    );
}
