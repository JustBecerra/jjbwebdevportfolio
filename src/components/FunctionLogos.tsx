import React, { useEffect, useState } from "react";
import { FaRegSun, FaMoon } from "react-icons/fa";

const FunctionLogos = () => {
  const [changeLanguage, setChangeLanguage] = useState(false);
  const [changeTheme, setChangeTheme] = useState("light");

  const handleTheme = () => {
    if (changeTheme === "light") setChangeTheme("dark");
    else setChangeTheme("light");
  };

  useEffect(() => {
    if (changeTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("theme", changeTheme);
  }, [changeTheme]);

  return (
    <div className="flex flex-col w-full lg:flex-row gap-8">
      <div className="flex items-center gap-4 justify-around">
        <button className="transparent" onClick={handleTheme}>
          {changeTheme === "dark" ? (
            <FaMoon className="hover:text-green dark:hover:text-green text-gray dark:text-white text-3xl lg:text-xl" />
          ) : (
            <FaRegSun className="hover:text-green dark:hover:text-green text-gray dark:text-white text-3xl lg:text-xl" />
          )}
        </button>
        <button className="transparent" onClick={() => setChangeLanguage((prev) => !prev)}>
          <h1 className="text-2xl lg:text-base w-[20px] dark:hover:text-green font-bold font-playfairDisplay text-gray dark:text-white hover:text-green">
            {changeLanguage ? "ES" : "EN"}
          </h1>
        </button>
      </div>
      <div className="flex w-full flex-col lg:flex-row gap-8 lg:gap-4">
        <button className="lg:transparent w-full lg:border-0 border-green border-2 rounded-full p-2 font-bold hover:text-green dark:hover:text-green text-gray dark:text-white font-playfairDisplay">
          About
        </button>
        <button className="lg:transparent w-full lg:border-0 border-green border-2 rounded-full p-2 font-bold hover:text-green dark:hover:text-green text-gray dark:text-white font-playfairDisplay">
          Projects
        </button>
      </div>
    </div>
  );
};

export default FunctionLogos;
