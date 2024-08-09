import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CharactersListPage } from './CharactersListPage';
import { useFetch } from '../hooks/useFetch';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { mockCharacter } from '../utils/mocks';
import { CharacterType } from '../types/character';

jest.mock('../hooks/useFetch');

describe('CharactersListPage', () => {
  const mockFetchData = jest.fn();

  beforeEach(() => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [
        { id: 1, name: 'Luke Skywalker' },
        { id: 2, name: 'Darth Vader' },
      ],
      fetchData: mockFetchData,
      loading: false,
      error: null,
    });
  });

  it('should render header and character items', async () => {
    render(
      <Router>
        <CharactersListPage />
      </Router>
    );

    expect(screen.getByText('Star Wars')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
      expect(screen.getByText('Darth Vader')).toBeInTheDocument();
    });
  });
});

jest.mock('../hooks/useFetch');

describe('CharactersListPage', () => {
  beforeEach(() => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      fetchData: jest.fn(),
      loading: false,
      error: true,
    });
  });

  it('should render error message when there is an error', () => {
    render(
      <Router>
        <CharactersListPage />
      </Router>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});

jest.mock('../hooks/useFetch');

describe('CharactersListPage', () => {
  const mockFetchData = jest.fn();

  beforeEach(() => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [
        mockCharacter,

        { ...(mockCharacter as CharacterType), id: 2, name: 'Darth Vader' },
      ],
      fetchData: mockFetchData,
      loading: false,
      error: null,
    });
  });

  it('should call fetchNextPage when scrolled', () => {
    render(
      <Router>
        <CharactersListPage />
      </Router>
    );

    fireEvent.scroll(window, { target: { scrollY: 1000 } });

    expect(mockFetchData).toHaveBeenCalled();
  });
});

jest.mock('../hooks/useFetch');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('CharactersListPage', () => {
  const mockFetchData = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [{ id: 1, name: 'Luke Skywalker' }],
      fetchData: mockFetchData,
      loading: false,
      error: null,
    });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it('should navigate to character details page on click', () => {
    render(
      <MemoryRouter>
        <CharactersListPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Luke Skywalker'));

    expect(mockNavigate).toHaveBeenCalledWith('/characters/1');
  });
});
