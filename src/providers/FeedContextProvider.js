import React, { createContext, useEffect, useState } from "react";

export const FeedContext = createContext();

const FeedContextProvider = (props) => {
  const HN_URL = "https://hacker-news.firebaseio.com/v0";

  const [loading, setLoading] = useState(false);
  const [feeds, setFeeds] = useState(null);
  const [query, setQuery] = useState("newstories");
  // newstories, jobstories, askstories, showstories, topstories, beststories,
  // const [category, setCategory] = useState("topstories");

  const getContent = async () => {
    setLoading(true);
    // First API call for item IDs
    const response = await fetch(
      `${HN_URL}/${query}.json?print=pretty&orderBy="$priority"&limitToFirst=10`
    );
    const feedsIDList = await response.json();

    // Create all promises for content
    const promises = feedsIDList.map(async (id) => {
      const item = await fetch(`${HN_URL}/item/${id}.json?print=pretty`);
      const promise = await item.json();
      return promise;
    });
    // Waiting until end of the all promises
    Promise.all(promises).then((data) => {
      console.log(data);
      setFeeds(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getContent();
  }, [query]);

  const handleQuery = (query) => {
    setQuery(query);
  };

  return (
    <FeedContext.Provider value={{ feeds, loading, handleQuery }}>
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedContextProvider;
