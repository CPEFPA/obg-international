// ===================================
// NAVIGATION SYSTEM (Mobile & Desktop)
// ===================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const dropdowns = document.querySelectorAll('.dropdown');

// 1. Ouvrir / Fermer le menu mobile au clic sur le hamburger
if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Empêche le clic de se propager
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Empêche le scroll du site quand le menu est ouvert
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// 2. Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// 3. Gérer les sous-menus (dropdowns) sur mobile
dropdowns.forEach(dropdown => {
    const navLink = dropdown.querySelector('.nav-link');
    
    navLink.addEventListener('click', (e) => {
        // Uniquement sur mobile (écran < 992px)
        if (window.innerWidth <= 991) {
            e.preventDefault(); // Empêche le lien de changer de page immédiatement
            
            // Ferme les autres menus ouverts
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Ouvre/Ferme le menu actuel
            dropdown.classList.toggle('active');
        }
    });
});

// 4. Fermer le menu automatiquement quand on clique sur un lien final
document.querySelectorAll('.dropdown-menu a, .nav-link[href^="index.html"], .nav-link[href="index.html"]').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 991) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });
});

console.log('✅ Navigation mobile corrigée et active');