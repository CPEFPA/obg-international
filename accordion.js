// ===================================
// ACCORDION SYSTEM
// ===================================

const axeCards = document.querySelectorAll('.axe-card');

// ===================================
// ACCORDION FUNCTIONALITY
// ===================================
axeCards.forEach(card => {
    const toggle = card.querySelector('.axe-toggle');
    const content = card.querySelector('.axe-content');
    
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Close other cards (optional - remove for multiple open)
        axeCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
                const otherToggle = otherCard.querySelector('.axe-toggle i');
                otherToggle.classList.remove('fa-minus');
                otherToggle.classList.add('fa-plus');
            }
        });
        
        // Toggle current card
        card.classList.toggle('active');
        
        const icon = toggle.querySelector('i');
        if (card.classList.contains('active')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
    
    // Also allow clicking on the card header
    const header = card.querySelector('.axe-header');
    header.addEventListener('click', () => {
        toggle.click();
    });
});

// ===================================
// OPEN FIRST CARD BY DEFAULT
// ===================================
if (axeCards.length > 0) {
    const firstToggle = axeCards[0].querySelector('.axe-toggle');
    setTimeout(() => {
        firstToggle.click();
    }, 1000);
}

// ===================================
// KEYBOARD NAVIGATION FOR ACCORDIONS
// ===================================
axeCards.forEach(card => {
    const toggle = card.querySelector('.axe-toggle');
    
    toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle.click();
        }
    });
});

// ===================================
// ACCORDION ANIMATION ENHANCEMENT
// ===================================
axeCards.forEach(card => {
    const content = card.querySelector('.axe-content');
    
    // Add smooth height transition
    content.style.transition = 'max-height 0.5s ease-in-out';
    
    // Observe when card becomes visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    // Initial state
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    observer.observe(card);
});

console.log('Accordion system initialized');