// script.js
document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.querySelector('.animated-text');
    
    // Плавное появление текста
    setTimeout(() => {
        animatedText.classList.add('show');
    }, 500);
});
// Дополнительные функции script.js
function smoothScroll() {
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
 e.preventDefault();
 document.querySelector(this.getAttribute('href')).scrollIntoView({
 behavior: 'smooth'
 });
 });
 });
}

document.addEventListener('DOMContentLoaded', () => {
 smoothScroll();
 
 // Анимация при прокрутке
 window.addEventListener('scroll', () => {
 let scrollPosition = window.scrollY;
 
 document.querySelectorAll('.scroll-animate').forEach(el => {
 if (el.offsetTop < scrollPosition + window.innerHeight * 0.75) {
 el.classList.add('visible');
 }
 });
 });
});

document.addEventListener('DOMContentLoaded', () => {
  // Добавляем класс fade-in после загрузки страницы
  document.body.classList.add('fade-in');
  
  // Убираем класс для повторного появления при обновлении
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.remove('fade-in');
    }, 1000);
  });
});
