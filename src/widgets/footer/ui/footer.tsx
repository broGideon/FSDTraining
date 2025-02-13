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
    <footer className="bg-secondary-background py-4">
      <Container>
        <div className="flex justify-between">
          <div className="w-1/3 pr-4">
            <Subtitle>Информация о нас</Subtitle>
            <Text>
              Мы - компания, стремящаяся предоставлять нашим клиентам лучшие
              продукты и услуги. Наша цель - превзойти ожидания клиентов с
              помощью наших инновационных решений.
            </Text>
          </div>
          <div className="w-1/3">
            <Subtitle>Контакты</Subtitle>
            <Text>Email: ananasovii.yashik@gmail.com</Text>
            <Text>Email: ananasovii.yashik@gmail.com</Text>
          </div>
          <div className="w-1/3">
            <Subtitle>Подпишитесь на нас</Subtitle>
            <div className="flex">
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
        <div></div>
      </Container>
    </footer>
  )
}
