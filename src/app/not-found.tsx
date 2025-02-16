'use client'
import { Button, Title } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import './not-found.scss'

export default function NotFoundPage() {
  const router = useRouter()

  const onHomeClick = () => {
    router.replace('/')
  }
  return (
    <div className="flex h-screen w-full items-center justify-center bg-primary-background">
      <div className="flex flex-col items-center space-y-7">
        <Title>404 Not Found</Title>
        <Button onClick={onHomeClick}>На главную</Button>
      </div>
    </div>
  )
}
