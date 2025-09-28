const translations = {
    ru: {
        welcome_title: 'Добро пожаловать в мир программирования',
        
        welcome_text_1: 'Откройте для себя бесконечные возможности создания программного обеспечения',
        welcome_text_2: 'Погрузитесь в захватывающий мир кода и технологий',
        welcome_text_3: 'Станьте частью сообщества талантливых разработчиков',
        welcome_text_4: 'Изучайте, создавайте, вдохновляйтесь вместе с нами',
        welcome_text_6: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_7: 'Программирование',
		welcome_text_8: 'Изучал в целях того чтоб делать для себя программы',
		welcome_text_9: 'Потом у меня получилось так что я начел помогать людям',
		welcome_text_10: 'И создавать свои программы',
		welcome_text_11: 'На самом деле это не очень сложно и понятно',
		welcome_text_12: 'Англиский язык вообще я незнаю',
		welcome_text_13: 'Так что ребят удачи вам так же изучать как и я',
		welcome_text_14: 'Начало создание сайта',
		welcome_text_15: '25 Сентября 2025',
		welcome_text_16: 'В эту дату я начел создание этого сайта без всяких шаблонов',
		welcome_text_17: 'Писал сайт через текстовый редактор Notepad++',
		welcome_text_18: 'Иногда в помощь вступала ИИ(Искуственный Интелект)',
		welcome_text_19: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_20: 'Программирование это не сложно главное понимать смысл и постарадться',
		welcome_text_21: 'Телеграмм Чат',
		welcome_text_123: '___________________________________________________',
		welcome_text_22: 'Rodina Helper',
		welcome_text_23: 'Данный скрипт был разработан для игры Родина РП',
		welcome_text_24: 'Он вам поможет во фракциях по типу всех фракций',
		welcome_text_25: 'Данный скрипт разрешен на родина рп',
		welcome_text_26: 'Он поможет вам избежать наказания за НРП дейтсвие по типу нет отыгровки чего либо',
		welcome_text_27: 'А так же функционал понятен и удобен',
		welcome_text_28: 'Удачного использование',
		welcome_text_29: 'Скачать',
		welcome_text_30: 'Laucher Rodina',
		welcome_text_31: 'Написал этот лаунчер за пару дней да да мало но зато удобно делал с нуля',
		welcome_text_32: 'Так что притензий не должно быть удачного использование',
		welcome_text_33: 'Каталог программ',
		welcome_text_34: 'Перекуп Громов - Помощник',
		welcome_text_35: 'Начало создание сайта',
		welcome_text_36: '25 Сентября 2025',
		welcome_text_37: 'Главное меню',
		welcome_text_38: 'Перекуп Громов - Помощник',
		welcome_text_39: 'Андрей Фил - Главный разработчик',
		welcome_text_40: 'Наша миссия',
		welcome_text_41: 'Мы стремимся сделать программирование доступным для каждого...',
		welcome_text_42: 'Наши скрипты всегда безопасны и надежны но иногда жалуется вирус тотал но это нормально',
		welcome_text_43: 'И если вы нашли баг или проблему с запуском скрипта в главном меню есть кнопка "Телеграмм Чат"',
		welcome_text_44: 'Мы делаем скрипты только для вас вашей безопасности и комфорта',
		welcome_text_45: 'Начало создание сайта',
		welcome_text_46: 'Начало создание сайта',
		welcome_text_47: 'Начало создание сайта',
		welcome_text_48: 'Начало создание сайта',
		welcome_text_49: 'Начало создание сайта',
		welcome_text_50: 'Начало создание сайта',
		welcome_text_51: 'Начало создание сайта',
		welcome_text_52: 'Начало создание сайта',
		welcome_text_53: 'Начало создание сайта',
		welcome_text_54: 'Начало создание сайта',
		welcome_text_55: 'Начало создание сайта',
		welcome_text_56: 'Начало создание сайта',
		welcome_text_57: 'Начало создание сайта',
		welcome_text_58: 'Начало создание сайта',
		welcome_text_59: 'Начало создание сайта',
		welcome_text_60: 'Начало создание сайта',
		welcome_text_61: 'Начало создание сайта',
		welcome_text_62: 'Начало создание сайта',
		welcome_text_63: 'Начало создание сайта',
		welcome_text_64: 'Начало создание сайта',
		welcome_text_65: 'Начало создание сайта',
		
        
        // Основные элементы меню
        home: 'Главная',
        about: 'О нас',
        programs: 'Программы',
        blog: 'Блог',
        
        // Дополнительные тексты
        learn_more: 'Узнать больше',
        start_now: 'Начать прямо сейчас',
        join_us: 'Присоединяйтесь к нам'
    },
    en: {
        home: 'Home',
        about: 'About',
        programs: 'Programs',
        blog: 'Blog',
        welcome_title: 'Welcome to the world of programming',
        welcome_text: 'Discover endless possibilities of software creation'
    }
};

let currentLang = 'ru';

function translateContent(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        element.textContent = translations[lang][key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    translateContent(currentLang);
    
    document.getElementById('lang-switch-ru').addEventListener('click', () => {
        translateContent('ru');
    });
    
    document.getElementById('lang-switch-en').addEventListener('click', () => {
        translateContent('en');
    });
});
