import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonInfo from "../components/PokemonInfo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PokemonType from "../components/PokemonType";
import PokemonStats from "../components/PokemonStats";
import { ApiInterface, InfoInterface, StatInterface } from "../interface";

const DetailsPokeDex = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<ApiInterface>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pokeInfo, setPokeInfo] = useState<InfoInterface>();
  const [pokeStats, setPokeStats] = useState<StatInterface[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        setIsLoading(false);
        if (response.ok) return response.json();
        else throw response;
      })
      .then((result) => setPokemon(result));
  }, [name]);

  useEffect(() => {
    console.log(pokemon);
    if (pokemon) {
      setPokeInfo({
        height: pokemon.height,
        weight: pokemon.weight,
        baseExp: pokemon.base_experience,
        abilities: pokemon.abilities,
        species: pokemon.species.name,
      });

      const b = pokemon.stats.map((item) => {
        return {
          name: item.stat.name.split("-").join(" "),
          stat: item.base_stat,
        };
      });
      setPokeStats(b);
    }
  }, [pokemon]);

  useEffect(() => {
    console.log(pokeStats);
  }, [pokeStats]);

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
  ) : (
    <div>
      {pokemon && (
        <div className="container">
          <div className="p-10">
            <div>name: {pokemon.name}</div>
            <div className="grid grid-cols-2">
              <div className="flex items-center">
                <div className="w-4/5">
                  <Slider {...settings}>
                    {pokemon.sprites.back_default && (
                      <div className="">
                        <img src={pokemon.sprites.back_default} />
                        <p>back_default</p>
                      </div>
                    )}
                    {pokemon.sprites.back_female && (
                      <div className="">
                        <img src={pokemon.sprites.back_female} />
                        <p>back_female</p>
                      </div>
                    )}
                    {pokemon.sprites.back_shiny && (
                      <div className="">
                        <img src={pokemon.sprites.back_shiny} />
                        <p>back_shiny</p>
                      </div>
                    )}
                    {pokemon.sprites.back_shiny_female && (
                      <div className="">
                        <img src={pokemon.sprites.back_shiny_female} />
                        <p>back_shiny_female</p>
                      </div>
                    )}
                    {pokemon.sprites.front_default && (
                      <div className="">
                        <img src={pokemon.sprites.front_default} />
                        <p>front_default</p>
                      </div>
                    )}
                    {pokemon.sprites.front_shiny && (
                      <div className="">
                        <img src={pokemon.sprites.front_shiny} />
                        <p>front_shiny</p>
                      </div>
                    )}
                    {pokemon.sprites.front_shiny_female && (
                      <div className="">
                        <img src={pokemon.sprites.front_shiny_female} />
                        <p>front_shiny_female</p>
                      </div>
                    )}
                  </Slider>
                </div>
              </div>
              <div>{pokeInfo && <PokemonInfo pokeInfo={pokeInfo} />}</div>
            </div>
            <div>
              <div>
                Stats:
                <PokemonStats pokeStats={pokeStats} />
              </div>
              <div>
                Type:
                <div className="flex">
                  {pokemon.types.map((item) => (
                    <PokemonType type={item.type.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPokeDex;
