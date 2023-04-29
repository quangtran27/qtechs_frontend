import configs from '~/configs'

import Account from '~/pages/Account'
import Detail from '~/pages/Detail'
import Laptop from '~/pages/Laptop'
import HomePage from '~/pages/HomePage'
import AlternativePage from '~/pages/AlternativePage'
import LoginPage from '~/pages/Auth/LoginPage'
import RegisterPage from '~/pages/Auth/RegisterPage'
import Fragment from '~/components/Fragment'

type Route = {
  path: string
  component: () => JSX.Element
  layout?: (props: any) => JSX.Element
}

const publicRoutes: Route[] = [
  { path: '/', component: HomePage },

  // Product categories
  { path: configs.routes.detail, component: Detail },
  { path: configs.routes.laptop, component: Laptop },
  { path: configs.routes.sound, component: AlternativePage },
  { path: configs.routes.keyboard, component: AlternativePage },
  { path: configs.routes.table, component: AlternativePage },
  { path: configs.routes.balo, component: AlternativePage },
  // ---

  { path: configs.routes.account, component: Account },
  { path: configs.routes.cart, component: AlternativePage },
  { path: configs.routes.signin, component: LoginPage, layout: Fragment },
  { path: configs.routes.signup, component: RegisterPage, layout: Fragment },
  { path: configs.routes.order, component: AlternativePage },
]

const privateRoutes: Route[] = []

export { publicRoutes, privateRoutes }
