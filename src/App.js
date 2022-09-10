import Box from "./components/Box/Box";
import Header from "./components/Common/Header";
import SocialMedia from "./components/Common/SocialMedia";

function App() {
  return (
    <div className="container  mx-auto flex h-screen max-w-6xl flex-row">
      <div className="min-h-full w-60 shrink-0 pr-5">
        <Header />
      </div>
      <main className="grow">
        <div className="flex min-h-full flex-row items-stretch justify-between">
          <section className="mr-5 grow border-r border-l border-gray-200">
            <h2>Latest News</h2>
            <div className="border-t border-gray-200">
              <Box type="beststories" />
            </div>
          </section>
          <section className="sticky shrink-0 pt-5">
            <SocialMedia />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
