import React, { useEffect } from 'react'
import ItemLayout from '../../components/ItemP/ItemLayout/ItemLayout'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/items/actions';

const ItemPage = () => {

  const { id: itemId } = useParams();
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( actions.searchAndSetItem( itemId ) );
    return async () => {
      dispatch( actions.cleanList() );
    }
  }, [dispatch, itemId])
  

  return (
    <ItemLayout />
  )
}

export default ItemPage