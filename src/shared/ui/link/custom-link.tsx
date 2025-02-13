import { AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { Weight } from '@/shared/ui/types'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  weight?: Weight
  color?: 'primary' | 'secondary'
  className?: string
  underline?: boolean
  href: string
  children: ReactNode | ReactNode[]
}

export const CustomLink: React.FC<Props> = ({
  weight = 'normal',
  color = 'primary',
  className = '',
  underline = false,
  children,
  href,
  ...rest
}) => {
  return (
    <Link
      href={href}
      className={`${className} p-2 inline-block fontWeight-${weight} textColor-${color} text-center ${underline ? 'underline' : ''} text-sm lg:text-base`}
      {...rest}
    >
      {children}
    </Link>
  )
}
