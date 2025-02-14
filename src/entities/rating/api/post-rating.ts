import { Rating } from '@/entities/rating'

export const postRating = async (
  productId: number,
  rating: number,
  comment?: string,
): Promise<Rating> => {
  const response = await fetch(`/api/proxy/rating`, {
    method: 'POST',
    body: JSON.stringify({ productId, rating, comment }),
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}
