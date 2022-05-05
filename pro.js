// off-topic

let promise1 = Promise.resolve(12);

setTimeout(() => {
    console.log(promise1);
}, 1000);
let promise2 = 14;

promise1.then(result => {
    console.log(result);
})
console.log(promise2);

