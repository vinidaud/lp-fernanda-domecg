// ========================================
// FAQ Accordion
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const pergunta = item.querySelector('.faq-pergunta');

        pergunta.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // ========================================
    // Animação de entrada ao scroll
    // ========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.card, .depoimento-card, .oferta-box, .bonus-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);

    // ========================================
    // Video playback speed
    // ========================================
    const video = document.querySelector('.iphone-screen video');
    if (video) {
        video.playbackRate = 2.0;
        video.addEventListener('play', function() {
            this.playbackRate = 2.0;
        });
        video.addEventListener('loadeddata', function() {
            this.playbackRate = 2.0;
        });
    }

    // ========================================
    // WhatsApp link
    // ========================================
    const whatsappLinks = document.querySelectorAll('.btn-whatsapp');
    whatsappLinks.forEach(link => {
        link.href = 'https://wa.me/5521967855806?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%A3o%20sobre%20o%20Minicurso%20Card%C3%A1pio%20Sem%20Drama';
        link.target = '_blank';
    });
});
