import React, { Fragment, useContext } from "react";
import { ThemeContext } from "../../providers/ThemeContextProvider";

const ThemeToggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={changeTheme}
      className={`flex flex-row items-center rounded-full transition-all duration-300 lg:py-2 lg:pl-2 lg:pr-4 ${
        theme === "light"
          ? "bg-gray-700 text-white hover:bg-gray-900"
          : "bg-gray-200 text-gray-700 hover:bg-white"
      }`}
    >
      <div className="w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 29 29"
          className={`${theme === "light" ? "fill-white" : "fill-black"}`}
        >
          <path d="M14.5 5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 14.5 5ZM6 14.5a8.504 8.504 0 0 1 8-8.475v16.95A8.504 8.504 0 0 1 6 14.5Z" />
        </svg>
      </div>
      <div className="ml-1 hidden -tracking-wide lg:inline-block">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </div>
    </button>
  );
};

export default ThemeToggle;
