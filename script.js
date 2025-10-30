
// javasript 
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navHeight = document.querySelector('.sticky-nav').offsetHeight;
            const extraSpace = 10;
            const targetPosition = targetElement.offsetTop - navHeight - extraSpace;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'

                        // NEW SCRIPT CLICKABLE CARD
                        document.querySelectorAll('.clickable-card').forEach(card => {
                    card.addEventListener('click', function () {
                        const url = this.getAttribute('data-url');
                        window.open(url, '_blank');
                    });
                    card.style.cursor = 'pointer';
                });

                // END NEW SCRIPT CLICKABLE CARD
            });
        }
    });
});

