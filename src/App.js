import Box from "./components/Box/Box";
import Header from "./components/Common/Header";
import SocialMedia from "./components/Common/SocialMedia";

function App() {
  return (
    <div className="container mx-auto flex h-screen max-w-6xl flex-row ">
      <div className="h-full w-60 border-r border-gray-200 pr-5">
        <Header />
      </div>
      <main className="grow items-start">
        <div className="flex h-full flex-row items-stretch justify-between">
          <section className="mr-5 grow border-r border-gray-200">
            <h2>Latest News</h2>
            <div className="border-t border-gray-200">
              <Box />
            </div>
          </section>
          <section className="w-64 pt-5">
            <SocialMedia />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
