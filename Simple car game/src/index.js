let drive = document.querySelector(".surface");
let carImg = document.querySelector(".car");
 

drive.addEventListener("click", () =>{
    drive.classList.toggle("moveRightAnimation");
    carImg.classList.toggle("start");
})
