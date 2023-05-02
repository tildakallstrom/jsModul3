//Tilda Källström
// array med objekt som innehåller namn och betyg
let students = [
    { name: "Klara", grade: "A" },
    { name: "Andrea", grade: "B" },
    { name: "Emil", grade: "C" },
    { name: "Sarah", grade: "A" },
    { name: "Alicia", grade: "D" },
    { name: "Victor", grade: "C" },
    { name: "Thomas", grade: "E" },
    { name: "Robert", grade: "E" }
  ];
  
  // funktion för att hitta betyg - söker igenom arrayen av objekt
  function getGrade() {
    // namn från input
    let name = document.getElementById("name").value;
    let student = students.find((s) => s.name === name);
  
    if (student) {
      let grade = student.grade;
      // skriv ut
      document.getElementById("result1").innerHTML = name + " has the grade " + grade;
    } else {
      // om ingen student med valt namn finns
      document.getElementById("result1").innerHTML = "There is no student with that name";
    }
  }
  
  // hitta namn kopplat till visst betyg - söker igenom arrayen av objekt
  function getNames() {
    let grade = document.getElementById("grade").value;
    let matchingNames = students.filter((s) => s.grade === grade).map((s) => s.name);
  
    if (matchingNames.length > 0) {
      let namesString = matchingNames.join(", ");
      // skriv ut
      document.getElementById("result2").innerHTML = "Students with grade " + grade + ": " + namesString;
    } else {
      // om inga namn är kopplade till ett visst betyg
      document.getElementById("result2").innerHTML = "No students has the grade " + grade;
    }
  }
  