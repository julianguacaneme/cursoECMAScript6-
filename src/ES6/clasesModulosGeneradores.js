//LAS CLASES: manejar objetos y la herencia

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//modulovimportado
import { hello } from './ES6';

hello();

//GENERADORES

function* hellowWord() {
    if (true) {
        yield 'hellow,  ';
    }
    if (true) {
        yield 'world';
    }
};

const generatoHellowr = hellowWord();
console.log(generatoHellowr.next().value);
console.log(generatoHellowr.next().value);
console.log(generatoHellowr.next().value);