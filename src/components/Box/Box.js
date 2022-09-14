import React from "react";
import BoxDetails from "./BoxDetails";

const Box = () => {
  return (
    <a
      href="/"
      target="_blank"
      rel="noreferrer"
      className="block border-b border-gray-200 p-4 last:border-none visited:text-fuchsia-800 hover:bg-gray-100"
    >
      <div className="font-semibold">Title</div>
      <>
        <div
          className="my-2 hidden h-20 overflow-hidden text-clip rounded-lg border border-gray-200 bg-gray-50 p-2 font-mono text-xs leading-loose"
          dangerouslySetInnerHTML={{
            __html: `<p>something<p>`,
          }}
        ></div>
        <BoxDetails />
      </>
    </a>
  );
};

export default Box;
