const firstName = "Kamil";
const age = 27;

console.log(`Witaj drogi gościu, nazywam się ${firstName} i mam ${age} lat.`);

const heading = document.querySelector('.main-heading--js');

heading.innerHTML = `Witaj drogi gościu, nazywam się ${firstName} i mam ${age} lat.`
