const exp = document.getElementById("menu-id");
const navm = document.getElementById("nav-menu");
const fc = document.getElementById("fc");
exp.addEventListener('click',()=>{
    navm.classList.toggle('expandir')
    if(navm.classList.contains("expandir")){
        fc.style.display="block";
    }
    else{
        fc.style.display="none";
    }
})
