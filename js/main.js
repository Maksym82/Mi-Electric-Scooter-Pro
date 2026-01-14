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

const whiteScooter = document.getElementById('white-scooter');
const blackScooter = document.getElementById('black-scooter');
// const lightBtn = document.getElementById('light-btn');
// const darkBtn = document.getElementById('dark-btn');

lightBtn.addEventListener('click', () => {
  whiteScooter.classList.add('is-active');
  blackScooter.classList.remove('is-active');
  lightBtn.setAttribute('aria-pressed', 'true');
  darkBtn.setAttribute('aria-pressed', 'false');
});

darkBtn.addEventListener('click', () => {
  blackScooter.classList.add('is-active');
  whiteScooter.classList.remove('is-active');
  darkBtn.setAttribute('aria-pressed', 'true');
  lightBtn.setAttribute('aria-pressed', 'false');
});

// Tabs
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.advantages__tab');
  const panels = document.querySelectorAll('.advantages__panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (window.innerWidth >= 1440) {
        const target = tab.dataset.tab;

        // Сброс табов
        tabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });

        // Активный таб
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // Сброс панелей
        panels.forEach((p) => {
          p.classList.remove('is-active');
        });

        // Активная панель
        const activePanel = document.querySelector(
          `.advantages__panel[data-panel="${target}"]`
        );
        if (activePanel) {
          activePanel.classList.add('is-active');
        }
      }
    });
  });
});
