// === Мобильное меню ===
document.addEventListener('click', (e) => {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu') || targetItem.closest('.menu__link')) {
    document.documentElement.classList.toggle('menu-open');
  }
});

const body = document.body;
const lightBtn = document.getElementById('light-btn');
const darkBtn = document.getElementById('dark-btn');

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
} else {
  body.classList.add('light-theme');
}

// Слушатели
lightBtn.addEventListener('click', () => {
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
  localStorage.setItem('theme', 'light');
});

darkBtn.addEventListener('click', () => {
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');
});
