// Переводы интерфейса
const translations = {
    ru: {
        title: "Поступай KZ 🎓",
        subtitle: "Рассчитай свои шансы на грант в ВУЗы Казахстана",
        lblSubjects: "Комбинация предметов:",
        lblScore: "Твой балл ЕНТ:",
        lblDormitory: "Наличие общежития",
        lblMilitary: "Военная кафедра",
        btnCalc: "Рассчитать шансы",
        noScore: "Пожалуйста, введи свой балл ЕНТ!",
        noResults: "По вашему запросу ВУЗы не найдены.",
        pass: "Высокие шансы на грант",
        maybe: "Есть шансы (платное / средний балл)",
        fail: "Баллов может не хватить на грант",
        minScoreText: "Мин. балл на грант:",
        dormText: "Общежитие:",
        militaryText: "Военная кафедра:",
        yes: "Есть ✅",
        no: "Нет ❌",
        options: {
            physMath: "Физика + Математика",
            mathInfo: "Математика + Информатика",
            chemBio: "Химия + Биология",
            bioGeo: "Биология + География",
            geoMath: "География + Математика",
            geoLang: "География + Иностранный язык",
            histLang: "Всемирная история + Иностранный язык",
            histLaw: "Всемирная история + Основы права",
            histGeo: "Всемирная история + География",
            langLit: "Язык + Литература",
            chemPhys: "Химия + Физика",
            creative: "Творческий экзамен"
        }
    },
    kz: {
        title: "Поступай KZ 🎓",
        subtitle: "Қазақстан ЖОО-ларына грантқа түсу мүмкіндігіңді есепте",
        lblSubjects: "Пәндер комбинациясы:",
        lblScore: "ҰБТ балың:",
        lblDormitory: "Жатақхананың болуы",
        lblMilitary: "Әскери кафедра",
        btnCalc: "Мүмкіндікті есептеу",
        noScore: "Өтініш, ҰБТ балыңды енгіз!",
        noResults: "Сіздің сұранысыңыз бойынша ЖОО табылмады.",
        pass: "Грантқа мүмкіндік жоғары",
        maybe: "Мүмкіндік бар (ақылы / орташа балл)",
        fail: "Грантқа балл жетпеуі мүмкін",
        minScoreText: "Грантқа мин. балл:",
        dormText: "Жатақхана:",
        militaryText: "Әскери кафедра:",
        yes: "Бар ✅",
        no: "Жоқ ❌",
        options: {
            physMath: "Физика + Математика",
            mathInfo: "Математика + Информатика",
            chemBio: "Химия + Биология",
            bioGeo: "Биология + География",
            geoMath: "География + Математика",
            geoLang: "География + Шет тілі",
            histLang: "Дүниежүзі тарихы + Шет тілі",
            histLaw: "Дүниежүзі тарихы + Құқық негіздері",
            histGeo: "Дүниежүзі тарихы + География",
            langLit: "Тіл + Әдебиет",
            chemPhys: "Химия + Физика",
            creative: "Шығармашылық емтихан"
        }
    },
    en: {
        title: "Postupai KZ 🎓",
        subtitle: "Calculate your chances for a grant in Kazakhstan universities",
        lblSubjects: "Subject combination:",
        lblScore: "Your UNT score:",
        lblDormitory: "Dormitory available",
        lblMilitary: "Military department",
        btnCalc: "Calculate chances",
        noScore: "Please enter your UNT score!",
        noResults: "No universities found matching your criteria.",
        pass: "High chance for grant",
        maybe: "Moderate chance",
        fail: "Low chance for grant",
        minScoreText: "Min. grant score:",
        dormText: "Dormitory:",
        militaryText: "Military dept:",
        yes: "Yes ✅",
        no: "No ❌",
        options: {
            physMath: "Physics + Math",
            mathInfo: "Math + Computer Science",
            chemBio: "Chemistry + Biology",
            bioGeo: "Biology + Geography",
            geoMath: "Geography + Math",
            geoLang: "Geography + Foreign Language",
            histLang: "World History + Foreign Language",
            histLaw: "World History + Fundamentals of Law",
            histGeo: "World History + Geography",
            langLit: "Language + Literature",
            chemPhys: "Chemistry + Physics",
            creative: "Creative Exam"
        }
    }
};

let currentLang = 'ru';

// Смена языка
function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.getElementById('txt-title').innerText = t.title;
    document.getElementById('txt-subtitle').innerText = t.subtitle;
    document.getElementById('lbl-subjects').innerText = t.lblSubjects;
    document.getElementById('lbl-score').innerText = t.lblScore;
    document.getElementById('lbl-dormitory').innerText = t.lblDormitory;
    document.getElementById('lbl-military').innerText = t.lblMilitary;
    document.getElementById('btn-calc').innerText = t.btnCalc;

    // Перевод опций селектора
    document.getElementById('opt-phys-math').innerText = t.options.physMath;
    document.getElementById('opt-math-info').innerText = t.options.mathInfo;
    document.getElementById('opt-chem-bio').innerText = t.options.chemBio;
    document.getElementById('opt-bio-geo').innerText = t.options.bioGeo;
    document.getElementById('opt-geo-math').innerText = t.options.geoMath;
    document.getElementById('opt-geo-lang').innerText = t.options.geoLang;
    document.getElementById('opt-hist-lang').innerText = t.options.histLang;
    document.getElementById('opt-hist-law').innerText = t.options.histLaw;
    document.getElementById('opt-hist-geo').innerText = t.options.histGeo;
    document.getElementById('opt-lang-lit').innerText = t.options.langLit;
    document.getElementById('opt-chem-phys').innerText = t.options.chemPhys;
    document.getElementById('opt-creative').innerText = t.options.creative;

    // Активность кнопок
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
}

// Расширенная база данных ВУЗов
const universities = [
    { name: "КазНУ им. аль-Фараби", city: "Алматы", minScore: 105, subjects: ["phys-math", "math-info", "chem-bio", "bio-geo", "geo-math", "geo-lang", "hist-lang", "hist-law", "hist-geo", "lang-lit", "chem-phys", "creative"], dorm: true, military: true },
    { name: "ЕНУ им. Л.Н. Гумилева", city: "Астана", minScore: 98, subjects: ["phys-math", "math-info", "chem-bio", "bio-geo", "geo-math", "geo-lang", "hist-lang", "hist-law", "hist-geo", "lang-lit", "creative"], dorm: true, military: true },
    { name: "Satbayev University (Политех)", city: "Алматы", minScore: 85, subjects: ["phys-math", "math-info", "chem-phys"], dorm: true, military: true },
    { name: "AITU (Astana IT University)", city: "Астана", minScore: 100, subjects: ["math-info", "phys-math"], dorm: true, military: true },
    { name: "SDU University", city: "Каскелен", minScore: 90, subjects: ["math-info", "phys-math", "chem-bio", "geo-math", "geo-lang", "hist-lang", "lang-lit"], dorm: true, military: false },
    { name: "MNU (Maikut KAZGUU University)", city: "Астана", minScore: 95, subjects: ["hist-law", "geo-math", "hist-lang", "geo-lang"], dorm: true, military: false },
    { name: "КазУМОиМЯ им. Абылай хана", city: "Алматы", minScore: 88, subjects: ["hist-lang", "geo-lang", "lang-lit"], dorm: true, military: true },
    { name: "KIMEP University", city: "Алматы", minScore: 92, subjects: ["geo-math", "hist-lang", "geo-lang"], dorm: true, military: false },
    { name: "КазНМУ им. Асфендиярова", city: "Алматы", minScore: 110, subjects: ["chem-bio"], dorm: true, military: true },
    { name: "Астана Медицина Университетi", city: "Астана", minScore: 108, subjects: ["chem-bio"], dorm: true, military: true },
    { name: "КазАУ им. Сейфуллина (АТУ)", city: "Астана", minScore: 75, subjects: ["bio-geo", "chem-bio", "phys-math"], dorm: true, military: true },
    { name: "КазНПУ им. Абая", city: "Алматы", minScore: 75, subjects: ["phys-math", "chem-bio", "bio-geo", "hist-geo", "lang-lit", "creative"], dorm: true, military: false },
    { name: "Нархоз Университетi", city: "Алматы", minScore: 85, subjects: ["geo-math", "math-info", "hist-law"], dorm: true, military: false },
    { name: "КазГАСА", city: "Алматы", minScore: 80, subjects: ["creative", "phys-math"], dorm: true, military: false }
];

// Расчет шансов
function calculateChances() {
    const score = parseInt(document.getElementById('score').value);
    const selectedSubject = document.getElementById('subjects').value;
    const needDorm = document.getElementById('dormitory').checked;
    const needMilitary = document.getElementById('military').checked;
    const resultsDiv = document.getElementById('results');

    const t = translations[currentLang];

    if (isNaN(score)) {
        alert(t.noScore);
        return;
    }

    resultsDiv.innerHTML = "";

    // Фильтрация
    const filtered = universities.filter(uni => {
        const hasSubject = uni.subjects.includes(selectedSubject);
        const matchesDorm = !needDorm || uni.dorm;
        const matchesMilitary = !needMilitary || uni.military;
        return hasSubject && matchesDorm && matchesMilitary;
    });

    if (filtered.length === 0) {
        resultsDiv.innerHTML = `<p class="no-results">${t.noResults}</p>`;
        return;
    }

    filtered.forEach(uni => {
        let statusText = "";
        let statusColor = "";

        if (score >= uni.minScore + 10) {
            statusText = t.pass;
            statusColor = "#28a745"; // Зеленый
        } else if (score >= uni.minScore) {
            statusText = t.maybe;
            statusColor = "#ffc107"; // Желтый
        } else {
            statusText = t.fail;
            statusColor = "#dc3545"; // Красный
        }

        const card = document.createElement('div');
        card.className = "uni-card";
        card.innerHTML = `
            <h3>${uni.name} (${uni.city})</h3>
            <p><strong>${t.minScoreText}</strong> ~${uni.minScore}</p>
            <p><strong>${t.dormText}</strong> ${uni.dorm ? t.yes : t.no} | <strong>${t.militaryText}</strong> ${uni.military ? t.yes : t.no}</p>
            <p style="color: ${statusColor}; font-weight: bold; margin-top: 8px;">${statusText}</p>
        `;
        resultsDiv.appendChild(card);
    });
}