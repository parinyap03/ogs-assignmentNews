import Card from "./Card";
import { useGetListPokemonQuery } from "../services/PokemonServiceCyclic/pokemonCyclicService";
import {
  ColorPokemon,
  TypePokemon,
} from "../services/PokemonServiceCyclic/pokemonCyclicResponse/pokemonCyclicResponse";
import { useState } from "react";
import { motion } from "framer-motion";
import pkLogo from "../assets/pokemonLogo.png";
const Page = () => {
  const [type, setType] = useState<TypePokemon | "">("");
  const { data, isLoading, isSuccess } = useGetListPokemonQuery({
    type: type,
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
  console.log(isLoading);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 ">
        <img src={pkLogo} alt="pokemonlogo" width={200} className="mb-5" />
        <div className="grid gap-5 grid-cols-5 w-full max-w-[1330px] h-fit  rounded-lg bg-opacity-50 ">
          {Object.keys(ColorPokemon).map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              className={`hover:bg-slate-400 bg-slate-500 rounded-lg p-3  text-white font-bold  cursor-pointer text-center`}
              onClick={() => {
                if (item === type) {
                  setType("");
                } else {
                  setType(item as TypePokemon);
                }
              }}
              style={{
                backgroundColor: ColorPokemon[item as TypePokemon],
              }}
            >
              <div className="flex justify-center items-center">
                <img
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item}.png`}
                  alt="typepokemon"
                  width={20}
                />
                <div className="text-center ml-2">{item.toUpperCase()}</div>
              </div>
            </motion.div>
          ))}
        </div>
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
