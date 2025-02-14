import React from 'react'

interface Props {
  onClose?: () => void
  className?: string
  children: React.ReactNode
}
export const Modal: React.FC<Props> = ({ onClose, className, children }) => {
  const onModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation()
  }

  return (
    <dialog
      className="fixed top-0 right-0 bottom-0 left-0 flex h-full w-full cursor-pointer items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className={`${className} min-w-64 min-h-96 m-0 p-10 rounded-xl bg-card`}
        onClick={onModalClick}
      >
        {children}
      </div>
    </dialog>
  )
}
