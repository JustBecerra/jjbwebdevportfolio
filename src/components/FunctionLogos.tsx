import { useEffect, useState } from 'react';
import { FaRegSun, FaMoon } from 'react-icons/fa';

const FunctionLogos = () => {
  const [changeTheme, setChangeTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setChangeTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (changeTheme) {
      if (changeTheme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      localStorage.setItem('theme', changeTheme);
    }
  }, [changeTheme]);

  if (changeTheme === null) return null;

  return (
    <button
      id="theme"
      onClick={() => setChangeTheme(changeTheme === 'light' ? 'dark' : 'light')}
    >
      {changeTheme === 'dark' ? (
        <FaMoon className="hover:text-green dark:hover:text-green text-gray dark:text-white text-3xl lg:text-xl" />
      ) : (
        <FaRegSun className="hover:text-green dark:hover:text-green text-gray dark:text-white text-3xl lg:text-xl" />
      )}
    </button>
  );
};

export default FunctionLogos;
