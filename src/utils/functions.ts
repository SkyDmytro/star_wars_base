import { NodeTypes } from "@xyflow/react";
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

const isCharacterType = (value: any): value is CharacterType => {
  return (
    (value as CharacterType).id !== undefined &&
    (value as CharacterType).name !== undefined &&
    (value as CharacterType).model == undefined
  );
};

const isFilmType = (value: any): value is FilmType => {
  return (
    (value as FilmType).id !== undefined &&
    (value as FilmType).title !== undefined
  );
};

const isStarShipType = (value: any): value is StarShipType => {
  return (
    (value as StarShipType).id !== undefined &&
    (value as StarShipType).model !== undefined
  );
};

const getTypeOfNode = (
  value: CharacterType | FilmType | StarShipType
): "charNode" | "filmNode" | "starShipsNode" => {
  if (isCharacterType(value)) {
    return "charNode";
  } else if (isFilmType(value)) {
    return "filmNode";
  } else if (isStarShipType(value)) {
    return "starShipsNode";
  } else {
    throw new Error("Unknown type");
  }
};

export const getNodes = (
  mainNodeData: CharacterType | FilmType,
  secondaryNodesData: (FilmType | StarShipType)[],
  indexForPosition: number,
  totalForFilmPosition: number,
  totalForStarrShipPosition: number,
  startedId: number
): Node[] => {
  // @ts-ignore
  const mainNode: Node = {
    data: mainNodeData,
    id: startedId.toString(),
    position:
      getTypeOfNode(mainNodeData) == "charNode"
        ? { x: 0, y: 0 }
        : getElementPosition(indexForPosition, totalForFilmPosition, 250),
    type: getTypeOfNode(mainNodeData),
  };

  const nodes: Node[] = [mainNode];

  secondaryNodesData.forEach((node, nodeId) => {
    //@ts-ignore
    const newNode: Node = {
      data: node,
      id: (startedId + nodeId + 1).toString(),
      position: getElementPosition(nodeId, totalForStarrShipPosition, 500),
      type: getTypeOfNode(node),
    };
    nodes.push(newNode);
  });

  return nodes;
};

export const getEdges = (mainNode: Node, secondaryNodes: Node[]): Edge[] => {
  const edges: Edge[] = [];

  secondaryNodes.map((node) => {
    const newEdge: Edge = {
      id: `e${mainNode}-${node.id}`,
      source: mainNode.id.toString(),
      target: node.id.toString(),
      animated: true,
    };
    edges.push(newEdge);
  });

  return edges;
};
const getReactFlowProps = (
  characters: CharacterType,
  films: FilmType[],
  starships: StarShipType[]
) => {
  const edges: Edge[] = [];
  const nodes: Node[] = [];

  // const charAndFilmsNodes = getNodes(
  //   characters,
  //   films,
  //   0,
  //   films.length,
  //   starships.length,
  //   1
  // );
  // const characterNode = charAndFilmsNodes[0];
  // const filmsNodes = charAndFilmsNodes.slice(1);
  // const charToFilmsEdges = getEdges(characterNode, filmsNodes);
  // nodes.push(...charAndFilmsNodes);
  // edges.push(...charToFilmsEdges);

  films.map((film, filmIndex) => {
    const starshipsInCurrentFilm = starships.filter((starship) =>
      starship.films.includes(film.id)
    );
    const filmAndStarshipsNodes = getNodes(
      film,
      starshipsInCurrentFilm,
      filmIndex,
      films.length,
      starshipsInCurrentFilm.length,
      nodes.length + 1
    );
    const filmNode = filmAndStarshipsNodes[0];
    const starshipsNodes = filmAndStarshipsNodes.slice(1);
    const filmToStarshipsEdges = getEdges(filmNode, starshipsNodes);
    nodes.push(...filmAndStarshipsNodes);
    edges.push(...filmToStarshipsEdges);
  });

  return { edges, nodes };
};
