import { useLocation, useNavigate } from "react-router-dom";
import logo from "/images/logo.png";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="col-start-2 col-span-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <img
          src={logo}
          alt=""
          className="cursor-pointer"
          onClick={() => navigate("/")}
          style={{ width: "125px" }}
        />
        {location.pathname !== "/" && <Search />}
        <div className="flex">
          <button
            className="bg-pink-400 hover:bg-pink-600 text-white py-2 px-5"
            onClick={() => navigate("/bookmarks")}
          >
            Bookmarks
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white ms-2 py-2 px-5"
            onClick={() => navigate("/list")}
          >
            Full List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
