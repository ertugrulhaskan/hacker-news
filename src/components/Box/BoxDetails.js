import React from "react";
import { GrClose } from "react-icons/gr";

const BoxDetails = () => {
  return (
    <div
      // TODO: hidden/flex class will be dynamic
      className={`absolute inset-0 z-10 hidden h-screen w-full flex-col overflow-hidden border-l border-gray-200 bg-white p-5 `}
    >
      <h3 className="mb-5 flex items-center justify-between border-b border-gray-200 pb-5 text-2xl font-semibold">
        Title
        <button>
          <GrClose />
        </button>
      </h3>
      <div className="max-w-2xl overflow-auto">
        <article className="font-mono leading-relaxed">
          <div
            className="whitespace-pre-line p-4 font-mono text-xs leading-loose"
            dangerouslySetInnerHTML={{
              __html: `<p>something<p>`,
            }}
          ></div>
        </article>
      </div>
    </div>
  );
};

export default BoxDetails;
