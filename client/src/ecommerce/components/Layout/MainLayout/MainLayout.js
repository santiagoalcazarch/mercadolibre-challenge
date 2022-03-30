import React from 'react'
import { Outlet} from 'react-router-dom'

import Breadcrumb from '../../../../shared/components/Breadcrumb/Breadcrumb'

const MainLayout = () => {

  return (
    <main className="container">

      <Breadcrumb />

      <Outlet />
      
    </main>
  )
}

MainLayout.propTypes = {}

export default MainLayout