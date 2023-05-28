'use client';
import React, { useEffect, useState } from "react";

import { SessionProvider } from "next-auth/react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    if (theme === 'dark') saveTheme('light');
    else saveTheme('dark');
  }

  const saveTheme = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }

  useEffect(() => {
    const getTheme = () => {
      let mode;
      if (window.localStorage.getItem('theme')) {
        mode = window.localStorage.getItem('theme');
      } else {
        mode = (!!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'dark' : 'light';
      }
      saveTheme(mode);
    }

    getTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const Provider = ({ children, session}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}

export default Provider