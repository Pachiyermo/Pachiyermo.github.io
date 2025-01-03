document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu');
    const menuToggle = document.querySelector('.header__menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('header__menu--open');
        });
    }

    /**
     * FOOTER
     */
    const currentYear = new Date().getFullYear();
    const footerCopy = document.querySelector('.footer__copy');
    if (footerCopy) {
        footerCopy.innerHTML = `&copy; ${currentYear} Colegio Santa María de Yermo`;
    }

    // Selecciona todos los contenedores de estrellas
    document.querySelectorAll('.card__rating').forEach((ratingElement) => {
        const maxStars = 5; // Número máximo de estrellas
        const stars = parseInt(ratingElement.getAttribute('data-stars'), 10) || 0; // Obtiene el valor de data-stars

        // Genera solo las estrellas activas (llenas)
        for (let i = 1; i <= stars && i <= maxStars; i++) {
            const star = document.createElement('span');
            star.textContent = '⭐';
            ratingElement.appendChild(star);
        }
    });

});