import { makeAutoObservable } from 'mobx'
import React from 'react'

class CanvasState{
  canvas: HTMLCanvasElement | null = null
  undoList: string[] = []
  redoList: string[] = []

  constructor(){
    makeAutoObservable(this)
  }

  setCanvas(canvas: HTMLCanvasElement | null){
    this.canvas = canvas
  }

  pushToUndo(data: string){
    this.undoList.push(data)
  }

  pushToRedo(data: string){
    this.redoList.push(data)
  }

  undo(){
    const ctx = this.canvas?.getContext('2d')

    if(ctx && this.undoList.length && this.canvas){

      const dataUrl = this.undoList.pop() as string
      this.redoList.push(this.canvas.toDataURL())
      const img = new Image()

      img.src = dataUrl
      img.onload = () => {
        if(this.canvas){
          ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
          ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
        }
      }
    }
  }

  redo(){
    const ctx = this.canvas?.getContext('2d')

    if(ctx && this.redoList.length && this.canvas){

      const dataUrl = this.redoList.pop() as string
      this.undoList.push(this.canvas.toDataURL())
      const img = new Image()

      img.src = dataUrl
      img.onload = () => {
        if(this.canvas){
          ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
          ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
        }
      }
    }
  }
}

export default new CanvasState()