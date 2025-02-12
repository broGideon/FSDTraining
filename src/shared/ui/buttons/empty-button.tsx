import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Weight } from '@/shared/ui/types'

type Color = 'blue' | 'green' | 'red'

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
      className={`${fullWidth ? 'w-full' : 'w-fit'} border-2 border-${color}-700 text-white text-${weight}`}
      {...rest}
    >
      {children}
    </button>
  )
}
