document.getElementById("backgroundimg").onmouseenter = function(){
    backgroundhover()
}

function backgroundhover() {
    document.getElementById("backgroundimg").style.width ="100%";
    document.getElementById("backgroundimg").style.height ="100%";
    document.getElementById("backgroundimg").style.backgroundColor ="black";
    document.getElementById("backgroundimg").style.borderRadius ="0px";
    document.getElementById("backgroundimg").style.display ="flex";
    document.getElementById("backgroundimg").style.justifyContent = "center";
    document.getElementById("backgroundimg").style.backgroundImage = "url(background3.jpg)";
    document.getElementById("backgroundimg").style.backgroundSize = "500px";
    document.getElementById("backgroundimg").style.backgroundRepeat = "no-repeat";
    document.getElementById("backgroundimg").style.opacity = "100%";
    document.getElementById("backgroundimg").style.transition= "1.2s";
    document.getElementById("backgroundimg").style.transitionDelay= "none";

    document.getElementById("info").innerHTML= "Hello, My name is Azad";
    document.getElementById("info").style.fontSize = "40px";
    document.getElementById("info").style.marginTop = "200px";
    document.getElementById("info").style.transition = "1.2s";
    
    if (document.getElementById("backgroundimg").onmouseenter = true){
       const div = document.createElement("div");
    div.innerHTML = "<h1 id='heading'>Azad Tahir </h1> <h4>Queens, NY, 11358<br>azadtahir220@gmail.com<br>www.azadtahir.link</h4>  ";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.width = "100%";
    div.style.height = "600px";
    div.style.paddingTop = "60px";
    div.style.color = "white";
    div.style.backgroundColor = "black";
    div.style.transitionDelay = "2s";

    document.body.appendChild(div);


}
}
