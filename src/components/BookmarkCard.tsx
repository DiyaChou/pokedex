import { useNavigate } from "react-router-dom";
import heartRed from "/svg/heart-red.svg";
import { useBookmarkDispatch } from "../contexts/bookmarkContext";

const BookmarkCard = ({ name }: { name: string }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${name.toLowerCase()}`);
  };
  const dispatch = useBookmarkDispatch();

  const handleBookmarkClick = () => {
    dispatch({
      type: "remove",
      payload: name,
    });
  };
  return (
    <div className="cursor-pointer border-2 border-solid border-gray-200 hover:border-gray-300 bg-gray-200 hover:bg-gray-300">
      <div onClick={handleOnClick}>
        <img src={`poke_images/${name}.png`} alt="" />
      </div>
      <div className="flex justify-between items-center px-2">
        <h5 className="text-center py-3">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h5>
        <img
          src={heartRed}
          alt=""
          style={{ width: "25px" }}
          className=""
          onClick={handleBookmarkClick}
        />
      </div>
    </div>
  );
};

export default BookmarkCard;
