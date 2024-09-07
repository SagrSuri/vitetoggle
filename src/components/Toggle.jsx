import React, { useEffect, useState, useRef } from 'react';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';
import { RiComputerLine } from 'react-icons/ri';

const Toggle = ({
  buttonClass,
  buttonIconClass,
  dropdownClass,
  dropdownItemClass,
  dropdownHoverClass,
  lightButtonClass,
  darkButtonClass,
  systemButtonClass,
  lightIconClass,
  darkIconClass,
  systemIconClass,
}) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? JSON.parse(savedMode) : 'system';
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef(null);
  const [dropdownTop, setDropdownTop] = useState(0);

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
        document.documentElement.classList.toggle('dark', prefersDark);
        localStorage.setItem('themeMode', JSON.stringify('system'));
      }
    };

    applyTheme(mode);
  }, [mode]);

  useEffect(() => {
    const handleResize = () => {
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        setDropdownTop(buttonRect.bottom);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isDropdownOpen]);

  const toggleMode = (selectedMode) => {
    setMode(selectedMode);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center w-auto p-2">
      <button
        ref={buttonRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`${buttonClass} ${mode === 'light' ? lightButtonClass : mode === 'dark' ? darkButtonClass : systemButtonClass}`}
        aria-label="Toggle theme mode options"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        {mode === 'dark' && <IoMoonSharp className={buttonIconClass} />}
        {mode === 'light' && <IoSunnySharp className={buttonIconClass} />}
        {mode === 'system' && <RiComputerLine className={buttonIconClass} />}
      </button>

      {isDropdownOpen && (
        <div
          className={`${dropdownClass}`}
          style={{ top: `${dropdownTop}px`, minWidth: '8rem' }}
          role="menu"
        >
          <button
            onClick={() => toggleMode('light')}
            className={`${dropdownItemClass} ${dropdownHoverClass} ${lightButtonClass}`}
            aria-label="Switch to light mode"
            role="menuitem"
          >
            <span className={`font-serif ${lightIconClass}`}>Light</span>
            <IoSunnySharp className={lightIconClass} />
          </button>

          <button
            onClick={() => toggleMode('dark')}
            className={`${dropdownItemClass} ${dropdownHoverClass} ${darkButtonClass}`}
            aria-label="Switch to dark mode"
            role="menuitem"
          >
            <span className={`font-serif ${darkIconClass}`}>Dark</span>
            <IoMoonSharp className={darkIconClass} />
          </button>

          <button
            onClick={() => toggleMode('system')}
            className={`${dropdownItemClass} ${dropdownHoverClass} ${systemButtonClass}`}
            aria-label="Switch to system mode"
            role="menuitem"
          >
            <span className={`font-serif ${systemIconClass}`}>System</span>
            <RiComputerLine className={systemIconClass} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Toggle;
