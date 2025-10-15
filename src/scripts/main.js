// Инициализация Swiper для тарифов
const tariffsSwiper = new Swiper('.tariffs__swiper', {
    slidesPerView: 1,  // Один слайд на мобильных
    spaceBetween: 10,
    breakpoints: {
        768: { slidesPerView: 2 },  // Два слайда на планшете
        1024: { slidesPerView: 4 }  // Четыре на десктопе
    }
});

// Фильтрация тарифов
document.querySelectorAll('.tariffs__filter').forEach(button => {
    button.addEventListener('click', () => {
        const type = button.getAttribute('data-type');  // Получаем тип
        // Логика: показываем 4 слайда (в реальном проекте фильтруем массив)
        tariffsSwiper.slideTo(0);  // Переходим к первому слайду
    });
});

// Попап для кнопки "Подключить"
document.querySelectorAll('.tariffs__button').forEach(button => {  // Предполагаем класс кнопки
    button.addEventListener('click', (e) => {
        e.preventDefault();  // Предотвращаем дефолт
        document.getElementById('popup').style.display = 'block';  // Показываем попап
    });
});

// Закрытие попапа
document.querySelector('.popup__close').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});

// Бургер-меню
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
burger.addEventListener('click', () => {
    nav.classList.toggle('active');  // Показ/скрытие меню
});

// Подменю с затемнением
document.querySelectorAll('.header__nav-item--submenu').forEach(item => {
    item.addEventListener('mouseover', () => {
        document.getElementById('overlay').style.display = 'block';  // Затемнение
        item.querySelector('.header__submenu').style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        document.getElementById('overlay').style.display = 'none';
        item.querySelector('.header__submenu').style.display = 'none';
    });
});

// Яндекс Карта
ymaps.ready(() => {
    const map = new ymaps.Map('map', {
        center: [46.347, 48.027],  // Координаты Астрахани
        zoom: 10
    });
    document.getElementById('mapIcon').addEventListener('click', () => {
        // Показываем изображение (вместо попапа, как указано)
        alert('Показать assets/real-adress.webp');  // В реальном проекте — модальный попап
    });
});

// Слайдер партнёров
const partnersSwiper = new Swiper('.partners__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,  // Бесконечная прокрутка
    autoplay: { delay: 7000 }  // Каждые 7 секунд
});

// Изменение цвета SVG при наведении
document.querySelectorAll('.footer__icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.fill = '#A9A9A9';  // Изменяем цвет
    });
    icon.addEventListener('mouseout', () => {
        icon.style.fill = 'initial';  // Возвращаем
    });
});