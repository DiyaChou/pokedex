import { InfoInterface } from "../interface";

const PokemonInfo = ({ pokeInfo }: { pokeInfo: InfoInterface }) => {
  const { height, weight, baseExp, abilities, species } = pokeInfo;
  console.log(height, weight, baseExp, abilities, species);
  console.log();
  return (
    <div className="bg-blue-400 border rounded-2xl p-4">
      <div className="grid grid-cols-2 gap-3">
        {height && (
          <div>
            <h1 className="capitalize text-white">height</h1>
            <p className="text-3xl">{height} m</p>
          </div>
        )}
        {weight && (
          <div>
            <h1 className="capitalize text-white">weight</h1>
            <p className="text-3xl">{weight} kg</p>
          </div>
        )}
        {baseExp && (
          <div>
            <h1 className="capitalize text-white">baseExp</h1>
            <p className="text-3xl">{baseExp}</p>
          </div>
        )}
        {abilities.length !== 0 && (
          <div className="row-span-2">
            <h1 className="capitalize text-white">Abilities</h1>
            {abilities.map((item) => {
              if (item.is_hidden === false)
                return (
                  <p className="text-3xl capitalize">{item.ability.name}</p>
                );
            })}
          </div>
        )}
        {species && (
          <div>
            <h1 className="capitalize text-white">species</h1>
            <p className="text-3xl capitalize">{species}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonInfo;
