import {
  Contact,
  House,
  Sun,
  Moon,
  NotepadText,
  GraduationCap,
  Settings,
  FolderGit2,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.slice(1) || "/";
  console.log(pathname)
  const [activeMenu, setActiveMenu] = useState(pathname);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const menuItems = [
    { id: "home", label: "Home", link: "/", icon: House },
    { id: "about", label: "About", link: "about", icon: NotepadText },
    { id: "skills", label: "Skills", link: "skills", icon: Settings },
    { id: "projects", label: "Projects", link: "projects", icon: FolderGit2},
    { id: "certifications", label: "Certifications", link: "certifications", icon:  GraduationCap},
    { id: "contact", label: "Contact", link: "contact", icon: Contact },
  ];
    
    return (
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[900px] py-2 px-2 bg-slate-100 dark:bg-black/40 mx-auto mt-4 rounded-lg">
        <div className="text-slate-900 dark:text-slate-100 w-full h-full flex content-center text-center justify-between gap-1 sm:gap-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => setActiveMenu(item.link)}
                className={`hover:text-yellow-500 sm:w-full sm:py-1 sm:px-3 p-1 font-semibold rounded-sm 
                  ${activeMenu === item.link ? "text-amber-500" : ""} `}
              >
                <span className="hidden sm:block">{item.label}</span>
                <div className="relative group w-fit">
                  <Icon className="block sm:hidden" />
                  <span className="absolute top-full mb-1 left-1/2 -translate-x-1/2 px-3 py-2 text-xs text-yellow-400 bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none whitespace-nowrap z-10">
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
          <span className="sm:w-[20%] hover:bg-slate-900 dark:hover:bg-slate-100 p-1 rounded-sm flex justify-center">
            {darkMode && (
              <div className="relative group w-fit">
                <Sun
                  className="text-center text-yellow-500 hover:text-slate-100"
                  onClick={toggleDarkMode}
                />
                <span className="absolute top-full mb-1 left-1/2 -translate-x-1/2 px-3 py-2 text-xs text-yellow-400 bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none whitespace-nowrap z-10">
                  Light
                </span>
              </div>
            )}
            {!darkMode && (
              <div className="relative group w-fit">
                <Moon
                  className="hover:text-slate-900 text-slate-100 text-center"
                  onClick={toggleDarkMode}
                />
                <span className="absolute top-full mb-1 left-1/2 -translate-x-1/2 px-3 py-2 text-xs text-yellow-400 bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none whitespace-nowrap z-10">
                  Dark
                </span>
              </div>
            )}
          </span>
        </div>
      </nav>
    );
}
