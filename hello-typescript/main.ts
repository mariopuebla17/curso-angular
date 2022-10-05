var minhaVar = 'minha variável';

function minhaFunc(x, y) {
    return x + y;
}

//ES 6 ou ES 2015
let num = 2;
const pi = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor) {
    return valor * 2;
})

//Mesma função, porém com Arrow Function (ES 2015)
numeros.map(valor => valor * 2)

class Matematica {
    soma(x, y){
        return x + y;
    }
}