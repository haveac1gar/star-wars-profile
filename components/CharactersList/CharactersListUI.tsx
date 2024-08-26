'use client';

import React from "react";
import { Row, Space } from "antd";
import { FrownOutlined } from '@ant-design/icons'

import { Character } from '@/data';
import { CharacterItem } from "../CharacterItem";

import styles from './CharactersList.module.css';

type CharactersListUIProps = {
  data: Character[]
}

export const CharactersListUI = (props: CharactersListUIProps) => {
  const { data } = props;

  if (!data.length) {
    return (
      <div className={styles.notFoundWrapper}>
        <FrownOutlined />
        <Space />
        <div className={styles.notFoundText}>
          nothing found... <br />sorry...
        </div>
      </div>
    )
  }
  return (
    <Row wrap gutter={[12, 12]}>
      {data.map((item) => <CharacterItem {...item} key={`${item.url}`} />)}
    </Row>
  )
}
