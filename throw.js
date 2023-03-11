AFRAME.registerComponent("bowling",{
    init:function(){
        this.throw()
    },
    throw:function(){
        window.addEventListener("keydown",(e)=>{
            if (e.key==="z"){
                var ball=document.createElement("a-entity")
                ball.setAttribute("geometry",{primitive:"sphere",radius:0.8})
                ball.setAttribute("material","color","black")
                var camera=document.querySelector("#camera")
                pos=camera.getAttribute("position")
                ball.setAttribute("position",{x:pos.x,y:pos.y-0.8,z:pos.z})
                var camera=document.querySelector("#camera").object3D
                var direction=new THREE.Vector3()
                camera.getWorldDirection(direction)
                ball.setAttribute("velocity",direction.multiplyScalar(-10))
                var scene=document.querySelector("#scene")
                scene.appendChild(ball)
            }
        })
    }
})