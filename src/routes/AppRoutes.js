import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemPage from '../ecommerce/pages/item/ItemPage'
import Layout from '../ecommerce/pages/home/Layout'
import ListItemPage from '../ecommerce/pages/list-item/ItemListPage'
import { HOME, ITEM, LIST_ITEM } from './routes'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />} >
          <Route path={HOME} element={ <div>hola</div> } />
          <Route path={LIST_ITEM} element={<ListItemPage />} />
          <Route path={ITEM} element={<ItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes