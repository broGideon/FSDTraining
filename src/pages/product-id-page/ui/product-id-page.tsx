import { Product } from '@/entities/product'
import { Subtitle, Text, Title } from '@/shared/ui'

export const ProductIdPage: React.FC<Product> = ({ idProduct, productCount, productName, productPrice, image, productCategory, productDescription }) => {
  return (
    <div>
      <img src={image.url} />
      <Title>{productName}</Title>
      <Subtitle>{productCategory.categoryName}</Subtitle>
      <Text>{productDescription}</Text>
    </div>
  )
}
