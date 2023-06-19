import { createContext, useContext, useState } from "react";

const SearchContext = createContext<string>("");

const SearchDispatchContext = createContext<any>(null);

export default function SearchProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={search}>
      <SearchDispatchContext.Provider value={setSearch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}

export function useSearchDispatch() {
  return useContext(SearchDispatchContext);
}
