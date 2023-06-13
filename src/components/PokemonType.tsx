const PokemonType = ({ type }) => {
  return (
    <div
      className={
        type == "fighting"
          ? "bg-red-700 text-white capitalize px-8 py-2"
          : type == "electric"
          ? "bg-amber-400 text-white capitalize px-8 py-2"
          : type == "grass"
          ? "bg-lime-400 text-white capitalize px-8 py-2"
          : type == "ice"
          ? "bg-cyan-200 text-white capitalize px-8 py-2"
          : type == "water"
          ? "bg-blue-400 text-white capitalize px-8 py-2"
          : type == "fire"
          ? "bg-orange-400 text-white capitalize px-8 py-2"
          : type == "poison"
          ? "bg-purple-700 text-white capitalize px-8 py-2"
          : type == "ground"
          ? "bg-orange-200 text-white capitalize px-8 py-2"
          : type == "normal"
          ? "bg-stone-500 text-white capitalize px-8 py-2"
          : ""
      }
    >
      {type}
    </div>
  );
};

export default PokemonType;
