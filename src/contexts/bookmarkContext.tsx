import { createContext, useContext, useReducer } from "react";

const BookmarkContext = createContext<string[]>([]);

const BookmarkDispatchContext = createContext<any>(null);

const initialBookmark: string[] = [];

export default function BookmarkProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [bookmarked, setBookmarked] = useReducer(
    bookmarkedReducer,
    initialBookmark
  );

  return (
    <BookmarkContext.Provider value={bookmarked}>
      <BookmarkDispatchContext.Provider value={setBookmarked}>
        {children}
      </BookmarkDispatchContext.Provider>
    </BookmarkContext.Provider>
  );
}

function bookmarkedReducer(
  bookmarked: string[],
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "add":
      localStorage.setItem(
        "bookmarked_pokemon",
        JSON.stringify(bookmarked.concat(action.payload))
      );
      return bookmarked.concat(action.payload);
    case "remove":
      localStorage.setItem(
        "bookmarked_pokemon",
        JSON.stringify(
          bookmarked.filter((item: string) => item !== action.payload)
        )
      );
      return bookmarked.filter((item) => item !== action.payload);

    case "populate":
      return action.payload;

    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function useBookmark() {
  return useContext(BookmarkContext);
}

export function useBookmarkDispatch() {
  return useContext(BookmarkDispatchContext);
}
