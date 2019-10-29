var x = document.getElementById("upcoming"); 
var y = document.getElementById("recent");

document.getElementById("recent").style.display = "none";

function knop1() {
    if (x.style.display === "none") {
        x.style.display = "grid";
        y.style.display = "none";
    } else {
        x.style.display = "grid";
        y.style.display = "none";
    }
}

function knop2() {
    if (y.style.display === "none") {
        y.style.display = "grid";
        x.style.display = "none"
    } else {
        y.style.display = "grid";
        x.style.display = "none"
    }
}


//Bronnen voor deze interactie (niet alles gebruikt):
//https://stackoverflow.com/questions/195951/how-to-change-an-elements-class-with-javascript
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://www.geeksforgeeks.org/change-an-element-class-javascript/
//https://www.w3schools.com/jsref/met_document_addeventlistener.asp
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

