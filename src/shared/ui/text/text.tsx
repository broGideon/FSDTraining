import React, { ReactNode } from 'react'
import { Weight } from '@/shared/ui/types'

interface Props {
  weight?: Weight
  color?: 'primary' | 'secondary' | 'danger'
  className?: string
  textAlignment?: 'left' | 'center' | 'right' | 'justify'
  children: ReactNode | ReactNode[]
}

export const Text: React.FC<Props> = ({
  weight = 'normal',
  color = 'primary',
  className = '',
  textAlignment = 'left',
  children,
}) => {
  return (
    <p
      className={`${className} fontWeight-${weight} text-${textAlignment} textColor-${color} text-sm lg:text-base`}
    >
      {children}
    </p>
  )
}
