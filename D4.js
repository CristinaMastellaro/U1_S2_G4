/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (b, h) {
  const a = b * h;
  console.log("This is the area of our rectangle! " + a);
};

area(11, 12);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  let sum = 0;
  if (num1 === num2) {
    sum = (num1 + num2) * 3;
  } else {
    sum = num1 + num2;
  }
  console.log("How crazy is this sum? " + sum);
};

crazySum(23, 23);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num) {
  let absDiff = Math.abs(num - 19);
  if (num > 19) {
    absDiff *= 3;
  }
  console.log("And what about this incredible difference? " + absDiff);
};

crazyDiff(69);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (string) {
  if (string !== "EPICODE") {
    string = "EPICODE".concat(string);
  }
  return string;
};

console.log(epify("rare"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

const num = 15;

console.log(num + " is a multiple of 3 or 7: " + check3and7(num));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (string) {
  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  console.log("The reverse word for " + string + " is " + reverseString);
};

reverseString("Creta");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (longS) {
  longS = longS.split(" ");
  console.log(longS);
  for (let i = 0; i < longS.length; i++) {
    const firstLetter = longS[i][0].toUpperCase();
    longS[i] = longS[i].slice(1, longS[i].length);
    longS[i] = firstLetter + longS[i];
  }
  longS = longS.join(" ");
  console.log("Let's capitalize the first letter of each word! " + longS);
};

upperFirst("Let's capitalize the first letter of each word!");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (string) {
  string = string.slice(1, string.length - 1);
  console.log(
    "Can you guess the right word, knowing that its first and last letter have been cut off? " +
      string
  );
};

cutString("Cibo");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
};

console.log("Look at this array! " + giveMeRandom(5));
