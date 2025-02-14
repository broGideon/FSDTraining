import { BASE_API_URL } from '@/shared/config'
import { Rating } from '@/entities/rating'

export const postRating = async (
  productId: number,
  rating: number,
  comment?: string,
): Promise<Rating> => {
  const response = await fetch(`${BASE_API_URL}/rating`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, rating, comment }),
  })
  return await response.json()
}
