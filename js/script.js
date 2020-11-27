// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var firstStudent = {
    "Name": "Stefano",
    "Surname": "Franchini",
    "Age": 25,
}

for (var key in firstStudent) {
    console.log(key + ": " + firstStudent[key]);
}

var students = [
    {
        "Name": "Bart",
        "Surname": "Simpson",
    },
    {
        "Name": "Milhouse",
        "Surname": "Van Houten",
    },
    {
        "Name": "Ralph",
        "Surname": "Winchester",
    },
    {
        "Name": "Lisa",
        "Surname": "Simpson",
    },
    {
        "Name": "Nelson",
        "Surname": "Muntz",
    },
];

var student = {};

var name = prompt("Inserisci il tuo nome");
var surname = prompt("Inserisci il tuo cognome");
var age = parseInt(prompt("Inserisci la tua età"));

student.Name = name;
student.Surname = surname;
student.Age = age;

students.push(student)

for (var i = 0; i < students.length; i++) {
    var studentNumber = i + 1;
    console.log("Studente", studentNumber);
    for (var key in students[i]) {
        console.log(key + ": " + students[i][key]);
    }
}
