import { CharacterType } from './character';
import { FilmType } from './films';
import { StarShipType } from './starship';

export type Node = CharacterNode | FilmNode | StarshipNode;

type CharacterNode = {
  id: string;
  type: 'charNode';
  data: CharacterType;
  position: { x: number; y: number };
  draggable?: boolean;
  selected?: boolean;
};
type FilmNode = {
  id: string;
  type: 'filmNode';
  data: FilmType;
  position: { x: number; y: number };
  draggable?: boolean;
  selected?: boolean;
};

type StarshipNode = {
  id: string;
  type: 'starShipsNode';
  data: StarShipType;
  position: { x: number; y: number };
  draggable?: boolean;
  selected?: boolean;
};

export interface Edge {
  id: string;
  source: string;
  target: string;
  animated: boolean;
}
