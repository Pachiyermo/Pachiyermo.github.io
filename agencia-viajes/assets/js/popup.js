// =========================
// REGIÓN: Variables de referencia
// =========================
/* #region Variables */
// Referencias a los elementos del DOM utilizando sus IDs
const form = document.getElementById('form'); // Formulario principal
const popup = document.getElementById('popup'); // Contenedor del popup
const popupOverlay = document.getElementById('popup__overlay'); // Superposición del fondo del popup
const popupContent = document.getElementById('popup__content'); // Contenedor para los datos del popup
const closePopup = document.getElementById('popup__close'); // Botón para cerrar el popup
/* #endregion */

// =========================
// REGIÓN: Manejar el envío del formulario
// =========================
/* #region Manejo del formulario */
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Recopilar datos del formulario utilizando FormData
  const formData = new FormData(form);
  const nombre = formData.get('nombre'); // Obtener el valor del campo 'nombre'
  const email = formData.get('email'); // Obtener el valor del campo 'email'
  const fecha = formData.get('fecha'); // Obtener el valor del campo 'fecha'

  // Inyectar los datos recopilados en el contenido del popup
  popupContent.innerHTML = `
    <strong>Nombre:</strong> ${nombre}<br>
    <strong>Correo electrónico:</strong> ${email}<br>
    <strong>Fecha de nacimiento:</strong> ${fecha}
  `;

  // Mostrar el popup y su superposición
  popup.style.display = 'block';
  popupOverlay.style.display = 'block';

  // Llamar a la función para calcular y mostrar el precio
  travelPrice();
});
/* #endregion */

// =========================
// REGIÓN: Manejar el cierre del popup
// =========================
/* #region Manejo del popup */
closePopup.addEventListener('click', () => {
  // Ocultar el popup y la superposición cuando se hace clic en el botón de cerrar
  popup.style.display = 'none';
  popupOverlay.style.display = 'none';
});

popupOverlay.addEventListener('click', () => {
  // Permitir cerrar el popup al hacer clic en cualquier parte de la superposición
  popup.style.display = 'none';
  popupOverlay.style.display = 'none';
});
/* #endregion */

// =========================
// REGIÓN: Calcular precio del destino
// =========================
/* #region Calcular precio */
function travelPrice() {
  const destino = document.querySelector('.destination-select').value; // Obtener el destino seleccionado
  const adulto = parseInt(document.querySelector('#adultos').value, 10) || 0; // Número de adultos
  const anciano = parseInt(document.querySelector('#tercera-edad').value, 10) || 0; // Número de ancianos
  const menor = parseInt(document.querySelector('#menores').value, 10) || 0; // Número de menores
  let destino_price = 0; // Precio base del destino
  let person_price = 0; // Precio adicional por personas
  let total_price = 0; // Precio total calculado

  // Calcular el precio base según el destino seleccionado
  switch (destino) {
    case 'ksamil':
      destino_price = 1000;
      break;
    case 'dhermi':
      destino_price = 800;
      break;
    case 'gjirokaster':
      destino_price = 600;
      break;
    case 'berat':
      destino_price = 650;
      break;
    case 'theth':
      destino_price = 700;
      break;
    case 'valbona':
      destino_price = 750;
      break;
    default:
      console.log('Destino no especificado');
      return;
  }

  // Calcular el precio adicional por personas
  person_price = (150 * adulto) + (75 * anciano) + (50 * menor);

  // Calcular el precio total
  total_price = destino_price + person_price;

  // Mostrar el precio estimado en la consola
  console.log(`El precio estimado es de ${total_price}€`);
}

/* #endregion */

// =========================
// REGIÓN: Fin del script
// =========================
/* #region Final */
// Fin del script. Aquí se puede añadir lógica adicional o extender funcionalidades en el futuro.
/* #endregion */
