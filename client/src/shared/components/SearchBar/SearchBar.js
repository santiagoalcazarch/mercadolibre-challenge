import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useMatch } from 'react-router-dom';

import SearchInput from './SearchInput'
import Logo from '../Logo/Logo'
import { actions } from '../../../ecommerce/redux/items/actions';
import { useQuery } from '../../../helpers/hooks/useQuery'
import { LIST_ITEM } from '../../../routes/routes';

const SearchBar = () => {

  const query = useQuery();
  const match = useMatch(LIST_ITEM);
  const dispatch = useDispatch();
  const [serachInitValue, setSerachInitValue] = useState('');

  useEffect(() => {
    const searchParam = query.get('search');

    // Si me encuentro en la ruta de buscar item (LIST_ITEM), 
    // y "query param" [search] existe...
    if ( match && searchParam ) {
      setSerachInitValue(searchParam);
      // Realizar la consulta
      dispatch( actions.searchAndSetItemsList( searchParam ) );
    }else{
      setSerachInitValue("");
    }
  }, [query, match, dispatch])

  return (
    <div className="container-fluid search-layout">
      <div className="container d-flex align-items-center">
        <Logo />
        <SearchInput serachInitValue={serachInitValue} />
      </div>
    </div>
  )
}

export default SearchBar