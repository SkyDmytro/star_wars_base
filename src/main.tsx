import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { CharactersListPage } from './pages/CharactersListPage';
import { CharacterDetailsPage } from './pages/CharacterDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/characters" />,
  },
  {
    path: '/characters',
    element: <CharactersListPage />,
  },
  {
    path: '/characters/:id',
    element: <CharacterDetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
