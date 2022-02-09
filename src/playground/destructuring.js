// console.log('OBJECT destructuring')

// const person = {
//     name:  'luchos',
//     age: 34,
//     location: {
//         city:'BBlanca',
//         temp: 32 
//     }
// };

// const {name = 'Anonymous ', age, location}  = person;
// const {city, temp: temperature} = person.location;
// console.log(`${name} is ${age}. And com from ${temperature}`)
// console.log(`${location.city}.`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

console.log('ARRAY destructuring')

const address = ['1233 d junioper st', 'bblanca', 'bsas', '8000'];
const [street, city, state, zip] = address;

console.log(`ure in ${address[1]}`);
console.log(`ure in ${city}`);

const item = ['coffe (ice)', '$2.00', '$2.52', '$2.75'];
const [productName, ,mediumPrice] = item;

console.log(`A ${productName} costs ${mediumPrice}`)