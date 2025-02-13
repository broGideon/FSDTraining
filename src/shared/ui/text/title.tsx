import React, { ReactNode } from 'react'
import { Weight } from '@/shared/ui/types'

interface Props {
  weight?: Weight
  color?: 'primary' | 'secondary'
  className?: string
  children: ReactNode | ReactNode[]
}

export const Title: React.FC<Props> = ({
  weight = 'semibold',
  color = 'primary',
  className = '',
  children,
}) => {
  return (
    <h1
      className={`${className} fontWeight-${weight} textColor-${color} text-xl lg:text-[1.5rem]`}
    >
      {children}
    </h1>
  )
}
