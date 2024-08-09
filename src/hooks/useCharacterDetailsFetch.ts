import { useCallback } from 'react';

import { useFetch } from './useFetch';
import { CharacterType } from '../types/character';
import { StarShipType } from '../types/starship';
import { FilmType } from '../types/films';

export const useCharacterDetailsFetch = () => {
  const {
    data: characterData,
    error: characterError,
    loading: characterLoading,
    fetchData: fetchCharacter,
  } = useFetch<CharacterType>();

  const {
    data: filmsData,
    error: filmsError,
    loading: filmsLoading,
    fetchData: fetchFilms,
  } = useFetch<FilmType[]>();

  const {
    data: starshipsData,
    error: starshipsError,
    loading: starshipsLoading,
    fetchData: fetchStarships,
  } = useFetch<StarShipType[]>();

  const getAllData = useCallback(
    async (characterId: number) => {
      try {
        const response = await fetchCharacter(`people/${characterId}`);

        if (!response?.films) return;

        const filmResponse = await fetchFilms(
          `films/?characters__in=${characterId}`
        );

        if (!filmResponse) return;

        await fetchStarships(`starships/?pilots__in=${characterId}`);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    [fetchCharacter, fetchFilms, fetchStarships]
  );

  return {
    characterData,
    filmsData,
    starshipsData,
    loading: characterLoading || filmsLoading || starshipsLoading,
    error: characterError || filmsError || starshipsError,
    fetchAllData: getAllData,
  };
};
