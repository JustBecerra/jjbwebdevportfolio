import { useState } from 'react';
import { techStore } from '../store';
import type { IconType } from 'react-icons';

interface props {
  logo: IconType;
  name: string;
}

export const SingleTech = ({ logo: Logo, name }: props) => {
  const [showName, setShowName] = useState(false);
  const activateTech = techStore((state) => state.activateTech);

  const handleClick = () => {
    activateTech(name);

    const projects = document.getElementById(name);
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setTimeout(() => {
      activateTech('');
    }, 4000);
  };
  return (
    <div
      onMouseOver={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
      className={`flex flex-col items-center transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-125`}
      onClick={handleClick}
      style={{ transformOrigin: 'center' }}
    >
      {Logo ? (
        <Logo
          className={`text-5xl ${showName && 'lg:text-green dark:lg:text-green'} text-green lg:text-gray dark:text-white`}
        />
      ) : (
        <div className="text-5xl text-gray">No Logo</div>
      )}
      {showName && (
        <p
          className={`text-green text-xs font-bold text-center hidden lg:block`}
        >
          {name}
        </p>
      )}
      <p className={`text-green text-xs font-bold text-center lg:hidden block`}>
        {name}
      </p>
    </div>
  );
};
