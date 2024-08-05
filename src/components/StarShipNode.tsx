import React from "react";
import { StarShipType } from "../types/starship";
import { Handle, Position } from "@xyflow/react";
import "../styles/starShipNode.style.scss";

const StarShipNode = ({ data }: { data: StarShipType }) => {
  return (
    <div className="starShip-details">
      <span className="starShip-name">{data.name}</span>

      <Handle type="target" position={Position.Top} id="a" />
    </div>
  );
};

export default StarShipNode;
