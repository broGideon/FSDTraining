import { BASE_API_URL } from '@/shared/config'

export const postRating = async (
  productId: number,
  rating: number,
  comment?: string,
) => {
  try {
    const response = await fetch(`${BASE_API_URL}/rating`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, rating, comment }),
    })
    return await response.json()
  } catch (error) {
    console.error(error)
    return error
  }
}
