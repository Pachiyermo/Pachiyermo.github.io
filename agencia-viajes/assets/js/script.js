// =========================
// REGIÓN: DOMContentLoaded
// =========================
/* #region DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
    // =========================
    // REGIÓN: Manejo del Menú
    // =========================
    /* #region Manejo del Menú */
    const menu = document.querySelector('.header__menu'); // Menú principal del header
    const menuToggle = document.querySelector('.header__menu-toggle'); // Botón para abrir/cerrar el menú

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Alternar clase para abrir/cerrar el menú
            menu.classList.toggle('header__menu--open');
        });
    }
    /* #endregion */

    // =========================
    // REGIÓN: Footer dinámico
    // =========================
    /* #region Footer */
    const currentYear = new Date().getFullYear(); // Obtener el año actual
    const footerCopy = document.querySelector('.footer__copy'); // Contenedor del copyright en el footer

    if (footerCopy) {
        // Actualizar el contenido del footer con el año actual
        footerCopy.innerHTML = `&copy; ${currentYear} Colegio Santa María de Yermo`;
    }
    /* #endregion */

    // =========================
    // REGIÓN: Calificación con estrellas
    // =========================
    /* #region Calificación con Estrellas */
    // Selecciona todos los elementos con clase 'card__rating'
    document.querySelectorAll('.card__rating').forEach((ratingElement) => {
        const maxStars = 5; // Número máximo de estrellas permitidas
        const stars = parseInt(ratingElement.getAttribute('data-stars'), 10) || 0; // Valor de data-stars o 0 si no existe

        // Generar las estrellas activas según el valor de data-stars
        for (let i = 1; i <= stars && i <= maxStars; i++) {
            const star = document.createElement('span'); // Crear un elemento <span> para cada estrella
            star.textContent = '⭐'; // Agregar el carácter de estrella
            ratingElement.appendChild(star); // Añadir la estrella al contenedor
        }
    });
    /* #endregion */
});
/* #endregion */

// =========================
// REGIÓN: Recarga de página
// =========================
/* #region Función Reload */
/**
 * Función para recargar la página eliminando los parámetros de la URL.
 */
function reload() {
    window.location.href.split('?')[0]; // Eliminar cualquier query string
    window.location.reload(); // Recargar la página
}
/* #endregion */
