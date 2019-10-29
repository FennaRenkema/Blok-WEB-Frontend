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


