import React from "react";
import BoxDetails from "./BoxDetails";

const Box = ({ feed }) => {
  return (
    <a
      href={feed.url || `https://news.ycombinator.com/item?id=${feed.id}`}
      target="_blank"
      rel="noreferrer"
      className="block border-b border-orange-100 p-4 last:border-none visited:text-fuchsia-700 hover:bg-orange-100 dark:border-stone-800 dark:visited:text-fuchsia-600 dark:hover:bg-stone-800"
    >
      <div className="font-semibold">{feed.title}</div>
      <>
        <div
          className="my-2 hidden h-20 overflow-hidden text-clip rounded-lg border border-stone-200 bg-stone-50 p-2 font-mono text-xs leading-loose"
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
