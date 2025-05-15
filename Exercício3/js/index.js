//636px --> Transformar em burguer

window.addEventListener("resize", function mudarTamanho(){

     const menu2 = document.getElementById("listamenu2");
     const burguer = document.getElementById("burguer");

    if(window.innerWidth <= 636)
    {
        menu2.style.display = "none"
        burguer.style.display = "block"
    }
    else{
        menu2.style.display = "block"
        burguer.style.display = "none"
    }


});

document.getElementById("burguer").addEventListener("click", function(){
    const menu = document.getElementById("listamenu");

    if(menu.style.display == "none")
    {
        menu.style.display = "block"
    }
    else
    {
        menu.style.display = "none"
    }
})