import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DetailsPokeDex from "./pages/DetailsPokeDex.tsx";
import ListingPage from "./pages/ListingPage.tsx";
import PokemonProvider from "./contexts/context.tsx";
import AllPokemonProvider from "./contexts/allPokemonContext.tsx";
import BookmarkProvider from "./contexts/bookmarkContext.tsx";
import Bookmarks from "./pages/Bookmarks.tsx";
import ErrorPage from "./pages/Error.tsx";
import SuggestionsProvider from "./contexts/suggestionContext.tsx";
import SearchProvider from "./contexts/searchContext.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SearchProvider>
        <AllPokemonProvider>
          <PokemonProvider>
            <SuggestionsProvider>
              <App />
            </SuggestionsProvider>
          </PokemonProvider>
        </AllPokemonProvider>
      </SearchProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/list",
    element: (
      <SearchProvider>
        <AllPokemonProvider>
          <PokemonProvider>
            <SuggestionsProvider>
              <ListingPage />
            </SuggestionsProvider>
          </PokemonProvider>
        </AllPokemonProvider>
      </SearchProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/bookmarks",
    element: (
      <SearchProvider>
        <AllPokemonProvider>
          <BookmarkProvider>
            <SuggestionsProvider>
              <Bookmarks />
            </SuggestionsProvider>
          </BookmarkProvider>
        </AllPokemonProvider>
      </SearchProvider>
    ),
  },
  {
    path: "/pokemon/:name",
    element: (
      <SearchProvider>
        <AllPokemonProvider>
          <BookmarkProvider>
            <SuggestionsProvider>
              <DetailsPokeDex />
            </SuggestionsProvider>
          </BookmarkProvider>
        </AllPokemonProvider>
      </SearchProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
