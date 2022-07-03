import React from 'react'
import {
  Canvas, SettingBar, Toolbar
} from './components'

import '@styles/app.scss'

export const App: React.FC = () => (
  <div className='app'>
    <Toolbar />

    <SettingBar />

    <Canvas />
  </div>
)
