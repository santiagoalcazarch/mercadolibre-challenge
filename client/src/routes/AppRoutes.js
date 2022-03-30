import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../ecommerce/pages/home/Layout'
import ListItemPage from '../ecommerce/pages/list-item/ItemListPage'
import UnknownRoute from '../ecommerce/pages/UnknownRoute/UnknownRoute'
import Welcome from '../ecommerce/pages/welcome/welcome'
import { HOME, ITEM, LIST_ITEM } from './routes'

const ItemPage = React.lazy(() => import("../ecommerce/pages/item/ItemPage"));

const AppRoutes = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />} >

          <Route path={HOME}  element={ <Welcome /> } />

          <Route path={LIST_ITEM} element={<ListItemPage />} />

          <Route path={ITEM} element={
            <React.Suspense fallback={<> Loading... </>}>
              <ItemPage />
            </React.Suspense>
          }/>

        </Route>

        <Route path="*" element={ <UnknownRoute /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes