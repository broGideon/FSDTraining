export type Rating = {
  idRating: number
  accountId: number
  productId: number
  ratingValue: number
  comment: string
  account: Account
}

export type Account = {
  IdAccount: number
  AccountPassword: string
  user: User
}

export type User = {
  idUser: number
  firstName: string
  surname: string
  phoneNumber: string
  email: string
  userAddress: string
}
