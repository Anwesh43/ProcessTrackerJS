function draw(ctx,processes,color,h) {
    var x = h
    var y = h/2
    var w = h/2
    var complete = false
    processes.forEach(function(process,index){
        if(index != 0) {
            ctx.strokeStyle = "gray"
            if(complete) {
                ctx.strokeStyle = color
            }
            ctx.beginPath()
            ctx.moveTo(x+w,y)
            ctx.lineTo(x+5*w,y)
            ctx.stroke()
            x = x+5*w
        }
        process.draw(ctx,color,x+w/2,y,w,h)
        complete = process.complete
    })
}
function ProcessTracker(color) {
    this.processes = []
    this.color = color
    this.w = window.innerWidth
    this.h = 0
    this.currentProcessIndex = 0
    this.created = false
    window.onresize = () => {
        this.w = window.innerWidth
        if(this.processes.length != 0) {
            this.h = (this.w*2)/(5*this.processes.length)
            if(this.created) {
                this.canvas.width = this.w
                this.canvas.height = this.h
                this.ctx = this.canvas.getContext('2d')
                draw(this.ctx,this.processes,this.color,this.h)
            }
        }
    }
}
ProcessTracker.prototype.addProcess = function(processPhase) {
    this.processes.push(new Process(processPhase))
    this.h = (this.w*2)/(5*this.processes.length)
}
ProcessTracker.prototype.create = function() {
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.w
    this.canvas.height = this.h
    this.ctx = this.canvas.getContext('2d')
    draw(this.ctx,this.processes,this.color,this.h)
    document.body.appendChild(this.canvas)
    this.created = true
}
ProcessTracker.prototype.update = function(phase,state) {
    for(var i=0;i<this.processes.length;i++) {
        var process = this.processes[i]
        if(process.phase == phase) {
            process.complete = state
            break
        }
    }
    draw(this.ctx,this.processes,this.color,this.h)
}
ProcessTracker.prototype.updateProcessState = function() {
    if(this.currentProcessIndex<this.processes.length) {
        var currentProcess = this.processes[this.currentProcessIndex]
        currentProcess.complete = true
        draw(this.ctx,this.processes,this.color,this.h)
        this.currentProcessIndex++
    }
}
