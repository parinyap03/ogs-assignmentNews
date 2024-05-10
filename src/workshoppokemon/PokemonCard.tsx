import React from "react";
import { useGetPokemonByIdQuery } from "@services/PokemonService/pokemonService";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type props = {
  name: string;
};
const PokemonCard: React.FC<props> = ({ name }) => {
  const { data } = useGetPokemonByIdQuery(name);
  return (
    <>
      <Link
        to={`/pokemon/detail/${name}`}
        className="flex flex-col  rounded-lg select-none"
      >
        <motion.div
          className="drop-shadow-lg rounded-lg bg-white "
          whileHover={{ scale: 1.1 }}
        >
          <img src={data?.image.pokemon_img} alt="pokemonimg" width={250} />
          <div className=" bottom-0 h-[50px] bg-red-400 rounded-b-lg  p-4 flex justify-between items-center">
            <div>{data?.Name}</div>
            <div>#{data?.id}</div>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default PokemonCard;
