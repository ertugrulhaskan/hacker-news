import { useState, useEffect } from "react";
import Box from "./components/Box/Box";
import Header from "./components/Common/Header";
import SocialMedia from "./components/Common/SocialMedia";
import Reader from "./components/Reader";

function App() {
  const HN_URL = "https://hacker-news.firebaseio.com/v0";

  // topstories, beststories, newstories, jobstories, showstories, askstories
  const [category, setCategory] = useState("beststories");

  const [listIDs, setListIDs] = useState([]);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const getListID = () => {
      fetch(
        `${HN_URL}/${category}.json?print=pretty&orderBy="$priority"&limitToFirst=20`
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

  const changeCategory = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex flex-row">
      <div className="sticky top-0 h-screen w-2/12 shrink-0 lg:w-3/12">
        <Header />
      </div>
      <main className="relative w-full">
        <div className="flex h-full w-full max-w-5xl flex-row items-start justify-start">
          <section className="mr-5 min-h-screen grow items-stretch overflow-hidden border-x border-gray-200">
            <Reader title={category} filters={false}>
              {!content && (
                <div className="p-4 text-3xl font-semibold">Loading...</div>
              )}
              {content &&
                content.map((item) => <Box item={item} key={item.id} />)}
              <div className="mt-5 mb-10 flex justify-center">
                <button className="rounded-full border-4 border-primary-100 py-1 px-4 text-xl -tracking-wider text-primary-100 ring-offset-2 transition-all duration-300 ease-out hover:border-primary-200 hover:bg-primary-200 hover:text-white hover:ring-2 hover:ring-primary-200">
                  Load More
                </button>
              </div>
            </Reader>
          </section>
          <section className="mr-5 hidden h-full w-64 shrink-0 flex-col lg:flex">
            <div className="sticky top-0">
              <div className="my-4">
                <SocialMedia />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
