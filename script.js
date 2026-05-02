document.addEventListener('DOMContentLoaded', function () {
  const bookButtons = document.querySelectorAll('.btn-book');
  const heroButtons = document.querySelectorAll('.hero-actions .btn');

  const showBookingMessage = function () {
    alert('Thanks for choosing FreshRide! We\'ll send you to the booking section shortly.');
  };

  bookButtons.forEach((button) => {
    button.addEventListener('click', showBookingMessage);
  });

  heroButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.03)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
});
