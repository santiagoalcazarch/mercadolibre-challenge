
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';

import { ITEM } from "../../../routes/routes";

const Breadcrumb = () => {

  const match = useMatch(ITEM);
  const [categories, setCategories] = useState([]);

  const { itemsList } = useSelector(( state ) => state.items);

  useEffect(() => {

    let categoriesApi = [];
    if ( match ){
      // El usuario se encuentra en la ruta específica de un Item

    }else{
      // El usuario se encuentra en la ruta de listar items
      categoriesApi = itemsList.categories;
    }
    setCategories(categoriesApi);
  }, [match, itemsList.categories])

  return (
    <div className="container p-0">
      <div className="breadcrumb-container">
        
        <ul className="breadcrumb-items p-0">
          {
            categories.map( (category, i) => 
              <li key={i} className="breadcrumb-item p-0">
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

export default Breadcrumb