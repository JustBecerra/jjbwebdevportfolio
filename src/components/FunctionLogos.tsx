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
    <>
      <button className="transparent" onClick={handleTheme}>
        {changeTheme === "dark" ? (
          <FaMoon className="hover:text-green text-gray dark:text-white text-xl" />
        ) : (
          <FaRegSun className="hover:text-green text-gray dark:text-white text-xl" />
        )}
      </button>
      <button className="transparent" onClick={() => setChangeLanguage((prev) => !prev)}>
        <h1 className="text-base w-[20px] font-bold font-playfairDisplay text-gray dark:text-white hover:text-green">
          {changeLanguage ? "ES" : "EN"}
        </h1>
      </button>
      <button className="transparent font-bold hover:text-green text-gray dark:text-white font-playfairDisplay">About</button>
      <button className="transparent font-bold hover:text-green text-gray dark:text-white font-playfairDisplay">Projects</button>
    </>
  );
};

export default FunctionLogos;
