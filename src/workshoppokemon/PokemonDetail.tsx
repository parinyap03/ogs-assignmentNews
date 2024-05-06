import { useGetPokemonByIdQuery } from "@services/PokemonService/pokemonService";
import backicon from "../assets/backicon.svg";
import { useNavigate, useParams } from "react-router-dom";
import "./WorkshopPkStyle.css";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const { name_pokemon } = useParams();
  const { data } = useGetPokemonByIdQuery(name_pokemon || "");
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-green-50">
        <div className="w-[386px] h-[612px] bg-green-500 rounded-3xl drop-shadow-lg mt-[-50px]">
          <div className="flex p-5 justify-between">
            <div className="flex flex-col ">
              <div className=" cursor-pointer ">
                <img
                  onClick={() => navigate(-1)}
                  src={backicon}
                  alt="back"
                  width={30}
                />
              </div>
              <div id="pkname" className="text-2xl text-white font-bold mt-5 capitalize ">
                {data?.Name}
              </div>
              <div className="flex ">
                {data?.types.map((item) => (
                  <div className="text-white mr-2 rounded-full  bg-green-300 w-fit text-center">
                    <div className="ml-2 mr-2 text-[12px] ">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[115px] text-white mt-[-50px] opacity-20">
              #{data?.id}
            </div>
          </div>
          <div className="items-center justify-center flex mt-[-30px]">
            <img src={data?.image.pokemon_img} width={200} alt="pokemonimg" />
          </div>

          <div className="bg-white  rounded-3xl h-[329px] mt-[-30px]">
            <div className="flex justify-center items-center ">
              <img src={data?.image.front_default} alt="pokemonpixel" />
              <img src={data?.image.back_default} alt="pokemonpixel" />
              <img src={data?.image.front_shiny} alt="pokemonpixel" />
              <img src={data?.image.back_shiny} alt="pokemonpixel" />
            </div>
            <div className="p-5">
              <div className="text-white mt-[-30px] rounded-full mb-5 bg-green-400 w-fit text-center">
                <div className="ml-2 mr-2 text-md">
                  Exp:{data?.base_experience}
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg p-2  ">
                <div className="grid gap-2 grid-cols-3 ml-1 ">
                  {data?.stats.map((item) => (
                    <div className="list text-[10px] ">
                      {item.base_stat} : {item.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-4 mt-2 mb-2">Abilities</div>
              <div className="relative bg-gray-200 rounded-lg p-2 h-[85px] scroll-smooth ">
                {data?.abilities.map((item, index) => (
                  
                  <div className="text-[12px] flex flex-col">
                    {index + 1}.{item}
                  </div>
                  
                ))}
                <div className="absolute right-1 top-2  h-[70px] w-[3px] bg-[#777777] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
