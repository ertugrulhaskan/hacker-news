import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav className="mt-6 flex flex-col">
      <div className="py-2">
        <NavbarItem text="News">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.786 24H3.214C1.441 24 0 22.558 0 20.786V3.214C0 1.442 1.441 0 3.214 0h17.572C22.559 0 24 1.442 24 3.214v17.571C24 22.558 22.559 24 20.786 24zM3.214 1.5c-.945 0-1.714.769-1.714 1.714v17.571c0 .945.769 1.714 1.714 1.714h17.572c.945 0 1.714-.769 1.714-1.714V3.214c0-.945-.769-1.714-1.714-1.714H3.214z" />
            <path d="M11.954 13h-.004c-.253-.001-.488-.13-.626-.343l-4.204-6.5c-.224-.347-.125-.812.223-1.037.347-.223.811-.126 1.037.223l3.581 5.537 3.663-5.543c.229-.345.693-.442 1.039-.212.346.228.441.693.213 1.039l-4.296 6.5c-.14.21-.374.336-.626.336z" />
            <path d="M12 19c-.414 0-.75-.336-.75-.75v-6c0-.414.336-.75.75-.75s.75.336.75.75v6c0 .414-.336.75-.75.75z" />
          </svg>
        </NavbarItem>
      </div>

      <div className="py-2">
        <NavbarItem text="Jobs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M1 6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v7a1 1 0 0 1-.876.992l-8 1-.248-1.984 7.124-.89V7H3v5.117l7.124.89-.248 1.985-8-1A1 1 0 0 1 1 13V6Z"
              clipRule="evenodd"
            />
            <path
              fill="#000"
              fillRule="evenodd"
              d="M9 11.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-5zm2 1v3h2v-3h-2zm-3-8A2.5 2.5 0 0 1 10.5 2h3A2.5 2.5 0 0 1 16 4.5V6h-2V4.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V6H8V4.5z"
              clipRule="evenodd"
            />
            <path
              fill="#000"
              fillRule="evenodd"
              d="M2 21v-7.5h2V20h16v-6.5h2V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z"
              clipRule="evenodd"
            />
          </svg>
        </NavbarItem>
      </div>

      <div className="py-2">
        <NavbarItem text="Story">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M1 4a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v18a1 1 0 0 1-1 1H9a1 1 0 0 1-.832-.445L6.465 20H4a3 3 0 0 1-3-3V4zm3-1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h3a1 1 0 0 1 .832.445L9.5 20.947V4a1 1 0 0 0-1-1H4zm19 1a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v18a1 1 0 0 0 1 1H15a1 1 0 0 0 .832-.445L17.535 20H20a3 3 0 0 0 3-3V4zm-3-1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-3a1 1 0 0 0-.832.445L14.5 20.947V4a1 1 0 0 1 1-1H20z"
              clipRule="evenodd"
            />
          </svg>
        </NavbarItem>
      </div>
    </nav>
  );
}

export default Navbar;
