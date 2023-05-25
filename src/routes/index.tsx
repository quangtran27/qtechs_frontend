import SidebarLayout from '~/layouts/SidebarLayout'
import MainLayout from '~/layouts/MainLayout'
import User from '~/pages/User'
import LoginPage from '~/pages/Auth/LoginPage'
import RegisterPage from '~/pages/Auth/RegisterPage'
import Cart from '~/pages/Cart/Cart'
import Checkout from '~/pages/Checkout'
import HomePage from '~/pages/HomePage'
import Order from '~/pages/Order'
import ProductDetail from '~/pages/ProductDetail'
import Products from '~/pages/Products'
import Profile from '~/pages/Profile'
import ChangePassword from '~/pages/ChangePassword'

type Route = {
  path: string
  component: () => JSX.Element
  layout?: (props: any) => JSX.Element
}

const publicRoutes: Route[] = [
  { path: '', component: HomePage, layout: MainLayout },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'user', component: User, layout: SidebarLayout },
  { path: 'user/profile', component: Profile, layout: SidebarLayout },
  { path: 'cart', component: Cart, layout: MainLayout },
  { path: 'checkout', component: Checkout, layout: MainLayout },
  { path: 'user/order', component: Order, layout: SidebarLayout },
  { path: 'user/change-password', component: ChangePassword, layout: SidebarLayout },
  { path: ':categoryId', component: Products, layout: MainLayout },
  { path: ':categoryId/:productId', component: ProductDetail, layout: MainLayout },
]

const privateRoutes: Route[] = []

export { publicRoutes, privateRoutes }
