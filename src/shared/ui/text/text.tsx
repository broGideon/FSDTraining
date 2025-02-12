import React, { ReactNode } from 'react'
import { Weight } from '@/shared/ui/types'

interface Props {
  weight?: Weight
  color?: 'primary' | 'secondary'
  className?: string
  children: ReactNode | ReactNode[]
}

export const Subtitle: React.FC<Props> = ({
  weight = 'normal',
  color = 'primary',
  className = '',
  children,
}) => {
  return (
    <p
      className={`${className} font-${weight} text-${color}-foreground text-base lg:text-sm`}
    >
      {children}
    </p>
  )
}
