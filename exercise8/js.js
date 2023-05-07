var myNamespace = {
  printText: function() {
    let input = document.getElementById("input");
    let div = document.getElementById("div");
    div.innerHTML = input.value;
  }
};

let button = document.getElementById("button");
button.addEventListener("click", function() {
  myNamespace.printText();
});