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
      className={`${className} font-${weight} text-${color}-foreground text-[1.5rem] lg:text-xl`}
    >
      {children}
    </h1>
  )
}
