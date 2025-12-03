// Page transition handler
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        // Skip external links and anchors
        if (link.hostname !== window.location.hostname || link.getAttribute('href').startsWith('#')) {
            return;
        }
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.href;
            
            // Start fade out
            document.body.classList.add('page-exit');
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = target;
            }, 300);
        });
    });
});
