AFRAME.registerComponent("create-fishes", {
    init: function(){
        for(var i=1; i<=10; i++){
            var id = `fish${i}`
            var posX = Math.floor(Math.random() * 10 + -5)
            var posY = Math.floor(Math.random() * 5 + 5)
            var posZ = Math.floor(Math.random() * 6 + -4)
            var position = {x: posX, y: posY, z: posZ}
            this.createFish(id, position)
        }
    },
    createFish: (id, position) => {
        var mapEntity = document.querySelector("#map")
        var fishEl = document.createElement("a-entity")
        fishEl.setAttribute("id", id)
        fishEl.setAttribute("position", position)
        fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf")
        mapEntity.appendChild(fishEl)
    }
})