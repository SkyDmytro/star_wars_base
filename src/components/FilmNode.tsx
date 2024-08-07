import React from 'react';
import { FilmType } from '../types/films';
import { Handle, Position } from '@xyflow/react';
import '../styles/filmNode.style.scss';
const FilmNode = ({ data }: { data: FilmType }) => {
  return (
    <div className="film-details">
      <span className="film-title">{data.title}</span>
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
};

export default FilmNode;
