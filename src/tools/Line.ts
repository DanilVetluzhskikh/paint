import Tool from './Tool'

export default class Line extends Tool {
  mouseDown = false
  currentX = 0
  currentY = 0
  saved = ''

  constructor(canvas: HTMLCanvasElement | null) {
    super(canvas)
    this.listen()
  }

  listen() {
    if(this.canvas){
      this.canvas.onmousedown = this.mouseDownHandler.bind(this) as  (() => any) | null
      this.canvas.onmouseup = this.mouseUpHandler.bind(this)
      this.canvas.onmousemove = this.mouseMoveHandler.bind(this) as  (() => any) | null
    }
  }

  mouseDownHandler(e: MouseEvent & {target: HTMLCanvasElement}) {
    this.mouseDown = true
    this.currentX = e.pageX-e.target.offsetLeft
    this.currentY = e.pageY-e.target.offsetTop
    if(this.ctx && this.canvas){
      this.ctx.beginPath()
      this.ctx.moveTo(this.currentX, this.currentY )
      this.saved = this.canvas.toDataURL()
    }
  }

  mouseUpHandler() {
    this.mouseDown = false
  }

  mouseMoveHandler(e: MouseEvent & {target: HTMLCanvasElement}) {
    if (this.mouseDown) {
      this.draw(e.pageX-e.target.offsetLeft, e.pageY-e.target.offsetTop)
    }
  }

  draw(x: number, y: number) {
    const img = new Image()
    img.src = this.saved
    img.onload = () => {
      if(this.ctx && this.canvas){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
        this.ctx.beginPath()
        this.ctx.moveTo(this.currentX, this.currentY )
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
      }
    }
  }
}