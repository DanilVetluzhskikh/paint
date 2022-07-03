import React, {
  useEffect, useRef
} from 'react'
import { observer } from 'mobx-react-lite'

import '@styles/canvas.scss'
import canvasState from '@store/canvasState'
import toolState from '@store/toolState'
import Brush from '@tools/Brush'

export const Canvas: React.FC = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
    if(canvasRef.current){
      toolState.setTool(new Brush(canvasRef.current))
    }
  }, [])

  const handleMouseDown = () => {
    if(canvasRef.current){
      canvasState.pushToUndo(canvasRef.current.toDataURL())
    }
  }

  const handleMouseUp = () => {
    if(canvasRef.current){
      canvasState.pushToRedo(canvasRef.current.toDataURL())
    }
  }

  return (
    <div className='canvas'>
      <canvas
        ref={canvasRef}
        width={1200}
        height={800}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >

      </canvas>
    </div>
  )
})