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
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AllPokemonProvider>
        <App />
      </AllPokemonProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/all",
    element: (
      <AllPokemonProvider>
        <PokemonProvider>
          <ListingPage />
        </PokemonProvider>
      </AllPokemonProvider>
    ),
  },
  {
    path: "/bookmarks",
    element: (
      <AllPokemonProvider>
        <BookmarkProvider>
          <Bookmarks />
        </BookmarkProvider>
      </AllPokemonProvider>
    ),
  },
  {
    path: "/:name",
    element: (
      <AllPokemonProvider>
        <BookmarkProvider>
          <DetailsPokeDex />
        </BookmarkProvider>
      </AllPokemonProvider>
    ),
  },
  // {
  //   path: '*', element:(<NotFound />)
  // }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
