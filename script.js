let currentLang = 'ru';

const universitiesData = [
  { name: "КазНУ им. аль-Фараби", city: "almaty", dorm: true, military: true, minScore: 75, subjects: ["math-phys", "math-inf", "chem-bio", "geog-math", "hist-world"] },
  { name: "КазНИТУ им. К.И. Сатпаева (Satbayev University)", city: "almaty", dorm: true, military: true, minScore: 65, subjects: ["math-phys", "math-inf"] },
  { name: "МУИТ (IITU)", city: "almaty", dorm: true, military: true, minScore: 70, subjects: ["math-inf", "math-phys"] },
  { name: "KBTU (КБТУ)", city: "almaty", dorm: true, military: false, minScore: 85, subjects: ["math-inf", "math-phys"] },
  { name: "КазНПУ им. Абая", city: "almaty", dorm: true, military: false, minScore: 75, subjects: ["math-phys", "chem-bio"] },
  { name: "КазНАУ (Аграрный)", city: "almaty", dorm: true, military: true, minScore: 60, subjects: ["chem-bio", "math-phys"] },
  { name: "АЭУЭС (Энергетический)", city: "almaty", dorm: true, military: true, minScore: 60, subjects: ["math-phys"] },
  { name: "ЕНУ им. Л.Н. Гумилева", city: "astana", dorm: true, military: true, minScore: 75, subjects: ["math-phys", "math-inf", "chem-bio", "geog-math"] },
  { name: "Nazarbayev University (NU)", city: "astana", dorm: true, military: false, minScore: 110, subjects: ["math-phys", "chem-bio"] },
  { name: "КазАТУ им. С. Сейфуллина", city: "astana", dorm: true, military: true, minScore: 60, subjects: ["math-phys", "chem-bio"] },
  { name: "Astana IT University (AITU)", city: "astana", dorm: true, military: true, minScore: 80, subjects: ["math-inf"] },
  { name: "Медицинский Университет Астана", city: "astana", dorm: true, military: true, minScore: 85, subjects: ["chem-bio"] },
  { name: "ЮКУ им. М. Ауэзова", city: "shymkent", dorm: true, military: true, minScore: 60, subjects: ["math-phys", "chem-bio", "math-inf"] },
  { name: "Южно-Казахстанская мед. академия", city: "shymkent", dorm: true, military: false, minScore: 80, subjects: ["chem-bio"] },
  { name: "КарТУ им. Абылкаса Сагинова", city: "karaganda", dorm: true, military: true, minScore: 60, subjects: ["math-phys"] },
  { name: "КарУ им. Е.А. Букетова", city: "karaganda", dorm: true, military: true, minScore: 65, subjects: ["math-phys", "chem-bio"] },
  { name: "АРУ им. К. Жубанова", city: "aktobe", dorm: true, military: true, minScore: 60, subjects: ["math-phys", "chem-bio"] },
  { name: "ЗКМУ им. М. Оспанова", city: "aktobe", dorm: true, military: true, minScore: 80, subjects: ["chem-bio"] },
  { name: "ВКТУ им. Д. Серикбаева", city: "vko", dorm: true, military: true, minScore: 60, subjects: ["math-phys"] },
  { name: "Университет Шакарима", city: "semey", dorm: true, military: true, minScore: 60, subjects: ["math-phys", "chem-bio"] },
  { name: "ПГУ им. С. Торайгырова", city: "pavlodar", dorm: true, military: true, minScore: 60, subjects: ["math-phys"] },
  { name: "КРУ им. А. Байтурсынова", city: "kostanay", dorm: true, military: true, minScore: 60, subjects: ["math-phys", "chem-bio"] },
  { name: "Тару им. М.Х. Дулати", city: "taraz", dorm: true, military: true, minScore: 60, subjects: ["math-phys"] },
  { name: "КГУ им. Коркыт Ата", city: "kYZYLORDA", dorm: true, military: true, minScore: 60, subjects: ["math-phys"] },
  { name: "ЗКУ им. М. Утемисова", city: "uralsk", dorm: true, military: true, minScore: 60, subjects: ["math-phys"] },
  { name: "Атырауский университет", city: "atyrau", dorm: true, military: true, minScore: 60, subjects: ["math-phys"] }
];

const translations = {
    ru: {
        subtitle: "Рассчитай свои шансы на грант и найди подходящий ВУЗ в Казахстане",
        tabCalc: "Калькулятор",
        tabGop: "ГОП и Профессии",
        calcTitle: "Проверка шансов на грант ЕНТ",
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
        btnCalc: "Рассчитать шансы",
        gopTitle: "Группы образовательных программ (ГОП)",
        gopLabel: "Выберите направление:"
    },
    kz: {
        subtitle: "Ғрантқа түсу мүмкіндігіңді есептеп, Қазақстандағы ыңғайлы ЖОО-ны тап",
        tabCalc: "Калькулятор",
        tabGop: "ГОП және Мамандықтар",
        calcTitle: "ҰБТ грант мүмкіндігін тексеру",
        labelScore: "ҰБТ жалпы балың (140-тан):",
        labelSubject: "Бейіндік пәндер комбинациясы:",
        labelCity: "Қаланы таңдаңыз:",
        optAllCities: "Қазақстанның барлық қалалары",
        optPhysMath: "Физика + Математика",
        optMathInf: "Математика + Информатика",
        optChemBio: "Химия + Биология",
        optGeoMath: "География + Математика",
        optEngHist: "Ағылшын тілі + Дүниежүзі тарихы",
        checkDorm: "🏢 Жатақхана керек",
        checkMil: "🪖 Әскери кафедра керек",
        checkRural: "🌾 Ауылдық квота бар",
        btnCalc: "Мүмкіндікті есептеу",
        gopTitle: "Білім беру бағдарламаларының топтары (ББТ)",
        gopLabel: "Бағытты таңдаңыз:"
    },
    en: {
        subtitle: "Calculate your grant chances and find the right university in Kazakhstan",
        tabCalc: "Calculator",
        tabGop: "Programs & Jobs",
        calcTitle: "UNT Grant Chance Calculator",
        labelScore: "Your total UNT score (out of 140):",
        labelSubject: "Profile subject combination:",
        labelCity: "Select city:",
        optAllCities: "All cities in Kazakhstan",
        optPhysMath: "Physics + Mathematics",
        optMathInf: "Mathematics + Computer Science",
        optChemBio: "Chemistry + Biology",
        optGeoMath: "Geography + Mathematics",
        optEngHist: "English + World History",
        checkDorm: "🏢 Need dormitory",
        checkMil: "🪖 Need military department",
        checkRural: "🌾 Have rural quota",
        btnCalc: "Calculate Chances",
        gopTitle: "Groups of Educational Programs",
        gopLabel: "Select direction:"
    }
};

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
        resultDiv.innerHTML = `<div style="padding:15px; background:#ffebee; border-left:5px solid #d32f2f; border-radius:6px; color:#c62828;">⚠️ <b>Ошибка:</b> Введите балл от 0 до 140.</div>`;
        return;
    }

    const effectiveScore = isRuralQuota ? score + 5 : score;

    const matchedUnis = universitiesData.filter(uni => {
        const matchesCity = (city === 'all' || uni.city === city);
        const matchesSubject = uni.subjects.includes(subject);
        const matchesDorm = !needDorm || uni.dorm;
        const matchesMilitary = !needMilitary || uni.military;
        const matchesScore = effectiveScore >= uni.minScore;
        return matchesCity && matchesSubject && matchesDorm && matchesMilitary && matchesScore;
    });

    if (matchedUnis.length === 0) {
        resultDiv.innerHTML = `<div style="padding:15px; background:#fff3e0; border-left:5px solid #ef6c00; border-radius:6px;"><h3>Подходящих ВУЗов не найдено</h3><p>Попробуйте смягчить фильтры или снизить требования к общежитию/военке.</p></div>`;
    } else {
        let html = `<div style="padding:15px; background:#f1f8e9; border-left:5px solid #2e7d32; border-radius:6px;"><h3>🎯 Найдено ВУЗов: ${matchedUnis.length}</h3><ul style="padding-left:20px; margin-top:10px;">`;
        matchedUnis.forEach(uni => {
            html += `<li style="margin-bottom:8px;"><strong>${uni.name}</strong> — <span style="color:#2e7d32; font-weight:bold;">${uni.minScore}+ балл</span><br><small>🏢 Общежитие: ${uni.dorm ? 'Есть' : 'Нет'} | 🪖 Военка: ${uni.military ? 'Есть' : 'Нет'}</small></li>`;
        });
        html += `</ul></div>`;
        resultDiv.innerHTML = html;
    }
}

function updateGopInfo() {
    const gop = document.getElementById('gop-select').value;
    const nameEl = document.getElementById('gop-name');
    const profEl = document.getElementById('gop-professions');

    if(gop === 'v071') {
        nameEl.innerText = "B071 Горное дело и добыча полезных ископаемых";
        profEl.innerHTML = "<li>Горный инженер</li><li>Маркшейдер</li><li>Инженер по буровым работам</li>";
    } else if(gop === 'v062') {
        nameEl.innerText = "B062 Информационные технологии (IT)";
        profEl.innerHTML = "<li>Software Developer / Программист</li><li>Data Scientist</li><li>Cybersecurity Specialist</li>";
    } else if(gop === 'v059') {
        nameEl.innerText = "B059 Коммуникации и связи";
        profEl.innerHTML = "<li>Инженер телекоммуникаций</li><li>Специалист по сетям 5G</li>";
    }
}