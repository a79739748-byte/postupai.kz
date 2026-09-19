// Переключение вкладок (табов)
function switchTab(tabId, btn) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    let btns = document.querySelectorAll('.tab-btn');
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

// Калькулятор шансов на грант
function checkChances() {
    let score = parseFloat(document.getElementById('score').value);
    let result = document.getElementById('result');

    if (isNaN(score) || score < 0 || score > 140) {
        result.style.borderLeftColor = "#e53e3e";
        result.innerHTML = "⚠️ <strong>Ошибка:</strong> Введите корректный балл от 0 до 140.";
        return;
    }

    result.style.borderLeftColor = "#4318ff";

    if (score >= 115) {
        result.innerHTML = `🔥 <strong>Отличный результат (${score} баллов)!</strong><br>Высокая вероятность получения гранта практически на все топовые специальности и ВУЗы.`;
    } else if (score >= 90) {
        result.innerHTML = `👍 <strong>Хороший шанс (${score} баллов).</strong><br>Есть отличные шансы пройти на грант в большинство национальных, региональных и профильных ВУЗов.`;
    } else if (score >= 65) {
        result.innerHTML = `⚖️ <strong>Средний результат (${score} баллов).</strong><br>Есть шансы на грант в региональных ВУЗах, на технические или аграрные специальности.`;
    } else if (score >= 50) {
        result.innerHTML = `ℹ️ <strong>Проходной балл (${score} баллов).</strong><br>Вы преодолели минимальный порог для поступления на платное отделение.`;
    } else {
        result.innerHTML = `❌ <strong>Ниже порога (${score} баллов).</strong><br>Минимальный порог для подачи документов в ВУЗы — от 50 до 75 баллов в зависимости от направления.`;
    }
}

// Полная база ГОП и профессий
const gopDatabase = {
    'phys-math': [
        { id: 'b057', name: 'B057 Информационные технологии', score: '105–125', profs: ['Software Engineer', 'Web-разработчик', 'Backend / Frontend Developer', 'DevOps-инженер', 'Системный архитектор'] },
        { id: 'b053', name: 'B053 Физика', score: '70–90', profs: ['Физик-исследователь', 'Инженер-лаборант', 'Нанотехнолог', 'Преподаватель физики'] },
        { id: 'b054', name: 'B054 Математика и статистика', score: '80–105', profs: ['Data Analyst', 'Математик-моделист', 'Аналитик данных', 'Актуарий'] },
        { id: 'b062', name: 'B062 Электротехника и энергетика', score: '75–95', profs: ['Инженер-энергетик', 'Проектировщик электросетей', 'Специалист по ВИЭ', 'Электромеханик'] },
        { id: 'b063', name: 'B063 Электроника и автоматизация', score: '80–100', profs: ['Инженер по автоматизации', 'Специалист по АСУ ТП', 'Робототехник', 'Схемотехник'] },
        { id: 'b064', name: 'B064 Механика и металлообработка', score: '70–88', profs: ['Инженер-механик', 'Конструктор машиностроения', 'Технолог обработывающих производств'] },
        { id: 'b071', name: 'B071 Горное дело и добыча полезных ископаемых', score: '75–92', profs: ['Горный инженер', 'Маркшейдер', 'Инженер по буровым работам'] },
        { id: 'b074', name: 'B074 Градостроительство, строительные работы и гражданское строительство', score: '80–102', profs: ['Инженер-строитель', 'Архитектор-проектировщик', 'Сметчик', 'Инженер ГИП'] }
    ],
    'math-inf': [
        { id: 'b057', name: 'B057 Информационные технологии', score: '105–125', profs: ['Fullstack-разработчик', 'Мобильный разработчик (iOS/Android)', 'AI / ML-инженер', 'Продуктовый аналитик'] },
        { id: 'b058', name: 'B058 Информационная безопасность', score: '110–128', profs: ['Специалист по кибербезопасности', 'Пентестер', 'Аналитик Security Operations Center (SOC)', 'Криптограф'] },
        { id: 'b059', name: 'B059 Коммуникации и коммуникационные технологии', score: '90–110', profs: ['Сетевой инженер (Cisco/MikroTik)', 'Инженер телекоммуникаций', 'Администратор VoIP / Сводных сетей'] }
    ],
    'bio-chem': [
        { id: 'b084', name: 'B084 Сестринское дело', score: '95–115', profs: ['Медицинская сестра / брат расширенной практики', 'Медицинский координатор'] },
        { id: 'b086', name: 'B086 Медицина', score: '115–135', profs: ['Врач общей практики', 'Хирург', 'Терапевт', 'Педиатр', 'Узкий специалист'] },
        { id: 'b087', name: 'B087 Стоматология', score: '120–138', profs: ['Врач-стоматолог', 'Стоматолог-ортопед', 'Хирург-стоматолог'] },
        { id: 'b088', name: 'B088 Фармация', score: '100–120', profs: ['Провизор', 'Фармацевт-технолог', 'Разработчик лекарственных средств'] },
        { id: 'b050', name: 'B050 Биология', score: '80–100', profs: ['Биолог', 'Лаборант-генетик', 'Микробиолог', 'Эколог-биолог'] },
        { id: 'b051', name: 'B051 Биотехнология', score: '90–112', profs: ['Биотехнолог', 'Инженер пищевых и фарм-биотехнологий', 'Исследователь ДНК'] },
        { id: 'b052', name: 'B052 Химия', score: '80–100', profs: ['Химик-аналитик', 'Инженер химического производства', 'Лаборант ОКК'] },
        { id: 'b080', name: 'B080 Ветеринария', score: '65–85', profs: ['Ветеринарный врач', 'Ветеринарно-санитарный эксперт'] }
    ],
    'eng-hist': [
        { id: 'b036', name: 'B036 Переводческое дело', score: '105–122', profs: ['Переводчик-синхронист', 'Письменный / технический переводчик', 'Локализатор ПО'] },
        { id: 'b041', name: 'B041 Международные отношения', score: '112–130', profs: ['Дипломат', 'Консул', 'Аналитик внешней политики', 'Специалист по международным связям'] },
        { id: 'b018', name: 'B018 Подготовка учителей иностранного языка', score: '95–118', profs: ['Учитель английского / второго иностранного языка', 'Методист', 'Преподаватель языковых курсов'] }
    ],
    'geo-math': [
        { id: 'b044', name: 'B044 Менеджмент и управление', score: '98–118', profs: ['Project Manager', 'Бизнес-аналитик', 'HR-директор', 'Операционный менеджер'] },
        { id: 'b045', name: 'B045 Аудит и налогообложение', score: '95–115', profs: ['Аудитор', 'Налоговый консультант', 'Финансовый контролер'] },
        { id: 'b046', name: 'B046 Финансы, экономика, банковское и страховое дело', score: '100–122', profs: ['Финансовый аналитик', 'Инвестиционный банкир', 'Риск-менеджер', 'Экономист'] },
        { id: 'b047', name: 'B047 Маркетинг и реклама', score: '92–114', profs: ['Маркетолог', 'SMM / Digital-стратег', 'Brand Manager', 'Product Manager'] },
        { id: 'b091', name: 'B091 Туризм', score: '85–105', profs: ['Менеджер по туризму', 'Турагент', 'Управляющий отелем', 'Гид-экскурсовод'] }
    ],
    'kaz-lit': [
        { id: 'b034', name: 'B034 Филология', score: '85–108', profs: ['Филолог', 'Литературный редактор', 'Корректор', 'Контент-райтер'] },
        { id: 'b042', name: 'B042 Журналистика и репортерское дело', score: '90–115', profs: ['Журналист', 'Репортер', 'Телевещатель', 'PR-специалист', 'Копирайтер'] },
        { id: 'b017', name: 'B017 Подготовка учителей языка и литературы', score: '90–112', profs: ['Учитель языка и литературы', 'Педагог-методист', 'Репетитор'] }
    ]
};

// Обновление списка ГОП при выборе профильных предметов
function updateGopOptions() {
    let subject = document.getElementById('subject').value;
    let gopSelect = document.getElementById('gopSelect');
    
    let list = gopDatabase[subject] || [];
    gopSelect.innerHTML = list.map(item => `<option value="${item.id}">${item.name}</option>`).join('');

    showGopDetails();
}

// Отображение информации о выбранном ГОП
function showGopDetails() {
    let subject = document.getElementById('subject').value;
    let selectedId = document.getElementById('gopSelect').value;
    let detailsBox = document.getElementById('gopDetails');

    let list = gopDatabase[subject] || [];
    let item = list.find(g => g.id === selectedId) || list[0];

    if (!item) {
        detailsBox.innerHTML = "<p>Выберите направление из списка выше.</p>";
        return;
    }

    let profList = item.profs.map(p => `<li>${p}</li>`).join('');

    detailsBox.innerHTML = `
        <h3>${item.name}</h3>
        <p>📊 <strong>Проходной балл на грант (ориентир прошлых лет):</strong> ~${item.score}</p>
        <p>💼 <strong>Доступные профессии по этому направлению:</strong></p>
        <ul>${profList}</ul>
    `;
}

// Поиск ВУЗов по поисковой строке
function searchUniversity() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.uni-card');

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}

// Инициализация загрузки списка при открытии страницы
document.addEventListener('DOMContentLoaded', () => {
    updateGopOptions();
});