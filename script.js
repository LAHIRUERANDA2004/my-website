// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll animation for navigation bar
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = '#1a1a1a';
      nav.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
      nav.style.backgroundColor = '#ff6600';
      nav.style.boxShadow = 'none';
    }
  });

  // Background Bubbles Animation (Automatic)
const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
  const bubble = document.createElement('span');
  bubble.style.setProperty('--i', Math.random() * 10 + 2);
  bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
  bubblesContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 10000); // Remove bubble after animation ends
}

// Create bubbles automatically
setInterval(createBubble, 500);