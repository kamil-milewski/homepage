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
const greet = (age, firstName) => { //PRACA DOMOWA TYDZIEŃ V
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
  );
};

//(Fat) arrow functions - skrócony zapis dla funkcji calculate (linijka 9-13)
const calculate = (myNumber) => myNumber * 7;

console.log(calculate(7));

greet(27, "Kamil"); //WYWOŁANIE FUNKCJI Z PRACY DOMOWEJ TYDZIEŃ V
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


const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`)
  },
  isOperating: true,
  levels: 357,
  name: 'Death Star',
  population: 10000,
  isLightOn: true,
  commander: {
    name: 'Darth Vader',
    age: 44,
  }
}


deathStar.fire('Rebel ship')

console.log(deathStar['name'])


const myProperty = 'name'

const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
}

showMeProperty('levels')

const humanOne = {
  name: 'Maciek',
  age: 32,
  address: {
    street: 'Warszawska',
    city: 'Białystok'
  }
}

const humanTwo = {
  name: 'Stefan',
  age: 35,
  address: {
    street: humanOne.address.street,
    city: 'Białystok'
  }
}

console.log(humanOne);
console.log(humanTwo);

humanOne.address.street = 'Lipowa'

//---------------------------------------------------
// JS: Logika [06.02]

if ('Java' != 'Javascript') {
  console.log('Java to nie Javascript');
}

if (2 == '2') {
  console.log('Java to nie Javascript');
}

if (2 === 2) {
  console.log('Java to nie Javascript');
}

console.log(typeof 2);
console.log(typeof '2');

if (2 === '2') {
  console.log('Java to nie Javascript');
}

if (2 != '2') {
  console.log('Java to nie Javascript');
}

if (2 !== '2') {
  console.log('Java to nie Javascript');
}

if (humanOne.age > humanTwo.age) {
  console.log('Human one jest starszy');
}

if (humanOne.age === humanTwo.age) {
  console.log('Są równolatkami ');
}

if (humanOne.age < humanTwo.age) {
  console.log('Human two jest starszy');
}

if (false) {                            //FALSY - false, 0, ", "", ``, null, undefined, NaN (not a number)
  console.log('to się nie wykona');
}

if ('abc') {                            //TRYTHY (cała reszta) - 'Tekst', 12' -4, {}, [], true, itd.
  console.log('to się wykona');
}

if ((humanTwo.age === 35) && humanTwo.address) {  //operator AND - wszystkie warunki muszą być prawdziwe
  console.log('to się wykona');
}

console.log(humanTwo.pet);

if ((humanTwo.age === 35) && humanTwo.pet) {
  console.log('to się wykona');
}

if ((humanTwo.age === 35) || humanTwo.pet) {   //operator OR - jeden z warunków ma być prawdziwy
  console.log('to się wykona');
}

if ((humanTwo.age === 90) || humanTwo.address) {
  console.log('to się wykona');
}

if (!false) {                                  //operator NOT - odwraca wartość wyrażenia logicznego
  console.log('to się wykona');
}

if (!('Javascript' == 'Java')) {
  console.log('to się wykona');
}

if (humanOne.age > humanTwo.age) {            // else - uproszeczenie dla zapisu z linijek 141 i 149
  console.log('Human one jest starszy');      // jeżeli jest spełniony warunek to dzieje się ta linijka kodu. w tej linijsce może być więcej niż jedna instrukcja (np. mogą być funkcje, w których również można używać else)!
} else {
  console.log('Human two jest starszy lub są równolatkami');   // jeżeli warunek nad else nie został spełniony to dzieje się ta linijka kodu
}

if (humanOne.age > humanTwo.age) {
  console.log('Human one jest starszy');
} else {
  console.log('Human two jest starszy lub są równolatkami');
}

if (humanOne.age > humanTwo.age) {            // else if
  console.log('Human one jest starszy');
} else if (humanOne.age === humanTwo.age) {
  console.log('są równolatkami');
}

if (humanOne.age > humanTwo.age) {
  console.log('Human one jest starszy');
} else if (humanOne.age === humanTwo.age) {     // else if - można ich wypisać o wiele wiele więcej
  console.log('są równolatkami');
} else {
  console.log('Human two jest starszy');
}

const myNumber = '7';

switch (myNumber) {                           //switch - używamy kiedy znamy wartości jakie ma osiągnąć nasza zmienna!
  case 7:
    console.log('jestem siódemką');
  break;
  case 9:
    console.log('jestem dziewiątką');
  break;
  default:
    console.log('jestem czymś innym');
}

if (32 > 20) {                                //zapis klasyczny poniższego zapisu skróconego
  console.log('to prawda');
} else {
  console.log('to nieprawda');
}

(32 > 20) ? console.log('to prawda') : console.log('to nieprawda')      //zapis skrócony - często wykorzystywany!!!

const result = (32 > 20) ? console.log('to prawda') : console.log('to nieprawda')

console.log(result);

const result2 = (32 > 20) ? true : false;

console.log(result2);