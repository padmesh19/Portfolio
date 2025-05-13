import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const images = [
    "html.png",
    "css.png",
    "tailwind.png",
    "javascript.png",
    "react.png",
    "redux.png",
    "nodejs.png",
    "express.png",
    "mysql.png",
    "mongodb.png",
    "mongoose.png",
    "git.png",
    "postman.png",
    "vscode.png",
  ];
  const [profileImg, setProfileImg] = useState(null);
  const [aboutImg, setAboutImg] = useState(null);
  const [resumeImg, setResumeImg] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const profile = new Image();
    profile.src = "Profile_image.jpg";
    profile.onload = () => setProfileImg(profile.src);

    const about = new Image();
    about.src = "About-photo.png";
    about.onload = () => setAboutImg(about.src);

    const resume = new Image();
    resume.src = "resume.png";
    resume.onload = () => setResumeImg(resume.src);

    const preload = images.map((src) => {
      const img = new Image();
      img.src = src;
      return new Promise((resolve) => {
        img.onload = resolve;
      });
    });
    console.log("hi");

    Promise.all(preload).then(() => setLoaded(true));
  }, []);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
