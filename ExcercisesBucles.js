// 1
function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  return a === b && a < 0;
}

// 2
function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  return booleano1 && booleano2;
}

// 3
function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// 4
function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  if (edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed";
  }
}

// 5
function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

// 6
function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return num.toString().length === 3;
}

// 7
function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  if (a % 2 === 0 && a % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

// 8
function esPositivoOInferiorA10(a) {
  // La función recibe un número "a" por parámetro.
  // Retorna true si es positivo y menor que 10.
  // Retorna false en caso contrario.
  // Tu código:
  return a > 0 && a < 10;
}

// 9
function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }
}

// 10
function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  return num === 10 || num === 5;
}

// 11
function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  return num < 50 && num > 20;
}

// 12
function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return false;
  }
}

// 13
function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8    ---> false
  // Ejemplo: 1      ---> true
  // Ejemplo: (-10)  ---> true
  // De lo contrario, retorna false.
  // Tu código:
  return Number.isInteger(num);
}

// 14
function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  if (num1 === 0 && num2 === 0 && num3 === 0) {
    return "Error";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Numero 1 es mayor y positivo";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else {
    return false;
  }
}

// 15
function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  if (numero === 1) {
    return "Lunes";
  } else if (numero === 2) {
    return "Martes";
  } else if (numero === 3) {
    return "Miercoles";
  } else if (numero === 4) {
    return "Jueves";
  } else if (numero === 5) {
    return "Viernes";
  } else if (numero === 6) {
    return "Sabado";
  } else if (numero === 7) {
    return "Domingo";
  } else {
    return "No es un dia de la semana";
  }
}

// 16
function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  if (idioma === "aleman") {
    return "Guten Tag!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else if (idioma === "ingles") {
    return "Hello!";
  } else {
    return "Hola!";
  }
}

// 17
function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores          --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
}

// 18
function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto;
}

// 19
function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

// 20
function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
    if (suma > 100) {
      break;
    }
  }
  return suma;
}

// 21
function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero < 1) {
    return false;
  }
  while (numero % 2 === 0) {
    numero = numero / 2;
  }
  return numero === 1;
}

// 22
function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 0;
  do {
    num += 5;
    contador++;
  } while (contador < 8);
  return num;
}

// 23
function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  esIgualYNegativo,
  esVerdaderoYFalso,
  obtenerMayor,
  mayoriaDeEdad,
  esVerdadero,
  tieneTresDigitos,
  esParYDivisiblePorTres,
  esPositivoOInferiorA10,
  conection,
  esDiezOCinco,
  estaEnRango,
  fizzBuzz,
  esEntero,
  operadoresLogicos,
  obtenerDiaSemana,
  saludo,
  colors,
  productoEntreNúmeros,
  sumarHastaN,
  sumarHastaNConBreak,
  esPotenciaDeDos,
  doWhile,
  esNumeroPrimo,
};