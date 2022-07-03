import Tool from './Tool'

export default class Circle extends Tool {
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
      this.canvas.onmousemove = this.mouseMoveHandler.bind(this)  as  (() => any) | null
      this.canvas.onmouseup = this.mouseUpHandler.bind(this)
      this.canvas.onmousedown = this.mouseDownHandler.bind(this) as  (() => any) | null
    }
  }

  mouseUpHandler(){
    this.mouseDown = false
  }

  mouseDownHandler(e: MouseEvent & {target: HTMLCanvasElement}){
    this.mouseDown = true
    if(this.ctx && this.canvas){
      let canvasData = this.canvas.toDataURL()
      this.ctx.beginPath()
      this.startX = e.pageX-e.target.offsetLeft
      this.startY = e.pageY-e.target.offsetTop
      this.saved = canvasData
    }
  }

  mouseMoveHandler(e: MouseEvent & {target: HTMLCanvasElement}){
    if(this.mouseDown) {
      let curentX =  e.pageX-e.target.offsetLeft
      let curentY =  e.pageY-e.target.offsetTop
      let width = curentX-this.startX
      let height = curentY-this.startY
      let r = Math.sqrt(width**2 + height**2)
      this.draw(this.startX, this.startY, r)
    }
  }

  draw(x: number,y: number,r: number) {
    const img = new Image()
    img.src = this.saved
    img.onload = () => {
      if(this.ctx && this.canvas){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
        this.ctx.beginPath()
        this.ctx.arc(x, y, r, 0, 2*Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
      }
    }
  }
}