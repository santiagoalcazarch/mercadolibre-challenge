
import React from 'react'
import { useSelector } from 'react-redux'

import ItemData from '../ItemData/ItemData'
import ItemImage from '../ItemImage/ItemImage'
import ItemDescription from '../ItemDescription/ItemDescription'
import { requestState as requestStateEnum } from "../../../../helpers/request_states";
import MessageBox from '../../../../shared/components/Message-box/Message_box'

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
        <div className="item-l-container">
          <div className="item-l-content">
            {
              requestState === requestStateEnum.LOADING && 
              (
                <div className="w-100 text-center">
                  <div className="spinner-border text-warning" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="sr-only"></span>
                  </div>
                </div>
              )
            }
            {
              requestState === requestStateEnum.SUCCESS && canShowItem() &&
              (
                <>
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
                </>
              )
            }
          </div>
        </div>
      }
    </>
  )
}

export default ItemLayout