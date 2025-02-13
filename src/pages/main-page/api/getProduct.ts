import { BASE_API_URL } from '@/shared/config'
import { Product } from '@/entities/product'

export const generateStaticParams = async () => {
  const products: Product[] = await fetch(`${BASE_API_URL}/product`).then(
    (res) => res.json(),
  )

  return products.map((product: Product) => ({
    id: String(product.idProduct),
  }))
}
