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
        /* empty */
      }
    }
    fetchData()
  }, [])

  const addRating = useCallback((newRating: Rating) => {
    setRatings((prevState) =>
      prevState ? [...prevState, newRating] : [newRating],
    )
  }, [])

  return (
    <div className="mx-auto mt-5 w-1/2">
      <RatingList ratings={ratings} />
      <RatingForm addRating={addRating} productId={productId} />
    </div>
  )
}
