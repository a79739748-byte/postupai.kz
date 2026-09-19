// Переключение вкладок (табов)
function switchTab(tabId, btn) {
    // Скрываем все вкладки
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Убираем активный класс у всех кнопок
    let btns = document.querySelectorAll('.nav-btn');
    btns.forEach(b => b.classList.remove('active'));

    // Показываем нужную вкладку и активируем кнопку
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

// Калькулятор шансов
function checkChances() {
    let score = parseFloat(document.getElementById('score').value);
    let result = document.getElementById('result');

    if (isNaN(score) || score < 0 || score > 140) {
        result.style.backgroundColor = "#ffebee";
        result.innerHTML = "⚠️ Пожалуйста, введите корректный балл от 0 до 140.";
        return;
    }

    result.style.backgroundColor = "#e8f5e9";
    if (score >= 110) {
        result.innerHTML = `🔥 <strong>Отличный шанс (${score} б.)!</strong> Высокая вероятность получить грант на большинство специальностей.`;
    } else if (score >= 85) {
        result.innerHTML = `👍 <strong>Хороший шанс (${score} б.).</strong> Есть шансы на грант в региональных и инженерных направлениях.`;
    } else if (score >= 50) {
        result.innerHTML = `⚖️ <strong>Проходной балл (${score} б.).</strong> Рассмотрите целевые гранты или платное обучение.`;
    } else {
        result.innerHTML = `❌ <strong>Ниже порога (${score} б.).</strong> Минимальный балл — от 50 до 75.`;
    }
}

// Данные по ГОП и профессиям
const gopData = {
    'b057': {
        title: "B057 — Информационные технологии",
        score: "100–125 баллов",
        subjects: "Математика + Информатика / Физика + Математика",
        professions: ["Software Engineer", "Web-разработчик", "Backend/Frontend Developer", "DevOps Engineer"]
    },
    'b058': {
        title: "B058 — Информационная безопасность",
        score: "105–128 баллов",
        subjects: "Математика + Информатика",
        professions: ["Специалист по кибербезопасности", "Пентестер", "Аналитик угроз"]
    },
    'b062': {
        title: "B062 — Электротехника и энергетика",
        score: "75–95 баллов",
        subjects: "Физика + Математика",
        professions: ["Инженер-энергетик", "Специалист по возобновляемой энергетике", "Проектировщик сетей"]
    },
    'b053': {
        title: "B053 — Физика",
        score: "70–90 баллов",
        subjects: "Физика + Математика",
        professions: ["Физик-исследователь", "Лаборант-нанотехнолог", "Преподаватель физики"]
    },
    'b054': {
        title: "B054 — Математика и статистика",
        score: "80–100 баллов",
        subjects: "Физика + Математика",
        professions: ["Аналитик данных (Data Analyst)", "Актуарий", "Математик-моделист"]
    }
};

function showGopDetails() {
    let selected = document.getElementById('gopSelect').value;
    let data = gopData[selected];
    let detailsBox = document.getElementById('gopDetails');

    let profList = data.professions.map(p => `<li>${p}</li>`).join('');

    detailsBox.innerHTML = `
        <h3>${data.title}</h3>
        <p>📊 <strong>Проходной балл на грант (ориентир):</strong> ${data.score}</p>
        <p>📚 <strong>Профильные предметы:</strong> ${data.subjects}</p>
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

// Загружаем данные первого ГОП при старте
document.addEventListener('DOMContentLoaded', showGopDetails);