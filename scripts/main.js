// Animación de splash screen Netflix
window.addEventListener('DOMContentLoaded', () => {
    const splashContainer = document.querySelector('.splash-container');
    const background = document.querySelector('.background');
    const navbar = document.querySelector('.navbar');
    const mainContent = document.querySelector('.main-content');
    
    // Activar la transición del fondo cuando aparece la imagen 1
    setTimeout(() => {
        background.classList.add('bg-transition');
    }, 500);
    
    // Remover el splash después de la animación completa
    setTimeout(() => {
        splashContainer.style.animation = 'fadeOutSplash 1.5s ease-out forwards';
        
        setTimeout(() => {
            splashContainer.style.display = 'none';
            // Mostrar navbar y contenido principal
            navbar.classList.add('show');
            mainContent.classList.add('show');
        }, 1500);
    }, 2000);
});