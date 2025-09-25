const translations = {
    ru: {
        welcome_title: 'Добро пожаловать в мир программирования',
        
        // Различные варианты приветственных текстов
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
		welcome_text_14: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_15: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_16: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_17: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_18: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_19: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_20: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_21: 'Ваш путь к успеху в мире IT начинается здесь',
		welcome_text_123: '___________________________________________________',
		
        
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
