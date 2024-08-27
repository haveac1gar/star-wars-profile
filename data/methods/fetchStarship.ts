import { StarshipUrlId, Starship } from "../types";

export const fetchStarship = async (id: StarshipUrlId) => {
	const data: Starship = await fetch(id, { cache: 'force-cache' }).then(res => res.json());

	return data;
}