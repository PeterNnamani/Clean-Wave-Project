document.addEventListener('DOMContentLoaded', function() {
// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
if (mobileMenuButton && mobileMenu) {
mobileMenuButton.addEventListener('click', function() {
mobileMenu.classList.toggle('hidden');
});
}
});
document.addEventListener('DOMContentLoaded', function() {
// Pricing toggle
const pricingButtons = document.querySelectorAll('.pricing-toggle button');
if (pricingButtons.length > 0) {
pricingButtons.forEach(button => {
button.addEventListener('click', function() {
pricingButtons.forEach(btn => {
btn.classList.remove('bg-primary', 'text-white');
btn.classList.add('text-gray-700');
});
this.classList.add('bg-primary', 'text-white');
this.classList.remove('text-gray-700');
});
});
}
});
document.addEventListener('DOMContentLoaded', function() {
// Form submission
const bookingForms = document.querySelectorAll('form');
bookingForms.forEach(form => {
form.addEventListener('submit', function(e) {
e.preventDefault();
alert('Thank you for your submission! We will contact you shortly.');
form.reset();
});
});
});