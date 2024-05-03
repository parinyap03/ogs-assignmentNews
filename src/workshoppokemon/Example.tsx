
import {
  useGetListPokemonQuery,
  useGetListPokemon2Mutation,
} from "../services/PokemonService/pokemonService";
import { useEffect } from "react";
function Example() {
  const getDataPokemon = useGetListPokemonQuery({
    limit: "10",
    offset: "0",
  });
  // console.log("Data",getDataPokemon.data?.results)
  const [getListPokemon, result_data_pokemon] = useGetListPokemon2Mutation();
  const fnGetListPokemon = async () => {
    try {
      const result = await getListPokemon({ limit: "10", offset: "0" });
      // console.log(result);
    } catch (err) {
      console.log("Error", err);
    }
  };
console.log(result_data_pokemon)
  useEffect(() => {
    fnGetListPokemon();
  }, []);

  if (result_data_pokemon.isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
  return (
    <>
      
      <ul>
        {result_data_pokemon.data?.results.map((item) => (
          <li>Name: {item.name}</li>
          // <img src={item.url} alt="pokemon" />
        ))}
      </ul>
    </>
  );
}

export default Example;
