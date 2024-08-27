import React from 'react';

import { getCharactersCount } from '@/data';
import { PaginationUI } from './PaginationUI';

type PaginationProps = {
  query: string;
  page: number;
};
export async function Pagination(props: PaginationProps) {
  const { query, page } = props;

  const count = await getCharactersCount(query);

  return <PaginationUI current={Number(page)} total={count} />;
}
