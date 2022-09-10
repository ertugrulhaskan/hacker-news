import React, { useEffect, useState } from "react";

function Box(props) {
  const HN_URI = "https://hacker-news.firebaseio.com/v0/";

  const [listIDs, setListIDs] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getListID = () => {
      fetch(`${HN_URI}/${props.type}.json?print=pretty`)
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
    <>
      {!content && <div>Loading...</div>}
      {content &&
        content.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="block border-b border-gray-200 p-4"
            key={item.id}
          >
            <div className="mb-2 font-semibold">{item.title}</div>
            {item.text && (
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: `${item.text}` }}
              ></div>
            )}
          </a>
        ))}
    </>
  );
}

export default Box;
