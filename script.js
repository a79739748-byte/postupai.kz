let currentLang = 'ru';

const universitiesData = [
  { name: "КазНУ им. аль-Фараби", city: "almaty", dorm: true, military: true, minScore: 75, paidScore: 50, price: "1 200 000 ₸", subjects: ["math-phys", "math-inf", "chem-bio", "geog-math", "hist-world"] },
  { name: "Satbayev University", city: "almaty", dorm: true, military: true, minScore: 70, paidScore: 50, price: "1 350 000 ₸", subjects: ["math-phys", "math-inf", "creative"] },
  { name: "МУИТ (IITU)", city: "almaty", dorm: true, military: true, minScore: 70, paidScore: 50, price: "1 150 000 ₸", subjects: ["math-inf", "math-phys"] },
  { name: "KBTU (КБТУ)", city: "almaty", dorm: true, military: false, minScore: 85, paidScore: 60, price: "1 500 000 ₸", subjects: ["math-inf", "math-phys"] },
  { name: "КазНПУ им. Абая", city: "almaty", dorm: true, military: false, minScore: 70, paidScore: 50, price: "1 000 000 ₸", subjects: ["hist-world", "creative"] },
  { name: "КазНАИ им. Т. Жургенова", city: "almaty", dorm: true, military: false, minScore: 65, paidScore: 50, price: "1 100 000 ₸", subjects: ["creative"] },
  { name: "ЕНУ им. Л.Н. Гумилева", city: "astana", dorm: true, military: true, minScore: 75, paidScore: 50, price: "1 100 000 ₸", subjects: ["math-phys", "math-inf", "chem-bio", "geog-math", "hist-world", "creative"] },
  { name: "Astana IT University", city: "astana", dorm: true, military: true, minScore: 80, paidScore: 50, price: "1 250 000 ₸", subjects: ["math-inf"] },
  { name: "ЮКУ им. М. Ауэзова", city: "shymkent", dorm: true, military: true, minScore: 60, paidScore: 50, price: "800 000 ₸", subjects: ["math-phys", "chem-bio", "math-inf", "geog-math", "hist-world", "creative"] }
];

const gopDatabase = [
  {
    subject: "math-phys",
    nameRu: "B071 Горное дело и добыча полезных ископаемых",
    nameKz: "B071 Тау-кен ісі және пайдалы қазбаларды өндіру",
    nameEn: "B071 Mining and Mineral Extraction",
    score: "~75–95",
    jobs: ["Горный инженер", "Маркшейдер", "Инженер по буровым работам", "Геолог"]
  },
  {
    subject: "math-phys",
    nameRu: "B070 Электроэнергетика и электротехника",
    nameKz: "B070 Электрэнергетика және электротехника",
    nameEn: "B070 Electric Power Engineering",
    score: "~70–95",
    jobs: ["Инженер-электрик", "Энергетик", "Специалист по ВИЭ"]
  },
  {
    subject: "math-inf",
    nameRu: "B062 Информационные технологии (IT)",
    nameKz: "B062 Ақпараттық технологиялар (IT)",
    nameEn: "B062 Information Technology (IT)",
    score: "~85–125",
    jobs: ["Software Developer (Программист)", "Data Scientist", "Cybersecurity Specialist", "Web-разработчик"]
  },
  {
    subject: "math-inf",
    nameRu: "B061 ИТ-инженерные специальности",
    nameKz: "B061 ІТ-инженерия мамандықтары",
    nameEn: "B061 IT Engineering",
    score: "~75–110",
    jobs: ["Сетевой инженер", "Системный администратор", "IoT-специалист"]
  },
  {
    subject: "chem-bio",
    nameRu: "B084 Медицина",
    nameKz: "B084 Медицина",
    nameEn: "B084 Medicine",
    score: "~105–125",
    jobs: ["Врач общей практики", "Хирург", "Педиатр", "Кардиолог"]
  },
  {
    subject: "chem-bio",
    nameRu: "B091 Стоматология",
    nameKz: "B091 Стоматология",
    nameEn: "B091 Dentistry",
    score: "~110–130",
    jobs: ["Врач-стоматолог (терапевт, ортопед, хирург)"]
  },
  {
    subject: "geog-math",
    nameRu: "B044 Финансы, экономика, банковское дело",
    nameKz: "B044 Қаржы, экономика, банк ісі",
    nameEn: "B044 Finance, Economics, Banking",
    score: "~85–115",
    jobs: ["Финансовый аналитик", "Экономист", "Банкир", "Инвестиционный менеджер"]
  },
  {
    subject: "geog-math",
    nameRu: "B046 Менеджмент и маркетинг",
    nameKz: "B046 Менеджмент және маркетинг",
    nameEn: "B046 Management and Marketing",
    score: "~80–110",
    jobs: ["Маркетолог", "Project Manager", "HR-менеджер", "Логист"]
  },
  {
    subject: "hist-world",
    nameRu: "B038 Право (Юриспруденция)",
    nameKz: "B038 Құқықтану (Юриспруденция)",
    nameEn: "B038 Law (Jurisprudence)",
    score: "~100–125",
    jobs: ["Юрист", "Адвокат", "Судья", "Прокурор"]
  },
  {
    subject: "hist-world",
    nameRu: "B011 Педагогика по языковым специальностям",
    nameKz: "B011 Тілдік мамандықтар бойынша педагогика",
    nameEn: "B011 Language Teacher Education",
    score: "~80–105",
    jobs: ["Учитель иностранного языка", "Лингвист-переводчик", "Преподаватель"]
  },
  {
    subject: "creative",
    nameRu: "B030 Аудиовизуальные средства и медиапроизводство",
    nameKz: "B030 Аудиовизуалды құралдар және медиа өндіріс",
    nameEn: "B030 Audiovisual Media Production",
    score: "~70–100 (творческий + ЕНТ)",
    jobs: ["Режиссер кино", "Видеомонтажер", "Моушн-дизайнер"]
  },
  {
    subject: "creative",
    nameRu: "B031 Мода, дизайн и интерьер",
    nameKz: "B031 Сән, дизайн және интерьер",
    nameEn: "B031 Fashion, Interior and Graphic Design",
    score: "~70–105 (творческий + ЕНТ)",
    jobs: ["Графический дизайнер", "Дизайнер интерьера", "Фэшн-дизайнер (модельер)"]
  },
  {
    subject: "creative",
    nameRu: "B032 Архитектура",
    nameKz: "B032 Архитектура",
    nameEn: "B032 Architecture",
    score: "~80–115 (творческий + ЕНТ)",
    jobs: ["Архитектор-проектировщик", "Градостроитель", "Ландшафтный архитектор"]
  }
];

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
        optCreative: "🎨 Творческий экзамен",
        checkDorm: "🏢 Нужно общежитие",
        checkMil: "🪖 Нужна военная кафедра",
        checkRural: "🌾 Есть сельская квота",
        btnCalc: "🚀 Рассчитать шансы и доступные ВУЗы",
        gopTitle: "Выбор профессий по профильным предметам",
        gopSubLabel: "Выберите свои профильные предметы:"
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
        optCreative: "🎨 Шығармашылық емтихан",
        checkDorm: "🏢 Жатақхана керек",
        checkMil: "🪖 Әскери кафедра керек",
        checkRural: "🌾 Ауылдық квота бар",
        btnCalc: "🚀 Мүмкіндіктер мен ЖОО есептеу",
        gopTitle: "Бейіндік пәндер бойынша мамандықтарды таңдау",
        gopSubLabel: "Бейіндік пәндеріңізді таңдаңыз:"
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
        optCreative: "🎨 Creative Exam",
        checkDorm: "🏢 Need dormitory",
        checkMil: "🪖 Need military department",
        checkRural: "🌾 Have rural quota",
        btnCalc: "🚀 Calculate Chances & Universities",
        gopTitle: "Careers by Profile Subjects",
        gopSubLabel: "Select your profile subjects:"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    updateGopList();
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
        updateGopList();
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
    updateGopList();
}

function updateGopList() {
    const selectedSubject = document.getElementById('gop-subject-select').value;
    const container = document.getElementById('gop-results-container');
    container.innerHTML = "";

    const filteredGops = gopDatabase.export ? [] : gopDatabase.filter(g => g.subject === selectedSubject);

    if (filteredGops.length === 0) {
        container.innerHTML = `<p>По данной комбинации предметов пока нет направлений.</p>`;
        return;
    }

    filteredGops.forEach(gop => {
        let name = currentLang === 'kz' ? gop.nameKz : (currentLang === 'en' ? gop.nameEn : gop.nameRu);
        let card = document.createElement('div');
        card.style.cssText = "background:#f8f9fa; border:1px solid #dcdfe6; padding:15px; border-radius:10px; margin-bottom:15px;";
        let jobsHtml = gop.jobs.map(j => `<li>${j}</li>`).join('');
        
        card.innerHTML = `
            <h3 style="color:#0d47a1; margin-top:0;">${name}</h3>
            <p>📊 <b>${currentLang === 'kz' ? 'Өтпелі балдар' : 'Проходной балл'}:</b> ${gop.score}</p>
            <p>💼 <b>${currentLang === 'kz' ? 'Қолжетімді мамандықтар' : 'Доступные профессии'}:</b></p>
            <ul style="margin: 5px 0 0 20px; padding:0;">${jobsHtml}</ul>
        `;
        container.appendChild(card);
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

    if (score < 50) {
        resultDiv.innerHTML = `<div style="padding:15px; background:#ffebee; border-left:5px solid #d32f2f; border-radius:6px;">❌ <b>Ниже порогового балла (${score} баллов).</b><br>Нужно минимум 50 баллов.</div>`;
        return;
    }

    const matchedUnis = universitiesData.filter(uni => {
        const matchesCity = (city === 'all' || uni.city === city);
        const matchesSubject = uni.subjects.includes(subject);
        const matchesDorm = !needDorm || uni.dorm;
        const matchesMilitary = !needMilitary || uni.military;
        const matchesThreshold = effectiveScore >= uni.paidScore;
        return matchesCity && matchesSubject && matchesDorm && matchesMilitary && matchesThreshold;
    });

    if (matchedUnis.length === 0) {
        resultDiv.innerHTML = `<div style="padding:15px; background:#fff3e0; border-left:5px solid #ef6c00; border-radius:6px;"><h3>Подходящих ВУЗов не найдено</h3><p>Попробуйте изменить фильтры.</p></div>`;
    } else {
        let html = `<div style="padding:15px; background:#f1f8e9; border-left:5px solid #2e7d32; border-radius:6px;">
            <h3>📊 Результаты расчета для ${score} баллов:</h3>
            <p>✅ Порог пройден! Доступные университеты и контракты:</p>
            <div style="margin-top:15px;">`;

        matchedUnis.forEach(uni => {
            let isGrant = effectiveScore >= uni.minScore;
            html += `
                <div style="background:white; padding:12px; border-radius:8px; margin-bottom:10px; border:1px solid #c8e6c9;">
                    <strong>${uni.name}</strong><br>
                    ${isGrant ? '🔥 <span style="color:#2e7d32; font-weight:bold;">Шанс на ГРАНТ</span> (мин. грант ~' + uni.minScore + ')' : '💰 <span style="color:#f57c00; font-weight:bold;">Платное отделение</span> (мин. платно: ' + uni.paidScore + ')'}<br>
                    <small>💵 Стоимость: <b>${uni.price} / год</b></small><br>
                    <small>🏢 Общежитие: ${uni.dorm ? 'Есть' : 'Нет'} | 🪖 Военка: ${uni.military ? 'Есть' : 'Нет'}</small>
                </div>`;
        });

        html += `</div></div>`;
        resultDiv.innerHTML = html;
    }
}