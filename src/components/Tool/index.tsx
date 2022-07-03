import React, { FC } from 'react'
import {
  Button, Input
} from '@components/common'
import { Tool as ToolType } from '@interfaces/tool'
import toolState from '@store/toolState'
import canvasState from '@store/canvasState'

import Brush from '@tools/Brush'
import Rect from '@tools/Rect'
import Circle from '@tools/Circle'
import Eraser from '@tools/Eraser'
import Line from '@tools/Line'

export const Tool: FC<ToolType> = (props) => {

  const download = () => {
    if(canvasState.canvas){
      const dataUrl = canvasState.canvas.toDataURL()
      const a = document.createElement('a')
      a.href = dataUrl
      a.download = 'desc' + '.jpg'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  const handler: {[key: string]: () => void} = {
    'brush': () => toolState.setTool(new Brush(canvasState.canvas)),
    'rect': () => toolState.setTool(new Rect(canvasState.canvas)),
    'undo': () => canvasState.undo(),
    'redo': () => canvasState.redo(),
    'circle': () => toolState.setTool(new Circle(canvasState.canvas)),
    'eraser': () => toolState.setTool(new Eraser(canvasState.canvas)),
    'line': () => toolState.setTool(new Line(canvasState.canvas)),
    'save': () => download()
  }

  const renderElement = () => {
    switch(props.type){
    case 'button':
      return <Button {...props} callback={handler[props.name]} />
    case 'input':
      return <Input {...props} />
    default:
      return null
    }
  }

  return renderElement()
}