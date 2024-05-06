import { TypePokemon } from "../pokemonCyclicResponse/pokemonCyclicResponse";


export type PokemonCyclicRequest ={
    limit:string;
    offset:string;
};

export type GetPokemon={
    type:TypePokemon | "";
}

