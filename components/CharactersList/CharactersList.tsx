import React from 'react';

import { getCharactersList } from '@/data';
import { CharactersListUI } from './CharactersListUI';

type CharactersListProps = {
  query: string;
  page: number;
};

export async function CharactersList(props: CharactersListProps) {
  const { query, page } = props;

  const data = await getCharactersList(page, query);

  return <CharactersListUI data={data.results} />;
}
