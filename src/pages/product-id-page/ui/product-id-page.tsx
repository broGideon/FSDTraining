'use client'

import { useRouter } from 'next/navigation'
import { Product } from '@/entities/product'
import { EmptyButton, StarContainer, Subtitle, Text, Title } from '@/shared/ui'

export const ProductIdPage: React.FC<Product> = ({
  idProduct,
  productCount,
  productName,
  productPrice,
  image,
  rating,
  productDescription,
}) => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="py-7">
      <EmptyButton color="blue" onClick={handleGoBack}>
        Назад
      </EmptyButton>
      <Title className="lg:text-3xl text-center">О товаре</Title>
      <div className="rounded-xl bg-secondary-background mt-5 p-7 mx-auto w-fit">
        <img src={image.url}/>
        <div className="space-y-2">
          <StarContainer rating={rating}/>
          <Title>{productName}</Title>
          <Subtitle>{productPrice} руб</Subtitle>
          <Text>{productDescription}</Text>
        </div>
      </div>
    </div>
  )
}
