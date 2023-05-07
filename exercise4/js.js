let personA = {firstName:"Thomas", lastName:"Lundqvist", age:47, favorite:"apple"}
let personB = personA;

personB.favorite = "pear";

printit(personA);
printit(personB);

personA = {firstName:"Robert", lastName:"Andersson Dahlberg", age:23, favorite:"banana"} 

printit(personA);
printit(personB);

function printit(person) {
  //Skriver ut personA = (person.firstName) = "Thomas" + " likes " + (person.favourite) "pear"
  //Skriver ut personB = (person.firstName) = "Thomas" + " likes " + (person.favourite) "pear"
  //Skriver ut personA = (person.firstName) = "Robert" + " likes " + (person.favourite) "banana"
  //Skriver ut personB = (person.firstName) = "Thomas" + " likes " + (person.favourite) "pear"
     console.log(person.firstName + " likes " + person.favorite);
}