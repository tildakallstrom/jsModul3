let myNamespace = {
  originalColor: "",
  hoverColor: "black",

  changeColorOnHover: function() {
    let myDiv = document.getElementById("color");
    this.originalColor = myDiv.style.backgroundColor;
    myDiv.addEventListener("mouseover", function() {
      myDiv.style.backgroundColor = myNamespace.hoverColor;
    });
    myDiv.addEventListener("mouseout", function() {
      myDiv.style.backgroundColor = myNamespace.originalColor;
    });
  }
};

myNamespace.changeColorOnHover();