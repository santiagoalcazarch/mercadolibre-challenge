import React from 'react'
import { Outlet} from 'react-router-dom'

import Breadcrumb from '../../../../shared/components/Breadcrumb/Breadcrumb'

const MainLayout = () => {

  return (
    <div className="container-fluid full-bg">
      <main className="container">

        <Breadcrumb />

        <Outlet />
        
      </main>
    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout