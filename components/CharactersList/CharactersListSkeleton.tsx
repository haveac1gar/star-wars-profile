'use client';

import React from "react";
import { Row } from "antd";

import { CharacterItemSkeleton } from "../CharacterItem";

const mockArray = Array(10).fill(0);

export const CharactersListSkeleton = () => {
  return (
    <Row wrap gutter={[12, 12]}>
      {mockArray.map((_, idx) => (
        <CharacterItemSkeleton key={`characters-list-skeleton-item${idx}`} />
      ))}
    </Row>
  )
}
