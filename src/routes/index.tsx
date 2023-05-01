import configs from '~/configs'
import MainLayout from '~/layouts/MainLayout/MainLayout'

import Account from '~/pages/Account'
import AlternativePage from '~/pages/AlternativePage'
import LoginPage from '~/pages/Auth/LoginPage'
import RegisterPage from '~/pages/Auth/RegisterPage'
import HomePage from '~/pages/HomePage'
import LaptopDetail from '~/pages/LaptopDetail/LaptopDetail'
import Laptops from '~/pages/Laptops'

type Route = {
  path: string
  component: () => JSX.Element
  layout?: (props: any) => JSX.Element
}

const publicRoutes: Route[] = [
  { path: '/', component: HomePage },

  // Auth
  { path: configs.routes.login, component: LoginPage },
  { path: configs.routes.register, component: RegisterPage },

  // Products
  { path: configs.routes.laptop, component: Laptops, layout: MainLayout },
  { path: configs.routes.laptopDetail, component: LaptopDetail, layout: MainLayout },

  { path: configs.routes.sound, component: AlternativePage },
  { path: configs.routes.keyboard, component: AlternativePage },
  { path: configs.routes.table, component: AlternativePage },
  { path: configs.routes.balo, component: AlternativePage },
  { path: configs.routes.account, component: Account },
  { path: configs.routes.cart, component: AlternativePage },
  { path: configs.routes.order, component: AlternativePage },
]

const privateRoutes: Route[] = []

export { publicRoutes, privateRoutes }
