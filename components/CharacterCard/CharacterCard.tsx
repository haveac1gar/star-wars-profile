import { getCharacter } from "@/data";

import { CharacterCardUI } from "./CharacterCardUI";

type CharacterCardProps = {
	id: number;
}

export const CharacterCard = async (props: CharacterCardProps) => {
	const { id } = props;

	const data = await getCharacter(id)

	return <CharacterCardUI data={data} />
}