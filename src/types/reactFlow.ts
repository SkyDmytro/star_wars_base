import { Position } from "@xyflow/react";
import { CharacterType } from "./character";
import { FilmType } from "./films";
import { StarShipType } from "./starship";

export type Node =
  | {
      id: string;
      type: "charNode";
      data: CharacterType;
      position: { x: number; y: number };
    }
  | {
      id: string;
      type: "filmNode";
      data: FilmType;
      position: { x: number; y: number };
    }
  | {
      id: string;
      type: "starShipsNode";
      data: StarShipType;
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
