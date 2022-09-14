import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").removeAttribute("class");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  const changeTheme = () => {
    const selectedTheme = theme === "light" ? "dark" : "light";
    setTheme(selectedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
