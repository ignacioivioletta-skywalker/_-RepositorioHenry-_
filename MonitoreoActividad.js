// =========================================================================
// ARRAY PRINCIPAL
// =========================================================================

// Se debe crear un array vacío el cual guardará las diferentes actividades
let actividadesSospechosas = [];

// =========================================================================
// FUNCIONES DE UTILIDAD (Para validaciones)
// =========================================================================

/**
 * Valida si un string de riesgo es "bajo", "medio" o "alto".
 * @param {string} riesgo - El string a validar.
 * @returns {boolean} True si es válido, false si no.
 */
function esRiesgoValido(riesgo) {
  const riesgoNormalizado = riesgo.toLowerCase().trim();
  return (
    riesgoNormalizado === "bajo" ||
    riesgoNormalizado === "medio" ||
    riesgoNormalizado === "alto"
  );
}

// =========================================================================
// FUNCIÓN 1: AGREGAR ACTIVIDAD
// =========================================================================

/**
 * Agrega una nueva actividad sospechosa al array.
 * @param {string} descripcion - Descripción de la actividad.
 * @param {string} nivelRiesgo - Nivel de riesgo ("bajo", "medio", "alto").
 * @returns {string} Mensaje de éxito o de error de validación.
 */
function agregarActividad(descripcion, nivelRiesgo) {
  const desc = descripcion ? descripcion.trim() : "";
  const riesgo = nivelRiesgo ? nivelRiesgo.toLowerCase().trim() : "";

  // a. Validar strings vacíos
  if (!desc || !riesgo) {
    return "Descripcion o nivel de riesgo no valido";
  }

  // b. Validar nivel de riesgo
  if (!esRiesgoValido(riesgo)) {
    return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
  }

  // c. Agregar al array
  // Formato requerido: "Descripcion: 'descripcion', Riesgo - 'nivelRiesgo'"
  const nuevaActividad = `Descripcion: ${desc}, Riesgo - ${riesgo}`;
  actividadesSospechosas.push(nuevaActividad);

  // d. Retornar mensaje de éxito
  return `Actividad: '${desc}' con Nivel de riesgo: '${riesgo}' fue agregada con exito`;
}

// =========================================================================
// FUNCIÓN 2: ELIMINAR ACTIVIDAD SOSPECHOSA
// =========================================================================

/**
 * Elimina una actividad del array por su índice.
 * @param {*} indice - El índice (ID) de la actividad a eliminar.
 * @returns {string} Mensaje de éxito o de error de validación.
 */
function eliminarActividadSospechosa(indice) {
  // a. Validar que el índice sea de tipo Number
  const idx = Number(indice);

  if (isNaN(idx) || !Number.isInteger(idx)) {
    return "El indice no es valido, debe ser un numero";
  }

  // b. Validar el rango del índice (usamos < 0 o >= length para incluir el último elemento válido)
  if (idx < 0 || idx >= actividadesSospechosas.length) {
    return "El indice no es valido, se encuentra fuera del rango";
  }

  // c. Eliminar la actividad (Usamos splice)
  actividadesSospechosas.splice(idx, 1);

  return "Actividad eliminada con exito";
}

// =========================================================================
// FUNCIÓN 3: FILTRAR ACTIVIDADES POR RIESGO (Integra Callback)
// =========================================================================

/**
 * Filtra las actividades sospechosas por un nivel de riesgo específico.
 * @param {string} nivelRiesgo - El nivel de riesgo a filtrar ("bajo", "medio", "alto").
 * @returns {Array<string> | string} Nuevo array de actividades filtradas o mensaje de error/vacío.
 */
function filtrarActividadesPorRiesgo(nivelRiesgo) {
  const riesgo = nivelRiesgo ? nivelRiesgo.toLowerCase().trim() : "";

  // a. Validar string vacío
  if (!riesgo) {
    return "Nivel de riesgo no valido";
  }

  // b. Validar nivel de riesgo
  if (!esRiesgoValido(riesgo)) {
    return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
  }

  // c. Filtrar actividades (usando el método Array.prototype.filter y una función de callback)
  const actividadesFiltradas = actividadesSospechosas.filter((actividad) => {
    // La condición para el callback: chequear si la actividad contiene el string del riesgo
    // NOTA: Esto asume que el formato de guardado es "..., Riesgo - 'nivelRiesgo'"
    return actividad.includes(`Riesgo - ${riesgo}`);
  });

  // Caso de array filtrado vacío
  if (actividadesFiltradas.length === 0) {
    return "No hay actividades con este nivel de riesgo";
  }

  // Caso contrario, retornar el nuevo arreglo
  return actividadesFiltradas;
}

// =========================================================================
// FUNCIÓN 4: GENERAR REPORTE DE ACTIVIDADES (Integra Callback)
// =========================================================================

/**
 * Genera un nuevo array con el formato de reporte incluyendo el ID (índice).
 * @returns {Array<string> | string} Nuevo array con formato de reporte o mensaje de array vacío.
 */
function generarReportedeActividades() {
  // b. Validar si el array no contiene actividades
  if (actividadesSospechosas.length === 0) {
    return "No hay actividades para mostrar";
  }

  // a. Retornar nuevo array con la estructura "Id: 0, Descripcion: 'descripción', Riesgo - 'nivelRiesgo'"
  // Usamos el método Array.prototype.map y una función de callback
  const reporte = actividadesSospechosas.map((actividad, index) => {
    // La actividad ya tiene el formato: "Descripcion: 'desc', Riesgo - 'riesgo'"
    // Solo necesitamos añadir el ID al inicio
    return `Id: ${index} ${actividad}`;
  });

  return reporte;
}

// =========================================================================
// MANEJO DEL DOM (REQUISITOS MÍNIMOS DE INTERACCIÓN)
// =========================================================================

// Referencias a elementos del DOM (Usando los IDs de MonitoreoActividad.html)
const descInput = document.getElementById("descripcion-actividad");
const riesgoInput = document.getElementById("nivel-riesgo");
const eliminarIdInput = document.getElementById("eliminar-id");
const filtroRiesgoInput = document.getElementById("filtro-riesgo");
const agregarBtn = document.getElementById("agregar-actividad-btn");
const eliminarBtn = document.getElementById("eliminar-actividad-btn");
const mostrarBtn = document.getElementById("mostrar-actividades-btn");
const generarReporteBtn = document.getElementById("generar-reporte-btn");
const actividadesListado = document.getElementById("actividades-listado");

/**
 * Muestra mensajes de estado y actualiza el listado de actividades en el DOM.
 * @param {string | Array<string>} resultado - El resultado de la operación (mensaje o lista).
 * @param {boolean} esError - Indica si el resultado es un mensaje de error.
 * @param {boolean} actualizarListaGlobal - Indica si se debe mostrar el reporte global.
 */
function actualizarVista(
  resultado,
  esError = false,
  actualizarListaGlobal = true
) {
  // 1. Mostrar mensaje o resultado filtrado en el área de listado
  actividadesListado.innerHTML = ""; // Limpiar listado anterior

  if (typeof resultado === "string") {
    // Si es un mensaje (error, éxito o lista vacía)
    const p = document.createElement("p");
    p.textContent = resultado;
    p.style.color = esError ? "red" : "green";
    p.style.fontWeight = "bold";
    p.style.textAlign = "center";
    actividadesListado.appendChild(p);
  } else if (Array.isArray(resultado)) {
    // Si es una lista (filtrada o reporte)
    resultado.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      actividadesListado.appendChild(p);
    });
  }

  // 2. Si es una operación que modifica el array (agregar/eliminar),
  // y no fue un filtro, mostramos la lista completa para mantener la coherencia visual.
  if (actualizarListaGlobal && !esError) {
    // Solo si la operación fue exitosa, forzamos la actualización de la lista completa
    if (
      typeof resultado === "string" &&
      (resultado.includes("agregada con exito") ||
        resultado.includes("eliminada con exito"))
    ) {
      // Generamos el reporte y lo mostramos
      const reporte = generarReportedeActividades();
      // Limpiamos y mostramos el reporte debajo del mensaje de éxito
      actividadesListado.innerHTML = "";

      const pStatus = document.createElement("p");
      pStatus.textContent = resultado;
      pStatus.style.color = "green";
      pStatus.style.fontWeight = "bold";
      pStatus.style.textAlign = "center";
      actividadesListado.appendChild(pStatus);

      if (Array.isArray(reporte)) {
        reporte.forEach((item) => {
          const p = document.createElement("p");
          p.textContent = item;
          actividadesListado.appendChild(p);
        });
      }
    }
  }
}

// =========================================================================
// MANEJADORES DE EVENTOS
// =========================================================================

/** Maneja el evento de agregar actividad. (Requisito 1) */
function handleAgregarActividad() {
  const desc = descInput.value;
  const riesgo = riesgoInput.value;

  const resultado = agregarActividad(desc, riesgo);

  // Limpiar campos si la operación fue exitosa
  if (
    typeof resultado === "string" &&
    resultado.includes("agregada con exito")
  ) {
    descInput.value = "";
    riesgoInput.value = "";
    actualizarVista(resultado, false, true);
  } else {
    // Es un error
    actualizarVista(resultado, true, false);
  }
}

/** Maneja el evento de eliminar actividad. (Requisito 2) */
function handleEliminarActividad() {
  const id = eliminarIdInput.value;

  const resultado = eliminarActividadSospechosa(id);

  // Limpiar campo
  eliminarIdInput.value = "";

  // Si el resultado es un mensaje de error
  if (typeof resultado === "string" && resultado.includes("invalido")) {
    actualizarVista(resultado, true, false);
  } else {
    // Actividad eliminada con éxito
    actualizarVista(resultado, false, true);
  }
}

/** Maneja el evento de filtrar y mostrar actividades. (Requisito 3) */
function handleMostrarActividades() {
  const riesgo = filtroRiesgoInput.value;

  const resultado = filtrarActividadesPorRiesgo(riesgo);

  // Limpiar campo
  filtroRiesgoInput.value = "";

  // Si el resultado es un mensaje de error o array vacío
  if (typeof resultado === "string") {
    const esError = resultado.includes("invalido");
    actualizarVista(resultado, esError, false); // No forzar reporte global
  } else {
    // Es un array de resultados filtrados
    actualizarVista(resultado, false, false); // No forzar reporte global
  }
}

/** Maneja el evento de generar reporte. (Requisito 4) */
function handleGenerarReporte() {
  const reporte = generarReportedeActividades();

  if (typeof reporte === "string" && reporte.includes("No hay actividades")) {
    actualizarVista(reporte, false, false);
  } else {
    actualizarVista(reporte, false, false);
  }
}

// =========================================================================
// INICIALIZACIÓN
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Adjuntar manejadores de eventos a los botones
  if (agregarBtn) agregarBtn.addEventListener("click", handleAgregarActividad);
  if (eliminarBtn)
    eliminarBtn.addEventListener("click", handleEliminarActividad);
  if (mostrarBtn)
    mostrarBtn.addEventListener("click", handleMostrarActividades);
  if (generarReporteBtn)
    generarReporteBtn.addEventListener("click", handleGenerarReporte);

  // Mensaje inicial
  actualizarVista(
    "Sistema de Monitoreo listo. Agregue una actividad.",
    false,
    false
  );

  // NOTA: Para replicar el listado inicial de la imagen, se agregan actividades de ejemplo al cargar
  agregarActividad("asdf", "medio");
  agregarActividad("asdf", "medio");
  agregarActividad("asdf", "medio");
  agregarActividad("asdf", "alto");

  // Mostrar el listado inicial
  handleGenerarReporte();
});
