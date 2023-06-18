import "./App.css";
import logo from "/images/logo.png";
import bgImage1 from "/images/bgImage1.jpg";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search";

function App() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-12 min-h-screen relative">
      <img
        src={bgImage1}
        alt=""
        className="absolute min-h-full h-full w-full object-cover -z-10"
      />
      <div className="col-start-2 col-span-10 absolute top-5 w-full">
        <div className="flex justify-between items-center w-full">
          <img
            src={logo}
            alt=""
            className="cursor-pointer"
            style={{ width: "100px" }}
          />
          <div className="flex">
            <button
              className="bg-pink-400 text-white py-2 px-5"
              onClick={() => navigate("/bookmarks")}
            >
              Bookmarks
            </button>
            <button
              className="bg-blue-500 text-white ms-2 py-2 px-5"
              onClick={() => navigate("/all")}
            >
              Full List
            </button>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-span-10">
        <div className="flex justify-center items-center h-full flex-col">
          <div className="grid grid-cols-12">
            <h1 className="col-span-12 font-pokemonSolid text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center tracking-widest mb-6 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
              Search pokemon
            </h1>
            <div className="col-span-12">
              <Search type="component" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
