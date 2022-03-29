import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import SearchInput from './SearchInput'
import Logo from '../Logo/Logo'
import { actions } from '../../../ecommerce/redux/items/actions';
import { useQuery } from '../../../helpers/hooks/useQuery'

const SearchBar = () => {

  let query = useQuery();
  const dispatch = useDispatch();
  const [serachInitValue, setSerachInitValue] = useState('');

  useEffect(() => {
    const searchParam = query.get('search');
    if ( searchParam !== undefined ) {
      setSerachInitValue(searchParam);
      dispatch( actions.searchAndSetItemsList( searchParam ) );
    }
  }, [query, dispatch])

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