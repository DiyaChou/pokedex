import { useEffect, useRef, useState, useCallback } from "react";
import PokeCard from "../components/PokeCard";
import SearchBar from "../components/Header";
import { PokeResultInterface } from "../interface";
import { usePokemon, usePokemonDispatch } from "../contexts/context";
// import SearchBar from "./components/SearchBar.jsx";

const ListingPage = () => {
  const [next, setNext] = useState<null | string>(null);
  // const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const pokemonList = usePokemon();
  const dispatch = usePokemonDispatch();

  const observer = useRef<any>();
  const lastPokemonElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (next) {
            setLoading(true);
            fetch(next)
              .then((response) => {
                if (response.ok) return response.json();
                else {
                  throw new Response("", {
                    status: 404,
                    statusText: "Not Found",
                  });
                }
              })
              .then((res) => {
                dispatch({
                  type: "add",
                  payload: res.results.map(
                    (item: PokeResultInterface) => item.name
                  ),
                });
                setNext(res.next);
              })
              .then(() => setLoading(false))
              .catch((e) => {
                console.log(e);
              });
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, next, dispatch]
  );

  useEffect(() => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
      .then((response) => {
        console.log("response", response);
        if (response.ok) return response.json();
        else {
          throw response.json();
        }
      })
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: "add",
          payload: res.results.map((item: PokeResultInterface) => item.name),
        });
        setNext(res.next);
      })
      .then(() => setLoading(false))
      .catch((e) => {
        throw e;
      });
  }, [dispatch]);

  return (
    <div className="grid grid-cols-12 pt-5">
      <SearchBar componentType="header" />
      <div className="col-start-2 col-span-10 mt-8">
        <div className="grid grid-cols-12 sm:gap-8">
          {pokemonList &&
            pokemonList.length !== 0 &&
            pokemonList.map((pokemon, index) =>
              pokemonList.length == index + 1 ? (
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-8 sm:mb-auto"
                  key={pokemon}
                  ref={lastPokemonElementRef}
                >
                  <PokeCard name={pokemon} />
                </div>
              ) : (
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 mb-8 sm:mb-auto"
                  key={pokemon}
                >
                  <PokeCard name={pokemon} />
                </div>
              )
            )}
          {loading ? (
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
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
