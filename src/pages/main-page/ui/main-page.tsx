import { Product, ProductCart } from '@/entities/product'
import React from 'react'

export const MainPage: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      <div className="flex gap-4 py-4 justify-center flex-wrap">
        {products.map((product: Product) => (
          <ProductCart
            key={product.idProduct}
            id={product.idProduct}
            imageUrl={product.image.url}
            nameProduct={product.productName}
            priceProduct={product.productPrice}
          />
        ))}
      </div>
    </>
  )
}
