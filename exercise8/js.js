var myNamespace = {
  printText: function() {
    //inputfält
    let input = document.getElementById("input");
    //div
    let div = document.getElementById("div");
    div.innerHTML = input.value;
  }
};

//button
let button = document.getElementById("button");
//eventlyssnare till klick
button.addEventListener("click", function() {
  //skriv ut text
  myNamespace.printText();
});
