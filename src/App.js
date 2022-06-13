import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'
import store from '@/store'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayerBar from '@/pages/players/app-player-bar'


const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader/>
          {renderRoutes(routes)}
        <AppFooter/>
        <AppPlayerBar></AppPlayerBar>
      </HashRouter>
    </Provider>
  )
})

export default App