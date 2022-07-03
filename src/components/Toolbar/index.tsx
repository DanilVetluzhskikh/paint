import React from 'react'
import { tools } from '@constants/tools'
import { ToolElement } from '..'

import '@styles/toolbar.scss'

export const Toolbar: React.FC = () => (
  <div className='toolbar'>
    {tools.map(item => <ToolElement key={item.name} {...item} />)}
  </div>
)