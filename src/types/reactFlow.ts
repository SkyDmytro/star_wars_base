import { Position } from "@xyflow/react";
import { CharacterType } from "./character";
import { FilmType } from "./films";
import { StarShipType } from "./starship";

export type Node = {
  id: string;
  type: "charNode" | "filmNode" | "starShipsNode";
  data: CharacterType | FilmType | StarShipType;
  position: { x: number; y: number };
};
export type NodeHandle = {
  x: number;
  y: number;
  position: Position;
  id?: string | null;
  width?: number;
  height?: number;
  type?: "source" | "target";
};
export interface Edge {
  id: string;
  source: string;
  target: string;
  animated: boolean;
}
