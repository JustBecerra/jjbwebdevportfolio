import { useState } from "react";
import type { TechandToolsTypes } from "../consts";

export const SingleTech = ({ logo: Logo, name }: TechandToolsTypes) => {
  const [showName, setShowName] = useState(false);
  return (
    <div onMouseOver={() => setShowName(true)} onMouseLeave={() => setShowName(false)} className="flex flex-col items-center cursor-pointer">
      <Logo
        className={`hover:text-green text-5xl dark:hover:text-green text-gray dark:text-white ${showName && "scale-125 transition ease-in-out"}`}
      />
      {showName && <p className={`text-green font-bold text-center ${showName && "scale-125 transition ease-in-out"}`}>{name}</p>}
    </div>
  );
};
