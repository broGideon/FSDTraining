import { BASE_API_URL } from '@/shared/config'
import { Rating } from '@/entities/rating'

export const getRatingByProduct = async (productId: number) => {
  const ratings: Array<Rating> = await fetch(
    `${BASE_API_URL}/rating/${productId}`,
  ).then((res) => res.json())
  return ratings
}
