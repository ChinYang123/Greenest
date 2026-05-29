// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });

    // Mobile menu toggle (simple version for demo)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            alert('Mobile menu toggle would open a drawer here.');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction for AI form
    const aiBtn = document.querySelector('.ai-form .btn-primary');
    if (aiBtn) {
        aiBtn.addEventListener('click', () => {
            const originalText = aiBtn.innerHTML;
            aiBtn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Analyzing...';
            lucide.createIcons();
            
            setTimeout(() => {
                aiBtn.innerHTML = originalText;
                lucide.createIcons();
                document.querySelector('#ai-planner').scrollIntoView({ behavior: 'smooth' });
            }, 1500);
        });
    }
});
