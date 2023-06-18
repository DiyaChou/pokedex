import { useNavigate } from "react-router-dom";

const PokeCard = ({ name }: { name: string }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${name.toLowerCase()}`);
  };

  return (
    <div
      onClick={handleOnClick}
      className="card-ani cursor-pointer border-2 border-solid border-gray-200 hover:border-gray-300 bg-gray-200 hover:bg-gray-300"
    >
      <div>
        <img src={`/poke_images/${name}.png`} alt="" />
      </div>
      <h5 className="text-center py-3">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h5>
    </div>
  );
};

export default PokeCard;
