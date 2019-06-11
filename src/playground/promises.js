const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    reject('Something went wrong');
  }, 1500);
});

console.log('Before');

promise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my new promise');
    }, 1500);
  });
}).then((str) => {
  console.log(str);
})
.catch((err) => {
  console.log(err);
});

console.log('after');
