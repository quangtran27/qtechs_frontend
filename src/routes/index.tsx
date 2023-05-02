import MainLayout from '~/layouts/MainLayout/MainLayout'

import Account from '~/pages/Account'
import AlternativePage from '~/pages/AlternativePage'
import LoginPage from '~/pages/Auth/LoginPage'
import RegisterPage from '~/pages/Auth/RegisterPage'
import HomePage from '~/pages/HomePage'
import ProductDetail from '~/pages/ProductDetail/ProductDetail'
import Products from '~/pages/Products/Products'

type Route = {
  path: string
  component: () => JSX.Element
  layout?: (props: any) => JSX.Element
}

const publicRoutes: Route[] = [
  { path: '', component: HomePage },

  // Auth
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'account', component: Account },
  { path: 'cart', component: AlternativePage },
  { path: 'order', component: AlternativePage },
  { path: ':category', component: Products, layout: MainLayout },
  { path: ':category/:productId', component: ProductDetail, layout: MainLayout },
]

const privateRoutes: Route[] = []

export { publicRoutes, privateRoutes }
