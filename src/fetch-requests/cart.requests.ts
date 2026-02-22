import { CartResponse } from '@/data';

export async function fetchGetCart(): Promise<CartResponse> {
  const response = await fetch('/api/cart');
  return response.json();
}
