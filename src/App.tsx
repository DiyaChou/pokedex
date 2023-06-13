import { useEffect, useState } from "react";
import "./App.css";
// import SearchBar from "./components/SearchBar.jsx";
import PokeCard from "./components/PokeCard.jsx";
import { PokedexInterface } from "./interface.js";

function App() {
  const [pokedex, setPokeDex] = useState<PokedexInterface | undefined>();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((result) => setPokeDex(result));
  }, []);

  return (
    <>
      {/* <SearchBar /> */}
      <div>
        {pokedex &&
          pokedex.results.length != 0 &&
          pokedex.results.map((item) => (
            <PokeCard key={item.name} name={item.name} url={item.url} />
          ))}
      </div>
    </>
  );
}

export default App;
