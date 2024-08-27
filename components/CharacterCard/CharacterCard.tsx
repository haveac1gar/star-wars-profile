import { getCharacter } from '@/data';

import { CharacterCardUI } from './CharacterCardUI';

type CharacterCardProps = {
  id: number;
};

export async function CharacterCard(props: CharacterCardProps) {
  const { id } = props;

  const data = await getCharacter(id);

  return <CharacterCardUI data={data} />;
}
