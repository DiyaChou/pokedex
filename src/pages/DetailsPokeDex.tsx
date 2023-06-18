import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonInfo from "../components/PokemonInfo";
import PokemonType from "../components/PokemonType";
import PokemonStats from "../components/PokemonStats";
import { ApiInterface, InfoInterface, StatInterface } from "../interface";
import PokemonSlider from "../components/PokemonSlider";
import SearchBar from "../components/Header";
import heartBlack from "/svg/heart-black.svg";
import heartRed from "/svg/heart-red.svg";
import { useBookmark, useBookmarkDispatch } from "../contexts/bookmarkContext";

const DetailsPokeDex = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<ApiInterface>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<
    | {
        status: number;
        statusText: string;
      }
    | Record<string, never>
  >({});

  const [pokeInfo, setPokeInfo] = useState<InfoInterface>();
  const [pokeStats, setPokeStats] = useState<StatInterface[]>([]);
  const bookmarks = useBookmark();
  const dispatch = useBookmarkDispatch();
  const navigate = useNavigate();

  const handleBookmark = () => {
    if (pokemon) {
      const bookmarked_pokemon = localStorage.getItem("bookmarked_pokemon");
      if (bookmarked_pokemon) {
        const bookmarked_pokemon_arr = JSON.parse(bookmarked_pokemon);
        if (bookmarked_pokemon_arr.includes(pokemon.name)) {
          dispatch({
            type: "remove",
            payload: pokemon.name,
          });
        } else {
          dispatch({
            type: "add",
            payload: pokemon.name,
          });
        }
      } else {
        dispatch({
          type: "add",
          payload: pokemon.name,
        });
      }
    }
  };

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

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        setIsLoading(false);
        if (response.ok) return response.json();
        else throw response;
      })
      .then((result) => setPokemon(result))
      .catch((err) => {
        setError(true);
        setErrorMsg({ status: err.status, statusText: err.statusText });
      });
  }, [name]);

  useEffect(() => {
    if (pokemon) {
      setPokeInfo({
        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        baseExp: pokemon.base_experience,
        abilities: pokemon.abilities,
        species: pokemon.species.name,
      });

      const b = pokemon.stats.map((item) => {
        const name = item.stat.name;
        return {
          name:
            name
              .split("-")
              .join(" ")
              .charAt(0)
              .toUpperCase() + name.slice(1),
          stat: item.base_stat,
        };
      });
      setPokeStats(b);
    }
  }, [pokemon]);

  return isLoading ? (
    <div className="h-screen flex justify-center items-center">
      <svg
        version="1.1"
        id="L5"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
        width="100"
      >
        <circle fill="#000" stroke="none" cx={6} cy={50} r={6}>
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 15 ; 0 -15; 0 15"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="#000" stroke="none" cx={30} cy={50} r={6}>
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 10 ; 0 -10; 0 10"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="#000" stroke="none" cx={54} cy={50} r={6}>
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
    </div>
  ) : error ? (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="p-10 bg-gray-300">
        <h1 className="text-5xl mb-4">{errorMsg.status}</h1>
        <p className="text-xl mb-10">{errorMsg.statusText}</p>
        <div
          className="underline text-blue-600 hover:text-blue-800 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </div>
        <div
          className="underline text-blue-600 hover:text-blue-800 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go to Home
        </div>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-12 py-5">
      <SearchBar />
      <div className="col-span-12">
        {pokemon && (
          <div className="grid grid-cols-12">
            <div className="col-start-2 col-span-10 ">
              <div className="grid grid-cols-12 lg:gap-8">
                <div className="col-span-12 flex items-baseline justify-center my-8">
                  <h1 className="font-bold text-4xl mr-5">
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </h1>
                  <h1 className="font-medium text-3xl">
                    #
                    {pokemon.id.toString().length == 1
                      ? "000" + pokemon.id
                      : pokemon.id.toString().length == 2
                      ? "00" + pokemon.id
                      : pokemon.id.toString().length == 2
                      ? "0" + pokemon.id
                      : pokemon.id}
                  </h1>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div>
                    <div className="flex items-center">
                      <div className="w-4/5 m-auto">
                        <PokemonSlider sprites={pokemon.sprites} />
                      </div>
                    </div>
                    <div>
                      <button
                        className="py-4 px-8 bg-blue-400 text-white flex justify-center items-center"
                        onClick={handleBookmark}
                      >
                        {bookmarks.includes(pokemon.name) ? (
                          <>
                            <p className="mr-2">Bookmarked</p>
                            <img
                              src={heartRed}
                              alt=""
                              style={{ width: "25px" }}
                            />
                          </>
                        ) : (
                          <>
                            <p className="mr-2">Bookmark</p>

                            <img
                              src={heartBlack}
                              alt=""
                              style={{ width: "25px" }}
                            />
                          </>
                        )}
                      </button>
                    </div>
                    <div className="mt-5">
                      <PokemonStats pokeStats={pokeStats} />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div>
                    <div className="mb-16">
                      <h3 className="font-semibold text-2xl mb-5">Type:</h3>

                      <div className="flex">
                        {pokemon.types.map((item) => (
                          <PokemonType
                            type={item.type.name}
                            key={item.type.name}
                          />
                        ))}
                      </div>
                    </div>
                    <div>{pokeInfo && <PokemonInfo pokeInfo={pokeInfo} />}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPokeDex;
