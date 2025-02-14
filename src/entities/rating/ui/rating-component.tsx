'use client'

import React, { useCallback, useEffect, useState } from 'react'
import {
  getRatingByProduct,
  Rating,
  RatingForm,
  RatingList,
} from '@/entities/rating'

interface Props {
  productId: number
}

export const RatingComponent: React.FC<Props> = ({ productId }) => {
  const [ratings, setRatings] = useState<Rating[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRatingByProduct(productId)
        setRatings(data)
      } catch (ex) {
        console.error(ex)
      }
    }
  }, [productId])

  const addRating = useCallback((newRating: Rating) => {
    setRatings((prevState) =>
      prevState ? [...prevState, newRating] : [newRating],
    )
  }, [])

  return (
    <div>
      <RatingList ratings={ratings} />
      <RatingForm addRating={addRating} productId={productId} />
    </div>
  )
}
