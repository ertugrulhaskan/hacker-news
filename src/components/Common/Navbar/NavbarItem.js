import React from "react";
import { useContext } from "react";
import { FeedContext } from "../../../providers/FeedContextProvider";

const NavbarItem = (props) => {
  const { handleQuery } = useContext(FeedContext);
  return (
    <div
      onClick={() => handleQuery(props.query)}
      className="inline-block h-10 w-10 cursor-pointer rounded-full transition-all duration-300 hover:bg-orange-200 dark:hover:bg-stone-700 lg:h-auto lg:w-auto lg:py-2 lg:px-4"
    >
      <div className="flex h-full flex-row items-center justify-center">
        <div className="w-6">{props.children}</div>
        <div className="ml-3 hidden lg:inline-block">{props.text}</div>
      </div>
    </div>
  );
};

export default NavbarItem;
