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
  
  function getGrade() {
    let name = document.getElementById("name").value;
    let student = students.find((s) => s.name === name);
  
    if (student) {
      let grade = student.grade;
      document.getElementById("result1").innerHTML = name + " has the grade " + grade;
    } else {
      document.getElementById("result1").innerHTML = "There is no student with that name";
    }
  }
  
  function getNames() {
    let grade = document.getElementById("grade").value;
    let matchingNames = students.filter((s) => s.grade === grade).map((s) => s.name);
  
    if (matchingNames.length > 0) {
      let namesString = matchingNames.join(", ");
      document.getElementById("result2").innerHTML = "Students with grade " + grade + ": " + namesString;
    } else {
      document.getElementById("result2").innerHTML = "No students has the grade " + grade;
    }
  }  