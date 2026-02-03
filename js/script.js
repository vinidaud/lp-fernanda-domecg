// ========================================
// FAQ Accordion
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');

        pergunta.addEventListener('click', () => {
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle do item clicado
            item.classList.toggle('active');
        });
    });

    // ========================================
    // Smooth Scroll para links internos
    // ========================================
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const headerOffset = 20;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // Animação de entrada ao scroll
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animatedElements = document.querySelectorAll('.card, .depoimento-card, .oferta-box, .bonus-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Adiciona classe visible quando elemento entra na viewport
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Adicionar link do WhatsApp
    // ========================================
    const whatsappLinks = document.querySelectorAll('.btn-whatsapp');
    const whatsappUrl = 'https://wa.me/5521967855806?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%A3o%20sobre%20o%20Minicurso%20Card%C3%A1pio%20Sem%20Drama&utm_source=direto&src=direto%7Cstory_fernanda%7Cstory_fernanda%7C%2Fm6s-a&sck=1759238247058_17592378739444';

    whatsappLinks.forEach(link => {
        link.href = whatsappUrl;
        link.target = '_blank';
    });
});
