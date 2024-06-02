const switchT = document.querySelector(".switchT");

switchT.addEventListener("click",()=>{
    document.querySelector(".toggle").classList.toggle("right");
    document.querySelector(".container").classList.toggle("active");
});

