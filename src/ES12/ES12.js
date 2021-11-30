//replace all

const string =
    "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replaceString = string.replace('JavaScript', 'Python');
console.log(replaceString); // solo remplazaba el primer elemento

const replaceString2 = string.replaceAll('JavaScript', 'Python');
console.log(replaceString2);

//METODOS PRIVADOS

class Message {
    show(val) {
        console.log(val);
    };
    get# add(val) {

    }
}

const message = new Message();
message.show('Hola!')

//PROMISE ANY

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//WEAK REF
class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
    {...}
}


let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse)

let isTrue = true;
let isFalse = false;
console.log(isTrue ⎪⎪= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);

