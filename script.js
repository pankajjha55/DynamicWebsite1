document.querySelector('form').addEventListener('submit', function(event) {
  alert('Thank you for reaching out to us!');
  event.preventDefault(); // This prevents form submission
});
