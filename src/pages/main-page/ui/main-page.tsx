import { ProductCart } from '@/entities/product'

export const MainPage = () => {
  return (
    <>
      <ProductCart
        id={1}
        imageUrl="https://gitlab.com/broGideon/aspnetsite/-/raw/main/WebApplication1/wwwroot/images/img_1.png?ref_type=heads"
        nameProduct="Угловой диван"
        priceProduct={129999.0}
      />
    </>
  )
}
