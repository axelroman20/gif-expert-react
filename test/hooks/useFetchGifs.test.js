import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de regresar el estado inicial', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0);
    });
    const { images, loading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(loading).toBe(false);
  });
});
