import React from "react";

function NavbarItem(props) {
  return (
    <a
      href="/"
      className="inline-block rounded-full py-2 px-4 hover:bg-gray-200"
    >
      <div className="flex flex-row items-center ">
        <div className="mr-3 w-6">{props.children}</div>
        <div>{props.text}</div>
      </div>
    </a>
  );
}

export default NavbarItem;
