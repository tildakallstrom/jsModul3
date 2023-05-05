// Skapa namespace
const myNamespace = {
  antalClick: 0,
  click: function() {
    this.antalClick++;
    document.getElementById("result").innerHTML = `Totalt antal klick: ` + this.antalClick;
  }
};

//knapp
let myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", function() {
  myNamespace.click();
})

