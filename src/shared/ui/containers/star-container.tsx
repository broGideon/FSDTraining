import React from 'react'
import { StarIcon } from '@/shared/ui'

interface Props {
  rating: number
  maxStars?: number
}

export const StarContainer: React.FC<Props> = ({ rating, maxStars = 5 }) => {
  const fullStars = 4
  const hasHalfStar = rating % 1
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0)
  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`fill-star-${i}`} filled />
      ))}
      {hasHalfStar !== 0 && <StarIcon half={hasHalfStar} />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-star-${i}`} />
      ))}
    </div>
  )
}
