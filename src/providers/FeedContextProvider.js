import React, { createContext, useEffect, useState } from "react";

const FeedContext = createContext(null);

const FeedContextProvider = (props) => {
  const HN_URL = "https://hacker-news.firebaseio.com/v0";

  const [feed, setFeed] = useState(null);
  // topstories, beststories, newstories, jobstories, showstories, askstories
  // const [category, setCategory] = useState("topstories");

  const getContent = async () => {
    // First API call for item IDs
    const response = await fetch(
      `${HN_URL}/topstories.json?print=pretty&orderBy="$priority"&limitToFirst=5`
    );
    const feedIDList = await response.json();

    // Create all promises for content
    const promises = feedIDList.map(async (id) => {
      const item = await fetch(`${HN_URL}/item/${id}.json?print=pretty`);
      const promise = await item.json();
      return promise;
    });
    // Waiting until end of the all promises
    Promise.all(promises).then((data) => {
      setFeed(data);
    });
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <FeedContext.Provider value={{ feed }}>
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedContextProvider;
