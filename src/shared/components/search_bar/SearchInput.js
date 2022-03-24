
import React from 'react'
import PropTypes from 'prop-types'
import SearchImg from '../../assets/icons/ic_Search@2x.png'

const SearchInput = props => {
  return (
    <div className="input-group my-3 search-input mx-4">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Nunca dejes de buscar" 
        aria-label="serach-action"
        aria-labelledby='serach-action'
      />
      <span className="input-group-text m-0 p-0" id="serach-action">
        <button className="search-btn">
          <img src={SearchImg} alt="Search" />
        </button>
      </span>
    </div>
  )
}

SearchInput.propTypes = {}

export default SearchInput