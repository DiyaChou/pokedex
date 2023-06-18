import searchPoke from "/images/searchPoke.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "/svg/search.svg";
import { PokeResultInterface } from "../interface";
import {
  useAllPokemon,
  useAllPokemonDispatch,
} from "../contexts/allPokemonContext";

const Search = ({ type }: { type: string }) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<string[] | []>([]);
  const navigate = useNavigate();

  const allPokemon = useAllPokemon();
  const dispatch = useAllPokemonDispatch();

  useEffect(() => {
    if (allPokemon.length === 0) {
      fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281")
        .then((result) => result.json())
        .then((res) =>
          dispatch({
            type: "add",
            payload: res.results.map((item: PokeResultInterface) => item.name),
          })
        );
    }
  }, [allPokemon.length, dispatch]);

  useEffect(() => {
    if (searchText.length === 0) {
      setSuggestions([]);
    } else {
      if (allPokemon.length) {
        if (allPokemon.includes(searchText.toLowerCase())) {
          setSuggestions([]);
        } else {
          setSuggestions(
            allPokemon
              .filter((item) => item.includes(searchText.toLowerCase()))
              .slice(0, 5)
          );
        }
      }
    }
  }, [searchText, allPokemon]);

  const handleOnClick = () => {
    searchText.length > 0 && navigate(`/${searchText.toLowerCase()}`);
  };

  return type === "header" ? (
    <div>
      <div className="relative rounded-2xl mb-3 sm:mb-0 border border-solid border-gray-300">
        <input
          type="text"
          className="w-full rounded-2xl ps-10 pe-14 sm:pe-24 md:pe-28 py-2 text-lg flex-1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="pokemon"
        />
        <div className="absolute top-0 bottom-0 left-1 flex items-center">
          <img
            src={searchPoke}
            alt=""
            style={{ transform: "scaleX(-1)" }}
            className=""
          />
        </div>
        <div className="w-full absolute z-50">
          {suggestions.map((pokemon_name) => (
            <div
              key={pokemon_name}
              className="p-2 bg-white hover:bg-slate-200"
              onClick={() => {
                setSearchText(
                  pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1)
                );
                setSuggestions([]);
              }}
            >
              {pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1)}
            </div>
          ))}
        </div>
        <div
          className="sm:hidden bg-gray-300 rounded-e-2xl px-4 absolute top-0 bottom-0 right-0 flex items-center cursor-pointer"
          onClick={handleOnClick}
        >
          <img src={search} alt="" style={{ height: "25px" }} />
        </div>
        <div
          className="hidden sm:flex bg-gray-300 hover:bg-gray-400 rounded-e-2xl px-4 md:px-8 absolute top-0 bottom-0 right-0 items-center cursor-pointer text-lg"
          onClick={handleOnClick}
        >
          Search
        </div>
      </div>
    </div>
  ) : type === "component" ? (
    <div>
      <div className="relative rounded-2xl mb-3 sm:mb-0 border border-solid border-gray-300">
        <input
          type="text"
          className="w-full rounded-2xl ps-10 pe-14 sm:pe-24 md:pe-28 py-2 text-3xl flex-1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="pokemon"
        />
        <div className="absolute top-0 bottom-0 left-1 flex items-center">
          <img
            src={searchPoke}
            alt=""
            style={{ transform: "scaleX(-1)" }}
            className=""
          />
        </div>
        <div className="w-full absolute z-50">
          {suggestions.map((pokemon_name) => (
            <div
              className="p-2 bg-white hover:bg-slate-200"
              key={pokemon_name}
              onClick={() => {
                setSearchText(
                  pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1)
                );
                setSuggestions([]);
              }}
            >
              {pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1)}
            </div>
          ))}
        </div>
        <div
          className="sm:hidden bg-gray-300 rounded-e-2xl px-4 absolute top-0 bottom-0 right-0 flex items-center cursor-pointer"
          onClick={handleOnClick}
        >
          <img src={search} alt="" style={{ height: "25px" }} />
        </div>
        <div
          className="hidden sm:flex bg-blue-400 hover:bg-blue-700 text-white rounded-e-2xl px-4 md:px-8 absolute top-0 bottom-0 right-0 items-center cursor-pointer text-lg"
          onClick={handleOnClick}
        >
          Search
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Search;
