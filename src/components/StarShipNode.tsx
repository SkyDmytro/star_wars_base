import React from 'react';
import { StarShipType } from '../types/starship';
import { Handle, Position } from '@xyflow/react';
import '../styles/starShipNode.style.scss';

const StarShipNode = ({ data: starship }: { data: StarShipType }) => {
  return (
    <div className="starship-card">
      <h3 className="starship-name">{starship.name}</h3>
      <div className="starship-info">
        <span>Model:{starship.model}</span>
        <span>Manufacturer:{starship.manufacturer}</span>
        <span>Cost in Credits: {starship.cost_in_credits}</span>
        <span>Length: {starship.length} meters</span>
        <span>Crew:{starship.crew}</span>
        <span>Passengers: {starship.passengers}</span>
        <span>Hyperdrive Rating: {starship.hyperdrive_rating}</span>
        <span>Starship Class:{starship.starship_class}</span>
      </div>
      <Handle type="target" position={Position.Top} id="a" />
    </div>
  );
};

export default StarShipNode;
