import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonRequest } from "./pokemonRequest/pokemonRequest";
import {
  PokemonResponse,
  PokemonDetail,
  RawPokemonDetail,
} from "./pokemonResponse/pokemonResponse";

const pokemonService = createApi({
  reducerPath: "pokemonService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getListPokemon: builder.query<PokemonResponse, PokemonRequest>({
      query: (data) => {
        const params = new URLSearchParams({
          limit: data.limit,
          offset: data.offset,
        });
        return {
          url: `pokemon?${params}`,
          method: "GET",
        };
      },
    }),
    getListPokemon2: builder.mutation<PokemonResponse, PokemonRequest>({
      query: (data) => {
        const params = new URLSearchParams({
          limit: data.limit,
          offset: data.offset,
        });
        return {
          url: `pokemon?${params}`,
          method: "GET",
        };
      },
    }),
    getPokemonById: builder.query<PokemonDetail, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: RawPokemonDetail, meta, arg) => {
        const resultAbility = response.abilities.map((item) => {
          return item.ability.name;
        });
        const resultStats = response.stats.map((item) => {
          return {
            name: item.stat.name,
            base_stat: item.base_stat,
          };
        });
        const resultTypes = response.types.map((item) => {
          return {
            name: item.type.name,
            url: item.type.url,
          };
        });
        const _response: PokemonDetail = {
          Name: arg,
          abilities: resultAbility,
          base_experience: response.base_experience,
          image: {
            pokemon_img:
              response.sprites.other["official-artwork"].front_default,
            front_default: response.sprites.front_default,
            front_shiny: response.sprites.front_shiny,
            back_default: response.sprites.back_default,
            back_shiny: response.sprites.back_shiny,
          },
          stats: resultStats,
          id: response.id,
          types: resultTypes,
        };
        return _response;
      },
    }),
  }),
});

export const {
  useGetListPokemonQuery,
  useGetListPokemon2Mutation,
  useGetPokemonByIdQuery,
} = pokemonService;

export default pokemonService;
