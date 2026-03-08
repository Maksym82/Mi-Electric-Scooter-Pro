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
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 10,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.my-next',
    prevEl: '.my-prev',
  },
});

// === Modal reviews ===

const reviewBtn = document.querySelector('.reviews__button');
const modal = document.getElementById('review-modal');
const closeBtn = modal.querySelector('.modal__close');
const form = document.getElementById('review-form');

const thankyouPopup = document.getElementById('thankyou-popup');
const thankyouClose = thankyouPopup.querySelector('.thankyou__close');

// открыть модалку
reviewBtn.addEventListener('click', () => {
  modal.classList.add('is-active');
});

// закрыть модалку
closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

// закрытие по клику вне окна
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('is-active');
  }
});

// обработка формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const message = form.message.value.trim();

  if (name && message) {
    console.log('Отзыв отправлен:', { name, message });
    form.reset();
    modal.classList.remove('is-active');
    thankyouPopup.classList.add('is-active');
  }
});

// закрытие попапа благодарности
thankyouClose.addEventListener('click', () => {
  thankyouPopup.classList.remove('is-active');
});

// закрытие по клику вне окна
thankyouPopup.addEventListener('click', (e) => {
  if (e.target === thankyouPopup) {
    thankyouPopup.classList.remove('is-active');
  }
});

// === Ask question ===
document.addEventListener('DOMContentLoaded', () => {
  const askBtn = document.getElementById('askBtn');
  const modalFaq = document.getElementById('modalFaq');
  const closeFaq = document.getElementById('closeFaq');
  const formFaq = modalFaq.querySelector('form');

  const thankyouPopup = document.getElementById('faq-thankyou');
  const thankyouClose = thankyouPopup.querySelector('.faq-thankyou__close');

  // открыть модалку FAQ
  askBtn.addEventListener('click', () => {
    modalFaq.classList.add('show');
  });

  // закрыть модалку FAQ
  closeFaq.addEventListener('click', () => {
    modalFaq.classList.remove('show');
  });

  // закрытие FAQ по клику вне окна
  modalFaq.addEventListener('click', (e) => {
    if (e.target === modalFaq) {
      modalFaq.classList.remove('show');
    }
  });

  // обработка формы FAQ
  formFaq.addEventListener('submit', (e) => {
    e.preventDefault();
    modalFaq.classList.remove('show');   // скрываем форму
    formFaq.reset();
    thankyouPopup.classList.add('show'); // показываем попап
  });

  // закрытие попапа кнопкой
  thankyouClose.addEventListener('click', () => {
    thankyouPopup.classList.remove('show');
  });

  // закрытие попапа по клику вне окна
  thankyouPopup.addEventListener('click', (e) => {
    if (e.target === thankyouPopup) {
      thankyouPopup.classList.remove('show');
    }
  });
});

// === Кнопки секции buy ===
const buyLightBtn = document.getElementById('buy-light-btn');
const buyDarkBtn = document.getElementById('buy-dark-btn');
const buyWhiteScooter = document.getElementById('buy-white-scooter');
const buyBlackScooter = document.getElementById('buy-black-scooter');

buyLightBtn.addEventListener('click', () => {
  // переключаем тему
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
  localStorage.setItem('theme', 'light');

  // переключаем картинки
  buyWhiteScooter.classList.add('is-active');
  buyBlackScooter.classList.remove('is-active');

  // aria-pressed для кнопок
  buyLightBtn.setAttribute('aria-pressed', 'true');
  buyDarkBtn.setAttribute('aria-pressed', 'false');
});

buyDarkBtn.addEventListener('click', () => {
  // переключаем тему
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');

  // переключаем картинки
  buyBlackScooter.classList.add('is-active');
  buyWhiteScooter.classList.remove('is-active');

  // aria-pressed для кнопок
  buyDarkBtn.setAttribute('aria-pressed', 'true');
  buyLightBtn.setAttribute('aria-pressed', 'false');
});


