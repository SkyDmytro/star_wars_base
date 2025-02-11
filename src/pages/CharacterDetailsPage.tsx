import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useParams } from 'react-router-dom';
import { useState, useMemo, useEffect, useCallback } from 'react';

import { generateReactFlowProps } from '../utils/functions';
import CharacterNode from '../components/CharacterNode';
import StarShipNode from '../components/StarShipNode';
import FilmNode from '../components/FilmNode';
import { Node } from '../types/reactFlow';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { useCharacterDetailsFetch } from '../hooks/useCharacterDetailsFetch';

const nodeTypes = {
  charNode: CharacterNode,
  filmNode: FilmNode,
  starShipsNode: StarShipNode,
};

export const CharacterDetailsPage = () => {
  const { id } = useParams();
  const {
    fetchAllData,
    characterData,
    filmsData,
    starshipsData,
    loading,
    error,
  } = useCharacterDetailsFetch();

  const fetchCharacterData = useCallback(() => {
    if (id) {
      fetchAllData(Number(id));
    }
  }, [id, fetchAllData]);

  useEffect(() => {
    fetchCharacterData();
  }, [fetchCharacterData]);

  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    if (characterData && filmsData && starshipsData) {
      return generateReactFlowProps(characterData, filmsData, starshipsData);
    }
    return { nodes: [], edges: [] };
  }, [characterData, filmsData, starshipsData]);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges]);

  const onNodeMouseEnter = (event: React.MouseEvent, node: Node) => {
    const newEdges = edges.map((edge) => {
      if (edge.source === node.id || edge.target === node.id) {
        return { ...edge, style: { stroke: 'yellow', strokeWidth: 2 } };
      }
      return edge;
    });

    setEdges(newEdges);
  };

  const onNodeMouseLeave = () => {
    setEdges(initialEdges);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  return (
    <div style={{ height: '97vh', width: '99vw' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        fitView
      />
    </div>
  );
};
