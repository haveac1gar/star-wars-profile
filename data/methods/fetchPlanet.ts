import { PlanetUrlId, Planet } from "../types";

export const fetchPlanet = async (id: PlanetUrlId) => {
	const data: Planet = await fetch(id, { cache: 'force-cache' }).then(res => res.json());

	return data;
}