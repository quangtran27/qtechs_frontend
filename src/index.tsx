import { AuthProvider } from 'react-auth-kit'
import ReactDOM from 'react-dom/client'
import GlobalStyles from '~/components/GlobalStyles'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <AuthProvider
    authType={'localstorage'}
    authName={'access_token'}
    cookieSecure={false}
    cookieDomain={window.location.hostname}
  >
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </AuthProvider>,
)

reportWebVitals()
