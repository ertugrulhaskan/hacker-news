import React, { useEffect, useState } from "react";
import BoxDetails from "./BoxDetails";

function Box({ item }) {
  return (
    <a
      href={item.url || `https://news.ycombinator.com/item?id=${item.id}`}
      target="_blank"
      rel="noreferrer"
      className="block border-b border-gray-200 p-4 last:border-none visited:text-fuchsia-800 hover:bg-gray-100"
    >
      <div className="font-semibold">{item.title}</div>
      {item.text && (
        <>
          <div
            className="my-2 h-20 overflow-hidden text-clip rounded-lg border border-gray-200 bg-gray-50 p-2 font-mono text-xs leading-loose"
            dangerouslySetInnerHTML={{
              __html: `${item.text}`,
            }}
          ></div>
          <BoxDetails className="hidden" title={item.title} text={item.text} />
        </>
      )}
    </a>
  );
}

export default Box;
