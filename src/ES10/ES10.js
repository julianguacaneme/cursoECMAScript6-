//METODO FLAT
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2)); //profundidad

// METODO FLAT MAP

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));
//resultado: [1, 2, 2, 4,  3,6, 4, 8, 5, 10]

//TRIMSTART: eliminar espacios en blanco de un string

let hello = '     Hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world      ';
console.log(hello);
console.log(hello.trimEnd());

//optional catch building
try {

} catch {
    error
}

//From Entries - transformar de arreglo a objeto o objeto a arreglo

let entries = [
    ['name', 'Julián'],
    ['age', 43]
];
console.log(
    Object.fromEntries(entries)
);

//OBJETO DE TIPO SIMBOLO: acceder a una descripcion

let mySymbl = 'My symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);