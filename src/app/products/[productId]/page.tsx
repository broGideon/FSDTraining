import { ProductIdPage, generateStaticParams } from '@/pages/product-id-page'
import { Product } from '@/entities/product'
import { BASE_API_URL } from '@/shared/config'

export const revalidate = 60
// eslint-disable-next-line react-refresh/only-export-components
export { generateStaticParams }

export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const id = (await params).productId
  console.log(id)
  const product: Product = await fetch(`${BASE_API_URL}/${id}`).then((res) =>
    res.json(),
  )
  return <ProductIdPage {...product} />
}
