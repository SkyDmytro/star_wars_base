import React from 'react';
import { FilmType } from '../types/films';
import { Handle, Position } from '@xyflow/react';
import '../styles/filmNode.style.scss';
const FilmNode = ({ data: film }: { data: FilmType }) => {
  return (
    <div className="film-card">
      <div className="film-header">
        <h2 className="film-title">{film.title}</h2>
        <span className="film-episode">Episode {film.episode_id}</span>
      </div>
      <div className="film-info">
        <div className="film-section">
          <span>Producer(s):{film.producer}</span>
        </div>
        <div className="film-section">
          <span>Release Date:{new Date(film.release_date).toDateString()}</span>
        </div>
        <div className="film-section">
          <span>Characters: {film.characters.length}</span>
        </div>
        <div className="film-section">
          <span>Starships: {film.starships.length}</span>
        </div>
      </div>
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
};

export default FilmNode;
