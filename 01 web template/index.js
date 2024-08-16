// Get all pages
const pages = document.querySelectorAll('.page');

// Get the navigation links
const navLinks = document.querySelectorAll('.nav-stripe a');

// Function to show the current page
function showPage(pageId) {
  // Hide all pages
  pages.forEach((page) => {
    page.style.display = 'none';
  });

  // Show the current page
  const currentPage = document.getElementById(pageId);
  currentPage.style.display = 'block';

  // Update the active navigation link
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
  document.querySelector(`[href="#${pageId}"]`).classList.add('active');
}

// Add event listeners to navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const pageId = link.getAttribute('href').replace('#', '');
    showPage(pageId);
  });
});

// Show the initial page
showPage('page1');
