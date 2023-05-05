var myNamespace = {
  //function
  moveDiv: function() {
    let myDiv = document.getElementById("my-div");
    let position = 0;
    let direction = 1;
    let timer = setInterval(function() {
      //bestäm åt vilket håll div ska flyttas
      if (position == 300) {
        direction = -1;
      } else if (position == 0) {
        direction = 1;
      }
      position += direction * 5;
      myDiv.style.left = position + "px";
    }, 50);
  }
};

myNamespace.moveDiv();
