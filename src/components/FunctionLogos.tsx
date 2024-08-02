import React, { useState } from "react";
import { FaRegSun, FaMoon } from "react-icons/fa";
const FunctionLogos = () => {
  const [changeLanguage, setChangeLanguage] = useState(false);
  const [changeTheme, setChangeTheme] = useState(false);
  return (
    <>
      <button className="transparent" onClick={() => setChangeTheme((prev) => !prev)}>
        {changeTheme === false ? <FaRegSun /> : <FaMoon />}
      </button>
      <button className="transparent" onClick={() => setChangeLanguage((prev) => !prev)}>
        {changeLanguage === false ? <h1 className="text-base w-[20px]">ES</h1> : <h1 className="text-base w-[20px]">EN</h1>}
      </button>
    </>
  );
};

export default FunctionLogos;
