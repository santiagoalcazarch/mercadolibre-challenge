import React from 'react'
import { Provider } from "react-redux";
import AppRoutes from './routes/AppRoutes'
import { store } from './config/redux/store';

const App = () => {
  return (
    <div>
      {/* Provider - Redux config */}
      <Provider store={store} >
        <AppRoutes />
      </Provider>
    </div>
  )
}

export default App
