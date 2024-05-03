import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";

type Pokemon = {
  no: string;
  name: string;
  species: string;
  type: TypePokemon[];
  stats: StatPokemon;
  sprites: {
    redblue: string;
    redgreen: string;
    yellow: string;
  };
};

export const ColorPokemon = {
  fire: "#FBA54C",
  grass: "#5FBD58",
  flying: "#A1BBEC",
  water: "#539DDF",
  poison: "#B763CF",
  bug: "#92BC2C",
  normal: "#A0A29F",
  electric: "#F2D94E",
  ground: "#D78555",
  fighting: "#D3425F",
  rock: "#C9BB8A",
  psychic: "#FA8581",
  ice: "#75D0C1",
  ghost: "#5F6DBC",
  dragon: "#0C69C8",
};

export type StatPokemon = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  special: number;
  total: number;
};

export type TypePokemon = keyof typeof ColorPokemon;

const Page = () => {
  const [data, setData] = useState<Pokemon[]>();
  const AxiosFetchData = () => {
    axios
      .get("https://pokemon-api.cyclic.app/api/v1/pokemon")
      .then((response) => {
        setData(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with the fetch operation:",
          error
        );
      });
  };

  useEffect(() => {
    AxiosFetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="p-5">
          <Filter />
        </div>

        <div className="grid gap-10 grid-cols-5 w-[100%]">
          {data?.map((item) => (
            <Card
              key={item.no}
              name={item.name}
              type={item.type}
              id={item.no}
              stats={item.stats}
              isLoading={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
