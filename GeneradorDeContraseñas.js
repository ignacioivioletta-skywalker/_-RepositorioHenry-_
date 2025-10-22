// =========================================================================================
// DEFINICIÓN DE VARIABLES DE CARACTERES (a, b, c, d)
// =========================================================================================

// a. Crear una variable que contenga todas las posibles letras minúsculas
const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
// b. Crear una variable que contenga todos los posibles números
const NUMEROS = "0123456789";
// c. Crear una variable que contenga todos los posibles caracteres especiales
const ESPECIALES = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
// d. Crear una variable que contenga todas las posibles letras Mayúsculas
const MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * * ========================================
 * FUNCIÓN 1: VALIDACIÓN DE LONGITUD (chequearLongitud)
 * * ========================================
 * Valida que la longitud de la contraseña cumpla con los requisitos.
 * @param {string} longitud - El valor ingresado por el usuario (recibido como string del input).
 * @returns {number|string} Retorna la longitud válida (como número) o un mensaje de error (como string).
 */
function chequearLongitud(longitud) {
  // Paso 1: Si no se recibe ninguna longitud
  if (longitud === null || longitud === undefined || longitud === "") {
    return "debe ingresar la longitud";
  }

  // Paso 2: Se debe asegurar que el argumento longitud sea de tipo "string"
  if (typeof longitud !== "string") {
    return "La longitud recibida no es válida";
  }

  // Convertir a número para las comparaciones.
  const len = parseInt(longitud, 10);

  // Comprobación si el parseo falló (ej. ingresó texto)
  if (isNaN(len)) {
    return "La longitud recibida no es válida";
  }

  // Paso 3: Si la longitud es menor a 3
  if (len < 3) {
    return "La longitud debe ser mayor o igual a 3";
  }

  // Paso 4: Si la longitud es mayor a 10
  if (len > 10) {
    return "La longitud debe ser menor o igual a 10";
  }

  // Paso 5: Retornar la “longitud” si ninguno de los casos anteriores se cumple.
  return len;
}

/**
 * * ========================================
 * FUNCIÓN 2: GENERACIÓN DE CONTRASEÑA (generarContrasena)
 * * ========================================
 * Crea una nueva contraseña dinámica para el usuario.
 * @param {string} longitudStr - La longitud deseada (recibida como string desde el input).
 * @param {boolean} incluirEspeciales - Si se incluyen caracteres especiales.
 * @param {boolean} incluirNumeros - Si se incluyen caracteres numéricos.
 * @param {boolean} incluirMayusculas - Si se incluyen letras mayúsculas.
 * @returns {string} La contraseña generada o un mensaje de error.
 */
function generarContrasena(
  longitudStr,
  incluirEspeciales,
  incluirNumeros,
  incluirMayusculas
) {
  // 1. Validar longitud
  const longitud = chequearLongitud(longitudStr);

  // Retorna error si la validación falla
  if (typeof longitud === "string") {
    return longitud;
  }

  // e. Crear una variable que guarde solo los caracteres en una contraseña normal (letras minúsculas)
  let caracteresDisponibles = MINUSCULAS;

  // f. Concatenar caracteres especiales si se desean
  if (incluirEspeciales) {
    caracteresDisponibles += ESPECIALES;
  }
  // g. Concatenar números si se desean
  if (incluirNumeros) {
    caracteresDisponibles += NUMEROS;
  }
  // h. Concatenar mayúsculas si se desean
  if (incluirMayusculas) {
    caracteresDisponibles += MAYUSCULAS;
  }

  // i. Crea una variable que guardará la contraseña final
  let contrasena = "";

  // Almacena la longitud total de todos los caracteres disponibles
  const longitudCaracteres = caracteresDisponibles.length;

  // j. y k. Generar la contraseña (Iteración por la longitud deseada)
  for (let i = 0; i < longitud; i++) {
    // 1 - Genera un valor aleatorio (Math.random())
    const valorAleatorio = Math.random();

    // 2 - Multiplica por la cantidad de "caracteresDisponibles"
    const producto = valorAleatorio * longitudCaracteres;

    // 3 - Extrae el valor entero (Math.floor())
    const indiceAleatorio = Math.floor(producto);

    // 4 - Extrae el carácter
    const caracter = caracteresDisponibles.charAt(indiceAleatorio);

    // 5 - Concatena este carácter a la "contrasena"
    contrasena += caracter;
  }

  // h. Retorna el mensaje "Contraseña generada: " concatenado con la contraseña generada
  return "Contraseña generada: " + contrasena;
}

// =========================================================================================
// FUNCIÓN DE INTEGRACIÓN: Maneja el evento del botón y actualiza la UI
// =========================================================================================

/**
 * Función principal para manejar el clic en el botón "Generar Contraseña".
 */
function manejarGeneracion() {
  // 1. Obtener valores del HTML
  const longitudInput = document.getElementById("longitud").value;
  const especialesCheckbox = document.getElementById("especiales").checked;
  const numerosCheckbox = document.getElementById("numeros").checked;
  const mayusculasCheckbox = document.getElementById("mayusculas").checked;
  const resultadoElement = document.getElementById("resultadoContrasena");

  // 2. Llamar a la función generadora
  const resultado = generarContrasena(
    longitudInput,
    especialesCheckbox,
    numerosCheckbox,
    mayusculasCheckbox
  );

  // 3. Mostrar el resultado (manejo de errores y éxito)
  if (resultadoElement) {
    // Verifica si el resultado es un mensaje de error/validación
    if (
      resultado.startsWith("debe ingresar") ||
      resultado.startsWith("La longitud")
    ) {
      resultadoElement.textContent = "Error: " + resultado;
      resultadoElement.style.color = "red";
    } else {
      // Es la contraseña generada
      resultadoElement.textContent = resultado;
      resultadoElement.style.color = "green";
    }
  } else {
    console.log(resultado);
  }
}

// Conexión de la función manejarGeneracion al botón "generarBoton"
// Asegúrate de que tu HTML tenga un elemento con id="generarBoton" que llame a esta función.
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("generarBoton");
  if (boton) {
    boton.addEventListener("click", manejarGeneracion);
  }
});
