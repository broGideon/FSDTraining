import React from 'react'
import { Button, CustomLink, EmptyButton, LikeIcon, Subtitle, Text } from '@/shared/ui'

interface Props {
  id: number
  imageUrl: string
  nameProduct: string
  priceProduct: number
}

export const ProductCart: React.FC<Props> = ({
  id,
  imageUrl,
  nameProduct,
  priceProduct,
}) => {
  return (
    <div className="mb-2 w-1/3">
      <div className="border-2 rounded-md border-secondary-foreground bg-secondary-background p-4">
        <img className="object-cover" src={imageUrl} />
        <div className="card-body">
          <Subtitle>{nameProduct}</Subtitle>
          <Text>{priceProduct} руб</Text>
          <div className="flex w-fit items-center">
            <Button>Добавить</Button>
            <EmptyButton>
              <LikeIcon />
            </EmptyButton>
          </div>
          <br />
          <CustomLink
            className="w-full"
            href={`/products/${id}`}
            color="secondary"
            underline
            textAlignment="center"
          >
            О товаре
          </CustomLink>
        </div>
      </div>
    </div>
  )
}
