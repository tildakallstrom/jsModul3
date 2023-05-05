let myNamespace = {
  //div färg
  originalColor: "",
  hoverColor: "black",

  //ändra färg vid hover
  changeColorOnHover: function() {
    //div
    let myDiv = document.getElementById("color");
    this.originalColor = myDiv.style.backgroundColor;
    //hover eventlyssnare
    myDiv.addEventListener("mouseover", function() {
      myDiv.style.backgroundColor = myNamespace.hoverColor;
    });
    //eventlyssnare när man inte hovrar
    myDiv.addEventListener("mouseout", function() {
      myDiv.style.backgroundColor = myNamespace.originalColor;
    });
  }
};

myNamespace.changeColorOnHover();