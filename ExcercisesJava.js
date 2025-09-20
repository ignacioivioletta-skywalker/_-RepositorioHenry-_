// Crea una variable de tipo string.
// Reemplaza el valor de null por el correspondiente.

const nuevoString = "null";

module.exports = nuevoString;

2
// Crea una variable de tipo number.
// Reemplaza el valor de null por el correspondiente.

const nuevoNumero = 58; // O cualquier otro número

module.exports = nuevoNumero;

3
// Crea una variable de tipo boolean.
// Reemplaza el valor de null por el correspondiente.

const nuevoBoolean = true; // O también podría ser 'false'

module.exports = nuevoBoolean;

4
// Resuelve el siguiente problema matemático.
// Reemplaza el valor de null por el correspondiente.

const nuevaResta = 10 - 7 === 3;

module.exports = nuevaResta;

5
// Resuelve el siguiente problema matemático.
// Reemplaza el valor de null por el correspondiente.

const nuevaMultiplicacion = 10 * 4 === 40;

module.exports = nuevaMultiplicacion;

6 
// Resuelve el siguiente problema matemático.
// Reemplaza el valor de null por el correspondiente.

const nuevoModulo = 21 % 5 === 1;

module.exports = nuevoModulo;

7
function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor;
}

module.exports = esTipoDato;

8
function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  return Number.isInteger(numero);
}

module.exports = esNumeroEntero;

9
function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  return valor === null || valor === undefined;
}

module.exports = esNuloOIndefinido;

10
function devolverString(string) {
  // La función recibe un argumento llamado string.
  // Debe retornar dicho string.
  // Por ejemplo: 
  // "texto" ---> "texto" 
  // "hola mundo" ---> "hola mundo" 
  // "SoyHenry" ---> "SoyHenry" 
  // Tu código:
  return string;
}

module.exports = devolverString;

11
function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 
  // Tu código:
  return x === y;
}

module.exports = sonIguales

12
function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  return str1.length === str2.length;
}

module.exports = tienenMismaLongitud;

13
function menosQueNoventa(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
  return num < 90;
}

module.exports = menosQueNoventa;

14
function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
  return num > 50;
}

module.exports = mayorQueCincuenta;

15
function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  return num % 2 === 0;
}

module.exports = esPar;

16
function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  return num % 2 !== 0;
}

module.exports = esImpar;

17
function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num > 0) {
    return "Es positivo";
  } else if (num < 0) {
    return "Es negativo";
  } else {
    return false;
  }
}

module.exports = esPositivo;

18
function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if (letra.length === 1 && "aeiouAEIOU".includes(letra)) {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}

module.exports = esVocal;

19
function suma(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la suma de estos argumentos.
  // Por ejemplo: 
  // 5, 5 ---> 10
  // -5, 5 ---> 0
  // Tu código:
  return x + y;
}

module.exports = suma;

20
function resta(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la resta de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 5
  // 5, 5 ---> 0
  // Tu código:
  return x - y;
}

module.exports = resta;

21
function multiplica(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la multiplicacion de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 50
  // 5, 5 ---> 25
  // Tu código:
  return x * y;
}

module.exports = multiplica;

22
function divide(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 2
  // 5, 5 ---> 1
  // Tu código:
  return x / y;
}

module.exports = divide;

23
function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
  return x % y;
}

module.exports = obtenerResto;

24
function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:
  return str + "!";
}

module.exports = agregarSimboloExclamacion;

25
function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
  return `${nombre} ${apellido}`;
}

module.exports = combinarNombres;

26
function obtenerSaludo(nombre) {
  // La función recibe un argumento llamado nombre el cual es un string. 
  // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Retorna el nuevo string. 
  // Tu código:
  return "Hola " + nombre + "!";
}

module.exports = obtenerSaludo;

27
function obtenerAreaRectangulo(alto, ancho) {
  // The function receives two arguments called "alto" and "ancho" which are numbers.
  // It should return the area of a rectangle, given its height and width.
  // For example: 
  // 2, 2 ---> 4
  // 0, 2 ---> 0
  // Your code:
  return alto * ancho;
}

module.exports = obtenerAreaRectangulo;

28
function retornarPerimetro(lado) {
  // La función recibe un argumento llamado lado el cual es un numero.
  // Retornar el perimetro de un cuadrado.
  // Por ejemplo: 
  // 2 ---> 8
  // 0 ---> 0
  // Tu código:
  return lado * 4;
}

module.exports = retornarPerimetro;

29
function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  return (base * altura) / 2;
}

module.exports = areaDelTriangulo;


30
function deEuroAdolar(euro) {
  // La función recibe un argumento llamado euro el cual es un numero.
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Suponiendo que 1 euro equivale a 1.20 dólares.
  // Retornar el valor en dolares.
  // Por ejemplo: 
  // 1 ---> 1.20
  // 0 ---> 0
  // Tu código:
  return euro * 1.20;
}

module.exports = deEuroAdolar;

31
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  return Math.pow(num, 2);
}

module.exports = elevarAlCuadrado;

32
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCubo(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cubo.
  // Por ejemplo: 
  // 3 ---> 27
  // 0 ---> 0
  // Tu código:
  return Math.pow(num, 3);
}

module.exports = elevarAlCubo;

33
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // La función recibe dos argumentos llamados "num" y "exponent" los cuales son numeros.
  // Debes Retorna el valor de "num" elevado al "exponent".
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 5 ---> 0
  // Tu código:
  return Math.pow(num, exponent);
}

module.exports = elevar;

34
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" al entero más próximo y retornarlo.
  // Por ejemplo: 
  // 1.5 ---> 2
  // 0.1 ---> 0
  // Tu código:
  return Math.round(num);
}

module.exports = redondearNumero;

35
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
  return Math.ceil(num);
}

module.exports = redondearHaciaArriba;

36
// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom() {
  // La función numeroRandom debe generar un número al azar entre 0 y 1 y retornarlo.
  // Tu código:
  return Math.random();
}

module.exports = numeroRandom;
