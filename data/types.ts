import { Opaque } from 'ts-essentials';

export type CharacterUrlId = `https://swapi.dev/api/people/${number}/`;
export type FilmUrlId = `https://swapi.dev/api/films/${number}/`;
export type PlanetUrlId = `https://swapi.dev/api/planets/${number}/`;
export type SpeciesUrlId = `https://swapi.dev/api/species/${number}/`;
export type StarshipUrlId = `https://swapi.dev/api/starships/${number}/`;
export type VehicleUrlId = `https://swapi.dev/api/vehicles/${number}/`;

export type NumberString = `${number}` | 'unknown';
export type DateString = Opaque<string, 'DateString'>

export type AnyUrlId = CharacterUrlId | FilmUrlId | PlanetUrlId | SpeciesUrlId | StarshipUrlId | VehicleUrlId;

export type Paginated<Source, UrlId extends AnyUrlId> = {
	count: number;
	results: Source[];
	next: UrlId | null;
	previous: UrlId | null;
}
