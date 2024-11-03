import { useEffect, useState } from 'react';
import { FaRegSun, FaMoon } from 'react-icons/fa';

const FunctionLogos = () => {
  const [changeTheme, setChangeTheme] = useState('light');

  const handleTheme = () => {
    if (changeTheme === 'light') setChangeTheme('dark');
    else setChangeTheme('light');
  };

  useEffect(() => {
    if (changeTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', changeTheme);
  }, [changeTheme]);

  return (
    <div className="flex flex-col w-full lg:flex-row gap-8">
      <div className="flex items-center gap-4 justify-around">
        <button onClick={handleTheme}>
          {changeTheme === 'dark' ? (
            <FaMoon className="hover:text-green dark:hover:text-green text-gray dark:text-white text-3xl lg:text-xl" />
          ) : (
            <FaRegSun className="hover:text-green dark:hover:text-green text-gray dark:text-white text-3xl lg:text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FunctionLogos;
