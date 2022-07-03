import { Tool } from '@interfaces/tool'

import brush from '@assets/toolbar/brush.png'
import rect from '@assets/toolbar/rect.png'
import circle from '@assets/toolbar/circle.png'
import eraser from '@assets/toolbar/eraser.png'
import line from '@assets/toolbar/line.png'
import picker from '@assets/toolbar/picker.png'
import undo from '@assets/toolbar/undo.png'
import redo from '@assets/toolbar/redo.png'
import save from '@assets/toolbar/save.png'

export const tools: Tool[] = [
  {
    name: 'brush',
    src: brush,
    className: 'brush',
    type: 'button'
  },
  {
    name: 'rect',
    src: rect,
    className: 'rect',
    type: 'button'
  },
  {
    name: 'circle',
    src: circle,
    className: 'circle',
    type: 'button'
  },
  {
    name: 'eraser',
    src: eraser,
    className: 'eraser',
    type: 'button'
  },
  {
    name: 'line',
    src: line,
    className: 'line',
    type: 'button'
  },
  {
    name: 'picker',
    src: picker,
    className: 'picker',
    type: 'input'
  },
  {
    name: 'undo',
    src: undo,
    className: 'undo',
    type: 'button'
  },
  {
    name: 'redo',
    src: redo,
    className: 'redo',
    type: 'button'
  },
  {
    name: 'save',
    src: save,
    className: 'save',
    type: 'button'
  }
]