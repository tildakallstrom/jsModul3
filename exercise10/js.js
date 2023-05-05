//class
class Vara {
  //constructor
  constructor(namn, pris, beskrivning, antal) {
    this.namn = namn;
    this.pris = pris;
    this.beskrivning = beskrivning;
    this.antal = antal;
  }
  //calculate
  calcSubTotal() {
    return this.pris * this.antal;
  }
}

 vara = new Vara("Produktnamn", 100, "Produktbeskrivning", 1);

document.getElementById("varunamn").innerHTML = vara.namn;
document.getElementById("beskrivning").innerHTML = vara.beskrivning;
document.getElementById("pris").innerHTML = vara.pris;

// Uppdatera totalpriset när antalet ändras
document.getElementById("antal").addEventListener("input", function() {
  vara.antal = this.value;
  let totalpris = vara.calcSubTotal();
  document.getElementById("totalpris").innerHTML = totalpris;
});

//knapp
document.getElementById("knapp").addEventListener("click", function() {
  let totalpris = vara.calcSubTotal();
  document.getElementById("totalpris").innerHTML = totalpris;
});
