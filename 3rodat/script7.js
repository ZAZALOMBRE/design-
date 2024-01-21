document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    document.querySelectorAll('section img').forEach(img => {
        img.onclick = () => {
            document.querySelector('.pop-img').style.display = 'block';
            document.querySelector('.pop-img img').src = img.getAttribute('src');
        }
    });

    document.querySelector('.pop-img span').onclick = () => {
        document.querySelector('.pop-img').style.display = 'none';
    };
  
 
    
  
});;
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        cards.forEach((card) => {
            if (isElementInViewport(card) && !card.classList.contains('animated')) {
                card.classList.add('animated');
            }
        });
    }

    // Initial check on page load
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
});
document.addEventListener('DOMContentLoaded', function () {
    const fadeCard1 = document.getElementById('fadeCard1');
    const fadeCard2 = document.getElementById('fadeCard2');
    const fadeCard3 = document.getElementById('fadeCard3');
    const fadeCard4 = document.getElementById('fadeCard4');

    const fadeCards = [fadeCard1, fadeCard2, fadeCard3, fadeCard4];

    fadeCards.forEach((card, index) => {
        // Use setTimeout to add the 'visible' class to each card with a delay
        setTimeout(() => {
            card.style.opacity = 1;
        }, index * 300); // Adjust the delay (in milliseconds) as needed
    });
});

