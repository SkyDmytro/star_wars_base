import React from 'react';
import { CharacterType } from '../types/character';
import { Handle, Position } from '@xyflow/react';
import '../styles/characterNode.style.scss';
const CharacterNode = ({ data: character }: { data: CharacterType }) => {
  return (
    <div className="character-card">
      <div className="character-image">
        <img
          className="character-picture"
          src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
          alt={character.name}
        />
      </div>
      <div className="character-info">
        <span className="character-name">{character.name}</span>
        <div className="character-details">
          <span>Height: {character.height} cm</span>
          <span>Mass: {character.mass} kg</span>
          <span>Birth Year: {character.birth_year}</span>
          <span>Gender: {character.gender}</span>
          <span>Films: {character.films.length}</span>
          <span>Starships: {character.starships.length}</span>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CharacterNode;
