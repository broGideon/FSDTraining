interface Props {
  filled?: boolean
  half?: number
}

export const StarIcon: React.FC<Props> = ({ filled = false, half }) => {
  if (half) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="half-star">
            <stop offset={`${half * 100}%`} stopColor="#fbbf24" />
            <stop offset={`${100 - half * 100}%`} stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01z"
          fill="url(#half-star)"
          stroke="#fbbf24"
        />
      </svg>
    )
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? '#fbbf24' : 'transparent'}
      stroke="#fbbf24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  )
}
