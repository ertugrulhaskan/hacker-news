import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const themeSettings = localStorage.getItem("HNTheme") || theme;
    setTheme(themeSettings);
    document.querySelector("html").removeAttribute("class");
    document.querySelector("html").classList.add(themeSettings);
  }, [theme]);

  const changeTheme = () => {
    const selectedTheme = theme === "light" ? "dark" : "light";
    setTheme(selectedTheme);
    localStorage.setItem("HNTheme", selectedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
