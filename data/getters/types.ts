import { CharacterUrlId, DateString, FilmUrlId, NumberString, PlanetUrlId, SpeciesUrlId, StarshipUrlId, VehicleUrlId } from "../types";

export type Character = {
	birth_year: string;
	eye_color: string;
	films: FilmUrlId[];
	gender: string;
	hair_color: string;
	height: NumberString;
	homeworld: PlanetUrlId;
	mass: NumberString;
	name: string;
	skin_color: string;
	created: DateString;
	edited: DateString;
	species: SpeciesUrlId[];
	starships: StarshipUrlId[];
	url: CharacterUrlId[];
	vehicles: VehicleUrlId[];
}