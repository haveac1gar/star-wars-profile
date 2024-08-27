import { fetchCharactersList } from '../methods';

export const getCharactersCount = (query: string) =>
	fetchCharactersList({ query }).then((res) => res.count);
