import { Rating, RatingCard } from '@/entities/rating'

interface Props {
  ratings: Rating[] | null
}

export const RatingList: React.FC<Props> = ({ ratings }) => {
  return (
    <div className="space-y-2.5">
      {ratings?.map((rating) => (
        <RatingCard
          key={rating.idRating}
          rating={rating.ratingValue}
          firstName={rating.account.user.firstName}
          surname={rating.account.user.surname}
          comment={rating.comment}
        />
      ))}
    </div>
  )
}
