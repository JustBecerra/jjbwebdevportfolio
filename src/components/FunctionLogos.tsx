import React, { useState } from "react";
import { FaRegSun, FaMoon } from "react-icons/fa";
const FunctionLogos = () => {
  const [changeLanguage, setChangeLanguage] = useState(false);
  const [changeTheme, setChangeTheme] = useState(false);
  return (
    <>
      <button className="transparent" onClick={() => setChangeTheme((prev) => !prev)}>
        {changeTheme === false ? <FaRegSun className="hover:text-green text-xl" /> : <FaMoon className="hover:text-green text-xl" />}
      </button>
      <button className="transparent" onClick={() => setChangeLanguage((prev) => !prev)}>
        {changeLanguage === false ? (
          <h1 className="text-base w-[20px] font-bold font-playfairDisplay hover:text-green">ES</h1>
        ) : (
          <h1 className="text-base w-[20px] font-bold font-playfairDisplay hover:text-green">EN</h1>
        )}
      </button>
      <button className="transparent font-bold hover:text-green font-playfairDisplay">About</button>
      <button className="transparent font-bold hover:text-green font-playfairDisplay">Projects</button>
    </>
  );
};

export default FunctionLogos;
