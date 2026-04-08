(function() {
    "use strict";

    
    const btnMenu = document.getElementById('btnMenu');
    const navLinks = document.querySelector('.links');

    
    if (btnMenu && navLinks) {
        btnMenu.onclick = function() {
            navLinks.classList.toggle('active');
        };
    }

    
    document.querySelectorAll('.links a').forEach(link => {
        link.onclick = () => {
            if (navLinks) navLinks.classList.remove('active');
        };
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            
            if (targetId === "#") return;

            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    
    function reveal() {
        const reveals = document.querySelectorAll('.skill-card, .project-card, section');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                el.style.transition = "all 0.6s ease-out";
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); 
})();