import ReactDOM from 'react-dom/client'
import GlobalStyles from '~/components/GlobalStyles'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>,
)

reportWebVitals()
