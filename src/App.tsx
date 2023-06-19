import "./App.css";
import bgImage from "/images/bgImage.jpg";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  return (
    <div className="grid grid-cols-12 min-h-screen relative">
      <img
        src={bgImage}
        alt=""
        className="absolute min-h-full h-full w-full object-cover -z-10"
        style={{ filter: "brightness(50%)" }}
      />
      <div className="absolute w-full">
        <div className="grid grid-cols-12 ">
          <Header />
        </div>
      </div>
      <div className="col-start-2 col-span-10">
        <div className="flex justify-center items-center h-full flex-col">
          <div className="grid grid-cols-12">
            <h1 className="col-span-12 font-pokemonSolid text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center tracking-widest mb-6 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
              Search pokemon
            </h1>
            <div className="col-span-12">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
