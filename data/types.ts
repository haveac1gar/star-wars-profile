import type { Opaque, StrictOmit } from 'ts-essentials';

export type CharacterUrlId = `https://swapi.dev/api/people/${number}/`;
export type FilmUrlId = `https://swapi.dev/api/films/${number}/`;
export type PlanetUrlId = `https://swapi.dev/api/planets/${number}/`;
export type SpeciesUrlId = `https://swapi.dev/api/species/${number}/`;
export type StarshipUrlId = `https://swapi.dev/api/starships/${number}/`;
export type VehicleUrlId = `https://swapi.dev/api/vehicles/${number}/`;

export type DateString = Opaque<string, 'DateString'>;

export type AnyUrlId =
  | CharacterUrlId
  | FilmUrlId
  | PlanetUrlId
  | SpeciesUrlId
  | StarshipUrlId
  | VehicleUrlId;

export type Paginated<Source, UrlId extends AnyUrlId> = {
  count: number;
  results: Source[];
  next: UrlId | null;
  previous: UrlId | null;
};

export type Character = {
  birth_year: string;
  eye_color: string;
  films: FilmUrlId[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: PlanetUrlId;
  mass: string;
  name: string;
  skin_color: string;
  species: SpeciesUrlId[];
  starships: StarshipUrlId[];
  vehicles: VehicleUrlId[];
  url: CharacterUrlId;
  created: DateString;
  edited: DateString;
};
export type CharacterExpanded = StrictOmit<
Character,
'films' | 'homeworld' | 'species' | 'starships' | 'vehicles'
> & {
  films: Film[];
  homeworld: Planet;
  species: Species[];
  starships: Starship[];
  vehicles: Vehicle[];
};

export type Film = {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: CharacterUrlId[];
  planets: PlanetUrlId[];
  species: SpeciesUrlId[];
  starships: StarshipUrlId[];
  vehicles: VehicleUrlId[];
  url: CharacterUrlId[];
  created: DateString;
  edited: FilmUrlId;
};

export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: CharacterUrlId[];
  films: FilmUrlId[];
  url: PlanetUrlId[];
  created: DateString;
  edited: FilmUrlId;
};

export type Vehicle = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: CharacterUrlId[];
  films: FilmUrlId[];
  url: VehicleUrlId[];
  created: DateString;
  edited: FilmUrlId;
};

export type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: CharacterUrlId[];
  films: FilmUrlId[];
  url: StarshipUrlId[];
  created: DateString;
  edited: FilmUrlId;
};

export type Species = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: PlanetUrlId;
  language: string;
  people: CharacterUrlId[];
  films: FilmUrlId[];
  url: SpeciesUrlId[];
  created: DateString;
  edited: FilmUrlId;
};
