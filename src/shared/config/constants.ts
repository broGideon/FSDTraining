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
