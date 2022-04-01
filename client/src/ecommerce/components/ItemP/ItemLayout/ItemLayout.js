
import React from 'react'
import { useSelector } from 'react-redux'

import ItemData from '../ItemData/ItemData'
import ItemImage from '../ItemImage/ItemImage'
import ItemDescription from '../ItemDescription/ItemDescription'
import { requestState as requestStateEnum } from "../../../../helpers/request_states";
import MessageBox from '../../../../shared/components/Message-box/Message_box'
import Loading from '../../../../shared/components/Loading/Loading'

/* Layout de la pagina para mostrar el contenido de un Item 
 * el contenido es obtenido desde [items - redux]
*/
const ItemLayout = () => {

  const { itemInfo: {item}, requestState } = useSelector(( state ) => state.items);

  /* El contenido del item es válido */
  const canShowItem = () => item.title && item.picture && item.price;

  return (
    <>
      {
        requestState === requestStateEnum.FAILED ? 
        (
          <MessageBox
            title="Error"
            description="Ha ocurrido un error obteniendo la información :("
          />
        ) : 
        requestState === requestStateEnum.LOADING ?
        (
          <Loading />
        ) : 
        <div className="item-l-container">
          <div className="item-l-content">
            
            {
              requestState === requestStateEnum.SUCCESS && canShowItem() &&
              (
                <div className="animate__animated animate__fadeIn">
                  <div className="c-row">
                    <div className='item-l-img-container'>
                      <ItemImage imageSrc={item.picture} alt={item.title} />
                    </div>
                    <div className="item-l-data-content">
                      <ItemData item={item} />
                    </div>
                  </div>

                  <div className="item-l-data-description">
                    <ItemDescription itemDescription={item.description} />
                  </div>
                </div>
              )
            }
          </div>
        </div>
      }
    </>
  )
}

export default ItemLayout