//Oject.entries
const data = {
    fontend: 'oscar',
    backend: 'Isabel',
    desing: 'Ana'
}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length);

//Object values

const data = {
    fontend: "oscar",
    backend: "Isabel",
    desing: "Ana",
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

//padStart y padEnd

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-------'));

const data = {
    fontend: "oscar",
};

//ASYNC AWAIT

const helloWorld = () => {
    return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(()=> resolve("Hello World"), 300)
    : reject(new Error("Test error"))
})
};
const helloAsync = async () => {
    const hello = await helloWorld(),
    console.log(hello);
};

helloAsync();

