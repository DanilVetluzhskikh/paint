export default class Tool {
  canvas: HTMLCanvasElement | null = null
  ctx: CanvasRenderingContext2D | undefined | null = null

  constructor(canvas: HTMLCanvasElement | null){
    this.canvas = canvas
    this.ctx = canvas?.getContext('2d')
    this.destroyEvent()
  }

  set fillColor(color: string){
    if(this.ctx){
      this.ctx.fillStyle = color
    }
  }

  set strokeColor(color: string){
    if(this.ctx){
      this.ctx.strokeStyle = color
    }
  }

  set lineWidth(width: number){
    if(this.ctx){
      this.ctx.lineWidth = width
    }
  }

  destroyEvent(){
    if(this.canvas){
      this.canvas.onmousemove = null
      this.canvas.onmouseup = null
      this.canvas.onmousedown = null
    }
  }
}