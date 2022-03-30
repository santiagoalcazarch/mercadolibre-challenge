import React from 'react'
import SearchBar from '../../../shared/components/SearchBar/SearchBar'
import MainLayout from '../../components/Layout/MainLayout/MainLayout'

/* Layout para realizar cualquier busqueda */
const Layout = props => {
  return (
    <>
      <SearchBar />

      <MainLayout />
    </>
  )
}

export default Layout