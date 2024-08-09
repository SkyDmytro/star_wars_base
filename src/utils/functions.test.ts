import { describe, expect } from '@jest/globals';
import { getReactFlowProps, getLinePositions } from './functions';
import { mockCharacter, mockFilms, mockStarships } from './mocks';
import { StarShipType } from '../types/starship';

describe('getLinePositions', () => {
  it('should return correct positions for multiple elements with default gap', () => {
    const positions = getLinePositions({ x: 100, y: 100 }, 3, 50, 10);
    expect(positions).toEqual([
      { x: 40, y: 800 },
      { x: 100, y: 800 },
      { x: 160, y: 800 },
    ]);
  });
  it('should return correct positions with a different gap', () => {
    const positions = getLinePositions({ x: 100, y: 100 }, 3, 50, 20);

    expect(positions).toEqual([
      { x: 30, y: 800 },
      { x: 100, y: 800 },
      { x: 170, y: 800 },
    ]);
  });
  it('should handle large number of elements', () => {
    const positions = getLinePositions({ x: 100, y: 100 }, 5, 50, 10);
    expect(positions).toEqual([
      { x: -20, y: 800 },
      { x: 40, y: 800 },
      { x: 100, y: 800 },
      { x: 160, y: 800 },
      { x: 220, y: 800 },
    ]);
  });
});

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'mock-uuid'),
}));

describe('getReactFlowProps', () => {
  it('should return correct nodes and edges for given character, films, and starships', () => {
    const { nodes, edges } = getReactFlowProps(
      mockCharacter,
      mockFilms,
      mockStarships
    );

    expect(nodes).toHaveLength(27);
    expect(edges).toHaveLength(26);

    const characterNode = nodes.find((node) => node.id === '1');
    if (characterNode) {
      expect(characterNode.type).toBe('charNode');
      expect(characterNode.data).toEqual(mockCharacter);
    }

    mockFilms.forEach((film) => {
      const filmNode = nodes.find(
        (node) => node.data.id === film.id && node.data.title == film.title
      );
      if (filmNode) {
        expect(filmNode.type).toBe('filmNode');
        expect(filmNode.data).toEqual(film);
      }
    });

    mockStarships.forEach((starship: StarShipType) => {
      const starshipNode = nodes.find(
        (node) =>
          node.data.id === starship.id && node.data.model === starship.model
      );
      if (starshipNode) {
        expect(starshipNode.type).toBe('starShipsNode');
        expect(starshipNode.data).toEqual(starship);
      }
    });

    expect(edges.filter((edge) => edge.source === '1').length).toBe(4);
    expect(edges.filter((edge) => edge.target === '1').length).toBe(0);
  });

  it('should correctly position nodes based on the number of films and starships', () => {
    const { nodes } = getReactFlowProps(
      mockCharacter,
      mockFilms,
      mockStarships
    );
    const filmNodes = nodes.filter((node) => node.type === 'filmNode');

    filmNodes.forEach((filmNode, index) => {
      const expectedX = getLinePositions(
        { x: 0, y: 0 },
        mockFilms.length,
        500,
        50
      )[index].x;
      expect(filmNode.position.x).toBe(expectedX);
    });
  });

  it('should handle empty input arrays correctly', () => {
    const { nodes, edges } = getReactFlowProps(mockCharacter, [], []);

    expect(nodes).toHaveLength(1);
    expect(edges).toHaveLength(0);

    const characterNode = nodes.find((node) => node.id === '1');
    expect(characterNode).toBeDefined();
  });
});
