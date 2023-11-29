const btn = document.getElementById("lightNdark");
if(localStorage.getItem("dark") == "true"){
    document.documentElement.classList.toggle("dark");
    document.getElementById("sun").style.display = "none";
    document.getElementById("linksun").style.display = "none";
    document.getElementById("moon").style.display = "flex";
    document.getElementById("linkmoon").style.display = "flex";
    btn.checked = true;
}

else if (localStorage.setItem("dark", "false")){
    document.getElementById("sun").style.display = "flex";
    document.getElementById("linksun").style.display = "flex";
    document.getElementById("moon").style.display = "none";
    document.getElementById("linkmoon").style.display = "none";
    btn.checked = false;
}

btn.addEventListener("click", function(){
    if (document.documentElement.classList.toggle("dark")){
        document.getElementById("sun").style.display = "none";
        document.getElementById("linksun").style.display = "none";
        document.getElementById("moon").style.display = "flex";
        document.getElementById("linkmoon").style.display = "flex";
        localStorage.setItem("dark", "true");
    }
    else{
        document.getElementById("sun").style.display = "flex";
        document.getElementById("linksun").style.display = "flex";
        document.getElementById("moon").style.display = "none";
        document.getElementById("linkmoon").style.display = "none";
        localStorage.setItem("dark", "false");
    }
})
