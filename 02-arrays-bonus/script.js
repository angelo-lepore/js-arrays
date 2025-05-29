const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = teachers.reverse ();
console.log (teachers); // ["Luca", "Lewis", "Carlo", "Phil", "Fabio", "Ed", "Nathan"]

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const teacherName = teachers[i];
  if (teacherName.length >= 5) {
    longNames.push (teacherName);
  }
}
console.log (longNames); // ["Lewis", "Carlo", "Fabio", "Nathan"]

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice (5, 1);
console.log (teachers); // ["Luca", "Lewis", "Carlo", "Phil", "Fabio", "Nathan"]

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

const teachersString = null;
