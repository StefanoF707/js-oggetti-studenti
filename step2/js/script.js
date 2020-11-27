// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;

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

for (var i = 0; i < students.length; i++) {
    var studentNumber = i + 1;
    console.log("Studente " + studentNumber);
    for (var key in students[i]) {
        console.log(key + ": " + students[i][key]);
    }
}
