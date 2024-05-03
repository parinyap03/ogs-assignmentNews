import React, { useState } from "react";
import star from "../assets/star.png";
import shoe from "../assets/shoe.png";
import fire from "../assets/fire.png";
import award from "../assets/award.png";
import swords from "../assets/swords.png";
import heart from "../assets/heart.png";
import { Skeleton } from "antd";
import {
  StatPokemon,
  TypePokemon,
  ColorPokemon,
} from "../assignmentpokemon/Page";

type cardType = {
  name: string;
  type: TypePokemon[];
  id: string;
  isLoading: boolean;
  stats: StatPokemon;
};

type AvatarShapeType = "circle" | "square";
const Card: React.FC<cardType> = ({
  isLoading = true,
  name,
  stats,
  type,
  id,
}) => {
  const [avatarShape, setAvatarShape] = useState<AvatarShapeType>("square");

  return (
    <>
      {!isLoading ? (
        <div className="rounded-lg bg-slate-500 w-[250px] h-[330px]  relative ">
          <div className="flex flex-col p-3 rounded-lg">
            <div className="bg-blue-900 h-[300px] rounded-lg  "  >
              <img
                className="absolute z-10 left-7 mt-4 "
                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`}
                alt="pokemonimge"
                width={180}
              />
              <div className="flex flex-col bg-black bg-opacity-50 rounded-lg p-2 gap-2 absolute z-10 top-5 right-5">
                {type.map((item) => (
                  <div
                    className="w-8 rounded-full  aspect-square p-[6px]"
                    style={{ background: ColorPokemon[item] }}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${item}.png`}
                      alt="typepokemon"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute w-[226px] bottom-[15px] bg-white rounded-lg flex flex-col justify-center items-center p-2 ">
                <div className="bg-gray-400 text-center w-fit p-1 mt-2 rounded-lg bg-opacity-50 text-white font-bold ">
                  {name.toUpperCase()}
                </div>
                <div className="flex mt-3  ">
                  <div className="flex flex-col ">
                    <img src={heart} width={18} alt="heart" />
                    <div className="mt-2">{stats.hp}</div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <img src={swords} width={18} alt="swords" />
                    <div className="mt-2">{stats.attack}</div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <img src={award} width={18} alt="award" />
                    <div className="mt-2">{stats.defense}</div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <img src={shoe} width={18} alt="shoe" />
                    <div className="mt-2">{stats.speed}</div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <img src={star} width={18} alt="star" />
                    <div className="mt-2">{stats.special}</div>
                  </div>
                  <div className="flex flex-col ml-4">
                    <img src={fire} width={18} alt="fire" />
                    <div className="mt-2">{stats.total}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10 rounded-lg bg-slate-300 w-[280px] h-[345px]  relative ">
          <div className="flex flex-col p-3 rounded-lg justify-center items-center">
            <div className=" h-[300px] rounded-lg flex flex-col items-center">
              <Skeleton.Image
                active={true}
                style={{ width: 250, height: 200 }}
              />
              <Skeleton.Input active={true} style={{ marginTop: 10 }} />
              <div className="flex mt-3  ">
                <div className="flex flex-col ml-2 items-center">
                  <img src={heart} width={23} alt="heart"></img>
                  <Skeleton.Avatar
                    active={true}
                    shape={avatarShape}
                    style={{ marginTop: 5 }}
                  />
                </div>
                <div className="flex flex-col ml-2 items-center">
                  <img src={swords} width={23} alt="swords"></img>
                  <Skeleton.Avatar
                    active={true}
                    shape={avatarShape}
                    style={{ marginTop: 5 }}
                  />
                </div>
                <div className="flex flex-col ml-2 items-center">
                  <img src={award} width={23} alt="award"></img>
                  <Skeleton.Avatar
                    active={true}
                    shape={avatarShape}
                    style={{ marginTop: 5 }}
                  />
                </div>
                <div className="flex flex-col ml-2 items-center">
                  <img src={shoe} width={23} alt="shoe"></img>

                  <Skeleton.Avatar
                    active={true}
                    shape={avatarShape}
                    style={{ marginTop: 5 }}
                  />
                </div>
                <div className="flex flex-col ml-2 items-center">
                  <img src={star} width={23} alt="star"></img>

                  <Skeleton.Avatar
                    active={true}
                    shape={avatarShape}
                    style={{ marginTop: 5 }}
                  />
                </div>
                <div className="flex flex-col ml-2 items-center">
                  <img src={fire} width={23} alt="fire"></img>
                  <Skeleton.Avatar
                    active={true}
                    shape={avatarShape}
                    style={{ marginTop: 5 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
