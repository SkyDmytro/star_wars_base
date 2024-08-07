import { CharacterType } from '../types/character';
import { FilmType } from '../types/films';
import { Edge, Node } from '../types/reactFlow';
import { StarShipType } from '../types/starship';
import { v4 as uuidv4 } from 'uuid';

interface Position {
  x: number;
  y: number;
}

export const getLinePositions = (
  mainPosition: Position,
  totalElements: number,
  elementWidth: number,
  gap: number
): Position[] => {
  const positions: Position[] = [];

  const centerX = mainPosition.x;

  const totalWidth = (totalElements - 1) * (elementWidth + gap);

  const startX = centerX - totalWidth / 2;

  for (let i = 0; i < totalElements; i++) {
    const x = startX + i * (elementWidth + gap);
    positions.push({ x, y: mainPosition.y + 200 });
  }

  return positions;
};

export const getReactFlowProps = (
  character: CharacterType,
  films: FilmType[],
  starships: StarShipType[]
): { nodes: Node[]; edges: Edge[] } => {
  const characterNode: Node = {
    id: '1',
    type: 'charNode',
    data: character,
    position: { x: 0, y: 0 },
  };

  const nodes: Node[] = [characterNode];
  const edges: Edge[] = [];

  const starshipNodes = starships.map((starship, index) => {
    const starShipNode: Node = {
      data: starship,
      id: uuidv4(),
      type: 'starShipsNode',
      position: {
        x: getLinePositions({ x: 0, y: 0 }, starships.length, 150, 30)[index].x,
        y: 400,
      },
    };
    return starShipNode;
  });

  films.map((film, filmId) => {
    const filmNode: Node = {
      id: uuidv4(),
      data: film,
      position: {
        x: getLinePositions({ x: 0, y: 0 }, films.length, 150, 30)[filmId].x,
        y: 200,
      },
      type: 'filmNode',
    };
    const filmToCharacterEdge: Edge = {
      animated: false,
      id: uuidv4(),
      source: `${characterNode.id}`,
      target: `${filmNode.id}`,
    };
    nodes.push(filmNode);
    edges.push(filmToCharacterEdge);

    film.starships.map((starship) => {
      const starshipNode = starshipNodes.find(
        (starshipNode) => starship === starshipNode.data.id
      );
      if (starshipNode) {
        const starshipToFilmEdge: Edge = {
          animated: false,
          id: uuidv4(),
          source: filmNode.id,
          target: starshipNode.id,
        };
        edges.push(starshipToFilmEdge);
        nodes.push(starshipNode);
      }
    });
  });
  return { nodes, edges };
};
