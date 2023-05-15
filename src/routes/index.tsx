import { Fragment } from 'react'
import MainLayout from '~/layouts/MainLayout/MainLayout'

import Account from '~/pages/Account'
import LoginPage from '~/pages/Auth/LoginPage'
import RegisterPage from '~/pages/Auth/RegisterPage'
import Cart from '~/pages/Cart/Cart'
import HomePage from '~/pages/HomePage'
import Order from '~/pages/Order/Order'
import ProductDetail from '~/pages/ProductDetail/ProductDetail'
import Products from '~/pages/Products/Products'

type Route = {
  path: string
  component: () => JSX.Element
  layout?: (props: any) => JSX.Element
}

const publicRoutes: Route[] = [
  { path: '', component: HomePage, layout: MainLayout },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'account', component: Account },
  { path: 'cart', component: Cart, layout: MainLayout },
  { path: 'order', component: Order, layout: MainLayout },
  { path: ':category', component: Products, layout: MainLayout },
  { path: ':category/:productId', component: ProductDetail, layout: MainLayout },
]

const privateRoutes: Route[] = []

export { publicRoutes, privateRoutes }
