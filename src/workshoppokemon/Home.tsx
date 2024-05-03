import React, { useState } from "react";
import { useGetListPokemonQuery } from "../services/PokemonService/pokemonService";

import pkLogo from "../assets/pokemonLogo.png";
import PokemonCard from "./PokemonCard";
import { Pagination } from "antd";
import pkloading from "../assets/pkloading.svg";

const Home = () => {
  const [current, setCurrent] = useState(1);
  const { data, isLoading, isFetching } = useGetListPokemonQuery({
    limit: "10",
    offset: ((current - 1) * 10).toString(),
  });

  // console.log("Data",getDataPokemon.data?.results)

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <img src={pkloading} alt="loading" />
          <div className="ml-5">Loading...</div>
        </div>
      </>
    );
  }

  const onChange = (page: number) => {
    // console.log(page);
    setCurrent(page);
  };
  return (
    
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="py-5 min-h-screen items-center">
        <div className="flex flex-col  justify-center items-center  py-5 min-h-screen">
          <img src={pkLogo} alt="pokemon" />
          <div className="text-3xl font-bold text-blue-700">Dex</div>
          <div className="grid gap-2 grid-cols-5 w-[100%] justify-items-center ">
            {data?.results.map((item) => (
              <div className="w-5/6 mt-5">
                <PokemonCard name={item.name} />
              </div>
            ))}
          </div>
          <Pagination
            className="mt-10"
            current={current}
            onChange={onChange}
            total={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
