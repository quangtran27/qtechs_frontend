import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer newestOnTop />
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = route.layout ? route.layout : Fragment
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
