import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { publicRoutes } from './routes'
import { Fragment } from 'react'

function App() {
  return (
    <BrowserRouter>
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
