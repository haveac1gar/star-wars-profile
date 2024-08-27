import { SpeciesUrlId, Species } from '../types';

export const fetchSpecies = async (id: SpeciesUrlId) => {
  const data: Species = await fetch(id, { cache: 'force-cache' }).then((res) => res.json());

  return data;
};
