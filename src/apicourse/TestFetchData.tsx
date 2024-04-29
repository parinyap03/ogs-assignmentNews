import axios from "axios";
import React, { Component, useEffect, useState } from "react";

type Pokemon = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};
// ประกาศ type ของ array ของ object อีกวิธี
// type PokemonData = Array<{
//     name: string;
//     url: string;
//   }>

const TestFetchData = () => {
  const [data, setData] = useState<Pokemon>();

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  const AxiosFetchData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(response =>{
        setData(response.data);
    })
    .catch((error) => {
        console.error(
          "There has been a problem with the fetch operation:",
          error
        );
      });

      axios.put("https://pokeapi.co/api/v2/pokemon" ,{
        
      } )
  };
  
  useEffect(() => {
    // fetchData();
    AxiosFetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <h1>ข้อมูลจากapi</h1>

        {data ? (
          <div>
            <p>ชื่อ : {data.count}</p>
            <p>
              {data.results.map((item, index) => {
                return (
                  <div className="p-2">
                    <p>ชื่อ : {item.name}</p>
                    <p>URL : {item.url}</p>
                    {/* <p>{index+1} : {item.name}</p> */}
                  </div>
                );
              })}
            </p>
          </div>
        ) : (
          <p>ไม่มีข้อมูล</p>
        )}
      </div>
    </>
  );
};


export default TestFetchData;
