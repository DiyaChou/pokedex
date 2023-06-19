import { useNavigate } from "react-router-dom";
import BookmarkCard from "../components/BookmarkCard";
import SearchBar from "../components/Header";
import { useBookmark, useBookmarkDispatch } from "../contexts/bookmarkContext";
import { useEffect } from "react";
const Bookmarks = () => {
  const bookmarks = useBookmark();
  const dispatch = useBookmarkDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (bookmarks.length === 0) {
      const bookmarked_pokemon = localStorage.getItem("bookmarked_pokemon");
      bookmarked_pokemon &&
        dispatch({
          type: "populate",
          payload: JSON.parse(bookmarked_pokemon),
        });
    }
  }, [dispatch, bookmarks.length]);

  return (
    <div>
      <div className="grid grid-cols-12 pt-5">
        <SearchBar />
        <div className="col-start-2 col-span-10 mt-8">
          <h1 className="font-bold text-4xl mb-5">Bookmarks</h1>
        </div>
        {bookmarks.length === 0 ? (
          <div className="col-start-2 col-span-10 mt-8 flex justify-center items-center flex-col">
            <h4 className="text-xl">No Bookmarks Found.</h4>
            <p
              className="underline text-blue-600 cursor-pointer"
              onClick={() => navigate("/list")}
            >
              Add a Bookmark
            </p>
          </div>
        ) : (
          <div className="col-start-2 col-span-10 mt-8">
            <div className="grid grid-cols-12 sm:gap-8">
              {bookmarks &&
                bookmarks.length !== 0 &&
                bookmarks.map((bookmark) => (
                  <div
                    className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-8 sm:mb-auto"
                    key={bookmark}
                  >
                    <BookmarkCard name={bookmark} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
