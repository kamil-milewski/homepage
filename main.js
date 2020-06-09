const firstName = "Kamil";
const age = 27;

console.log(
  `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
);

//funkcja - JS <-- poniżej przykład jak zrobić funkcję oraz wywołać ją, aby była widoczna w console.log
function calculateOld(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  myNumber = myNumber * 7; //funkcja, która mnoży nam przez 7...
  return `wynik ${myNumber}`; //... i zwraca nam myNumber
}

//poniżej podająć w nawiasie liczbę uzyskamy przemnożony wynik przez 7
//w nawiasie możemy również podać, np. zmienną (age) i również to zadziała oraz pomnoży nam to przez 7
const myResult = calculateOld(age);

console.log(myResult);
console.log(age); //age nie został zmieniony, ponieważ te wartości są niemutowalne. Nie przekazujemy zmiennej, tylko wskazanie na co ta zmienna wskazuje, jej połączenie

function greetOld(age, firstName) {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
  );
}

//(Fat) arrow functions
const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
  );
};

//(Fat) arrow functions - skrócony zapis dla funkcji calculate (linijka 9-13)
const calculate = (myNumber) => myNumber * 7;

console.log(calculate(7));

greet(27, "Kamil");
greetOld(27, "Kamil");

//prosta funkcja bez opcji return, ale robiąca operację w środku
function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}

createContent(".main__heading--js", "Witaj świecie!");

function helloWorld() {
  console.log("witaj świecie");
}

helloWorld();
