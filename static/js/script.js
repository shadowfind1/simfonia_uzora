document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to the server
            // For this example, we'll just show an alert
            alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
            
            // Reset the form
            this.reset();
        });
    }
    
    // Simple image gallery for portfolio
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // In a real implementation, this would open a modal or lightbox
            // For now, we'll just log to the console
            console.log('Opening portfolio item:', this.querySelector('h3').textContent);
        });
    });
    
    // Mobile menu toggle (would be implemented in a real site)
    // This is a placeholder for future implementation
});