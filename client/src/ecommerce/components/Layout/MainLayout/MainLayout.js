import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from '../../../../shared/components/Breadcrumb/Breadcrumb'
import { Outlet} from 'react-router-dom'

const MainLayout = ({}) => {
  return (
    <div className="container-fluid full-bg">
      <main className="container">

        <Breadcrumb categories={["hola", "como", "estas"]} />

        <Outlet />
        
      </main>
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout