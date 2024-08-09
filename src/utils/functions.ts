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
  const maxRowWidth = 1900;
  const positions: Position[] = [];

  const centerX = mainPosition.x;
  const elementsPerRow = Math.floor(maxRowWidth / (elementWidth + gap));
  const totalRows = Math.ceil(totalElements / elementsPerRow);

  for (let row = 0; row < totalRows; row++) {
    const elementsInThisRow = Math.min(
      elementsPerRow,
      totalElements - row * elementsPerRow
    );
    const rowTotalWidth = (elementsInThisRow - 1) * (elementWidth + gap);
    const startX = centerX - rowTotalWidth / 2;

    for (let i = 0; i < elementsInThisRow; i++) {
      const x = startX + i * (elementWidth + gap);
      const y = mainPosition.y + 700 - row * 300;
      positions.push({ x, y });
    }
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
    data: character,
    type: 'charNode',
    position: { x: 0, y: 0 },
  };

  const nodes: Node[] = [characterNode];
  const edges: Edge[] = [];

  const uniqueStarships = starships.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  const positions = getLinePositions(
    { x: 0, y: 0 },
    uniqueStarships.length,
    300,
    30
  );
  const starshipNodes: Node[] = [];
  uniqueStarships.map((starship, index) => {
    const starShipNode: Node = {
      id: uuidv4(),
      data: starship,
      type: 'starShipsNode',
      position: {
        x: positions[index].x,
        y: positions[index].y + 500,
      },
    };
    starshipNodes.push(starShipNode);
  });
  const filmPositions = getLinePositions({ x: 0, y: 0 }, films.length, 500, 50);
  films.map((film, filmId) => {
    const filmNode: Node = {
      id: uuidv4(),
      data: film,
      position: {
        x: filmPositions[filmId].x,
        y: filmPositions[filmId].y,
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
