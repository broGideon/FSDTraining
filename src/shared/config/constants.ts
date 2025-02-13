export enum AppRoutes {
  MAIN = 'main',
  CART = 'cart',
  FAVORITE = 'favorite',
  ADMIN = 'admin',
  MANAGER = 'manager',
  USER = 'user',
  CATALOG = 'catalog',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.FAVORITE]: '/favorite',
  [AppRoutes.USER]: '/user',
  [AppRoutes.MANAGER]: '/manager',
  [AppRoutes.ADMIN]: '/admin',
}

export const BASE_API_URL = 'https://sbgsrnr.zapto.org/api/v2'

export const REVALIDATE_TIME = 60 * 60
