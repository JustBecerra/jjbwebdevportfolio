import { useEffect, useState } from 'react';
import { FaRegSun, FaMoon } from 'react-icons/fa';

const FunctionLogos = () => {
  const [changeTheme, setChangeTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

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
    <button onClick={handleTheme}>
      {changeTheme === 'dark' ? (
        <FaMoon className="hover:text-green dark:hover:text-green text-gray dark:text-white text-3xl lg:text-xl" />
      ) : (
        <FaRegSun className="hover:text-green dark:hover:text-green text-gray dark:text-white text-3xl lg:text-xl" />
      )}
    </button>
  );
};

export default FunctionLogos;
