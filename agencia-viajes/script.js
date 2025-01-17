// Referencias a los elementos
const form = document.getElementById('myForm');
const popup = document.getElementById('popup');
const popupOverlay = document.getElementById('popupOverlay');
const popupContent = document.getElementById('popupContent');
const closePopup = document.getElementById('closePopup');

// Manejar el envío del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío del formulario
  
  // Recopilar datos del formulario
  const formData = new FormData(form);
  const nombre = formData.get('nombre');
  const email = formData.get('email');
  const fecha = formData.get('fecha');
  
  // Mostrar datos en el popup
  popupContent.innerHTML = `
    <strong>Nombre:</strong> ${nombre}<br>
    <strong>Correo electrónico:</strong> ${email}<br>
    <strong>Fecha de nacimiento:</strong> ${fecha}
  `;
  
  // Mostrar el popup
  popup.style.display = 'block';
  popupOverlay.style.display = 'block';
});

// Cerrar el popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  popupOverlay.style.display = 'none';
});
popupOverlay.addEventListener('click', () => {
  popup.style.display = 'none';
  popupOverlay.style.display = 'none';
});

function reload() {
  windoy.location.href.split('?')[0];
  window.location.reload();
}