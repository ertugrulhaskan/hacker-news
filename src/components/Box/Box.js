import React, { useEffect, useState } from "react";
import BoxDetails from "./BoxDetails";

function Box(props) {
  const HN_URL = "https://hacker-news.firebaseio.com/v0";

  const [listIDs, setListIDs] = useState([]);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const getListID = () => {
      fetch(
        `${HN_URL}/${props.type}.json?print=pretty&orderBy="$priority"&limitToFirst=20`
      )
        .then((response) => response.json())
        .then((data) => setListIDs(data));
    };
    getListID();
  }, []);

  useEffect(() => {
    let requestList = listIDs.map((id) => {
      return fetch(`${HN_URL}/item/${id}.json?print=pretty`)
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
            {item.text && (
              <>
                <div
                  className="my-2 h-20 overflow-hidden text-clip rounded-lg border border-gray-200 bg-gray-50 p-2 font-mono text-xs leading-loose"
                  dangerouslySetInnerHTML={{
                    __html: `${item.text}`,
                  }}
                ></div>
                <BoxDetails
                  className="hidden"
                  title={item.title}
                  text={item.text}
                />
              </>
            )}
          </a>
        ))}
    </div>
  );
}

export default Box;
