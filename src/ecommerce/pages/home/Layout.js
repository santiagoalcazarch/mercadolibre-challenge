import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../../../shared/components/SearchBar/SearchBar'
import MainLayout from '../../components/Layout/MainLayout/MainLayout'


const Layout = props => {
  return (
    <>
      <SearchBar />

      <MainLayout />
    </>
  )
}

Layout.propTypes = {}

export default Layout