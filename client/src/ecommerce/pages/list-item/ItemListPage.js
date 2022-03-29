import React from 'react'
import ItemList from '../../components/ItemListP/ItemList/ItemList'
import { useSelector } from 'react-redux'
import { requestState as requestStateEnum } from "../../../helpers/request_states";
import Loading from '../../../shared/components/Loading/Loading';
import MessageBox from '../../../shared/components/Message-box/Message_box';

const ListItemPage = () => {

  const { itemsList, requestState } = useSelector(( state ) => state.items);

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