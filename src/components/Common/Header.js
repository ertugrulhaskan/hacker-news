import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar/Navbar";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="flex h-full flex-col items-end justify-between py-4">
      <div className="w-16 lg:w-52">
        <Logo />
        <Navbar />
      </div>
      <div className="w-16 lg:w-52">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
