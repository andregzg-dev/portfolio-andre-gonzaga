const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#nav');
const desktopViewport = window.matchMedia('(min-width: 761px)');

function setMenuOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen));
  navigation.classList.toggle('open', isOpen);
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    setMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

  if (event.key === 'Escape' && isOpen) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

desktopViewport.addEventListener('change', () => setMenuOpen(false));

// Sem JavaScript, os links continuam visíveis no celular.
menuButton.hidden = false;
document.documentElement.classList.add('js');
document.querySelector('#year').textContent = new Date().getFullYear();
