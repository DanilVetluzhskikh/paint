import Tool from './Tool'

export default class Brush extends Tool {
  mouseDown = false

  constructor(canvas: HTMLCanvasElement | null){
    super(canvas)
    this.listen()
  }

  listen(){
    if(this.canvas){
      this.canvas.onmousemove = this.mouseMoveHandler.bind(this) as  (() => any) | null
      this.canvas.onmouseup = this.mouseUpHandler.bind(this)
      this.canvas.onmousedown = this.mouseDownHandler.bind(this) as  (() => any) | null
    }
  }

  mouseUpHandler(){
    this.mouseDown = false
  }

  mouseDownHandler(e: MouseEvent & {target: HTMLCanvasElement}){
    this.mouseDown = true
    if(this.ctx){
      this.ctx.beginPath()
      this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
  }

  mouseMoveHandler(e: MouseEvent & {target: HTMLCanvasElement}){
    if(this.mouseDown){
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
  }

  draw(x: number, y: number){
    this.ctx?.lineTo(x, y)
    this.ctx?.stroke()
  }
}