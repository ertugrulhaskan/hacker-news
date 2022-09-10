import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar/Navbar";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="flex h-full flex-col justify-between pt-5">
      <div>
        <Logo />
        <Navbar />
      </div>
      <div className="my-4">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
