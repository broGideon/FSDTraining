import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Weight } from '@/shared/ui/types'
import './button.scss'

type Color = 'blue' | 'green' | 'red'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  weight?: Weight
  color?: Color
  fullWidth?: boolean
  children: ReactNode | ReactNode[]
}

export const Button: React.FC<Props> = ({
  weight = 'normal',
  fullWidth = false,
  color = 'blue',
  children,
  ...rest
}) => {
  return (
    <button
      className={`${fullWidth ? 'w-full' : 'w-fit'} button-${color} py-1.5 px-3 rounded-md text-white fontWeight-${weight} text-sm lg:text-base`}
      {...rest}
    >
      {children}
    </button>
  )
}
