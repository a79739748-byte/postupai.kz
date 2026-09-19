// Переключение вкладок
function switchTab(tabId, btn) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    let btns = document.querySelectorAll('.tab-btn');
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

// Калькулятор шансов
function checkChances() {
    let score = parseFloat(document.getElementById('score').value);
    let result = document.getElementById('result');

    if (isNaN(score) || score < 0 || score > 140) {
        result.style.borderLeftColor = "#e53e3e";
        result.innerHTML = "⚠️ <strong>Ошибка:</strong> Введите корректный балл от 0 до 140.";
        return;
    }

    result.style.borderLeftColor = "#4318ff";

    if (score >= 110) {
        result.innerHTML = `🔥 <strong>Отличный результат (${score} баллов)!</strong><br>Высокая вероятность получения гранта на большинство топовых специальностей.`;
    } else if (score >= 85) {
        result.innerHTML = `👍 <strong>Хороший шанс (${score} баллов).</strong><br>Есть отличные шансы пройти на грант в региональные и инженерные ВУЗы.`;
    } else if (score >= 50) {
        result.innerHTML = `⚖️ <strong>Проходной балл (${score} баллов).</strong><br>Вы преодолели порог. Рекомендуем рассмотреть региональные ВУЗы или платные программы.`;
    } else {
        result.innerHTML = `❌ <strong>Ниже порога (${score} баллов).</strong><br>Минимальный порог — от 50 до 75 баллов.`;
    }
}

// База ГОП по всем комбинациям предметов
const gopDatabase = {
    'phys-math': [
        { id: 'b057', name: 'B057 Информационные технологии', score: '100–125', profs: ['Software Engineer', 'Web-разработчик', 'Backend/Frontend Dev'] },
        { id: 'b062', name: 'B062 Электротехника и энергетика', score: '75–95', profs: ['Инженер-энергетик', 'Проектировщик электросетей'] },
        { id: 'b053', name: 'B053 Физика', score: '70–90', profs: ['Физик-исследователь', 'Нанотехнолог', 'Преподаватель'] },
        { id: 'b064', name: 'B064 Механика и металлообработка', score: '75–90', profs: ['Инженер-механик', 'Конструктор'] }
    ],
    'math-inf': [
        { id: 'b057', name: 'B057 Информационные технологии', score: '105–125', profs: ['IT-специалист', 'AI-разработчик', 'Системный архитектор'] },
        { id: 'b058', name: 'B058 Информационная безопасность', score: '110–128', profs: ['Специалист по кибербезопасности', 'Пентестер'] },
        { id: 'b059', name: 'B059 Коммуникации и комм. технологии', score: '95–115', profs: ['Сетевой инженер', 'Инженер связи'] }
    ],
    'eng-hist': [
        { id: 'b036', name: 'B036 Переводческое дело', score: '100–120', profs: ['Переводчик-Синхронист', 'Гиды-переводчики'] },
        { id: 'b041', name: 'B041 Международные отношения', score: '110–128', profs: ['Дипломат', 'Аналитик-международник'] }
    ],
    'geo-math': [
        { id: 'b044', name: 'B044 Менеджмент и управление', score: '95–115', profs: ['Project Manager', 'Бизнес-аналитик'] },
        { id: 'b091', name: 'B091 Туризм', score: '85–105', profs: ['Менеджер по туризму', 'Отельер'] }
    ],
    'bio-chem': [
        { id: 'b084', name: 'B084 Сестринское дело / Медицина', score: '105–125', profs: ['Врач', 'Медицинский исследователь'] },
        { id: 'b050', name: 'B050 Биология', score: '80–100', profs: ['Биолог', 'Биотехнолог'] }
    ],
    'kaz-lit': [
        { id: 'b034', name: 'B034 Филология', score: '85–110', profs: ['Редактор', 'Журналист', 'Филолог'] },
        { id: 'b017', name: 'B017 Подготовка учителей языка', score: '90–115', profs: ['Учитель языка и литературы'] }
    ]
};

// Обновление вариантов ГОП при смене предмета
function updateGopOptions() {
    let subject = document.getElementById('subject').value;
    let gopSelect = document.getElementById('gopSelect');
    
    let list = gopDatabase[subject] || [];
    gopSelect.innerHTML = list.map(item => `<option value="${item.id}">${item.name}</option>`).join('');

    showGopDetails();
}

// Отображение деталей выбранного ГОП
function showGopDetails() {
    let subject = document.getElementById('subject').value;
    let selectedId = document.getElementById('gopSelect').value;
    let detailsBox = document.getElementById('gopDetails');

    let list = gopDatabase[subject] || [];
    let item = list.find(g => g.id === selectedId) || list[0];

    if (!item) {
        detailsBox.innerHTML = "<p>Выберите направление.</p>";
        return;
    }

    let profList = item.profs.map(p => `<li>${p}</li>`).join('');

    detailsBox.innerHTML = `
        <h3>${item.name}</h3>
        <p>📊 <strong>Проходной балл на грант (прошлый год):</strong> ~${item.score}</p>
        <p>💼 <strong>Кем работать (профессии):</strong></p>
        <ul>${profList}</ul>
    `;
}

// Поиск ВУЗа
function searchUniversity() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.uni-card');

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    updateGopOptions();
});