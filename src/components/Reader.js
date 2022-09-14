import React, { Fragment } from "react";

const Reader = (props) => {
  return (
    <Fragment>
      <h2 className="flex flex-row items-center justify-between text-primary-100">
        TITLE
        {/* {props.filters && (
          <button>
            <HiOutlineSparkles />
          </button>
        )} */}
      </h2>
      <div className="border-t border-orange-100 dark:border-gray-800">
        {props.children}
      </div>
    </Fragment>
  );
};

export default Reader;
