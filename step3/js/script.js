// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var student = {};

var name = prompt("Inserisci il tuo nome");
var surname = prompt("Inserisci il tuo cognome");
var age = parseInt(prompt("Inserisci la tua età"));

console.log("Nome: " + name);
console.log("Cognome: " + surname);
console.log("Età:", age);

student.Name = name;
student.Surname = surname;
student.Age = age;

console.log(student);
