let currentLang = 'ru';

// База ВУЗов с ценами на платное отделение (в тенге за год) и мин. баллами
const universitiesData = [
  { name: "КазНУ им. аль-Фараби", city: "almaty", dorm: true, military: true, minScore: 75, paidScore: 50, price: "1 200 000 ₸", subjects: ["math-phys", "math-inf", "chem-bio", "geog-math", "hist-world"] },
  { name: "Satbayev University", city: "almaty", dorm: true, military: true, minScore: 65, paidScore: 50, price: "1 300 000 ₸", subjects: ["math-phys", "math-inf"] },
  { name: "МУИТ (IITU)", city: "almaty", dorm: true, military: true, minScore: 70, paidScore: 50, price: "1 150 000 ₸", subjects: ["math-inf", "math-phys"] },
  { name: "KBTU (КБТУ)", city: "almaty", dorm: true, military: false, minScore: 85, paidScore: 60, price: "1 500 000 ₸", subjects: ["math-inf", "math-phys"] },
  { name: "ЕНУ им. Л.Н. Гумилева", city: "astana", dorm: true, military: true, minScore: 75, paidScore: 50, price: "1 100 000 ₸", subjects: ["math-phys", "math-inf", "chem-bio", "geog-math"] },
  { name: "Astana IT University (AITU)", city: "astana", dorm: true, military: true, minScore: 80, paidScore: 50, price: "1 250 000 ₸", subjects: ["math-inf"] },
  { name: "ЮКУ им. М. Ауэзова", city: "shymkent", dorm: true, military: true, minScore: 60, paidScore: 50, price: "800 000 ₸", subjects: ["math-phys", "chem-bio", "math-inf"] },
  { name: "КарТУ им. Абылкаса Сагинова", city: "karaganda", dorm: true, military: true, minScore: 60, paidScore: 50, price: "850 000 ₸", subjects: ["math-phys"] }
];

const gopDatabase = {
    "v062": { name: "B062 Информационные технологии (IT)", score: "~85–125", jobs: ["Software Developer", "Data Scientist", "Cybersecurity Specialist"] },
    "v071": { name: "B071 Горное дело", score: "~75–95", jobs: ["Горный инженер", "Маркшейдер"] },
    "v084": { name: "B084 Медицина", score: "~105–125", jobs: ["Врач общей практики", "Хирург"] },
    "v044": { name: "B044 Финансы и экономика", score: "~85–115", jobs: ["Финансовый аналитик", "Экономист"] },
    "v038": { name: "B038 Юриспруденция", score: "~100–125", jobs: ["Юрист", "Адвокат"] }
};

const translations = {
    ru: {
        subtitle: "Рассчитай шансы на грант, платное и выбери ВУЗ",
        tabCalc: "Калькулятор",
        tabGop: "ГОП и Профессии",
        calcTitle: "Проверка шансов ЕНТ (Грант / Платка / Порог)",
        labelScore: "Твой общий балл ЕНТ (из 140):",
        labelSubject: "Комбинация профильных предметов:",
        labelCity: "Выберите город:",
        optAllCities: "Все города Казахстана",
        optPhysMath: "Физика + Математика",
        optMathInf: "Математика + Информатика",
        optChemBio: "Химия + Биология",
        optGeoMath: "География + Математика",
        optEngHist: "Английский + Всемирная история",
        checkDorm: "🏢 Нужно общежитие",
        checkMil: "🪖 Нужна военная кафедра",
        checkRural: "🌾 Есть сельская квота",
        btnCalc: "🚀 Рассчитать шансы и доступные ВУЗы",
        gopTitle: "Группы образовательных программ (ГОП)",
        gopLabel: "Выберите направление:"
    },
    kz: {
        subtitle: "Грант, ақылы бөлім мүмкіндігін есептеп, ЖОО таңда",
        tabCalc: "Калькулятор",
        tabGop: "ББТ және Мамандықтар",
        calcTitle: "ҰБТ мүмкіндігін тексеру (Грант / Ақылы / Шек)",
        labelScore: "ҰБТ жалпы балың (140-тан):",
        labelSubject: "Бейіндік пәндер комбинациясы:",
        labelCity: "Қаланы таңдаңыз:",
        optAllCities: "Барлық қалалар",
        optPhysMath: "Физика + Математика",
        optMathInf: "Математика + Информатика",
        optChemBio: "Химия + Биология",
        optGeoMath: "География + Математика",
        optEngHist: "Ағылшын тілі + Дүниежүзі тарихы",
        checkDorm: "🏢 Жатақхана керек",
        checkMil: "🪖 Әскери кафедра керек",
        checkRural: "🌾 Ауылдық квота бар",
        btnCalc: "🚀 Мүмкіндіктер мен ЖОО есептеу",
        gopTitle: "Білім беру бағдарламаларының топтары (ББТ)",
        gopLabel: "Бағытты таңдаңыз:"
    },
    en: {
        subtitle: "Calculate grant, paid tuition chances and select a university",
        tabCalc: "Calculator",
        tabGop: "Programs & Jobs",
        calcTitle: "UNT Chance Checker (Grant / Paid / Threshold)",
        labelScore: "Your total UNT score (out of 140):",
        labelSubject: "Profile subject combination:",
        labelCity: "Select city:",
        optAllCities: "All cities",
        optPhysMath: "Physics + Mathematics",
        optMathInf: "Mathematics + Computer Science",
        optChemBio: "Chemistry + Biology",
        optGeoMath: "Geography + Mathematics",
        optEngHist: "English + World History",
        checkDorm: "🏢 Need dormitory",
        checkMil: "🪖 Need military department",
        checkRural: "🌾 Have rural quota",
        btnCalc: "🚀 Calculate Chances & Universities",
        gopTitle: "Groups of Educational Programs",
        gopLabel: "Select direction:"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const gopSelect = document.getElementById('gop-select');
    if (gopSelect) {
        gopSelect.innerHTML = "";
        for (let key in gopDatabase) {
            let opt = document.createElement('option');
            opt.value = key;
            opt.innerText = gopDatabase[key].name;
            gopSelect.appendChild(opt);
        }
        updateGopInfo();
    }
});

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    if(tabName === 'calc') {
        document.getElementById('calc-tab').style.display = 'block';
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
    } else {
        document.getElementById('gop-tab').style.display = 'block';
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

function calculateGrant() {
    const score = parseInt(document.getElementById('ent-score').value);
    const subject = document.getElementById('subject-select').value;
    const city = document.getElementById('city-select').value;
    const needDorm = document.getElementById('dorm-check').checked;
    const needMilitary = document.getElementById('military-check').checked;
    const isRuralQuota = document.getElementById('rural-check').checked;
    const resultDiv = document.getElementById('calc-result');

    if (isNaN(score) || score < 0 || score > 140) {
        resultDiv.innerHTML = `<div style="padding:15px; background:#ffebee; border-left:5px solid #d32f2f; border-radius:6px; color:#c62828;">⚠️ Введите корректный балл от 0 до 140.</div>`;
        return;
    }

    const effectiveScore = isRuralQuota ? score + 5 : score;

    // Проверка порога (обычно 50 баллов, для нац. вузов выше)
    if (score < 50) {
        resultDiv.innerHTML = `<div style="padding:15px; background:#ffebee; border-left:5px solid #d32f2f; border-radius:6px;">❌ <b>Ниже порогового балла (${score} баллов).</b><br>Вы не набрали минимальный порог для поступления в ВУЗы РК (нужно минимум 50).</div>`;
        return;
    }

    // Фильтрация ВУЗов по гранту и платке
    const matchedUnis = universitiesData.filter(uni => {
        const matchesCity = (city === 'all' || uni.city === city);
        const matchesSubject = uni.subjects.includes(subject);
        const matchesDorm = !needDorm || uni.dorm;
        const matchesMilitary = !needMilitary || uni.military;
        const matchesThreshold = effectiveScore >= uni.paidScore; // Проходит хотя бы на платку
        return matchesCity && matchesSubject && matchesDorm && matchesMilitary && matchesThreshold;
    });

    if (matchedUnis.length === 0) {
        resultDiv.innerHTML = `<div style="padding:15px; background:#fff3e0; border-left:5px solid #ef6c00; border-radius:6px;"><h3>Подходящих ВУЗов не найдено</h3><p>Попробуйте изменить фильтры города или требований.</p></div>`;
    } else {
        let html = `<div style="padding:15px; background:#f1f8e9; border-left:5px solid #2e7d32; border-radius:6px;">
            <h3>📊 Результаты расчета для ${score} баллов:</h3>
            <p>✅ Вы преодолели пороговый балл! Доступные варианты:</p>
            <div style="margin-top:15px;">`;

        matchedUnis.forEach(uni => {
            let isGrant = effectiveScore >= uni.minScore;
            html += `
                <div style="background:white; padding:12px; border-radius:8px; margin-bottom:10px; border:1px solid #c8e6c9;">
                    <strong>${uni.name}</strong><br>
                    ${isGrant ? '🔥 <span style="color:#2e7d32; font-weight:bold;">Есть шанс на ГРАНТ</span> (мин. грант ~' + uni.minScore + ')' : '💰 <span style="color:#f57c00; font-weight:bold;">Доступно на ПЛАТНОЕ отделение</span> (мин. платно: ' + uni.paidScore + ')'}<br>
                    <small>💵 Стоимость контракта: <b>${uni.price} / год</b></small><br>
                    <small>🏢 Общежитие: ${uni.dorm ? 'Есть' : 'Нет'} | 🪖 Военка: ${uni.military ? 'Есть' : 'Нет'}</small>
                </div>`;
        });

        html += `</div></div>`;
        resultDiv.innerHTML = html;
    }
}

function updateGopInfo() {
    const gopKey = document.getElementById('gop-select').value;
    const data = gopDatabase[gopKey];
    if (!data) return;

    document.getElementById('gop-name').innerText = data.name;
    let profEl = document.getElementById('gop-professions');
    profEl.innerHTML = "";
    data.jobs.forEach(job => {
        let li = document.createElement('li');
        li.innerText = job;
        profEl.appendChild(li);
    });
}