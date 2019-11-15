/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/

//Bronnen voor actief en nonactief maken van upcoming en recent
//https://stackoverflow.com/questions/1650299/how-do-i-change-the-id-of-a-html-element-with-javascript
//https://stackoverflow.com/questions/16182556/if-and-else-statement-check-if-has-class

var upcoming = document.getElementById("upcoming"); 
var recent = document.getElementById("recent");

//Upcoming actief maken if is aanzetten else is laten staan
document.getElementById("optie1").onclick = function knop1() {
    if (upcoming.classList.contains('actief')) {
        upcoming.className = "actief";
        recent.className = "nonactief";
    } else {
        upcoming.className = "actief";
        recent.className = "nonactief";
    }
}

//Recently added actief maken 
document.getElementById("optie2").onclick = function knop2() {
    if (recent.classList.contains('actief')) {
        recent.className = "actief";
        upcoming.className = "nonactief";
    } else {
        recent.className = "actief";
        upcoming.className = "nonactief";
    }
}

//balkje beweegt
//Bronnen:https://www.w3schools.com/howto/howto_js_animate.asp
document.getElementById("opties").onclick = function bewegen() {
  var rectangle = document.getElementById("balkje");  
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == innerWidth + 350) {
      rectangle.className = "uit";
      clearInterval(id);
    } else {
      pos++; 
      rectangle.classList.remove('uit');
      rectangle.style.left = pos + 'px';
    }
  }
}

//Bronnen voor deze interactie (niet alles gebruikt):
//https://stackoverflow.com/questions/195951/how-to-change-an-elements-class-with-javascript
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://www.geeksforgeeks.org/change-an-element-class-javascript/
//https://www.w3schools.com/jsref/met_document_addeventlistener.asp
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

