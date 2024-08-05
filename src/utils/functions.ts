import { CharacterType } from "../types/character";
import { FilmType } from "../types/films";
import { Edge, Node } from "../types/reactFlow";
import { StarShipType } from "../types/starship";

const getInitialNodes = (
  character: CharacterType,
  films: FilmType[],
  starships: StarShipType[]
): Node[] => {
  const nodes: Node[] = [
    {
      id: "1",
      type: "charNode",
      data: character,
      position: { x: 0, y: 0 },
    },
  ];

  let idCounter = 2;

  films.forEach((film, index) => {
    const position = getElementPosition(index, films.length, 250);

    nodes.push({
      id: idCounter.toString(),
      data: film,
      position: {
        x: position.x,
        y: position.y,
      },
      type: "filmNode",
    });
    idCounter++;
  });

  starships.forEach((starship, index) => {
    const position = getElementPosition(index, starships.length, 500);
    nodes.push({
      id: idCounter.toString(),
      data: starship,
      position: position,
      type: "starShipsNode",
    });
    idCounter++;
  });

  return nodes;
};

const getInitialEdges = (nodes: Node[], films: FilmType[]): Edge[] => {
  const edges: Edge[] = [];
  const characterNodes = nodes[0];
  const filmsNodes = nodes.filter((node) => node.type === "filmNode");
  const starShipsNodes = nodes.filter((node) => node.type === "starShipsNode");
  filmsNodes.forEach((film) => {
    const filmToCharacterEdge: Edge = {
      id: `e${film.id}-${characterNodes.id}`,
      source: `${characterNodes.id}`,
      target: `${film.id}`,
      animated: true,
    };

    edges.push(filmToCharacterEdge);
  });

  starShipsNodes.forEach((starshipNode) => {
    const filmsId = films.map((film) => film.id);
    starshipNode.data.films.forEach((filmId: number) => {
      if (filmsId.includes(filmId)) {
        const filmNodeId = filmsNodes.find(
          (node) => node.data.id === filmId
        )?.id;
        if (filmNodeId) {
          const starshipToFilmEdge: Edge = {
            id: `ef-s${filmNodeId}-${starshipNode.id}`,
            source: filmNodeId?.toString(),
            target: starshipNode.id.toString(),
            animated: true,
          };
          edges.push(starshipToFilmEdge);
        }
      }
    });
  });

  return edges;
};

const getReactFlowProps = (
  characters: CharacterType,
  films: FilmType[],
  starships: StarShipType[]
) => {
  const nodes = getInitialNodes(characters, films, starships);
  const edges = getInitialEdges(nodes, films);

  return { edges, nodes };
};

export { getInitialNodes, getInitialEdges, getReactFlowProps };

export const getElementPosition = (
  index: number,
  total: number,
  radius: number
) => {
  const angle = ((2 * Math.PI) / total) * index;

  const x = Math.round(radius * Math.cos(angle));
  const y = Math.round(radius * Math.sin(angle));

  return { x, y };
};
