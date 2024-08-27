import { FilmUrlId, Film } from '../types';

export const fetchFilm = async (id: FilmUrlId) => {
  const data: Film = await fetch(id, { cache: 'force-cache' }).then((res) => res.json());

  return data;
};
