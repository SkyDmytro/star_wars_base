import { CharacterType } from '../types/character';
import { FilmType } from '../types/films';
import { Edge, Node } from '../types/reactFlow';
import { StarShipType } from '../types/starship';
import { v4 as uuidv4 } from 'uuid';

// Interface for position on a 2D plane
interface Position {
  x: number;
  y: number;
}

/**
 * Function to calculate the positions of elements in rows.
 * @param centerPosition - the central position (position of the main element).
 * @param totalElements - the total number of elements.
 * @param elementWidth - the width of each element.
 * @param gapBetweenElements - the space between elements.
 * @returns an array of positions for each element.
 */
export const calculateElementPositions = (
  centerPosition: Position,
  totalElements: number,
  elementWidth: number,
  gapBetweenElements: number
): Position[] => {
  const maxRowWidth = 1900; // Maximum row width
  const elementPositions: Position[] = [];

  const centerX = centerPosition.x;
  const elementsPerRow = Math.floor(
    maxRowWidth / (elementWidth + gapBetweenElements)
  );
  const totalRows = Math.ceil(totalElements / elementsPerRow);

  for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
    const elementsInThisRow = Math.min(
      elementsPerRow,
      totalElements - rowIndex * elementsPerRow
    );
    const rowTotalWidth =
      (elementsInThisRow - 1) * (elementWidth + gapBetweenElements);
    const startX = centerX - rowTotalWidth / 2;

    for (
      let elementIndex = 0;
      elementIndex < elementsInThisRow;
      elementIndex++
    ) {
      const x = startX + elementIndex * (elementWidth + gapBetweenElements);
      const y = centerPosition.y + 700 - rowIndex * 300;
      elementPositions.push({ x, y });
    }
  }

  return elementPositions;
};

/**
 * Function to generate nodes and edges for React Flow.
 * @param character - the character object.
 * @param films - an array of films.
 * @param starships - an array of starships.
 * @returns an object containing an array of nodes and edges.
 */
export const generateReactFlowProps = (
  character: CharacterType,
  films: FilmType[],
  starships: StarShipType[]
): { nodes: Node[]; edges: Edge[] } => {
  // Create the character node
  const characterNode: Node = {
    id: '1',
    data: character,
    type: 'charNode',
    position: { x: 0, y: 0 },
  };

  const nodes: Node[] = [characterNode];
  const edges: Edge[] = [];

  // Filter out duplicate starships
  const uniqueStarships = starships.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  // Calculate positions for starships
  const starshipPositions = calculateElementPositions(
    { x: 0, y: 0 },
    uniqueStarships.length,
    300,
    30
  );
  const starshipNodes: Node[] = [];
  uniqueStarships.forEach((starship, index) => {
    const starShipNode: Node = {
      id: uuidv4(),
      data: starship,
      type: 'starShipsNode',
      position: {
        x: starshipPositions[index].x,
        y: starshipPositions[index].y + 500,
      },
    };
    starshipNodes.push(starShipNode);
  });

  // Calculate positions for films
  const filmPositions = calculateElementPositions(
    { x: 0, y: 0 },
    films.length,
    500,
    50
  );
  films.forEach((film, filmIndex) => {
    const filmNode: Node = {
      id: uuidv4(),
      data: film,
      position: {
        x: filmPositions[filmIndex].x,
        y: filmPositions[filmIndex].y,
      },
      type: 'filmNode',
    };

    // Create an edge between the character and the film
    const filmToCharacterEdge: Edge = {
      animated: false,
      id: uuidv4(),
      source: `${characterNode.id}`,
      target: `${filmNode.id}`,
    };
    nodes.push(filmNode);
    edges.push(filmToCharacterEdge);

    // Create edges between the films and their starships
    film.starships.forEach((starshipId) => {
      const starshipNode = starshipNodes.find(
        (starshipNode) => starshipId === starshipNode.data.id
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
