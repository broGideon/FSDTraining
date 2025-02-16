'use client'

import { Button, EmptyButton, StarIcon, Subtitle, Text } from '@/shared/ui'
import React, { useState } from 'react'
import { postRating, Rating } from '@/entities/rating'

interface Props {
  addRating: (rating: Rating) => void
  productId: number
}

export const RatingForm: React.FC<Props> = ({ addRating, productId }) => {
  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<string | undefined>(undefined)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (rating === 0) {
      setError('Оценка не может быть 0')
      return
    }
    try {
      setError(null)
      const newRating = await postRating(productId, rating, comment)
      addRating(newRating)
    } catch (ex) {
      setError('Ошибка добавления отзыва')
    }
  }

  return (
    <div className="mt-5 rounded-lg p-4 shadow-lg bg-secondary-background">
      <Subtitle className="mb-3">Оставьте отзыв</Subtitle>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="inline-block w-full p-2">
          {[...Array(5)].map((_, i) => (
            <EmptyButton
              key={`star-${i}`}
              color="none"
              onClick={() => setRating(i + 1)}
            >
              <StarIcon filled={i < rating} />
            </EmptyButton>
          ))}
        </div>
        <div className="my-2">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-secondary-foreground"
          >
            Комментарий (необязательно)
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value)
            }}
            className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-primary-foreground"
            placeholder="Ваш комментарий..."
            rows={4}
          />
        </div>
        {error && (
          <Text color="danger" className="my-2">
            {error}
          </Text>
        )}
        <Button onClick={handleSubmit}>Отправить отзыв</Button>
      </form>
    </div>
  )
}
