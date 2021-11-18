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