// === Мобильное меню ===
document.addEventListener('click', (e) => {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu') || targetItem.closest('.menu__link')) {
    document.documentElement.classList.toggle('menu-open');
  }
});

// === Переключение тем ===
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

// === Tabs ===
document.querySelectorAll('section').forEach((section) => {
  const tabs = section.querySelectorAll('.advantages__tab');
  const panels = section.querySelectorAll('.advantages__panel');

  if (tabs.length && panels.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        // Снимаем активность только внутри этой секции
        tabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        panels.forEach((p) => p.classList.remove('is-active'));

        // Активируем выбранный таб
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const target = tab.getAttribute('data-tab');
        const panel = section.querySelector(`[data-panel="${target}"]`);
        if (panel) {
          panel.classList.add('is-active');
        }
      });
    });
  }
});

// === Swiper ===

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 768px
    640: {
      slidesPerView: 1.5,
      spaceBetween: 38,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.my-next',
    prevEl: '.my-prev',
  },
});
