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
// document.addEventListener('DOMContentLoaded', () => {
//   const askBtn = document.getElementById('askBtn');
//   const modalFaq = document.getElementById('modalFaq');
//   const closeFaq = document.getElementById('closeFaq');

//   // открыть модалку
//   askBtn.addEventListener('click', () => {
//     modalFaq.classList.add('show');
//   });

//   // закрыть модалку
//   closeFaq.addEventListener('click', () => {
//     modalFaq.classList.remove('show');
//   });

//   // закрытие по клику вне окна
//   window.addEventListener('click', (e) => {
//     if (e.target === modalFaq) {
//       modalFaq.classList.remove('show');
//     }
//   });
// });
// === Ask question ===
document.addEventListener('DOMContentLoaded', () => {
  const askBtn = document.getElementById('askBtn');
  const modalFaq = document.getElementById('modalFaq');
  const closeFaq = document.getElementById('closeFaq');
  const formFaq = modalFaq.querySelector('form');

  const modalThanks = document.getElementById('modalThanks');
  const closeThanks = document.getElementById('closeThanks');

  // открыть модалку FAQ
  askBtn.addEventListener('click', () => {
    modalFaq.classList.add('show');
  });

  // закрыть модалку FAQ
  closeFaq.addEventListener('click', () => {
    modalFaq.classList.remove('show');
  });

  // закрытие по клику вне окна
  modalFaq.addEventListener('click', (e) => {
    if (e.target === modalFaq) {
      modalFaq.classList.remove('show');
    }
  });

  // обработка формы FAQ
  formFaq.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = formFaq.name.value.trim();
    const email = formFaq.email.value.trim();
    const question = formFaq.question.value.trim();

    if (name && email && question) {
      console.log('Вопрос отправлен:', { name, email, question });
      formFaq.reset();
      modalFaq.classList.remove('show');
      modalThanks.classList.add('show');

      // Автоматическое закрытие благодарности через 3 секунды
      // setTimeout(() => {
      //   modalThanks.classList.remove('show');
      // }, 3000);
    }
  });

  // закрытие попапа благодарности
  closeThanks.addEventListener('click', () => {
    modalThanks.classList.remove('show');
  });

  // закрытие по клику вне окна
  modalThanks.addEventListener('click', (e) => {
    if (e.target === modalThanks) {
      modalThanks.classList.remove('show');
    }
  });
});

