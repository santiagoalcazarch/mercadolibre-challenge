
import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = ({ categories }) => {
  return (
    <div className="container p-0">
      <div className="breadcrumb-container">
        
        <ul className="breadcrumb-items p-0">
          {
            categories.map( (category, i) => 
              <li className="breadcrumb-item p-0">
                <a href="#">
                  <span> { category } </span>
                </a>
                {
                  i < categories.length - 1 && 
                  <span className="mx-1"> {'>'} </span>
                }
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

Breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default Breadcrumb