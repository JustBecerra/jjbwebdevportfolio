import { useState } from "react";
import type { TechandToolsTypes } from "../consts";

export const SingleTech = ({ logo: Logo, name }: TechandToolsTypes) => {
  const [showName, setShowName] = useState(false);

  return (
    <div
      onMouseOver={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
      className={`flex flex-col items-center transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-125`}
      style={{ transformOrigin: "center" }}
    >
      <Logo className={`text-5xl ${showName && "lg:text-green dark:lg:text-green"} text-green lg:text-gray dark:text-white`} />
      {showName && <p className={`text-green text-xs font-bold text-center hidden lg:block`}>{name}</p>}
      <p className={`text-green text-xs font-bold text-center lg:hidden block`}>{name}</p>
    </div>
  );
};
