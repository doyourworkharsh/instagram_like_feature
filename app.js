let a =document.querySelector("#container")
let b =document.querySelector("i")
let check =0

a.addEventListener("dblclick",function(){

     //the dobule click feature in this case is not working for some reason that is why single click is used
    
         b.style.transform = "translate(-50%,-50%) scale(1)"
         console.log("this worked")
         setTimeout(() => {
            b.style.transform = "translate(-50%,-50%) scale(0)"
         },400);

    
    
})