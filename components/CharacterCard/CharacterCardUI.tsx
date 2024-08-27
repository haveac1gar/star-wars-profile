'use client';

import Title from "antd/es/typography/Title";

import { CharacterExpanded } from "@/data";
import { Card, Descriptions } from "antd";

import styles from './CharacterCard.module.css';
import Paragraph from "antd/es/typography/Paragraph";
import { memo, useMemo, useState } from "react";
import { EditableInput } from "../EditableInput";
import { EditableInputNumber } from "../EditableInputNumber";

type CharacterCardUIProps = {
	data: CharacterExpanded;
}

export const CharacterCardUI = memo((props: CharacterCardUIProps) => {
	const { data } = props;

	const [name, setName] = useState(data.name);

	const info = useMemo(() => [
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
			children: <EditableInputNumber defaultValue={data.height} />,
		},
		{
			key: '6',
			label: 'Weight',
			children: <EditableInputNumber defaultValue={data.mass} />,
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
	], [data])

	return (
		<Card
			title={<Title level={3} className={styles.text}>{name}</Title>}
		>
			<Descriptions title="Character Info" bordered column={2} size="middle" items={info} />
		</Card>
	)
})

CharacterCardUI.displayName = 'CharacterCardUI'