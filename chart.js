// ===================================
// CHART.JS CONFIGURATION
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('revenueChart');
    
    if (ctx) {
        // ===================================
        // REVENUE DISTRIBUTION CHART
        // ===================================
        const revenueChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    'Conseil Stratégique',
                    'Ingénierie de Projet',
                    'Formation',
                    'Plateforme Digitale',
                    'Événementiel'
                ],
                datasets: [{
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: [
                        '#1e3a8a',
                        '#8b0000',
                        '#d4af37',
                        '#1e293b',
                        '#a52a2a'
                    ],
                    borderColor: [
                        '#ffffff',
                        '#ffffff',
                        '#ffffff',
                        '#ffffff',
                        '#ffffff'
                    ],
                    borderWidth: 3,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                family: 'Inter',
                                size: 12,
                                weight: '500'
                            },
                            color: '#343a40',
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(30, 58, 138, 0.95)',
                        titleColor: '#d4af37',
                        bodyColor: '#ffffff',
                        borderColor: '#d4af37',
                        borderWidth: 2,
                        padding: 15,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                return `${label}: ${value}%`;
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 2000,
                    easing: 'easeOutQuart'
                },
                cutout: '60%'
            }
        });
    }
});

// ===================================
// CHART ANIMATION ON SCROLL
// ===================================
const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('chart-visible');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.economic-chart').forEach(chart => {
    chartObserver.observe(chart);
});

console.log('Chart system initialized');