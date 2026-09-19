// Словарь с текстами на 3 языках
const translations = {
    ru: {
        title: "Поступай KZ 🎓",
        subtitle: "Рассчитай свои шансы на грант и найди подходящий ВУЗ в Казахстане",
        calcTitle: "Проверка шансов на грант ЕНТ",
        scoreLabel: "Твой общий балл ЕНТ:",
        subjectLabel: "Комбинация профильных предметов:",
        btnCalc: "Рассчитать шансы",
        searchTitle: "Поиск ВУЗов Казахстана",
        searchPlaceholder: "Поиск по названию или городу...",
        resultDefault: "Введите балл и нажмите «Рассчитать шансы»."
    },
    kz: {
        title: "Поступай KZ 🎓",
        subtitle: "Грант алу мүмкіндігіңді есепте және Қазақстанның лайықты ЖОО-сын тап",
        calcTitle: "ҰБТ грант мүмкіндігін тексеру",
        scoreLabel: "Сеңің ҰБТ жалпы балың:",
        subjectLabel: "Бейіндік пәндер комбинациясы:",
        btnCalc: "Мүмкіндікті есептеу",
        searchTitle: "Қазақстан ЖОО-ларын іздеу",
        searchPlaceholder: "Атауы немесе қаласы бойынша іздеу...",
        resultDefault: "Баллды енгізіп, «Мүмкіндікті есептеу» батырмасын басыңыз."
    },
    en: {
        title: "Postupai KZ 🎓",
        subtitle: "Calculate your grant chances and find the right university in Kazakhstan",
        calcTitle: "Check UNT Grant Chances",
        scoreLabel: "Your total UNT score:",
        subjectLabel: "Combination of elective subjects:",
        btnCalc: "Calculate Chances",
        searchTitle: "Search Universities of Kazakhstan",
        searchPlaceholder: "Search by name or city...",
        resultDefault: "Enter score and click 'Calculate Chances'."
    }
};

// Функция переключения языка
function changeLanguage(lang) {
    // 1. Меняем активную кнопку
    let buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    let selectedBtn = document.getElementById('btn-' + lang);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }

    // 2. Обновляем тексты на странице
    if (translations[lang]) {
        if (document.getElementById('header-title')) document.getElementById('header-title').innerText = translations[lang].title;
        if (document.getElementById('header-sub')) document.getElementById('header-sub').innerText = translations[lang].subtitle;
        if (document.getElementById('calc-title')) document.getElementById('calc-title').innerText = translations[lang].calcTitle;
        if (document.getElementById('score-label')) document.getElementById('score-label').innerText = translations[lang].scoreLabel;
        if (document.getElementById('subject-label')) document.getElementById('subject-label').innerText = translations[lang].subjectLabel;
        if (document.getElementById('btn-calc')) document.getElementById('btn-calc').innerText = translations[lang].btnCalc;
        if (document.getElementById('search-title')) document.getElementById('search-title').innerText = translations[lang].searchTitle;
        
        let searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.placeholder = translations[lang].searchPlaceholder;
        }

        let resultBox = document.getElementById('result');
        if (resultBox && resultBox.innerText.includes('Введите') || resultBox.innerText.includes('Баллды') || resultBox.innerText.includes('Enter')) {
            resultBox.innerText = translations[lang].resultDefault;
        }
    }
}

// Функция расчета шансов на грант
function checkChances() {
    let scoreInput = document.getElementById('score').value;
    let score = parseFloat(scoreInput);
    let subject = document.getElementById('subject').value;
    let result = document.getElementById('result');

    if (isNaN(score) || score < 0 || score > 140) {
        result.style.borderColor = "#d32f2f";
        result.style.backgroundColor = "#ffebee";
        result.innerHTML = "⚠️ <strong>Ошибка / Қате:</strong> Введите балл от 0 до 140.";
        return;
    }

    result.style.borderColor = "#2e7d32";
    result.style.backgroundColor = "#f1f8e9";

    if (score >= 115) {
        result.innerHTML = `🔥 <strong>Отличный шанс на грант (${score} баллов)!</strong><br> Вы проходите на грант практически во все топовые ВУЗы Казахстана.`;
    } else if (score >= 95) {
        result.innerHTML = `👍 <strong>Хорошие шансы (${score} баллов).</strong><br> Высокий шанс получить грант в ведущих и региональных ВУЗах.`;
    } else if (score >= 75) {
        result.innerHTML = `⚖️ <strong>Средний результат (${score} баллов).</strong><br> Есть шансы получить грант в региональных университетах.`;
    } else if (score >= 50) {
        result.innerHTML = `ℹ️ <strong>Проходной балл (${score} баллов).</strong><br> Вы преодолели пороговый балл для платного отделения.`;
    } else {
        result.innerHTML = `❌ <strong>Ниже порога (${score} баллов).</strong><br> Минимальный пороговый балл — от 50 до 75.`;
    }
}

// Фильтрация ВУЗов по предмету
function filterUniversities() {
    let selectedSubject = document.getElementById('subject').value;
    let items = document.getElementsByClassName('uni-item');

    for (let i = 0; i < items.length; i++) {
        let categories = items[i].getAttribute('data-category');
        if (categories && categories.includes(selectedSubject)) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
    }
}

// Поиск ВУЗа
function searchUniversity() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementsByClassName('uni-item');

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        if (text.includes(input)) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }
    }
}