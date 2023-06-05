/* eslint-disable jest/valid-expect */

import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      loading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Cualquier cosa 1',
        url: 'https://localhost/cualquier/cosa-1.jpg',
      },
      {
        id: '123',
        title: 'Cualquier cosa 2',
        url: 'https://localhost/cualquier/cosa-2.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      loading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  });
});
