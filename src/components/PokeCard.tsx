import { useNavigate } from "react-router-dom";

const PokeCard = ({ name }: { name: string }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div onClick={handleOnClick} className="card-ani h-full flex flex-col">
      <div className="cursor-pointer border-2 border-solid border-gray-200 hover:border-gray-300">
        <div className="flex-1 bg-gray-200 hover:bg-gray-300">
          <img
            className="h-full object-cover"
            src={`/poke_images/${name}.png`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/images/no_photo.jpeg";
            }}
          />
        </div>
        <h5 className="text-center py-3">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h5>
      </div>
    </div>
  );
};

export default PokeCard;
