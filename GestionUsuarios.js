/**
 * =========================================================================
 * ASISTENTE DE SEGURIDAD - GESTIÓN DE USUARIOS
 * Lógica de negocio y manipulación del DOM para GestionUsuarios.html
 * =========================================================================
 */

// 1. ESTRUCTURA DE DATOS INICIAL
// El listado inicial de perfiles. Se ha ampliado ligeramente para más variedad.
var perfiles = [
  {
    usuario: "Alice",
    codigo: 1234,
    nivel_de_autorizacion: "bajo",
    antiguedad: 12,
  },
  {
    usuario: "Bob",
    codigo: 5678,
    nivel_de_autorizacion: "medio",
    antiguedad: 24,
  },
  {
    usuario: "Charlie",
    codigo: 9101,
    nivel_de_autorizacion: "alto",
    antiguedad: 36,
  },
  {
    usuario: "Diana",
    codigo: 1122,
    nivel_de_autorizacion: "admin",
    antiguedad: 48,
  },
  { usuario: "Eve", codigo: 334, nivel_de_autorizacion: "bajo", antiguedad: 6 },
  {
    usuario: "Frank",
    codigo: 5566,
    nivel_de_autorizacion: "medio",
    antiguedad: 12,
  },
  {
    usuario: "Grace",
    codigo: 7788,
    nivel_de_autorizacion: "alto",
    antiguedad: 18,
  },
  {
    usuario: "Hank",
    codigo: 9900,
    nivel_de_autorizacion: "admin",
    antiguedad: 30,
  },
  {
    usuario: "Ivy",
    codigo: 1235,
    nivel_de_autorizacion: "bajo",
    antiguedad: 36,
  },
  {
    usuario: "Jack",
    codigo: 5679,
    nivel_de_autorizacion: "medio",
    antiguedad: 48,
  },
  {
    usuario: "Karen",
    codigo: 9102,
    nivel_de_autorizacion: "alto",
    antiguedad: 6,
  },
  {
    usuario: "Leo",
    codigo: 1123,
    nivel_de_autorizacion: "admin",
    antiguedad: 24,
  },
];

// 2. OBJETO GESTOR DE PERFILES: 'asistente'
const asistente = {
  /**
   * Retorna un nuevo arreglo con valores de una propiedad específica,
   * o el arreglo completo si se elige 'todo'.
   * @param {string} opcion - La propiedad a extraer ('usuario', 'codigo', 'nivel_de_autorizacion', 'antiguedad', 'todo').
   * @returns {Array} Un arreglo con los valores solicitados o el arreglo de perfiles completo.
   */
  verPerfiles: function (opcion) {
    if (opcion === "todo") {
      // Retorna el arreglo completo para la visualización detallada
      return perfiles.map(
        (p) =>
          `${p.usuario} - ${p.codigo} - ${p.nivel_de_autorizacion} - ${p.antiguedad}`
      );
    }

    // Convierte el nombre de la opción a la clave del objeto (Ej: 'nombre' -> 'usuario')
    let clave = "";
    switch (opcion) {
      case "nombre":
        clave = "usuario";
        break;
      case "codigo":
        clave = "codigo";
        break;
      case "nivel":
        clave = "nivel_de_autorizacion";
        break;
      case "antiguedad":
        clave = "antiguedad";
        break;
      default:
        // Si la opción no es válida, retorna un array vacío o el arreglo completo
        return [];
    }

    // Utiliza map para extraer solo los valores de la clave elegida
    return perfiles.map((perfil) => perfil[clave]);
  },

  /**
   * Retorna los perfiles ordenados de mayor a menor según su antigüedad.
   * NO modifica el arreglo original (`perfiles`).
   * @returns {Array<object>} Un nuevo arreglo de perfiles ordenado por antigüedad (descendente).
   */
  verPerfilesPorAntiguedad: function () {
    // Usa slice() para crear una copia antes de ordenar, cumpliendo con no modificar el original.
    const perfilesOrdenados = perfiles
      .slice()
      .sort((a, b) => b.antiguedad - a.antiguedad);

    // Formatea el resultado para la visualización en el DOM
    return perfilesOrdenados.map(
      (p) =>
        `${p.usuario} - ${p.codigo} - ${p.nivel_de_autorizacion} - ${p.antiguedad}`
    );
  },

  /**
   * Retorna solamente los perfiles con nivel de autorización "admin".
   * @returns {Array<object>} Un nuevo arreglo con solo los perfiles de administradores.
   */
  verAdministradores: function () {
    // Utiliza filter para seleccionar solo los administradores
    const administradores = perfiles.filter(
      (perfil) => perfil.nivel_de_autorizacion === "admin"
    );

    // Formatea el resultado para la visualización en el DOM
    return administradores.map(
      (p) =>
        `${p.usuario} - ${p.codigo} - ${p.nivel_de_autorizacion} - ${p.antiguedad}`
    );
  },

  /**
   * Modifica el código de acceso de un usuario existente.
   * @param {string} usuario - El nombre de usuario a modificar.
   * @param {string|number} nuevoCodigo - El nuevo código de acceso de 4 dígitos.
   * @returns {string} Mensaje de estado (éxito o error).
   */
  modificarAcceso: function (usuario, nuevoCodigo) {
    // Validación 1: Código de acceso (debe ser un número de 4 dígitos)
    // Convertimos a string y usamos expresión regular o comprobamos longitud y que sean dígitos.
    const codigoStr = String(nuevoCodigo);
    if (!/^\d{4}$/.test(codigoStr)) {
      return "código de acceso inválido, debe contener solo 4 números";
    }

    // Búsqueda del usuario
    const indiceUsuario = perfiles.findIndex(
      (perfil) => perfil.usuario.toLowerCase() === usuario.toLowerCase()
    );

    // Validación 2: Usuario no encontrado
    if (indiceUsuario === -1) {
      return "usuario no encontrado";
    }

    // Modificación del código (usando el método de objeto para actualizar)
    perfiles[indiceUsuario].codigo = Number(codigoStr);

    // Retorno de éxito
    return "código de acceso modificado";
  },
};

// 3. MANIPULACIÓN DEL DOM Y LÓGICA DE EVENTOS

document.addEventListener("DOMContentLoaded", () => {
  // Referencia al contenedor de la lista de usuarios en el HTML
  const userListDisplay = document.querySelector(".user-list-display");

  // Función de utilidad para actualizar la visualización de resultados
  function renderResults(results) {
    // Limpiar contenido previo (excepto el encabezado de la lista)
    userListDisplay.innerHTML = `<p style="font-weight: 700; text-align: center; margin-bottom: 15px; color: var(--color-primary-text);">
            Usuario- Código - Nivel de autorización - Antigüedad
        </p>`;

    if (Array.isArray(results) && results.length > 0) {
      // Si el resultado es un array de strings (ya formateados)
      results.forEach((item) => {
        const p = document.createElement("p");
        p.textContent = item;
        userListDisplay.appendChild(p);
      });
    } else if (typeof results === "string") {
      // Si el resultado es un mensaje de error o éxito
      const p = document.createElement("p");
      p.textContent = `Resultado: ${results}`;
      p.style.textAlign = "center";
      p.style.fontWeight = "600";
      p.style.color =
        results.includes("modificado") || results.includes("encontrado")
          ? "green"
          : "red";
      userListDisplay.appendChild(p);
    } else {
      // Caso por defecto (e.g., opción de vista no seleccionada)
      const p = document.createElement("p");
      p.textContent = "Seleccione una opción de vista o ingrese datos válidos.";
      p.style.textAlign = "center";
      userListDisplay.appendChild(p);
    }
  }

  // Inicialmente, mostrar la lista completa
  renderResults(asistente.verPerfiles("todo"));

  // 3.1. GESTIÓN DE EVENTOS PARA "VER PERFILES"

  // Seleccionamos la fila del formulario que contiene el input "Ver Perfiles"
  const verPerfilesRow = document.querySelector(
    ".gestion-form .gestion-row:nth-child(1)"
  );
  const verPerfilesInput = verPerfilesRow.querySelector('input[type="text"]');
  const verPerfilesButton = verPerfilesRow.querySelector("button");

  verPerfilesButton.addEventListener("click", () => {
    const opcion = verPerfilesInput.value.toLowerCase().trim(); // 'Título'

    if (opcion === "") {
      renderResults(
        "Debe ingresar una opción de vista (todo, nombre, codigo, nivel, antiguedad)."
      );
      return;
    }

    // Mapeamos el valor del input a las opciones del método
    let vista;
    switch (opcion) {
      case "titulo": // El placeholder dice Título. Lo usamos como 'todo'
      case "todo":
        vista = "todo";
        break;
      case "nombre":
      case "usuario":
        vista = "nombre";
        break;
      case "codigo":
        vista = "codigo";
        break;
      case "nivel":
        vista = "nivel";
        break;
      case "antiguedad":
        vista = "antiguedad";
        break;
      default:
        renderResults(
          "Opción de vista no válida. Use: todo, nombre, codigo, nivel o antiguedad."
        );
        return;
    }

    const resultados = asistente.verPerfiles(vista);
    if (vista === "todo") {
      renderResults(resultados);
    } else {
      // Para las vistas de una sola columna, mostramos el título de la columna y la lista
      userListDisplay.innerHTML = `<p style="font-weight: 700; text-align: center; margin-bottom: 15px; color: var(--color-primary-text);">
                Listado de ${opcion.toUpperCase()}
            </p>`;
      resultados.forEach((item) => {
        const p = document.createElement("p");
        p.textContent = item;
        userListDisplay.appendChild(p);
      });
    }
  });

  // 3.2. GESTIÓN DE EVENTOS PARA "VER PERFILES POR ANTIGÜEDAD"

  const verAntiguedadRow = document.querySelector(
    ".gestion-form .gestion-row:nth-child(2)"
  );
  const verAntiguedadButton = verAntiguedadRow.querySelector("button");

  verAntiguedadButton.addEventListener("click", () => {
    const resultados = asistente.verPerfilesPorAntiguedad();

    userListDisplay.innerHTML = `<p style="font-weight: 700; text-align: center; margin-bottom: 15px; color: var(--color-primary-text);">
            Perfiles ordenados por Antigüedad (Mayor a Menor)
        </p>`;

    resultados.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      userListDisplay.appendChild(p);
    });
  });

  // 3.3. GESTIÓN DE EVENTOS PARA "VER ADMINISTRADORES"

  const verAdminRow = document.querySelector(
    ".gestion-form .gestion-row:nth-child(3)"
  );
  const verAdminButton = verAdminRow.querySelector("button");

  verAdminButton.addEventListener("click", () => {
    const resultados = asistente.verAdministradores();

    userListDisplay.innerHTML = `<p style="font-weight: 700; text-align: center; margin-bottom: 15px; color: var(--color-primary-text);">
            Listado de Perfiles Administradores
        </p>`;

    if (resultados.length > 0) {
      resultados.forEach((item) => {
        const p = document.createElement("p");
        p.textContent = item;
        userListDisplay.appendChild(p);
      });
    } else {
      renderResults(
        "No se encontraron perfiles con nivel de autorización 'admin'."
      );
    }
  });

  // 3.4. GESTIÓN DE EVENTOS PARA "MODIFICAR ACCESO" (ACTUALIZAR)

  const actualizarButton = document.querySelector(".update-button");
  const usuarioInput = document.getElementById("mod-usuario");
  const codigoInput = document.getElementById("mod-codigo");

  actualizarButton.addEventListener("click", () => {
    const usuario = usuarioInput.value.trim();
    // Usamos Number() para asegurar que el código se pase como número (o string de número) al método
    const nuevoCodigo = codigoInput.value.trim();

    if (usuario === "") {
      renderResults("Error: El campo Usuario no puede estar vacío.");
      return;
    }
    if (nuevoCodigo === "") {
      renderResults(
        "Error: El campo Nuevo código de acceso no puede estar vacío."
      );
      return;
    }

    // Llamada al método del asistente
    const mensaje = asistente.modificarAcceso(usuario, nuevoCodigo);
    renderResults(mensaje);

    // Limpiar campos después de la operación
    usuarioInput.value = "";
    codigoInput.value = "";
  });
});
