import React from 'react';
import { render, screen } from '@testing-library/react';
import {Pokedex} from './pages/Pokedex'

test('renders learn react link', () => {
  render(<Pokedex />);
  const linkElement = screen.getByText(/Ordenar por/i);
  expect(linkElement).toBeInTheDocument();
});
