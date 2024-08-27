import { Character, CharacterUrlId, Paginated } from '../types';

type FetchCharactersListParams = {
  page?: number;
  query?: string;
};

export const fetchCharactersList = async (
  params: FetchCharactersListParams,
) => {
  const { query = '', page = 1 } = params;

  const data: Paginated<Character, CharacterUrlId> = await fetch(
    `https://swapi.dev/api/people?search=${query}&page=${page}`,
    { cache: 'force-cache' },
  ).then((res) => res.json());

  return data;
};
