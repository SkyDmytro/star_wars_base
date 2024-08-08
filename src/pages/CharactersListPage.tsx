import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CharacterItem } from '../components/CharacterItem';
import { CharacterType } from '../types/character';
import { Header } from '../components/Header';
import { useFetch } from '../hooks/useFetch';

import '../styles/characterListPage.style.scss';

export const CharactersListPage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const { fetchUrl, data, loading } = useFetch();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchUrl(`people/?page=1`);
  }, []);

  useEffect(() => {
    if (pageNumber >= 2 && pageNumber <= 9) {
      fetchUrl(`people/?page=${pageNumber}`);
    }
  }, [pageNumber, fetchUrl]);

  useEffect(() => {
    if (data) {
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        ...(data as CharacterType[]),
      ]);
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
  return (
    <div className="characters-list">
      <Header />
      <InfiniteScroll
        dataLength={characters.length}
        next={fetchNextPage}
        hasMore={pageNumber < 10}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
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
