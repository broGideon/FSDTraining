import { BASE_API_URL } from '@/shared/config'
import { Rating } from '@/entities/rating'

export const getRatingByProduct = async (productId: number) => {
  const ratings: Array<Rating> = await fetch(`/api/proxy/rating/${productId}`, {
    method: 'GET',
  }).then((res) => res.json())
  return ratings
}
