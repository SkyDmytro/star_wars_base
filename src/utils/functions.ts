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
      position: { x: 250, y: 0 },
    },
  ];

  let idCounter = 2;

  films.forEach((film, index) => {
    nodes.push({
      id: idCounter.toString(),
      data: film,
      position: { x: 50 + (index % 2) * 500, y: 200 },
      type: "filmNode",
    });
    idCounter++;
  });

  starships.forEach((starship, index) => {
    nodes.push({
      id: idCounter.toString(),
      data: starship,
      position: { x: 100 + (index % 3) * 150, y: 500 },
      type: "starShipsNode",
    });
    idCounter++;
  });

  return nodes;
};

const getInitialEdges = (nodes: Node[], films: FilmType[]): Edge[] => {
  const edges: Edge[] = [];
  const characterNodes = nodes[0];
  const filmsNodes = nodes.filter((node) => (node.type = "filmNode"));
  // Создание связей от фильмов к герою
  filmsNodes.forEach((film) => {
    const filmToCharacterEdge: Edge = {
      id: `e${film.id}-${characterNodes.id}`,
      source: `${film.id}`,
      target: `${characterNodes.id}`,
      animated: true,
    };
    edges.push(filmToCharacterEdge);
  });

  films.forEach((film) => {
    const filmNodeId = nodes.find(
      (node) => node.data.id === film.id && node.type === "filmNode"
    )?.id;

    if (filmNodeId) {
      film.starships.forEach((starshipId) => {
        const starshipNodeId = nodes.find(
          (node) => node.data.id === starshipId && node.type === "starShipsNode"
        )?.id;
        if (starshipNodeId) {
          edges.push({
            id: `edge-film-${starshipId}`,
            source: filmNodeId,
            target: starshipNodeId,
            animated: true,
          });
        }
      });
    }
  });

  return edges;
};

const getReactFlowProps = (
  characters: CharacterType,
  films: FilmType[],
  starships: StarShipType[]
) => {
  const nodes = getInitialNodes(characters, films, starships);
  getInitialEdges(nodes, films);
};

export { getInitialNodes, getInitialEdges, getReactFlowProps };
