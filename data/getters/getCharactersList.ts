import { fetchCharactersList } from "../methods";

export const getCharactersList = (page: number, query: string) => fetchCharactersList({ page, query });
