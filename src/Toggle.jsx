import React, { useEffect, useState, useRef } from 'react';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';
import { RiComputerLine } from 'react-icons/ri';

import './index.css'

const Toggle = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? JSON.parse(savedMode) : 'system';
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef(null); // To reference the button and calculate dropdown position
  const [dropdownTop, setDropdownTop] = useState(0); // Store the top position of the dropdown

  useEffect(() => {
    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('themeMode', JSON.stringify('dark'));
      } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('themeMode', JSON.stringify('light'));
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('themeMode', JSON.stringify('system'));
      }
    };

    applyTheme(mode);
  }, [mode]);

  const toggleMode = (selectedMode) => {
    setMode(selectedMode);
    setIsDropdownOpen(false);
  };

  // Handle positioning of the dropdown
  useEffect(() => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setDropdownTop(buttonRect.bottom); // Set the dropdown's top position just below the button
    }
  }, [isDropdownOpen]);

  return (
    <div className="relative h-auto w-auto flex justify-center items-center p-1 m-1">
      {/* Visible toggle button */}
      <button
        ref={buttonRef} // Reference to calculate position
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex justify-center items-center text-xl p-2 rounded-full dark:bg-gray-800 bg-gray-200 shadow-sm dark:shadow-lg mx-2"
        aria-label="Toggle theme mode options"
      >
        {mode === 'dark' && <IoMoonSharp className="text-white" />}
        {mode === 'light' && <IoSunnySharp className="text-gray-800" />}
        {mode === 'system' && <RiComputerLine className={`text-gray-800 dark:text-white`} />}
      </button>

      {/* Dropdown options with fixed positioning */}
      {isDropdownOpen && (
        <div
          className={`absolute flex flex-col gap-1 space-y-2 p-2 rounded-md shadow-lg
          transition-all duration-300 ease-out bg-gray-100 dark:bg-gray-800 z-10`}
          style={{ minWidth: '8rem', top: `${dropdownTop}px` }} // Dynamic top positioning
        >
          {/* Light Mode Option */}
          <button
            onClick={() => toggleMode('light')}
            className="flex justify-between items-center my-2 px-3 py-1 rounded-md bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            aria-label="Switch to light mode"
          >
            <span className="font-serif text-[1rem] text-center text-gray-800 dark:text-gray-200">Light</span>
            <IoSunnySharp className="text-gray-800 dark:text-gray-200" />
          </button>

          {/* Dark Mode Option */}
          <button
            onClick={() => toggleMode('dark')}
            className="flex justify-between items-center my-2 px-3 py-1 rounded-md bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            aria-label="Switch to dark mode"
          >
            <span className="font-serif text-[1rem] text-center text-gray-800 dark:text-gray-200">Dark</span>
            <IoMoonSharp className="text-gray-800 dark:text-gray-200" />
          </button>

          {/* System Mode Option */}
          <button
            onClick={() => toggleMode('system')}
            className="flex justify-between items-center my-2 px-3 py-1 rounded-md bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            aria-label="Switch to system mode"
          >
            <span className="font-serif text-[1rem] text-center text-gray-800 dark:text-gray-200">System</span>
            <RiComputerLine className="text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Toggle;
