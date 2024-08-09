import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CharacterItem } from '../components/CharacterItem';
import { CharacterType } from '../types/character';
import { Header } from '../components/Header';
import { useFetch } from '../hooks/useFetch';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { EndMessageInfiniteScroll } from '../components/EndMessageInfiniteScroll';

import '../styles/characterListPage.style.scss';

export const CharactersListPage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const { data, fetchData, loading, error } = useFetch();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchData(`people/?page=1`);
  }, [fetchData]);

  useEffect(() => {
    if (pageNumber >= 2 && pageNumber <= 9) {
      fetchData(`people/?page=${pageNumber}`);
    }
  }, [pageNumber, fetchData]);

  useEffect(() => {
    if (data) {
      setCharacters((prevCharacters) => {
        const existingIds = new Set(prevCharacters.map((char) => char.id));

        const newCharacters = (data as CharacterType[]).filter(
          (char) => !existingIds.has(char.id)
        );

        return [...prevCharacters, ...newCharacters];
      });
    }
  }, [data]);

  const fetchNextPage = () => {
    if (!loading) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  };

  const handleNavigate = (charId: number) => {
    navigate(`/characters/${charId}`);
  };

  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div className="characters-list">
      <Header />
      <InfiniteScroll
        dataLength={characters.length}
        next={fetchNextPage}
        hasMore={pageNumber < 10}
        loader={<Loader />}
        endMessage={<EndMessageInfiniteScroll />}
      >
        <div className="characters-cards">
          {characters.map((item: CharacterType, id: number) => (
            <CharacterItem character={item} onClick={handleNavigate} key={id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
