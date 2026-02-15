document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simple contact form validation and feedback
    var form = document.getElementById('contactForm');
    var msg = document.getElementById('formMsg');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = form.name.value.trim();
            var email = form.email.value.trim();
            var message = form.message.value.trim();
            if (!name || !email || !message) {
                msg.textContent = 'Por favor preencha todos os campos.';
                msg.style.color = 'crimson';
                return;
            }
            msg.textContent = 'Mensagem enviada com sucesso! Obrigado.';
            msg.style.color = 'green';
            form.reset();
        });
    }
});