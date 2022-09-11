import { useState } from "react";
import Box from "./components/Box/Box";
import Header from "./components/Common/Header";
import SocialMedia from "./components/Common/SocialMedia";

function App() {
  const [category, setCategory] = useState("jobstories");

  return (
    <div className="relative flex flex-row">
      <div className="sticky top-0 h-screen w-2/12 shrink-0 lg:w-3/12">
        <Header />
      </div>
      <main className="w-full">
        <div className="flex h-full w-full max-w-5xl flex-row items-start justify-start">
          <section className="mr-5 min-h-screen grow items-stretch border-x border-gray-200">
            <h2>Best Stroies</h2>
            <div className="border-t border-gray-200">
              <Box type={category} />
            </div>
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
