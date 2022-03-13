function yearInserted() {
var year =  document.getElementById("userInput").value;
var tigre = [];
var coniglio = [];
var drago = [];
var serpente = [];
var cavallo = [];
var capra = [];
var scimmia = [];
var gallo = [];
var cane = [];
var maiale = [];
var topo = [];
var bue = [];

var startTigre = 6;
var startConiglio = 7;
var startDrago = 8;
var startSerpente = 9;
var startCavallo = 10;
var startCapra = 11;
var startScimmia = 12;
var startGallo = 13;
var startCane = 14;
var startMaiale = 3;
var startTopo = 4;
var startBue = 5;


var yearNum = parseFloat(year);



    while (startConiglio, startTigre <= 10000) {
    coniglio.push(startConiglio);
        startConiglio = startConiglio + 12;
    tigre.push(startTigre);
        startTigre = startTigre + 12;
    drago.push(startDrago);
        startDrago = startDrago + 12;
    serpente.push(startSerpente);
        startSerpente = startSerpente + 12;
    cavallo.push(startCavallo);
        startCavallo = startCavallo + 12;
    capra.push(startCapra);
        startCapra = startCapra + 12;
    scimmia.push(startScimmia);
        startScimmia = startScimmia + 12;
    gallo.push(startGallo);
        startGallo = startGallo + 12;
    cane.push(startCane);
        startCane = startCane + 12;
    maiale.push(startMaiale);
        startMaiale = startMaiale + 12;
    topo.push(startTopo);
        startTopo = startTopo + 12;
    bue.push(startBue);
        startBue = startBue + 12;
    }





    if (coniglio.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/rabbit.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE RABBIT");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE RABBIT");
      }
    } else if (tigre.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/tiger.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE TIGER");
      } else if (yearNum === 2022) {
        document.getElementById("message").innerHTML = (year + " IS<br> THE YEAR OF THE TIGER");
      } else {
          document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE TIGER");
      }
    } else if (drago.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/dragon.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE DRAGON");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE DRAGON");
      }
    } else if (serpente.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/snake.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE SNAKE");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE SNAKE");
      }
    } else if (cavallo.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/horse.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE HORSE");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE HORSE");
      }
    } else if (capra.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/goat.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE GOAT");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE GOAT");
      }
    } else if (scimmia.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/monkey.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE MONKEY");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE MONKEY");
      }
    } else if (gallo.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/rooster.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE ROOSTER");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE ROOSTER");
      }
    } else if (cane.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/dog.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE DOG");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE DOG");
      }
    } else if (maiale.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/pig.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE PIG");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE PIG");
      }
    } else if (topo.includes(yearNum)) {
        document.getElementById("animalsImage").src = "images/mouse.png";
        document.getElementById("grid").classList.remove("visible");
        if (yearNum < 2022) {
        document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE MOUSE");
      } else {
        document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE MOUSE");
      }
    } else {
      document.getElementById("animalsImage").src = "images/ox.png";
      document.getElementById("grid").classList.remove("visible");
      if (yearNum < 2022) {
      document.getElementById("message").innerHTML = (year + " WAS<br> THE YEAR OF THE OX");
    } else {
      document.getElementById("message").innerHTML = (year + " WILL BE<br> THE YEAR OF THE OX");
    }
        }
        event.preventDefault();
}
