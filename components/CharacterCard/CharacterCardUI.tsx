'use client';

import Title from 'antd/es/typography/Title';

import { Card, Descriptions, Divider } from 'antd';

import { memo, useMemo, useState } from 'react';
import { CharacterExpanded } from '@/data';
import styles from './CharacterCard.module.css';
import { EditableInput } from '../EditableInput';
import { EditableTagInput } from '../EditableTagInput';

type CharacterCardUIProps = {
  data: CharacterExpanded;
};

export const CharacterCardUI = memo((props: CharacterCardUIProps) => {
  const { data } = props;

  const [name, setName] = useState(data.name);

  const info = useMemo(
    () => [
      {
        key: '1',
        label: 'Birth year',
        children: <EditableInput defaultValue={data.birth_year} />,
      },
      {
        key: '2',
        label: 'Eye color',
        children: <EditableInput defaultValue={data.eye_color} />,
      },
      {
        key: '3',
        label: 'Hair color',
        children: <EditableInput defaultValue={data.hair_color} />,
      },
      {
        key: '4',
        label: 'Skin color',
        children: <EditableInput defaultValue={data.skin_color} />,
      },
      {
        key: '5',
        label: 'Height',
        children: <EditableInput defaultValue={data.height} type="number" />,
      },
      {
        key: '6',
        label: 'Weight',
        children: <EditableInput defaultValue={data.mass} type="number" />,
      },
      {
        key: '7',
        label: 'Name',
        children: <EditableInput defaultValue={data.name} onChange={setName} />,
      },
      {
        key: '8',
        label: 'Home',
        children: <EditableInput defaultValue={data.homeworld.name} />,
      },
    ],
    [data],
  );

  const machines = useMemo(
    () => [
      {
        key: '1',
        label: 'Starships',
        children: (
          <EditableTagInput defaultValue={data.starships.map((v) => v.name)} />
        ),
      },
      {
        key: '2',
        label: 'Vehicles',
        children: (
          <EditableTagInput defaultValue={data.vehicles.map((v) => v.name)} />
        ),
      },
    ],
    [data],
  );

  const appearance = useMemo(
    () => [
      {
        key: '1',
        label: 'Movies',
        children: (
          <EditableTagInput defaultValue={data.films.map((v) => v.title)} />
        ),
        span: 2,
      },
    ],
    [data],
  );

  return (
    <Card
      className={styles.card}
      title={(
        <Title level={3} className={styles.text}>
          {name}
        </Title>
      )}
    >
      <Descriptions
        className={styles.desc}
        title="Character Info"
        bordered
        column={2}
        size="middle"
        items={info}
      />
      <Divider />
      <Descriptions
        className={styles.desc}
        title="Machines"
        layout="vertical"
        column={2}
        bordered
        size="middle"
        items={machines}
      />
      <Divider />
      <Descriptions
        className={styles.desc}
        title="Appearance"
        layout="vertical"
        column={2}
        bordered
        size="middle"
        items={appearance}
      />
    </Card>
  );
});

CharacterCardUI.displayName = 'CharacterCardUI';
