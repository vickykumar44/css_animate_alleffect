function toggle(){
    var sidenav = document.getElementById("sidenav");
    var section = document.getElementById("section");
    var topnav = document.getElementById("topnav");
    var width = sidenav.style.width;

    if(width == '0px')
    {
        sidenav.style.width = '180px';
        sidenav.style.transition = '0.3s';
        topnav.style.left = '180px';
        topnav.style.width = '100%';
        topnav.style.transition = '0.3s';
        section.style.marginLeft = "180px";
        section.style.width = "100%";
        section.style.alignItems = "start";
        section.style.padding = "40px";
    }      
    else
    {
        sidenav.style.width = '0px';
        sidenav.style.transition = '0.3s';
        topnav.style.left = '0px';
        topnav.style.width = '100%';
        topnav.style.transition = "0.3s";
        section.style.marginLeft = "0px";
        section.style.width = "100%";
        section.style.transition ="0.3s";
        section.style.alignItems = "center";
        section.style.padding = "0";
    }
}

function animator(animateValue){
    var text = document.getElementById("text");
    text.className = animateValue;
}