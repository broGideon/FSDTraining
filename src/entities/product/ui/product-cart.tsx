import React from 'react'
import { Button, CustomLink, EmptyButton, LikeIcon } from '@/shared/ui'

interface Props {
  id: number
  imageUrl: string
  nameProduct: string
  priceProduct: string
}

export const ProductCart: React.FC<Props> = ({
  id,
  imageUrl,
  nameProduct,
  priceProduct,
}) => {
  return (
    <div className="col-md-4 mb-2">
      <div className="card">
        <img className="card-img-top" src={imageUrl} />
        <div className="card-body">
          <div className="card-title h5 primary-color">{nameProduct}</div>
          <p className="card-text secondary-color">{priceProduct} руб</p>
          <div className="flex flex-column w-fit">
            <div>
              <Button>
                Добавить
              </Button>
              <EmptyButton className="mr-2">
                <LikeIcon />
              </EmptyButton>
            </div>
          </div>
          <br />
          <CustomLink href={`/products/${id}`} color="secondary">
            О товаре
          </CustomLink>
        </div>
      </div>
    </div>
  )
}
