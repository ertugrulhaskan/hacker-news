import React, { useContext } from "react";
import Box from "./components/Box/Box";
import Header from "./components/Common/Header";
import LoadMore from "./components/Common/LoadMore";
import SocialMedia from "./components/Common/SocialMedia";
import Reader from "./components/Reader";
import { FeedContext } from "./providers/FeedContextProvider";

const App = () => {
  const { feeds } = useContext(FeedContext);
  return (
    <div className="relative flex flex-row">
      <div className="sticky top-0 h-screen w-2/12 shrink-0 lg:w-3/12">
        <Header />
      </div>
      <main className="relative w-full">
        <div className="flex h-full w-full max-w-5xl flex-row items-start justify-start">
          <section className="mr-5 min-h-screen grow items-stretch overflow-hidden border-x border-orange-100 dark:border-gray-800">
            <Reader>
              {feeds && feeds.map((feed) => <Box feed={feed} key={feed.id} />)}
              <LoadMore />
            </Reader>
          </section>
          <section className="mr-5 hidden h-full w-64 shrink-0 flex-col dark:hidden lg:flex">
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
};

export default App;
