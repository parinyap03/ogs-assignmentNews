import React from "react";
import { ColorPokemon } from "../assignmentpokemon/Page";

const Filter = () => {
  return (
    <>
      <div className="bg-blue-300 grid gap-4 grid-cols-5 w-fit h-fit p-9 rounded-lg bg-opacity-50 ">
        {Object.keys(ColorPokemon).map((item) => (
          <div className="rounded-lg w-fit p-3 ml-4 bg-slate-500 text-white font-bold bg-opacity-60 cursor-pointer">{item.toUpperCase()}</div>
        ))}
      </div>
    </>
  );
};

export default Filter;
