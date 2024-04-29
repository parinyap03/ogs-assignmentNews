import axios from "axios";
import React, { Component, useEffect, useState } from "react";

import { Button, Spin, Modal } from "antd";
import rowena from "../assets/rowena.jpg";
import godric from "../assets/godric.jpg";
import "../apicourse/ApiStyle.css";
import logo from "../assets/harrylogo.png";
import { motion } from "framer-motion";
import hfbg from "../assets/hfbg.jpg";
import slbg from "../assets/slbg.jpg";
import rvbg from "../assets/rvbg.jpg";
import gfbg from "../assets/gfbg.jpg";
import cedric from "../assets/cedric.jpg";
import flipbg from "../assets/flipbg.jpg";

type Head = {
  id: string;
  firstName: string;
  lastName: string;
};

type Trait = {
  id: string;
  name: string;
};

type NameHouse = "Gryffindor" | "Slytherin" | "Hufflepuff" | "Ravenclaw";

type House = {
  id: string;
  name: NameHouse;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: Head[];
  traits: Trait[];
};

type HouseImage = {
  [name: string]: string;
};

const image: HouseImage = {
  Gryffindor:
    "https://i.pinimg.com/236x/4d/05/34/4d0534b313ba911ad23155e51b913554.jpg",
  Ravenclaw:
    "https://qph.cf2.quoracdn.net/main-qimg-a252c2ff2bc28f0f666e3cf612c8e1bf-lq",
  Slytherin: "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
  Hufflepuff: cedric,
};

const background: HouseImage = {
  Gryffindor: gfbg,
  Ravenclaw: rvbg,
  Slytherin: slbg,
  Hufflepuff:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d5h48m6-9a31f130-fdb6-4e25-87cc-f90adb3ee429.jpg/v1/fill/w_900,h_507,q_75,strp/hogwarts_house_wallpaper___hufflepuff_by_theladyavatar_d5h48m6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA3IiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNWg0OG02LTlhMzFmMTMwLWZkYjYtNGUyNS04N2NjLWY5MGFkYjNlZTQyOS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.VPOfIwLCfhBOOgIomRdvi4X_D7E9Jdja6cW5Vq-xJV8",
};

const imageFounder: HouseImage = {
  Godric: godric,
  Rowena: rowena,
  Helga:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjZmf55MyvPEGAyoAMQkjctYUeaZiNdkndBeRxYhZqg&s",
  Salazar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4E7IyTHV2QwTvA0rwga8g4dXJxHE5gGiKeOav7U67g&s",
};

const charactor: HouseImage = {
  Gryffindor: "Harry Potter",
  Ravenclaw: "Luna lovegood",
  Slytherin: "Draco Malfoy",
  Hufflepuff: "Cedric diggory",
};

const ApiWorkshop = () => {
  const [data, setData] = useState<House[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState<House>();
  const [isFlipped, setIsFlipped] = useState(false);

  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);
  // };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const AxiosFetchData = () => {
    axios
      .get("https://wizard-world-api.herokuapp.com/Houses", {})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with the fetch operation:",
          error
        );
      });
  };
  // const onChange = (key: string | string[]) => {
  //   console.log(key);
  // };
  console.log(data);
  useEffect(() => {
    AxiosFetchData();
  }, []);
  return (
    <>
      <div className="bg-neutral-800 h-screen flex flex-col  text-center ">
        <div className="harrypage">
          <img className="h-28 m-auto my-5" src={logo} alt="logo"></img>
          {data ? (
            <div className=" flex flex-row  flex-wrap justify-center ">
              {data.map((item, index) => {
                return (
                  <div className="p-10 " key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <div
                        className={"flip-card"}
                        onClick={(event) => {
                          event.currentTarget.classList.toggle(
                            "flip-card-flipped"
                          );
                        }}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <div
                              id="card"
                              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-neutral-500/50 bg-indigo-950  w-[100%] h-[400px]   rounded-lg  text-white flex  flex-col justify-center items-center  "
                              style={{
                                backgroundImage: `url(${
                                  background[item.name]
                                })`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              {/* <div className="p-[20px]">

                              </div> */}
                              {/* <div
                                className={`bg-${item.houseColours} w-[100%] h-[fit] rounded-lg  p-5 flex justify-center items-center`}> */}

                              {/* <img
                                className="rounded-lg h-[280px] "
                                src={image[item.name]}
                                alt=""
                              ></img> */}
                              <div className="text-xl select-none font-bold  mt-[200px]">
                                {item.name}
                              </div>
                              <div className="mt-[120px]">
                                <Button
                                  id="btn-info"
                                  className="mt-3 mb-5 bg-purple-700 hover:bg-sky-700 shadow-lg shadow-cyan-500/50 "
                                  type="primary"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    showModal();
                                    setDataModal(item);
                                  }}
                                >
                                  Information
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="flip-card-back">
                            <div className="mb-4">Main Character</div>
                            <div>
                              <img
                                className="rounded-lg h-[280px] "
                                src={image[item.name]}
                                alt=""
                              ></img>
                              <div className="mt-5 font-bold">
                                {" "}
                                {charactor[item.name]}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className=" flex justify-center items-center mt-50">
              <div className="loader"></div>
              <div className="text-white ml-10">Loading...</div>
            </div>
          )}
        </div>
        <Modal
          width="600px"
          title={<div className="text-center">{dataModal?.name}</div>}
          open={isModalOpen}
          footer={[
            <div className="flex justify-center">
              <Button
                className=" items-center bg-purple-700 hover:bg-sky-700 shadow-lg shadow-cyan-500/50 w-[100px] "
                key="submit"
                type="primary"
                onClick={handleOk}
              >
                OK
              </Button>
            </div>,
          ]}
        >
          <div className="flex justify-center">
            <img
              className="rounded-lg  h-[200px] "
              src={dataModal && imageFounder[dataModal?.founder.split(" ")[0]]}
              alt=""
            ></img>
          </div>
          <div className="text-center">
            <p className="mt-5">Founder : {dataModal?.founder}</p>
            <div>
              Heads : {"  "}
              {dataModal?.heads[0].firstName} {"  "}
              {dataModal?.heads[1].firstName}
            </div>
            <p>Animal : {dataModal?.animal}</p>
            <p>Element : {dataModal?.element}</p>
            <p>
              Traits : {dataModal?.traits[0].name} , {dataModal?.traits[1].name}
              {dataModal?.traits[2].name} , {dataModal?.traits[3].name}
              {dataModal?.traits[4].name} , {dataModal?.traits[5].name}
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ApiWorkshop;
