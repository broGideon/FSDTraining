import { MainPage } from '@/pages/main-page'
import { BASE_API_URL } from '@/shared/config'
import { Product } from '@/entities/product'

export const revalidate = 3600
// eslint-disable-next-line react-refresh/only-export-components

export default async function Home() {
  const products: Product[] = await fetch(`${BASE_API_URL}/product`).then(
    (res) => res.json(),
  )
  return <MainPage products={products.slice(0, 8)} />
}
