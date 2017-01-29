function Process(phase) {
    this.phase = phase
    this.complete = false
}
Process.prototype.draw = function(ctx,color,x,y,w,h) {
    ctx.strokeStyle = color
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x,y,w/2,0,2*Math.PI)
    if(this.complete) {
        ctx.fill()
    }
    else {
        ctx.stroke()
    }
    ctx.fillStyle = "black"
    ctx.font = `${w/4}px sans-serif`
    var textSize = ctx.measureText(this.phase).width
    console.log(textSize)
    ctx.fillText(this.phase,x-textSize/2,y+w/2+w/3)
}
