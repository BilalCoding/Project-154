AFRAME.registerComponent('diver-movement-reader', {
    schema: {
        rotY: {type: 'number', default: 0},
        posY: {type: 'number', default: 0},
        posX: {type: 'number', default: 0},
        posZ: {type: 'number', default: 0},
    },
    init: function(){
        window.addEventListener('keydown', (e)=>{
            if(e.key === "w"){
                if(this.data.posY < 0.02){
                    this.data.posY += 0.02
                }
            }
            if(e.key === "s"){
                if(this.data.posY > -0.02){
                    this.data.posY -= 0.02
                }
            }
            if(e.key === "d"){
                if(this.data.posX < 0.02){
                    this.data.posX += 0.02
                }
            }
            if(e.key === "a"){
                if(this.data.posX > -0.02){
                    this.data.posX -= 0.02
                }
            }
            if(e.key === "e"){
                if(this.data.rotY < 0.1){
                    this.data.rotY += 0.02
                }
            }
            if(e.key === "q"){
                if(this.data.rotY > -0.1){
                    this.data.rotY -= 0.02
                }
            }
        })
    },
    tick: function(){
        var rotation = this.el.getAttribute('rotation')
        var position = this.el.getAttribute('position')
        rotation.y += this.data.rotY
        position.y += this.data.posY
        position.x += this.data.posX
        this.el.setAttribute('rotation', rotation)
        this.el.setAttribute('position', position)
    }
})