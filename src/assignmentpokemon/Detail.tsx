import {
  useGetListPokemonQuery,
  useGetDetailPokemonQuery,
} from "@services/PokemonServiceCyclic/pokemonCyclicService";
import { ColorPokemon } from "../services/PokemonServiceCyclic/pokemonCyclicResponse/pokemonCyclicResponse";
import {
  RightCircleOutlined,
  LeftCircleOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import Evolution from "./Evolution";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import NoPage from "../assignmentpokemon/NoPage";
import "./PokemonStyle.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Detail = () => {
  const { pokemon } = useParams();
  const { data, isLoading } = useGetDetailPokemonQuery({ no: pokemon || "" });
  const detail = data && data[0];
  const navigate = useNavigate();
  // console.log(data);
  if (isLoading) {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen">
          <img
            className="opacity-50"
            src="https://cdn.pixabay.com/photo/2016/08/06/08/05/pokemon-1574006_960_720.png"
            width={200}
            alt="loading"
          />
          <div className="ml-[-50px] mt-5">Loading...</div>
        </div>
      </>
    );
  }

  // console.log(data)
  return (
    <>
      {detail ? (
        <div className="bg-[#E5E7EB] h-screen overflow-auto">
          <div className="flex justify-center ">
            <HomeOutlined
              onClick={() => navigate("/pokemon")}
              style={{ fontSize: "30px" }}
              className="mt-5"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-bold mt-2 ">
              {detail?.name.toUpperCase()}
            </div>
            {detail?.type.slice(0, 1).map((type) => (
              <div
                className="mt-2 rounded-lg text-white text-center  p-1"
                style={{
                  backgroundColor: ColorPokemon[type],
                  boxShadow: `0 0 10px 0 ${ColorPokemon[type]}`,
                }}
              >
                <div className=" mr-2 ml-2 capitalize ">
                  {detail?.species} pokemon
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center capitalize w-full">
              <div>
                <LeftCircleOutlined
                  className="w-[100px]  flex justify-end items-center"
                  style={{ fontSize: "40px" }}
                  onClick={() => {
                    navigate(
                      `/detail/${String(
                        "00" + (parseInt(detail?.no || "") - 1)
                      ).slice(-3)}`
                    );
                    
                  }}
                />
              </div>
              <div className="flex justify-center items-center ">
                <div style={{ perspective: 500 }}>
                  <div
                    style={{ perspective: 500 }}
                    className="skew bg-[#EDEEF1]   w-[320px] p-5 rounded-lg leading-8 shadow-lg shadow-slate-300 "
                  >
                    <div className="font-bold text-center ">INFO.</div>
                    <div className="flex">
                      <div className="text-end">
                        <div>NO.</div>
                        <div>Name</div>
                        <div>Species</div>
                        <div>Type</div>
                        <div className="mt-2">Abilities</div>
                      </div>
                      <div className="ml-5">
                        <div>{detail?.no}</div>
                        <div>{detail?.name.toUpperCase()}</div>
                        <div>{detail?.species}</div>
                        <div className="flex  ">
                          {detail?.type.map((type) => (
                            <div className="m-1">
                              <div
                                className="rounded-lg flex ml-[-5px] text-white"
                                style={{
                                  backgroundColor: ColorPokemon[type],
                                  boxShadow: `0 0 10px 0 ${ColorPokemon[type]}`,
                                }}
                              >
                                <img
                                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
                                  alt="typepokemon"
                                  width={20}
                                  className="m-1 "
                                />
                                <div className="mr-2 ">{type}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap mt-2">
                          {detail?.moves.byLevelUp.slice(0, 5).map((item) => (
                            <div className="ml-[-5px]">
                              <div
                                className=" rounded-lg flex m-1  items-center"
                                style={{
                                  backgroundColor: ColorPokemon[item.type],
                                  boxShadow: `0 0 10px 0 ${
                                    ColorPokemon[item.type]
                                  }`,
                                }}
                              >
                                <div>
                                  <img
                                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item.type}.png`}
                                    alt="typepokemon"
                                    width={20}
                                    className="m-1 "
                                  />
                                </div>
                                <div className="mr-2 text-white">
                                  {item.move}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <motion.img
                    key={detail?.no}
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${detail?.no}.png`}
                    alt=""
                    width={300}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001,
                      },
                    }}
                  />
                </div>
                <div style={{ perspective: 500 }}>
                  <div className="skew2 bg-[#EDEEF1] w-fit p-5 w-[320px] rounded-lg flex flex-col justify-center items-center  shadow-lg shadow-slate-300">
                    <div className="text-center font-bold mb-5">STATS</div>
                    {detail?.type.slice(0, 1).map((type) => (
                      <div
                        className="flex flex-col  rounded-full text-white p-5 text-center w-fit"
                        style={{
                          backgroundColor: ColorPokemon[type],
                          boxShadow: `0 0 10px 0 ${ColorPokemon[type]}`,
                        }}
                      >
                        <div className="text-[12px] mt-[-10px]">Power</div>
                        <div className="text-3xl mt-3">
                          {detail?.stats.total}
                        </div>
                      </div>
                    ))}
                    <div className="flex  mt-5 leading-8 ">
                      <div className="text-end ">
                        <div>Hp</div>
                        <div>Attack</div>
                        <div>Defense</div>
                        <div>Speed</div>
                        <div>Special</div>
                      </div>
                      <div>
                        <div className="flex justify-center items-center">
                          <Progress
                            percent={detail?.stats.hp}
                            showInfo={false}
                            className="w-[160px] mx-3"
                            strokeColor={"#48C800"}
                          />
                          <div>{detail?.stats.hp}</div>
                        </div>
                        <div className="flex justify-center items-center">
                          <Progress
                            percent={detail?.stats.attack}
                            showInfo={false}
                            className="w-[160px] mx-3"
                            strokeColor={"#FF6D6D"}
                          />
                          <div>{detail?.stats.attack}</div>
                        </div>
                        <div className="flex justify-center items-center">
                          <Progress
                            percent={detail?.stats.defense}
                            showInfo={false}
                            className="w-[160px] mx-3"
                            strokeColor={"#6B98FF"}
                          />
                          <div>{detail?.stats.defense}</div>
                        </div>
                        <div className="flex justify-center items-center">
                          <Progress
                            percent={detail?.stats.speed}
                            showInfo={false}
                            className="w-[160px] mx-3"
                            strokeColor={"#8ACFEB"}
                          />
                          <div>{detail?.stats.speed}</div>
                        </div>
                        <div className="flex justify-center items-center">
                          <Progress
                            percent={detail?.stats.special}
                            showInfo={false}
                            className="w-[160px] mx-3"
                            strokeColor={"#FFC0CB"}
                          />
                          <div>{detail?.stats.special}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <RightCircleOutlined
                  className="w-[100px]  flex justify-start items-center"
                  style={{ fontSize: "40px" }}
                  onClick={() => {
                    navigate(
                      `/detail/${String(
                        "00" + (parseInt(detail?.no || "") + 1)
                      ).slice(-3)}`
                    );
                  }}
                />
              </div>
            </div>

            {detail?.type.slice(0, 1).map((type) => (
              <div className="m-10">
                <div
                  className=" w-fit rounded-lg p-1 "
                  style={{
                    backgroundColor: ColorPokemon[type],
                    boxShadow: `0 0 10px 0 ${ColorPokemon[type]}`,
                  }}
                >
                  <div className="mr-2 ml-2 text-white ">EVOLUTION CHAIN</div>
                </div>
              </div>
            ))}
            <div className=" w-fit p-2 flex  ">
              {detail?.evolution.map((item) => (
                <Evolution no={item.no} method={item.method} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <NoPage />
      )}
    </>
  );
};

export default Detail;
