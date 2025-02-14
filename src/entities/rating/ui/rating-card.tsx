import React from 'react'
import { StarContainer, Subtitle, Text } from '@/shared/ui'

interface Props {
  firstName: string
  surname: string
  rating: number
  comment?: string
}

export const RatingCard: React.FC<Props> = ({
  firstName,
  surname,
  rating,
  comment,
}) => {
  return (
    <div className="p-4 bg-primary-background rounded-lg shadow-lg">
      <div className="flex items-center space-x-3">
        <Subtitle>
          {firstName} {surname}
        </Subtitle>
      </div>
      <div className="flex mt-2">
        <StarContainer rating={rating} />
      </div>
      {comment && (
        <div className="mt-3 text-sm text-secondary-foreground">
          <Text>{comment}</Text>
        </div>
      )}
    </div>
  )
}
