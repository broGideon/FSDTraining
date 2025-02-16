'use client'

import { useRouter } from 'next/navigation'
import { Product } from '@/entities/product'
import { EmptyButton, StarContainer, Subtitle, Text, Title } from '@/shared/ui'
import { RatingComponent } from '@/entities/rating'

export const ProductIdPage: React.FC<Product> = ({
  idProduct,
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
      <Title className="text-center lg:text-3xl">О товаре</Title>
      <div className="mx-auto mt-5 w-1/2 rounded-xl p-7 bg-secondary-background">
        <img src={image.url} />
        <div className="space-y-2">
          <StarContainer rating={rating} />
          <Title>{productName}</Title>
          <Subtitle>{productPrice} руб</Subtitle>
          <Text>{productDescription}</Text>
        </div>
      </div>
      <RatingComponent productId={idProduct} />
    </div>
  )
}
