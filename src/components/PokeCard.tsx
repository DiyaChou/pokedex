import { PokeResultInterface } from "../interface";
import { useState, useEffect } from "react";

const PokeCard = ({ name, url }: PokeResultInterface) => {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <div onClick={handleOnClick} className="pokeCard">
      <h5>{name}</h5>
      <p>{url}</p>
      <p>is: {clicked}</p>
    </div>
  );
};

export default PokeCard;
