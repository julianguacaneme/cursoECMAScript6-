//OPERADOR DE REPOSO:
//Extraer las propiedades de un obejo
//que aun no se ha construido

const obj = {
    name: "Julian",
    age: 43,
    country: "Colombia",
};

let { name, ...all } = obj; //operador de reposo
console.log(name, all);

const obj = {
    name: "Julian",
    age: 43,
    country: "Colombia",
};

let { country, ...all } = obj; //operador de reposo
console.log(all); //resultado { name: 'Julian', age: 43 }

//UNIDADES DE PROPAGACIÓN: unir elementos de objetos a uno nuevo

const obj = {
    name: "Julián",
    age: 32,
};

const obj1 = {
    ...obj,
    country: "CO",
};

console.log(obj1); //resultado { name: 'Julián', age: 32, country: 'CO' }

//PROMES.FINALLY: saber cuando ha terminado el llamado y ejecutar funcion o codigo


const helloWord = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hello world'), 3000): reject(new Error('Test error'))
    });
};

helloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

//agrupar bloque de regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);