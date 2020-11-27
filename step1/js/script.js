// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;

var student = {
    "Name": "Stefano",
    "Surname": "Franchini",
    "Age": 25,
}

for (var key in student) {
    console.log(key + ": " + student[key]);
}
