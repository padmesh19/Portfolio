import React from "react";
import "./loader.css";

const Loader = () => {
  console.log("Loader");
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-5 h-5 border-3 border-gray-500 rounded-[50%] border-t-3 border-t-purple-700 spinner"></div>
      <span>Sending...</span>
    </div>
  );
};

export default Loader;
