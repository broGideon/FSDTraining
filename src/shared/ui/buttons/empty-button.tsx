import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Weight } from '@/shared/ui/types'
import './button.scss'

type Color = 'blue' | 'green' | 'red' | 'none'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  weight?: Weight
  color?: Color
  fullWidth?: boolean
  children: ReactNode | ReactNode[]
}

export const EmptyButton: React.FC<Props> = ({
  weight = 'normal',
  fullWidth = false,
  color = 'blue',
  children,
  ...rest
}) => {
  return (
    <button
      className={`${fullWidth ? 'w-full' : 'w-fit'} border-2 py-1.5 px-3 rounded-md bg-transparent buttonBorder-${color} text-primary-foreground fontWeight-${weight}`}
      {...rest}
    >
      {children}
    </button>
  )
}
