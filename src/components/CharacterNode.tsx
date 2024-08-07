import React from 'react';
import { CharacterType } from '../types/character';
import { Handle, Position } from '@xyflow/react';
import '../styles/characterNode.style.scss';
const CharacterNode = ({ data }: { data: CharacterType }) => {
  return (
    <div className="character-details">
      <span className="character-name">{data.name}</span>
      <img
        className="character-picture"
        src={`https://starwars-visualguide.com/assets/img/characters/${data.id}.jpg`}
        alt={data.name}
      />
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
};

export default CharacterNode;
