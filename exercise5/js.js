// Skapa namespace
const mittNamespace = {};

// Lägg till funktionen add i namespace 
mittNamespace.add = function(a, b) {
  const sum = a + b;
  // Skriv ut summan 
  document.getElementById("result").innerHTML = `Summan av ${a} och ${b} är ${sum}`;
};

mittNamespace.add(2, 3); // kör funktion