import React from "react";
import { GrClose } from "react-icons/gr";

function BoxDetails(props) {
  return (
    <div
      className={`absolute inset-0 z-10 flex h-screen w-full flex-col overflow-hidden border-l border-gray-200 bg-white p-5 ${props.className}`}
    >
      <h3 className="mb-5 flex items-center justify-between border-b border-gray-200 pb-5 text-2xl font-semibold">
        {props.title}
        <button>
          <GrClose />
        </button>
      </h3>
      <div className="max-w-2xl overflow-auto">
        <article className="font-mono leading-relaxed">
          <div
            className="whitespace-pre-line p-4 font-mono text-xs leading-loose"
            dangerouslySetInnerHTML={{
              __html: `${props.text}`,
            }}
          ></div>
        </article>
      </div>
    </div>
  );
}

export default BoxDetails;
