// === Мобильное меню ===
document.addEventListener("click", (e) => {
  const targetItem = e.target;
  if (targetItem.closest(".icon-menu") || targetItem.closest(".menu__link")) {
    document.documentElement.classList.toggle("menu-open");
  }
});