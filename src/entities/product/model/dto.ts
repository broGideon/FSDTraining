export interface Product {
  idProduct: number
  productName: string
  productDescription: string
  productPrice: number
  productCount: number
  rating: number
  image: Image
  productCategory: Category
}

export interface Image {
  idImage: number
  url: string
}

export interface Category {
  idProductCategory: number
  categoryName: string
}
