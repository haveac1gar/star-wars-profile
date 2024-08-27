'use client';

import React from 'react';
import { Row } from 'antd';

import { CharacterItemSkeleton } from '../CharacterItem';

const mockArray = Array(10).fill(0);

export function CharactersListSkeleton() {
  return (
    <Row wrap gutter={[12, 12]}>
      {mockArray.map((_, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <CharacterItemSkeleton key={`characters-list-skeleton-item${idx}`} />
      ))}
    </Row>
  );
}
