// Add event listener to navigation menu
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionID = link.getAttribute('href');
    const section = document.querySelector(sectionID);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle mobile menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Validate contact form
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorMessage = document.querySelector('.error-message');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  
  // Reset error messages
  errorMessage.innerHTML = '';
  nameInput.classList.remove('invalid');
  emailInput.classList.remove('invalid');
  messageInput.classList.remove('invalid');
  
  // Validate name input
  if (nameInput.value === '') {
    errorMessage.innerHTML += 'Please enter your name.<br>';
    nameInput.classList.add('invalid');
  }
  
  // Validate email input
  if (emailInput.value === '') {
    errorMessage.innerHTML += 'Please enter your email address.<br>';
    emailInput.classList.add('invalid');
  } else if (!isValidEmail(emailInput.value)) {
    errorMessage.innerHTML += 'Please enter a valid email address.<br>';
    emailInput.classList.add('invalid');
  }
  
  // Validate message input
  if (messageInput.value === '') {
    errorMessage.innerHTML += 'Please enter a message.<br>';
    messageInput.classList.add('invalid');
  }
  
  // If all inputs are valid, submit form
  if (errorMessage.innerHTML === '') {
    contactForm.submit();
  }
});

// Helper function to validate email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
