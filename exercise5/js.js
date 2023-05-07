const mittNamespace = {};

mittNamespace.add = function(a, b) {
  const sum = a + b;
  document.getElementById("result").innerHTML = `Summan av ${a} och ${b} är ${sum}`;
};

mittNamespace.add(2, 3); 