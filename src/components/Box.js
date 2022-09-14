import React from "react";

const Box = ({ feed }) => {
  return (
    <a
      href={feed.url || `https://news.ycombinator.com/item?id=${feed.id}`}
      target="_blank"
      rel="noreferrer"
      className="block border-b border-orange-100 p-4 last:border-none visited:text-fuchsia-700 hover:bg-orange-100 dark:border-stone-800 dark:visited:text-fuchsia-600 dark:hover:bg-stone-800"
    >
      <div className="font-semibold">{feed.title}</div>
    </a>
  );
};

export default Box;
