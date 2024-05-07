import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PokemonCyclicRequest,
  GetPokemon,
} from "./pokemonCyclicRequest/pokemonCyclicRequest";
import {
  RawPokemon,
  PokemonCyclicResponse,
} from "./pokemonCyclicResponse/pokemonCyclicResponse";

const pokemonCyclicService = createApi({
  reducerPath: "pokemonCyclicService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokemon-api.cyclic.app/api/v1",
  }),
  endpoints: (builder) => ({
    getListPokemon: builder.query<PokemonCyclicResponse, GetPokemon>({
      query: ({ type }) => {
        const params = new URLSearchParams({
          type,
        });
        if (type) {
          return `pokemon?${params}`;
        }
        return `pokemon`;
      },
      transformResponse: (response: RawPokemon, meta, arg) =>
        response.data.data,
    }),
    getDetailPokemon: builder.query<PokemonCyclicResponse, { no: string }>({
      query: ({ no }) => {
        return `pokemon/${no}`;
      },
      transformResponse: (response: RawPokemon, meta, arg) =>
        response.data.data,
    }),
  }),
});

export const { useGetListPokemonQuery, useGetDetailPokemonQuery } =
  pokemonCyclicService;
export default pokemonCyclicService;
