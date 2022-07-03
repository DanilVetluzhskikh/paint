import Tool from './Tool'

export default class Rect extends Tool {
  mouseDown = false
  startX = 0
  startY = 0
  saved = ''

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

      this.startX = e.pageX - e.target.offsetLeft
      this.startY = e.pageY - e.target.offsetTop
      if(this.canvas){
        this.saved = this.canvas.toDataURL()
      }
    }
  }

  mouseMoveHandler(e: MouseEvent & {target: HTMLCanvasElement}){
    if(this.mouseDown){
      let currentX = e.pageX - e.target.offsetLeft
      let currentY = e.pageY - e.target.offsetTop
      let width = currentX - this.startX
      let height = currentY - this.startY

      this.draw(this.startX, this.startY, width, height)
    }
  }

  draw(x: number, y: number, w: number, h: number){
    const img = new Image()
    img.src = this.saved
    img.onload = () => {
      if(this.canvas && this.ctx){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
        this.ctx.beginPath()
        this.ctx.rect(x, y, w, h)
        this.ctx.fill()
        this.ctx.stroke()
      }
    }
  }
}