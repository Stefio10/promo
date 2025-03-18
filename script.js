document.addEventListener('DOMContentLoaded', function () {
    // Animation au survol des produits
    const produits = document.querySelectorAll('.produit');
    produits.forEach(produit => {
        produit.addEventListener('mouseenter', () => {
            produit.style.transform = 'translateY(-10px)';
            produit.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
        });

        produit.addEventListener('mouseleave', () => {
            produit.style.transform = 'translateY(0)';
            produit.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Gestion du formulaire de contact
    const formulaireContact = document.querySelector('#contact form');
    if (formulaireContact) {
        formulaireContact.addEventListener('submit', function (e) {
            e.preventDefault();
            const nom = formulaireContact.querySelector('input[type="text"]').value;
            const email = formulaireContact.querySelector('input[type="email"]').value;
            const message = formulaireContact.querySelector('textarea').value;

            if (nom && email && message) {
                afficherNotification('Merci pour votre message ! Nous vous contacterons bientôt.', 'success');
                formulaireContact.reset();
            } else {
                afficherNotification('Veuillez remplir tous les champs.', 'error');
            }
        });
    }

    // Fonction pour afficher des notifications
    function afficherNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Supprimer la notification après 3 secondes
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Ajout d'un effet de défilement fluide pour les liens de navigation
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Ajout d'un effet de défilement fluide pour le bouton "Voir nos produits"
    const boutonProduits = document.querySelector('.button');
    if (boutonProduits) {
        boutonProduits.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Ajout d'un effet de chargement fluide pour les sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});