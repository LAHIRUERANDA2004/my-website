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

// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close Menu When a Link is Clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Handle Send Message Form Submission
const messageForm = document.getElementById('messageForm');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Get form values
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate sending the message (you can replace this with an actual API call)
  console.log('Email:', email);
  console.log('Message:', message);

  // Show a success message
  alert('Your message has been sent!');

  // Clear the form
  messageForm.reset();
});
