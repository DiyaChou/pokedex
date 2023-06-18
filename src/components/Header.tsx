import { useNavigate } from "react-router-dom";
import logo from "/images/logo.png";
import Search from "./Search";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div className="col-start-2 col-span-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <img
          src={logo}
          alt=""
          className="cursor-pointer"
          onClick={() => navigate("/")}
          style={{ width: "100px" }}
        />
        <Search type="header" />
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
  );
};

export default SearchBar;
