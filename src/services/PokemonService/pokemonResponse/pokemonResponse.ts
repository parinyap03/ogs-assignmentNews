export type PokemonResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
};

interface Ability {
  name: string;
  url: string;
}
interface AbilityInfo {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface RawPokemonDetail {
  abilities: AbilityInfo[];
  base_experience: number;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: stats[];
  id: number;
  types: types[];
}

interface stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export interface PokemonDetail {
  Name: string;
  abilities: string[];
  base_experience: number;
  image: {
    pokemon_img: string;
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
  };
  stats: {
    name: string;
    base_stat: number;
  }[];
  id: number;
  types: {
    name: string;
    url: string;
  }[];
}
