// menu.js

// Toggle main dropdown menu
function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('show');
}

// Toggle submenu
function toggleSubMenu(event) {
  event.stopPropagation();
  const submenu = document.getElementById('subMenu');
  submenu.classList.toggle('show');
}

// Show and hide page sections based on menu click
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('#dropdownMenu a, #subMenu a');
  const sections = document.querySelectorAll('section');

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target.textContent.trim();

      // Hide all sections
      sections.forEach(section => section.style.display = 'none');

      // Show the matching section
      const section = document.getElementById(target.toLowerCase());
      if (section) {
        section.style.display = 'block';
      }
    });
  });
});