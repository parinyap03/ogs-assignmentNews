import Card from "./Card";
import { useGetListPokemonQuery } from "../services/PokemonServiceCyclic/pokemonCyclicService";
import {
  ColorPokemon,
  TypePokemon,
} from "../services/PokemonServiceCyclic/pokemonCyclicResponse/pokemonCyclicResponse";
import { useState } from "react";
import pkLogo from "../assets/pokemonLogo.png";
import { Link, useSearchParams } from "react-router-dom";
import "@assignmentpokemon/PokemonStyle.css";
import { motion } from "framer-motion";

const Page = () => {
  const [type, setType] = useState<TypePokemon | "">("");
  const [searchParams] = useSearchParams();
  const typeUrl = searchParams.get("type");
  const { data, isLoading } = useGetListPokemonQuery({
    type: typeUrl as TypePokemon | "",
  });

  // console.log(data);
  // const [data, setData] = useState<Pokemon[]>();
  // const AxiosFetchData = () => {
  //   axios
  //     .get("https://pokemon-api.cyclic.app/api/v1/pokemon")
  //     .then((response) => {
  //       setData(response.data.data.data);
  //       console.log(response.data.data.data);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "There has been a problem with the fetch operation:",
  //         error
  //       );
  //     });
  // };
  // useEffect(() => {
  //   AxiosFetchData();
  // }, []);
  // console.log(isLoading);
  return (
    <>
      <div className=" flex flex-col items-center justify-center mt-10 ">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={pkLogo}
          alt="pokemonlogo"
          width={200}
          className="mb-5"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-5 grid-cols-5 w-full max-w-[1330px] h-fit  rounded-lg bg-opacity-50 "
        >
          {Object.keys(ColorPokemon).map((item) => {
            const color = ColorPokemon[item as TypePokemon];
            return (
              <Link
                to={item === typeUrl ? "/pokemon" : `/pokemon?type=${item}`}
                key={item}
                className={`filter rounded-lg p-3 text-white font-bold  cursor-pointer text-center`}
                onClick={() => {
                  if (item === typeUrl) {
                    setType("");
                  } else {
                    setType(item as TypePokemon);
                  }
                }}
                style={{
                  backgroundColor:
                    // "white",
                    color,
                  // type === item ? "black" : color,
                  border:
                    typeUrl === item ? `3px solid black` : "3px solid white",
                  // scale: typeUrl === item ? 1.1 : 1,
                  boxSizing: "border-box",
                }}
              >
                <div className="flex justify-center items-center">
                  <img
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item}.png`}
                    alt="typepokemon"
                    // style={{
                    //   backgroundColor: color,
                    // }}
                    // className="rounded-full p-1 aspect-square w-8  p-[6px]"
                    width={30}
                  />

                  <div className="text-center ml-2 ">{item.toUpperCase()}</div>
                </div>
              </Link>
            );
          })}
        </motion.div>
        {/* {type ? (
          <div className="font-bold mt-10 flex justify-center items-center ">
            <img
              src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
              style={{
                backgroundColor: ColorPokemon[type],
              }}
              className="rounded-full p-2"
              alt="pikachu"
              width={50}
            />
          </div>
        ) : null} */}

        <div className="grid gap-5 grid-cols-5 justify-items-center">
          {isLoading ? (
            <>
              {Array.from({ length: 10 })?.map((item, index) => (
                <Card
                  key={index}
                  name={""}
                  type={[]}
                  id={""}
                  stats={false as any}
                  isLoading={true}
                />
              ))}
            </>
          ) : (
            <>
              {data?.map((item) => (
                <Card
                  key={item.no}
                  name={item.name}
                  type={item.type}
                  id={item.no}
                  stats={item.stats}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
