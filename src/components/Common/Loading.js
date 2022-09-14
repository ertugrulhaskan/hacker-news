import React, { useContext } from "react";
import { FeedContext } from "../../providers/FeedContextProvider";

const LoadMore = () => {
  const { loading } = useContext(FeedContext);
  return (
    <div className="mt-5 mb-10 flex justify-center">
      <div className="py-2 px-4 text-lg -tracking-wide text-primary-100">
        {loading && (
          <div className="flex flex-row items-center pr-2">
            <svg
              className="mr-2 h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="stroke-orange-200 dark:stroke-white"
                cx="12"
                cy="12"
                r="10"
                strokeWidth="4"
              ></circle>
              <path
                className="fill-primary-100"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadMore;
