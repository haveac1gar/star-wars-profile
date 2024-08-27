import { fetchCharacter, fetchFilm, fetchPlanet, fetchSpecies, fetchStarship, fetchVehicle } from "../methods";
import { CharacterExpanded } from "../types";

export const getCharacter = async (id: number) => {
	const character = await fetchCharacter( `https://swapi.dev/api/people/${id}/`)
	const characterExpanded: CharacterExpanded = {
		...character,
		films: [],
		homeworld: undefined as never,
		species: [],
		starships: [],
		vehicles: [],
	}

	const promises = [];

	// It's probably an overhead but I REALLY wanna show more info on Character page
	for (const id of character.films) {
		const promise = fetchFilm(id).then(data => characterExpanded.films.push(data))
		promises.push(promise);
	}
	for (const id of character.species) {
		const promise = fetchSpecies(id).then(data => characterExpanded.species.push(data))
		promises.push(promise);
	}
	for (const id of character.starships) {
		const promise = fetchStarship(id).then(data => characterExpanded.starships.push(data))
		promises.push(promise);
	}
	for (const id of character.vehicles) {
		const promise = fetchVehicle(id).then(data => characterExpanded.vehicles.push(data))
		promises.push(promise);
	}
	if (character.homeworld) {
		const id = character.homeworld;
		const promise = fetchPlanet(id).then(data => characterExpanded.homeworld = data)
		promises.push(promise);
	}

	await Promise.all(promises);

	return characterExpanded;
}