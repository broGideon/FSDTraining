interface Props {
  className?: string
  children?: React.ReactNode | React.ReactNode[]
}

export const Container: React.FC<Props> = ({
  className = '',
  children,
}: Props) => {
  return <div className={`${className} container mx-auto`}>{children}</div>
}
