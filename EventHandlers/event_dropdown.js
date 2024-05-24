const dropdownButton = document.querySelector('.dropdown-button');
const dropdownOptions = document.querySelector('.dropdown-options');
  dropdownButton.addEventListener('click', () => {
  dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
});
