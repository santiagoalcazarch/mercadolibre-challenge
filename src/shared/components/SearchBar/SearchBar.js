import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import Logo from '../Logo/Logo'

const SearchBar = props => {
  return (
    <div className="container-fluid search-layout">
      <div className="container d-flex align-items-center">
        <div>
          <Logo />
        </div>
        <SearchInput />
      </div>
    </div>
  )
}

SearchBar.propTypes = {}

export default SearchBar