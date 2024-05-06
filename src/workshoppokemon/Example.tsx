// import { useGetListPokemonQuery } from "../services/PokemonServiceCyclic/pokemonCyclicService";
// import { useEffect } from "react";
// function Example() {
//   // const { data, isLoading } = useGetListPokemonQuery({
//   //   limit: "10",
//   //   offset: "0",
//   // });
//   console.log(data);
//   // const [getListPokemon, result_data_pokemon] = useGetListPokemon2Mutation();
//   // const fnGetListPokemon = async () => {
//   //   try {
//   //     const result = await getListPokemon({ limit: "10", offset: "0" });
//   //   } catch (err) {
//   //     console.log("Error", err);
//   //   }
//   // };
//   // useEffect(() => {
//   //   fnGetListPokemon();
//   // }, []);

//   if (isLoading) {
//     return (
//       <>
//         <div>Loading...</div>
//       </>
//     );
//   }
//   return (
//     <>
//       {data?.data.data.map((item) => (
//         <div>Name: {item.name}</div>
//       ))}
//       <ul>
//         {/* {data?.results.map((item) => (
//           <li>Name: {item.name}</li>
//           // <img src={item.url} alt="pokemon" />
//         ))} */}
//       </ul>
//     </>
//   );
// }

// export default Example;
