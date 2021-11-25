//Dynamic import

const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await
    import ("./file.js");
    module.hello();
});

//BigInt()

//Promise allSettled

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => rerolve("resolve1"));
//
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//global this

console.log(window);
console.log(globalThis);

//Operador null

const fooo = null ? ? 'default string';
console.log(fooo);


// ⛓ Optional chaining

const user = {};
console.log(user ? .profile ? .email);

if (user ? .profile ? .email) {
    console.log('email')
} else {
    console.log('fail')
}