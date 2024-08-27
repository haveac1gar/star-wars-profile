import {
  fetchCharacter,
  fetchFilm,
  fetchPlanet,
  fetchSpecies,
  fetchStarship,
  fetchVehicle,
} from '../methods';
import { CharacterExpanded } from '../types';

export const getCharacter = async (id: number) => {
  const character = await fetchCharacter(`https://swapi.dev/api/people/${id}/`);
  const characterExpanded: CharacterExpanded = {
    ...character,
    films: [],
    homeworld: undefined as never,
    species: [],
    starships: [],
    vehicles: [],
  };

  const promises = [];

  // It's probably an overhead but I REALLY wanna show more info on Character page
  for (const idFilm of character.films) {
    const promise = fetchFilm(idFilm)
      .then((data) => characterExpanded.films.push(data));
    promises.push(promise);
  }
  for (const idSpecies of character.species) {
    const promise = fetchSpecies(idSpecies)
      .then((data) => characterExpanded.species.push(data));
    promises.push(promise);
  }
  for (const idStarship of character.starships) {
    const promise = fetchStarship(idStarship)
      .then((data) => characterExpanded.starships.push(data));
    promises.push(promise);
  }
  for (const idVehicle of character.vehicles) {
    const promise = fetchVehicle(idVehicle)
      .then((data) => characterExpanded.vehicles.push(data));
    promises.push(promise);
  }
  if (character.homeworld) {
    const idHome = character.homeworld;
    const promise = fetchPlanet(idHome).then(
      (data) => {
        characterExpanded.homeworld = data;
      },
    );
    promises.push(promise);
  }

  await Promise.all(promises);

  return characterExpanded;
};
