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
  const destino = formData.get('destinations'); // Obtener el valor del campo 'destinations'
  const fechaInicio = formData.get('fecha_inicio'); // Obtener el valor del campo 'fecha_inicio'
  const fechaFin = formData.get('fecha_fin'); // Obtener el valor del campo 'fecha_fin'
  const adultos = parseInt(formData.get('adultos'), 10) || 0;
  const ancianos = parseInt(formData.get('tercera_edad'), 10) || 0;
  const menores = parseInt(formData.get('menores'), 10) || 0;

  // Llamar a la función para calcular el precio estimado
  const total_price = travelPrice(destino, adultos, ancianos, menores);

  // Función para capitalizar texto
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  // Generar texto condicional según los valores
  let personasTexto = '';
  if (adultos > 0) personasTexto += `- <strong>${adultos}</strong> Adultos<br>`;
  if (ancianos > 0) personasTexto += `- <strong>${ancianos}</strong> De La 3ª Edad<br>`;
  if (menores > 0) personasTexto += `- <strong>${menores}</strong> Niños<br>`;

  // Inyectar los datos recopilados en el contenido del popup
  popupContent.innerHTML = `
    Gracias <strong>${capitalize(nombre)}</strong> por consultar con nosotros.<br>
    Confirmamos que solicitaste información para ir a <strong>${capitalize(destino)}</strong> para <strong>${adultos + ancianos + menores}</strong> personas:<br>
    ${personasTexto}
    El precio estimado será de <strong>${total_price}€</strong>.<br>
    Próximamente le informaremos al correo <strong>${email}</strong>.
  `;

  // Mostrar el popup y su superposición
  popup.style.display = 'block';
  popupOverlay.style.display = 'block';
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
function travelPrice(destino, adulto, anciano, menor) {
  let destino_price = 0; // Precio base del destino
  let person_price = 0; // Precio adicional por personas
  let total_price = 0; // Precio total calculado

  // Calcular el precio base según el destino seleccionado
  switch (destino) {
    case 'tirana':
      destino_price = 120;
      break;
    case 'durres':
      destino_price = 90;
      break;
    case 'shkoder':
      destino_price = 110;
      break;
    case 'berat':
      destino_price = 100;
      break;
    case 'vlora':
      destino_price = 95;
      break;
    case 'gjirokaster':
      destino_price = 105;
      break;
    default:
      console.log('Destino no especificado');
      return;
  }

  // Calcular el precio adicional por personas
  person_price = (150 * adulto) + (75 * anciano) + (50 * menor);

  // Calcular el precio total
  total_price = destino_price + person_price;

  return total_price;
}

/* #endregion */

// =========================
// REGIÓN: Fin del script
// =========================
/* #region Final */
// Fin del script. Aquí se puede añadir lógica adicional o extender funcionalidades en el futuro.
/* #endregion */
