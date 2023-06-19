const PokemonType = ({ type }: { type: string }) => {
  return (
    <div
      className={
        type == "fighting"
          ? "bg-red-700 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "electric"
          ? "bg-amber-400 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "bug"
          ? "bg-green-600 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "grass"
          ? "bg-lime-400 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "ice"
          ? "bg-cyan-200 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "water"
          ? "bg-blue-400 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "fire"
          ? "bg-orange-400 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "poison"
          ? "bg-purple-700 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "ground"
          ? "bg-orange-200 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "normal"
          ? "bg-stone-500 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "steel"
          ? "bg-slate-500 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "ghost"
          ? "bg-violet-600 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "flying"
          ? "bg-blue-300 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : type == "fairy"
          ? "bg-pink-300 text-white capitalize px-8 py-2 mr-5 border rounded-2xl"
          : "capitalize px-8 py-2 mr-5 border rounded-2xl"
      }
    >
      {type}
    </div>
  );
};

export default PokemonType;
