'use client'

import { Button, EmptyButton, StarIcon, Subtitle } from '@/shared/ui'
import { useState } from 'react'

export const RatingForm = () => {
  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<
    string | number | readonly string[] | undefined
  >(undefined)

  const handleSubmit = () => {
  
  }

  return (
    <div className="rounded-lg bg-primary-background p-4 shadow-lg">
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
              onClick={() => setRating(i)}
            >
              <StarIcon filled={i <= rating} />
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
        <Button>Отправить отзыв</Button>
      </form>
    </div>
  )
}
