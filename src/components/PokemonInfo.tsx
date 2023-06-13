const PokemonInfo = (params) => {
  const { height, weight, baseExp, abilities, species } = params.pokeInfo;
  console.log(height, weight, baseExp, abilities, species);
  console.log();
  return (
    <div className="bg-blue-400 border rounded-2xl p-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <h1 className="capitalize text-white">height</h1>
          <p className="text-3xl">{height}</p>
        </div>
        <div>
          <h1 className="capitalize text-white">weight</h1>
          <p className="text-3xl">{weight}</p>
        </div>
        <div>
          <h1 className="capitalize text-white">baseExp</h1>
          <p className="text-3xl">{baseExp}</p>
        </div>
        <div className="row-span-2">
          <h1 className="capitalize text-white">Abilities</h1>
          {abilities.map((item) => {
            if (item.is_hidden === false)
              return <p className="text-3xl capitalize">{item.ability.name}</p>;
          })}
        </div>
        <div>
          <h1 className="capitalize text-white">species</h1>
          <p className="text-3xl capitalize">{species}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
