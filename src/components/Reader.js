import React, { Fragment } from "react";
import { HiOutlineSparkles } from "react-icons/hi";

function Reader(props) {
  return (
    <Fragment>
      <h2 className="flex flex-row items-center justify-between">
        {props.title}
        {props.filters && (
          <button>
            <HiOutlineSparkles />
          </button>
        )}
      </h2>
      <div className="border-t border-gray-200">{props.children}</div>
    </Fragment>
  );
}

export default Reader;
