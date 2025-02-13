import { LINKS } from '@/widgets/header/config/constants'
import { Button, Container, CustomLink } from '@/shared/ui'

export const Header = () => {
  return (
    <header className="bg-secondary-background">
      <Container>
        <div className="flex justify-between items-center w-full my-2">
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
          <Button>Войти</Button>
        </div>
      </Container>
    </header>
  )
}
