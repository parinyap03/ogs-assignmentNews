import { useGetDetailPokemonQuery } from "@services/PokemonServiceCyclic/pokemonCyclicService";
import { ColorPokemon } from "../services/PokemonServiceCyclic/pokemonCyclicResponse/pokemonCyclicResponse";
import { ArrowRightOutlined } from "@ant-design/icons";
const Evolution = ({
  no,
  method,
}: {
  no: string;
  method: string | undefined;
}) => {
  const { data } = useGetDetailPokemonQuery({ no });
  const detail = data && data[0];
  return (
    <>
   
      {method && (
        <div className="flex flex-col justify-center items-center p-10 ">
          <div >{method}</div>
          <ArrowRightOutlined  className="mt-5" />
        </div>
      )}
      <div className="bg-[#EDEEF1] flex flex-col justify-between items-center p-5 shadow-lg shadow-slate-300 w-[300px] mb-10">
        <div>
          <img
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${no}.png`}
            alt={detail?.name}
            width={80}
          />
        </div>
        <div className="m-2">#{detail?.no}</div>
        {detail?.type.slice(0, 1).map((type) => (
          <div
            className="bg-orange-300 rounded-lg p-1"
            style={{
              backgroundColor: ColorPokemon[type],
              boxShadow: `0 0 10px 0 ${ColorPokemon[type]}`,
            }}
          >
            <div className="ml-2 mr-2 text-white">{detail?.name}</div>
          </div>
        ))}
        <div className="flex m-3">
          {detail?.type.map((type) => (
            <div
              className="bg-orange-300 rounded-full w-fit p-[5px] m-1 "
              style={{
                backgroundColor: ColorPokemon[type],
                boxShadow: `0 0 10px 0 ${ColorPokemon[type]}`,
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
                alt={type}
                width={20}
              />
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Evolution;
