'use client'

import { LINKS } from '@/widgets/header/config/constants'
import { Button, Container, CustomLink, Modal } from '@/shared/ui'
import { useState } from 'react'
import { Auth } from '@/entities/auth'

export const Header = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const onClose = () => {
    setModalOpen(false)
  }
  return (
    <header className="bg-secondary-background">
      <Container>
        <div className="my-2 flex w-full items-center justify-between">
          <nav>
            <CustomLink
              href="/"
              className="text-base lg:text-xl"
              color="primary"
            >
              IKEA
            </CustomLink>
            {Object.entries(LINKS).map(([url, value]) => (
              <CustomLink href={url} key={url} color="secondary">
                {value}
              </CustomLink>
            ))}
          </nav>
          <Button
            onClick={() => {
              setModalOpen(true)
            }}
          >
            Войти
          </Button>
        </div>
      </Container>
      {modalOpen && (
        <Modal onClose={onClose}>
          <Auth />
        </Modal>
      )}
    </header>
  )
}
