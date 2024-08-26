import { Character } from "../getters";
import { CharacterUrlId } from "../types";

export const fetchCharacter = async (id: CharacterUrlId) => {
	const data: Character = await fetch(id, { cache: 'force-cache' }).then(res => res.json());

	return data;
}