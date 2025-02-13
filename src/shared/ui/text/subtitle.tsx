import React, { ReactNode } from 'react'
import { Weight } from '@/shared/ui/types'

interface Props {
  weight?: Weight
  color?: 'primary' | 'secondary'
  className?: string
  children: ReactNode | ReactNode[]
}

export const Subtitle: React.FC<Props> = ({
  weight = 'medium',
  color = 'primary',
  className = '',
  children,
}) => {
  return (
    <h2
      className={`${className} fontWeight-${weight} textColor-${color} text-base lg:text-xl`}
    >
      {children}
    </h2>
  )
}
