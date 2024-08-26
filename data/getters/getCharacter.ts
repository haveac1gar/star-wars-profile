import { CharacterUrlId } from "../types";
import { fetchCharacter } from "../methods";

export const getCharacter = (url: CharacterUrlId) => fetchCharacter(url)