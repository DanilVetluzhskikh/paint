import Brush from '@tools/Brush'
import Rect from '@tools/Rect'
import Tool from '@tools/Tool'
import { makeAutoObservable } from 'mobx'

type StateTool = Brush | Rect | Tool

class ToolState{
  tool: StateTool | null = null

  constructor(){
    makeAutoObservable(this)
  }

  setTool(tool: Brush | Rect | Tool){
    this.tool = tool
  }

  setFillColor(color: string){
    if(this.tool){
      this.tool.fillColor = color
      this.tool.strokeColor = color
    }
  }

  setStokeColor(color: string){
    if(this.tool){
      this.tool.strokeColor = color
    }
  }

  setLineWidth(width: number){
    if(this.tool){
      this.tool.lineWidth = width
    }
  }
}

export default new ToolState()