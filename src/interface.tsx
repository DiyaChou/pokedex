export interface PokeResultInterface {
  name: string;
  url: string;
}

export interface PokedexInterface {
  count: number;
  next: string | null;
  prev: string | null;
  results: PokeResultInterface[];
}

export interface StatInterface {
  name: string;
  stat: number;
}

export interface InfoInterface {
  height: number;
  weight: number;
  baseExp: number;
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  species: string;
}

export interface ApiInterface {
  height: number;
  weight: number;
  base_experience: number;
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  forms: { name: string; url: string }[];
  game_indices: {
    game_index: number;
    version: { name: string; url: string };
  }[];
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_types: [];
  species: { name: string; url: string };
  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  types: { slot: number; type: { name: string; url: string } }[];
}
