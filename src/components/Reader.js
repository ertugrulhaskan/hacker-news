import React from "react";

const Reader = (props) => {
  return (
    <div className="border-t border-orange-100 dark:border-gray-800">
      {props.children}
    </div>
  );
};

export default Reader;
