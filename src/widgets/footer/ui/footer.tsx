import {
  Container,
  EmptyButton,
  GithubIcons,
  GitlabIcon,
  Subtitle,
  TelegramIcon,
  Text,
  VKIcon,
} from '@/shared/ui'

export const Footer = () => {
  return (
    <footer className="py-4 bg-secondary-background">
      <Container>
        <div className="flex justify-between">
          <div className="w-1/3 pr-4">
            <Subtitle>Информация о нас</Subtitle>
            <div className="mt-3">
              <Text>
                Мы - компания, стремящаяся предоставлять нашим клиентам лучшие
                продукты и услуги. Наша цель - превзойти ожидания клиентов с
                помощью наших инновационных решений.
              </Text>
            </div>
          </div>
          <div className="w-1/3">
            <Subtitle>Контакты</Subtitle>
            <div className="mt-3">
              <Text>Email: ananasovii.yashik@gmail.com</Text>
              <Text>Email: ananasovii.yashik@gmail.com</Text>
            </div>
          </div>
          <div className="w-1/3">
            <Subtitle>Подпишитесь на нас</Subtitle>
            <div className="mt-3 flex">
              <EmptyButton color="none">
                <VKIcon />
              </EmptyButton>
              <EmptyButton color="none">
                <TelegramIcon />
              </EmptyButton>
              <EmptyButton color="none">
                <GithubIcons />
              </EmptyButton>
              <EmptyButton color="none">
                <GitlabIcon />
              </EmptyButton>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-4 h-0.5 bg-primary-background" />
          <Text color="secondary" textAlignment="center">
            © 2024 broGideon. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  )
}
