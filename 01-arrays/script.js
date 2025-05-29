const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

const fourthTeacher = teachers[3];
console.log (fourthTeacher); // Phil

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers.splice (4, 1, 'Patrick')
console.log (teachers); // ["Nathan", "Ed", "Fabio", "Phil", "Patrick", "Lewis", "Luca"]

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = teachers.pop ();
console.log (lastTeacher); // Luca
console.log (teachers); // ["Nathan", "Ed", "Fabio", "Phil", "Patrick", "Lewis"]

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

const firstTeacher = teachers.shift();
console.log (firstTeacher); // Nathan
console.log (teachers); // ["Ed", "Fabio", "Phil", "Patrick", "Lewis"]

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

teachers.push ('Vanessa');
console.log (teachers); // ["Ed", "Fabio", "Phil", "Patrick", "Lewis", "Vanessa"]

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift ('Sarah');
console.log (teachers) // ["Sarah", "Ed", "Fabio", "Phil", "Patrick", "Lewis", "Vanessa"] 

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

const lewisIndex = teachers.indexOf ('Lewis');
console.log (lewisIndex) // 5

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

const isTeachersEmpty = teachers.length;
console.log (isTeachersEmpty); // 7
