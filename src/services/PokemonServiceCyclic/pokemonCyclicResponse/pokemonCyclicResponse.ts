

export const ColorPokemon = {
  fire: "#FBA54C",
  grass: "#5FBD58",
  flying: "#A1BBEC",
  water: "#539DDF",
  poison: "#B763CF",
  bug: "#92BC2C",
  normal: "#A0A29F",
  electric: "#F2D94E",
  ground: "#D78555",
  fighting: "#D3425F",
  rock: "#C9BB8A",
  psychic: "#FA8581",
  ice: "#75D0C1",
  ghost: "#5F6DBC",
  dragon: "#0C69C8",
};

export interface StatPokemon {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  special: number;
  total: number;
}

export type TypePokemon = keyof typeof ColorPokemon;

export type PokemonCyclicResponse = {
  no: string;
  name: string;
  species: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    special: number;
    total: number;
  };
  type: TypePokemon[];
  evolution: {
    stage?: number;
    method?: string;
    no: string;
    name: string;
  }[];
  moves:{
    byLevelUp:{
      move:string;
      type:TypeMove;
    }[]
  }
}[];

export type TypeMove = keyof typeof ColorPokemon;

export interface RawPokemon {
  status: string;
  results: number;
  data: {
    data: PokemonCyclicResponse;
  };
}
