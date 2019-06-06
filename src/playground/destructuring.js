// Object Destructuring
//
// const person = {
//   name: 'Adomas',
//   age: 25,
//   location: {
//     city: 'Leeds',
//     temp: 60
//   }
// };

// // To rename variable - use colon (:)
// // To set default value - use equals (=)

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//
const address = ['1299 S. Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// Skip 2 items, then get the third one.
const [, , state = 'New York'] = address;

console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName,, itemPrice] = item;

console.log(`A medium ${itemName} costs ${itemPrice}`);
