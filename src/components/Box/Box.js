import React, { useEffect, useState } from "react";

function Box(props) {
  const HN_URI = "https://hacker-news.firebaseio.com/v0/";

  const [listIDs, setListIDs] = useState([]);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const getListID = () => {
      fetch(
        `${HN_URI}/${props.type}.json?print=pretty&orderBy="$priority"&limitToFirst=20`
      )
        .then((response) => response.json())
        .then((data) => setListIDs(data));
    };
    getListID();
  }, []);

  useEffect(() => {
    let requestList = listIDs.map((id) => {
      return fetch(`${HN_URI}/item/${id}.json?print=pretty`)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    });
    Promise.all(requestList).then((results) => {
      setContent(results);
    });
  }, [listIDs]);

  return (
    <div>
      {!content && <div className="p-4 text-3xl font-semibold">Loading...</div>}
      {content &&
        content.map((item) => (
          <a
            href={item.url || `https://news.ycombinator.com/item?id=${item.id}`}
            target="_blank"
            rel="noreferrer"
            className="block border-b border-gray-200 p-4 last:border-none visited:text-fuchsia-800 hover:bg-gray-100"
            key={item.id}
          >
            <div className="font-semibold">{item.title}</div>
            {/* {item.text && (
              <div
                className="max-w-md whitespace-pre-line p-4 font-mono text-xs leading-loose lg:max-w-lg"
                dangerouslySetInnerHTML={{
                  __html: `${item.text}`,
                }}
              ></div>
            )} */}
          </a>
        ))}
    </div>
  );
}

export default Box;
