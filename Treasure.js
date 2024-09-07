AFRAME.registerComponent("create-chests", {
    init: function(){
        for(var i=1; i<=10; i++){
            var id = `chest${i}`
            var posX = Math.floor(Math.random() * 10 + -5)
            var posY = Math.floor(Math.random() * 5 + 5)
            var posZ = Math.floor(Math.random() * 6 + -4)
            var position = {x: posX, y: posY, z: posZ}
            this.createChest(id, position)
        }
    },
    createChest: (id, position) => {
        var mapEntity = document.querySelector("#map")
        var chestEl = document.createElement("a-entity")
        chestEl.setAttribute("id", id)
        chestEl.setAttribute("position", position)
        chestEl.setAttribute("gltf-model", "./assets/chest/scene.gltf")
        mapEntity.appendChild(chestEl)
    }
})