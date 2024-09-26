import { useState } from "react";
import type { TechandToolsTypes } from "../consts";
import type { IconType } from "react-icons";

export const SingleTech = ({ logo: Logo, name }: TechandToolsTypes) => {
  const [showName, setShowName] = useState(false);

  return (
    <div
      onMouseOver={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
      className={`flex flex-col items-center ${showName && "scale-125 transition ease-in-out"} cursor-pointer`}
    >
      <Logo className={` text-5xl ${showName && "text-green"} text-gray dark:text-white `} />
      {showName && <p className={`text-green font-bold text-center `}>{name}</p>}
    </div>
  );
};
