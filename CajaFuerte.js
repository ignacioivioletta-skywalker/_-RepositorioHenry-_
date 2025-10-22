// =========================================================================================
// VARIABLES GLOBALES (Para mantener el estado de la caja fuerte)
// =========================================================================================

// NOTA: Esta variable se define globalmente para mantener el estado entre llamadas a la función.
let contadorIntentos = 0;
let codigoSecretoGuardado = null;
let intentosTotales = null;

// =========================================================================================
// FUNCIÓN 2: VALIDACIÓN DE NÚMEROS REPETIDOS
// =========================================================================================

/**
 * Valida si un código (string) tiene números repetidos.
 * @param {string} codigo - El código a validar.
 * @returns {boolean} Retorna true si hay números repetidos, false si son todos únicos.
 */
function validarNumerosRepetidos(codigo) {
  // Usamos un objeto (mapa o hash set) para contar la frecuencia de cada dígito
  const conteoDigitos = {};

  for (let i = 0; i < codigo.length; i++) {
    const digito = codigo[i];

    // Si el dígito ya está en el conteo, significa que está repetido.
    if (conteoDigitos[digito]) {
      return true;
    }
    // Si no está, lo marcamos como visto.
    conteoDigitos[digito] = true;
  }

  // Si el bucle termina sin encontrar repeticiones, retorna false.
  return false;
}

// =========================================================================================
// FUNCIÓN 1: CAJA FUERTE (Configuración Inicial)
// =========================================================================================

/**
 * Recibe y valida el código secreto y la cantidad de intentos iniciales.
 * @param {string} codigoSecreto - El código secreto de 4 dígitos.
 * @param {number} cantidadIntentos - La cantidad de intentos permitidos (1 a 5).
 * @returns {string} El código secreto y los intentos válidos, o un mensaje de error.
 */
function cajaFuerte(codigoSecreto, cantidadIntentos) {
  // 1. Validaciones para el Código Secreto

  // a. Validar longitud (debe contener 4 dígitos)
  if (codigoSecreto.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }

  // b. Validar que sea conformado solo por números (aplicar bucle For)
  for (let i = 0; i < codigoSecreto.length; i++) {
    const caracter = codigoSecreto[i];
    // Comprobar si el carácter NO es un dígito de '0' a '9'
    // NOTA: isNaN(caracter) es una alternativa, pero el bucle for es requisito explícito.
    if (caracter < "0" || caracter > "9") {
      return "El codigo secreto solo puede estar conformado por numeros";
    }
  }

  // c. Validar números repetidos (invocar validarNumerosRepetidos)
  if (validarNumerosRepetidos(codigoSecreto)) {
    return "el codigo no puede tener numeros repetidos";
  }

  // 2. Validaciones para la Cantidad de Intentos

  // d. Validar que la cantidad de intentos se encuentre entre 1 y 5 (inclusive)
  // Se convierte a número para la comparación
  const intentos = parseInt(cantidadIntentos, 10);
  if (intentos < 1 || intentos > 5 || isNaN(intentos)) {
    return "Solo se permite una cantidad de intentos mayor a 0 y menor a 6";
  }

  // e. En caso de que ninguna de las condiciones anteriores se cumpla
  // Retornar el código secreto concatenado con la cantidad de intentos en formato de string
  return `${codigoSecreto}${intentos}`;
}

// =========================================================================================
// FUNCIÓN 3: DESBLOQUEAR CAJA FUERTE
// =========================================================================================

/**
 * Intenta desbloquear la caja fuerte con un código de desbloqueo.
 * @param {string} codigoSecreto - El código secreto guardado (del programador).
 * @param {string} codigoDesbloqueo - El código ingresado para intentar desbloquear.
 * @param {number} cantidadIntentos - La cantidad total de intentos permitidos.
 * @returns {string} Mensaje de éxito, error de validación o denegación de acceso.
 */
function desbloquearCajaFuerte(
  codigoSecreto,
  codigoDesbloqueo,
  cantidadIntentos
) {
  // a. Se hace seguimiento al contador de intentos (ya es global)

  // b. Realizar las mismas validaciones al código de desbloqueo

  // Validar longitud (4 dígitos)
  if (codigoDesbloqueo.length !== 4) {
    return "El codigo debe tener exactamente 4 digitos";
  }

  // Validar solo números (aplicar bucle For)
  for (let i = 0; i < codigoDesbloqueo.length; i++) {
    const caracter = codigoDesbloqueo[i];
    if (caracter < "0" || caracter > "9") {
      return "El codigo de desbloqueo solo puede estar conformado por numeros";
    }
  }

  // Validar números repetidos (invocar validarNumerosRepetidos)
  if (validarNumerosRepetidos(codigoDesbloqueo)) {
    return "el codigo no puede tener numeros repetidos";
  }

  // -------------------------------------------------------------------------
  // CÓDIGOS VÁLIDOS EN FORMATO. INICIA LA LÓGICA DE INTENTOS
  // -------------------------------------------------------------------------

  // c. Validar si los códigos son los mismos
  if (codigoDesbloqueo === codigoSecreto) {
    // Acceso concedido (el contador aún no se ha incrementado)
    return `Acceso concedido despues de : ${contadorIntentos} intentos`;
  }

  // Códigos no son iguales (Contador debe aumentar y revisar intentos)

  // d. Integrar un switch donde se debe evaluar una condición true (pistas)
  // Convertir a número para las operaciones de módulo y comparación
  const codigoDesbloqueoNum = parseInt(codigoDesbloqueo, 10);
  const codigoSecretoNum = parseInt(codigoSecreto, 10);

  switch (true) {
    case codigoDesbloqueoNum % 2 === 0:
      // Código divisible por 2
      console.log("PISTA: el codigo es divisible x 2");
      break;
    case codigoDesbloqueoNum > codigoSecretoNum:
      // Código demasiado alto
      console.log("PISTA: Código incorrecto demasiado alto");
      break;
    default:
      // Caso por defecto
      console.log("PISTA: codigo incorrecto");
  }

  // e. Aumentar el contador de intentos en 1
  contadorIntentos++;

  // f. Comparar el contador de intentos con la cantidad de intentos
  if (contadorIntentos >= cantidadIntentos) {
    // Bloquear el botón de validar
    document.querySelector(".validate-button").disabled = true;
    return "Acceso denegado. Se agotaron los intentos";
  }

  // Si la validación falla y aún quedan intentos
  return (
    "Código incorrecto. Intento " + contadorIntentos + " de " + cantidadIntentos
  );
}

// =========================================================================================
// FUNCIONES DE MANEJO DEL DOM (Interfaz de Usuario)
// =========================================================================================

// Elementos del HTML (para referencia)
const secretCodeInput = document.getElementById("secret-code");
const attemptsCountInput = document.getElementById("attempts-count");
const saveButton = document.querySelector(".save-button");
const validateCodeInput = document.getElementById("validate-code");
const validateButton = document.querySelector(".validate-button");
const resultDisplay = document.getElementById("result-display"); // Asumimos este ID para mostrar resultados

/**
 * Función para mostrar el resultado en la UI.
 * @param {string} mensaje - El mensaje a mostrar.
 * @param {string} tipo - 'success', 'error', o 'info'.
 */
function mostrarResultado(mensaje, tipo) {
  if (!resultDisplay) return;

  resultDisplay.textContent = mensaje;
  resultDisplay.style.fontWeight = "700";

  switch (tipo) {
    case "success":
      resultDisplay.style.color = "green";
      break;
    case "error":
      resultDisplay.style.color = "red";
      break;
    case "info":
    default:
      resultDisplay.style.color = "orange";
      break;
  }
}

/**
 * Maneja el evento de guardar el código secreto y los intentos.
 * Bloquea los campos de configuración.
 * @param {Event} event - El evento de click.
 */
function handleGuardar(event) {
  // Evita el envío del formulario si el botón es type="submit" (aunque se recomienda type="button" para estos casos)
  event.preventDefault();

  const codigo = secretCodeInput.value.trim();
  const intentos = attemptsCountInput.value;

  const resultado = cajaFuerte(codigo, intentos);

  // Si el resultado es una cadena de error
  if (typeof resultado === "string" && !resultado.includes(codigo)) {
    mostrarResultado(resultado, "error");
    return;
  }

  // Si la validación fue exitosa, el resultado es el código+intentos
  // Extraemos el código secreto y los intentos válidos del resultado
  codigoSecretoGuardado = resultado.substring(0, 4);
  intentosTotales = parseInt(resultado.substring(4), 10);
  contadorIntentos = 0; // Reinicia el contador

  mostrarResultado(
    `Caja Fuerte configurada. Código: **** Intentos: ${intentosTotales}.`,
    "success"
  );

  // Bloquear campos de configuración (Requisito mínimo)
  secretCodeInput.disabled = true;
  attemptsCountInput.disabled = true;
  saveButton.disabled = true;

  // Habilitar campos de desbloqueo
  validateCodeInput.disabled = false;
  validateButton.disabled = false;
}

/**
 * Maneja el evento de validar el código de desbloqueo.
 * @param {Event} event - El evento de click.
 */
function handleValidar() {
  // 1. Revisar si la caja fuerte está configurada
  if (codigoSecretoGuardado === null) {
    mostrarResultado("Debe guardar el Código Secreto primero.", "error");
    return;
  }

  // 2. Revisar si ya se agotaron los intentos
  if (contadorIntentos >= intentosTotales) {
    mostrarResultado("Acceso denegado. Se agotaron los intentos", "error");
    validateButton.disabled = true;
    return;
  }

  const codigoDesbloqueo = validateCodeInput.value.trim();

  // Llamada a la función principal de desbloqueo
  const resultado = desbloquearCajaFuerte(
    codigoSecretoGuardado,
    codigoDesbloqueo,
    intentosTotales
  );

  validateCodeInput.value = ""; // Limpiar campo después del intento

  // 3. Mostrar el resultado
  if (resultado.startsWith("Acceso concedido")) {
    mostrarResultado(resultado, "success");
    validateButton.disabled = true; // Bloquear después del éxito
    validateCodeInput.disabled = true;
  } else if (resultado.includes("denegado") || resultado.includes("agotaron")) {
    mostrarResultado(resultado, "error");
  } else if (resultado.includes("incorrecto")) {
    mostrarResultado(resultado, "info");
  } else {
    // Mensaje de error de validación (ej. "El codigo debe tener 4 digitos")
    mostrarResultado("Error de formato: " + resultado, "error");
  }
}

/**
 * Maneja el evento del botón RESET.
 */
function handleReset() {
  // Resetear variables de estado
  contadorIntentos = 0;
  codigoSecretoGuardado = null;
  intentosTotales = null;

  // Habilitar y limpiar campos de configuración
  secretCodeInput.disabled = false;
  attemptsCountInput.disabled = false;
  saveButton.disabled = false;
  secretCodeInput.value = "";
  attemptsCountInput.value = "3";

  // Deshabilitar y limpiar campos de desbloqueo
  validateCodeInput.disabled = true;
  validateButton.disabled = true;
  validateCodeInput.value = "";

  // Limpiar resultado
  mostrarResultado("Sistema reiniciado. Configure el Código Secreto.", "info");
  console.clear(); // Limpiar consola para las nuevas pistas
}

// =========================================================================================
// CONEXIÓN DE EVENTOS AL DOM
// =========================================================================================

// Espera a que el DOM esté completamente cargado para adjuntar los listeners
document.addEventListener("DOMContentLoaded", () => {
  // 1. Conexión del botón GUARDAR (Asumimos que el formulario tiene un ID o capturamos el botón)
  const form = document.querySelector(".safe-box-form"); // Capturamos el formulario

  // El botón 'GUARDAR' tiene la clase 'save-button'
  if (saveButton) {
    saveButton.addEventListener("click", handleGuardar);
  } else if (form) {
    // Si el botón es type="submit", manejamos el submit del formulario
    form.addEventListener("submit", handleGuardar);
  }

  // 2. Conexión del botón VALIDAR CÓDIGO
  if (validateButton) {
    validateButton.addEventListener("click", handleValidar);
  }

  // 3. Conexión del botón RESET
  const resetButton = document.querySelector(".reset-button");
  if (resetButton) {
    resetButton.addEventListener("click", handleReset);
  }

  // Inicialmente, deshabilitar la parte de desbloqueo
  validateCodeInput.disabled = true;
  validateButton.disabled = true;

  // Añadimos un elemento de resultado al final del form-card-container (si el HTML no lo tiene)
  if (!resultDisplay) {
    const formCardContainer = document.querySelector(".form-card-container");
    if (formCardContainer) {
      const p = document.createElement("p");
      p.id = "result-display";
      p.style.marginTop = "20px";
      p.style.fontWeight = "600";
      p.style.textAlign = "center";
      formCardContainer.appendChild(p);
    }
  }

  // Mensaje de inicio
  mostrarResultado(
    "Ingrese el Código Secreto y la Cantidad de Intentos (1-5).",
    "info"
  );
});
