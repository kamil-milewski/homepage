const firstName = 'Kamil';
const age = 30;

console.log(firstName);
console.log(age);

console.log(`Nazywam się ${firstName} i mam ${age} lat.`);

const greet = (name, age) => {
    const result = `Siema ${name}! Masz ${age} lat!`;
    return result;
}

console.log(greet('Kamil', 30))