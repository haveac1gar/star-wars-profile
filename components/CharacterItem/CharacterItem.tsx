import { memo } from "react";
import { Badge, Card, Col, Flex } from "antd";

import { Character } from "@/data";

import styles from './CharacterItem.module.css';
import Link from "next/link";

export const CharacterItem = memo((props: Character) => {
	const { name, vehicles, height, mass, gender, eye_color, films, species, url } = props;
	const id = url.split('/').reverse()[1];

	const textDescription = `${gender} • ${height}cm • ${mass}kg • ${eye_color} eyes`;

	return (
		<Col span={12}>
			<Link href={`character/${id}`}>
				<Card
					className={styles.card}
					title={name}
					hoverable
					extra={
						<Flex gap={6}>
							{films.length ? <Badge count={`${films.length}  🎬`} color="#c19875" /> : null}
							{vehicles.length ? <Badge count={`${vehicles.length}  🚗`} color="#96bbbb" /> : null}
							{species.length ? <Badge count={`👽`} color="#f2e3bc" /> : null}
						</Flex>
					}
				>
					<Card.Meta className={styles.description} description={textDescription} />
				</Card>
			</Link>
		</Col>
	)
})

CharacterItem.displayName = 'CharacterItem';
