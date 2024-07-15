let menue = document.querySelector("#bars");
let list = document.querySelector(".menue");
let close = document.querySelector("#xmark");



menue.addEventListener("click" , function(){
       list.style.transform = "translateX(0)";
       list.style.transition = "all 0.5s ease-in-out";
       menue.style.transform="translateX(100px)";
       close.style.transform="translateX(0px)";
})

close.addEventListener("click",function(){
    list.style.transform = "translateX(500px)";
    list.style.transition = "all 0.5s ease-in-out";
    menue.style.transform="translateX(0px)";
    close.style.transform="translateX(100px)";
})