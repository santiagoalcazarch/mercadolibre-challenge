import React, { useEffect } from 'react'
import ItemList from '../../components/ItemListP/ItemList/ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { requestState as requestStateEnum } from "../../../helpers/request_states";
import Loading from '../../../shared/components/Loading/Loading';
import MessageBox from '../../../shared/components/Message-box/Message_box';
import { actions } from '../../redux/items/actions';

/* En esta página se muestran los items como resultado
 * de una busqueda. Los items se consumen de [items - reducer]
 */
const ListItemPage = () => {

  const { itemsList, requestState } = useSelector(( state ) => state.items);

  const dispatch = useDispatch();

  useEffect(() => {
    return async () => {
      dispatch( actions.cleanList() );
    }
  }, [dispatch])
  
  return (
    <div>
      {
        requestState === requestStateEnum.SUCCESS && 
          <ItemList itemList={itemsList.items} />
      }
      {
        requestState === requestStateEnum.LOADING && 
          <Loading />
      }
      {
        requestState === requestStateEnum.FAILED && 
          <MessageBox 
            title="Error"
            description="Ha ocurrido un error obteniendo la información"
          />
      }
    </div>
  )
}

export default ListItemPage