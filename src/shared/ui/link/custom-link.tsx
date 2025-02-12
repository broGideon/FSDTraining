import { AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { Weight } from '@/shared/ui/types'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  weight?: Weight
  color?: 'primary' | 'secondary'
  className?: string
  href: string
  children: ReactNode | ReactNode[]
}

export const CustomLink: React.FC<Props> = ({
  weight = 'normal',
  color = 'primary',
  className = '',
  children,
  href,
  ...rest
}) => {
  return (
    <Link
      href={href}
      className={`${className} font-${weight} text-${color}-foreground`}
      {...rest}
    >
      {children}
    </Link>
  )
}
