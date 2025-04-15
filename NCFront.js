const reportButton = document.getElementById('reportButton');
const footerText = document.getElementById('footerText');

reportButton.addEventListener('mousedown', function() {
  this.classList.add('clicked');
});
reportButton.addEventListener('mouseup', function() {
  this.classList.remove('clicked');
});
reportButton.addEventListener('mouseleave', function() {
  this.classList.remove('clicked');
});

footerText.addEventListener('mousedown', function() {
  this.classList.add('clicked');
});
footerText.addEventListener('mouseup', function() {
  this.classList.remove('clicked');
});
footerText.addEventListener('mouseleave', function() {
  this.classList.remove('clicked');
});

reportButton.addEventListener('click', goToForm);
footerText.addEventListener('click', goToAbout);

function goToForm() {
  window.location.href = "https://forms.gle/sksVjvJtUQRTvEPx6"; //Replace form page
}
function goToAbout() {
  window.location.href = "about.html"; //Replace about page
}
