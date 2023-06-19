import searchPoke from "/images/searchPoke.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "/svg/search.svg";
import { PokeResultInterface } from "../interface";
import {
  useAllPokemon,
  useAllPokemonDispatch,
} from "../contexts/allPokemonContext";
import { useSearch, useSearchDispatch } from "../contexts/searchContext";

const Search = () => {
  const searchText = useSearch();
  const setSearchText = useSearchDispatch();
  const [localSuggestion, setLocalSuggestion] = useState<string[]>([]);
  const navigate = useNavigate();

  const allPokemon = useAllPokemon();
  const dispatch = useAllPokemonDispatch();

  useEffect(() => {
    if (allPokemon.length === 0) {
      fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281")
        .then((result) => result.json())
        .then((res) => {
          dispatch({
            type: "add",
            payload: res.results.map((item: PokeResultInterface) => item.name),
          });
        });
    }
  }, [allPokemon.length, dispatch]);

  useEffect(() => {
    if (searchText.length === 0) {
      setLocalSuggestion([]);
    } else {
      if (allPokemon.length) {
        if (allPokemon.includes(searchText.toLowerCase())) {
          setLocalSuggestion([]);
        } else {
          setLocalSuggestion(
            allPokemon
              .filter((item) => item.includes(searchText.toLowerCase()))
              .slice(0, 4)
          );
        }
      }
    }
  }, [searchText, allPokemon]);

  const handleOnClick = (e: any) => {
    e.preventDefault();
    searchText.length > 0
      ? navigate(`/list?query=${searchText.toLowerCase()}`)
      : navigate("/list");
  };

  return (
    <div>
      <div className="relative rounded-2xl mb-3 sm:mb-0 border border-solid border-gray-300">
        <form onSubmit={handleOnClick}>
          <input
            list="local_suggestions"
            name="local_suggestions"
            className="w-full rounded-2xl ps-10 pe-14 sm:pe-24 md:pe-28 py-2 text-lg flex-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoComplete="off"
            placeholder="pokemon"
            onFocus={(e) => e.target.select()}
          />

          <div className="absolute top-0 bottom-0 left-1 flex items-center">
            <img
              src={searchPoke}
              alt=""
              style={{ transform: "scaleX(-1)" }}
              className=""
            />
          </div>
          <datalist id="local_suggestions" className="w-full absolute z-50">
            {localSuggestion.map((pokemon_name) => (
              <option
                key={pokemon_name}
                className="p-2 bg-white hover:bg-slate-200"
                onClick={() => {
                  setSearchText(
                    pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1)
                  );
                }}
                value={`${pokemon_name.charAt(0).toUpperCase() +
                  pokemon_name.slice(1)}`}
              />
            ))}
          </datalist>
          <button
            type="submit"
            className="sm:hidden bg-gray-300 rounded-e-2xl px-4 absolute top-0 bottom-0 right-0 flex items-center cursor-pointer"
          >
            <img src={search} alt="" style={{ height: "25px" }} />
          </button>
          <button
            type="submit"
            className="hidden sm:flex bg-gray-300 hover:bg-gray-400 rounded-e-2xl px-4 md:px-8 absolute top-0 bottom-0 right-0 items-center cursor-pointer text-lg"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
