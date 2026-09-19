let currentLang = 'ru';

const universitiesData = [
  { name: "КазНУ им. аль-Фараби", city: "almaty", dorm: true, military: true, minScore: 75, paidScore: 50, price: "1 200 000 ₸", subjects: ["math-phys", "math-inf", "chem-bio", "geog-math", "hist-world"] },
  { name: "Satbayev University", city: "almaty", dorm: true, military: true, minScore: 70, paidScore: 50, price: "1 350 000 ₸", subjects: ["math-phys", "math-inf", "creative"] },
  { name: "МУИТ (IITU)", city: "almaty", dorm: true, military: true, minScore: 70, paidScore: 50, price: "1 150 000 ₸", subjects: ["math-inf", "math-phys"] },
  { name: "KBTU (КБТУ)", city: "almaty", dorm: true, military: false, minScore: 85, paidScore: 60, price: "1 500 000 ₸", subjects: ["math-inf", "math-phys"] },
  { name: "КазНПУ им. Абая", city: "almaty", dorm: true, military: false, minScore: 70, paidScore: 50, price: "1 000 000 ₸", subjects: ["hist-world", "chem-bio", "geog-math", "creative"] },
  { name: "КазНАИ им. Т. Жургенова", city: "almaty", dorm: true, military: false, minScore: 65, paidScore: 50, price: "1 100 000 ₸", subjects: ["creative"] },
  { name: "ЕНУ им. Л.Н. Гумилева", city: "astana", dorm: true, military: true, minScore: 75, paidScore: 50, price: "1 100 000 ₸", subjects: ["math-phys", "math-inf", "chem-bio", "geog-math", "hist-world", "creative"] },
  { name: "Astana IT University", city: "astana", dorm: true, military: true, minScore: 80, paidScore: 50, price: "1 250 000 ₸", subjects: ["math-inf"] },
  { name: "Медицинский Университет Астана", city: "astana", dorm: true, military: true, minScore: 85, paidScore: 65, price: "1 400 000 ₸", subjects: ["chem-bio"] },
  { name: "ЮКУ им. М. Ауэзова", city: "shymkent", dorm: true, military: true, minScore: 60, paidScore: 50, price: "800 000 ₸", subjects: ["math-phys", "chem-bio", "math-inf", "geog-math", "hist-world", "creative"] },
  { name: "КарТУ им. Абылкаса Сагинова", city: "karaganda", dorm: true, military: true, minScore: 60, paidScore: 50, price: "850 000 ₸", subjects: ["math-phys", "geog-math"] }
];

const gopDatabase = [
  // --- 1. ФИЗИКА + МАТЕМАТИКА ---
  {
    subject: "math-phys",
    nameRu: "B069 Производственные и обрабатывающие отрасли",
    nameKz: "B069 Өндірістік және өңдеу салалары",
    nameEn: "B069 Manufacturing and Processing",
    score: "~65–85",
    jobs: ["Инженер-технолог", "Специалист по автоматизации производства", "Машиностроитель", "Инженер по качеству"]
  },
  {
    subject: "math-phys",
    nameRu: "B070 Электроэнергетика и электротехника",
    nameKz: "B070 Электрэнергетика және электротехника",
    nameEn: "B070 Electric Power Engineering",
    score: "~70–95",
    jobs: ["Инженер-электрик", "Энергетик", "Специалист по ВИЭ (возобновляемым источникам энергии)", "Проектировщик электросетей", "Релейщик"]
  },
  {
    subject: "math-phys",
    nameRu: "B071 Горное дело и добыча полезных ископаемых",
    nameKz: "B071 Тау-кен ісі және пайдалы қазбаларды өндіру",
    nameEn: "B071 Mining and Mineral Extraction",
    score: "~75–95",
    jobs: ["Горный инженер", "Маркшейдер", "Инженер по буровым работам", "Геолог", "Взрывник", "Шахтный мастер"]
  },
  {
    subject: "math-phys",
    nameRu: "B072 Материаловедение и технологии",
    nameKz: "B072 Материалдарды тану және технологиялар",
    nameEn: "B072 Materials Science",
    score: "~60–80",
    jobs: ["Инженер-металлург", "Специалист по наноматериалам", "Испытатель металлов и сплавов"]
  },
  {
    subject: "math-phys",
    nameRu: "B073 Архитектура и строительные специальности",
    nameKz: "B073 Сәулет және құрылыс",
    nameEn: "B073 Architecture and Construction",
    score: "~75–110",
    jobs: ["Инженер-строитель", "Проектировщик зданий и сооружений", "Смешанный архитектор-конструктор", "Сметчик", "Мастер строительного участка"]
  },
  {
    subject: "math-phys",
    nameRu: "B075 Кадастр и землеустройство",
    nameKz: "B075 Кадастр және жерге орналастыру",
    nameEn: "B075 Cadastre and Land Management",
    score: "~65–85",
    jobs: ["Землеустроитель", "Кадастровый инженер", "Геодезист", "Специалист GIS (ГИС-аналитик)"]
  },
  {
    subject: "math-phys",
    nameRu: "B076 Стандарты, метрология и сертификация",
    nameKz: "B076 Стандарттау, метрология және сертификаттау",
    nameEn: "B076 Metrology and Certification",
    score: "~60–80",
    jobs: ["Инженер по стандартизации", "Метролог", "Специалист по техническому контролю (OTK)"]
  },

  // --- 2. МАТЕМАТИКА + ИНФОРМАТИКА ---
  {
    subject: "math-inf",
    nameRu: "B059 Коммуникации и коммуникационные технологии",
    nameKz: "B059 Коммуникациялар және коммуникациялық технологиялар",
    nameEn: "B059 Communications",
    score: "~70–95",
    jobs: ["Инженер телекоммуникаций", "Специалист по сетям 5G", "Инженер спутниковой и сотовой связи"]
  },
  {
    subject: "math-inf",
    nameRu: "B061 ИТ-инженерные специальности и аппаратное обеспечение",
    nameKz: "B061 ІТ-инженерия мамандықтары",
    nameEn: "B061 IT Engineering and Hardware",
    score: "~75–110",
    jobs: ["Сетевой инженер (Network Engineer)", "Системный администратор", "Инженер по микроэлектронике", "IoT-специалист (Интернет вещей)", "DevOps инженер"]
  },
  {
    subject: "math-inf",
    nameRu: "B062 Информационные технологии (Программирование и Data Science)",
    nameKz: "B062 Ақпараттық технологиялар (Бағдарламалау)",
    nameEn: "B062 Information Technology",
    score: "~85–125",
    jobs: ["Software Developer (Frontend / Backend / Fullstack)", "Data Scientist / Аналитик данных", "Cybersecurity Specialist (Кибербезопасность)", "Web-разработчик", "UI/UX Дизайнер", "QA Automation Engineer (Тестировщик)"]
  },
  {
    subject: "math-inf",
    nameRu: "B057 Информационная безопасность",
    nameKz: "B057 Ақпараттық қауіпсіздік",
    nameEn: "B057 Information Security",
    score: "~90–120",
    jobs: ["Специалист по защите информации", "Этический хакер (Pentester)", "Аналитик SOC", "Криптограф"]
  },

  // --- 3. ХИМИЯ + БИОЛОГИЯ ---
  {
    subject: "chem-bio",
    nameRu: "B051 Биологические и смежные науки",
    nameKz: "B051 Биологиялық және сабақтас ғылымдар",
    nameEn: "B051 Biological Sciences",
    score: "~70–95",
    jobs: ["Биолог-исследователь", "Генетик", "Биотехнолог", "Микробиолог", "Лаборант"]
  },
  {
    subject: "chem-bio",
    nameRu: "B053 Химические науки и технологии",
    nameKz: "B053 Химия ғылымдары және технологиялары",
    nameEn: "B053 Chemical Sciences",
    score: "~70–95",
    jobs: ["Химик-технолог", "Инженер нефтехимического производства", "Фармацевтический химик", "Эколог-аналитик"]
  },
  {
    subject: "chem-bio",
    nameRu: "B084 Медицина",
    nameKz: "B084 Медицина",
    nameEn: "B084 Medicine",
    score: "~105–125",
    jobs: ["Врач общей практики (терапевт)", "Хирург", "Педиатр", "Кардиолог", "Анестезиолог-реаниматолог", "Невропатолог", "Акушер-гинеколог"]
  },
  {
    subject: "chem-bio",
    nameRu: "B089 Общественное здравоохранение и фармация",
    nameKz: "B089 Қоғамдық денсаулық сақтау және фармация",
    nameEn: "B089 Public Health and Pharmacy",
    score: "~80–105",
    jobs: ["Фармацевт-провизор", "Клинический фармаколог", "Эпидемиолог", "Санитарный врач", "Менеджер здравоохранения"]
  },
  {
    subject: "chem-bio",
    nameRu: "B091 Стоматология",
    nameKz: "B091 Стоматология",
    nameEn: "B091 Dentistry",
    score: "~110–130",
    jobs: ["Врач-стоматолог терапевт", "Стоматолог-хирург", "Стоматолог-ортопед", "Ортодонт"]
  },
  {
    subject: "chem-bio",
    nameRu: "B092 Стоматология и сестринское дело (Высшее сестринское дело)",
    nameKz: "B092 Мейіргер ісі",
    nameEn: "B092 Nursing",
    score: "~70–90",
    jobs: ["Менеджер сестринского дела", "Главная медсестра", "Специалист по уходу за пациентами"]
  },
  {
    subject: "chem-bio",
    nameRu: "B093 Ветеринария",
    nameKz: "B093 Ветеринария",
    nameEn: "B093 Veterinary",
    score: "~65–90",
    jobs: ["Ветеринарный врач", "Ветеринарный инспектор", "Эпизоотолог", "Хирург для животных"]
  },
  {
    subject: "chem-bio",
    nameRu: "B052 Экология и охрана окружающей среды",
    nameKz: "B052 Экология және қоршаған ортаны қорғау",
    nameEn: "B052 Ecology",
    score: "~70–95",
    jobs: ["Эколог-аудитор", "Инженер по охране окружающей среды", "Специалист по утилизации отходов"]
  },

  // --- 4. ГЕОГРАФИЯ + МАТЕМАТИКА ---
  {
    subject: "geog-math",
    nameRu: "B041 Бизнес и администрирование",
    nameKz: "B041 Бизнес және әкімшілендіру",
    nameEn: "B041 Business and Administration",
    score: "~75–105",
    jobs: ["Предприниматель", "Бизнес-аналитик", "Коммерческий директор", "Антикризисный управляющий", "Проектный менеджер"]
  },
  {
    subject: "geog-math",
    nameRu: "B044 Финансы, экономика, банковское дело и учет",
    nameKz: "B044 Қаржы, экономика, банк ісі және есеп",
    nameEn: "B044 Finance, Economics, Banking",
    score: "~85–115",
    jobs: ["Финансовый аналитик", "Экономист", "Банкир", "Инвестиционный менеджер", "Бухгалтер-аудитор", "Риск-менеджер"]
  },
  {
    subject: "geog-math",
    nameRu: "B046 Менеджмент и маркетинг",
    nameKz: "B046 Менеджмент және маркетинг",
    nameEn: "B046 Management and Marketing",
    score: "~80–110",
    jobs: ["Маркетолог", "SMM-менеджер / Таргетолог", "Бренд-менеджер", "HR-менеджер", "PR-специалист", "Комьюнити-менеджер"]
  },
  {
    subject: "geog-math",
    nameRu: "B095 Транспортные услуги (Логистика и туризм)",
    nameKz: "B095 Көлік қызметтері (Логистика және туризм)",
    nameEn: "B095 Transport Services and Logistics",
    score: "~70–95",
    jobs: ["Логист", "Специалист по цепям поставок (Supply Chain Manager)", "Менеджер по туризму", "Отельер", "Экспедитор грузов"]
  },
  {
    subject: "geog-math",
    nameRu: "B045 Аудит и налогообложение",
    nameKz: "B045 Аудит және салық салу",
    nameEn: "B045 Audit and Taxation",
    score: "~80–110",
    jobs: ["Налоговый консультант", "Финансовый аудитор", "Налоговый инспектор", "Главный бухгалтер"]
  },
  {
    subject: "geog-math",
    nameRu: "B042 Журналистика и издательское дело",
    nameKz: "B042 Журналистика және баспа ісі",
    nameEn: "B042 Journalism",
    score: "~75–100",
    jobs: ["Журналист-международник", "Редактор", "Копирайтер", "Контент-менеджер"]
  },

  // --- 5. АНГЛИЙСКИЙ + ВСЕМИРНАЯ ИСТОРИЯ ---
  {
    subject: "hist-world",
    nameRu: "B038 Право (Юриспруденция)",
    nameKz: "B038 Құқықтану (Юриспруденция)",
    nameEn: "B038 Law",
    score: "~100–125",
    jobs: ["Юрист", "Адвокат", "Судья", "Прокурор", "Юрисконсульт международной компании", "Нотариус", "Следователь"]
  },
  {
    subject: "hist-world",
    nameRu: "B011 Педагогика по языковым специальностям (Инг, Каз, Рус)",
    nameKz: "B011 Тілдік мамандықтар бойынша педагогика",
    nameEn: "B011 Language Teacher Education",
    score: "~80–105",
    jobs: ["Учитель английского/иностранного языка", "Лингвист-переводчик", "Репетитор", "Преподаватель IELTS/TOEFL", "Методист"]
  },
  {
    subject: "hist-world",
    nameRu: "B035 Международные отношения и регионоведение",
    nameKz: "B035 Халықаралық қатынастар және өңіртану",
    nameEn: "B035 International Relations",
    score: "~95–120",
    jobs: ["Дипломат", "Специалист по международным связям", "Политический аналитик", "Консул", "Этнограф-востоковед"]
  },
  {
    subject: "hist-world",
    nameRu: "B036 Журналистика и информация",
    nameKz: "B036 Журналистика және ақпарат",
    nameEn: "B036 Journalism and Information",
    score: "~75–100",
    jobs: ["Телеведущий", "Спортивный журналист", "Репортер", "Видеопродюсер", "PR-менеджер"]
  },
  {
    subject: "hist-world",
    nameRu: "B034 История и археология",
    nameKz: "B034 Тарих және археология",
    nameEn: "B034 History and Archaeology",
    score: "~70–90",
    jobs: ["Историк-исследователь", "Археолог", "Музейный куратор", "Экскурсовод-гид"]
  },
  {
    subject: "hist-world",
    nameRu: "B037 Психология",
    nameKz: "B037 Психология",
    nameEn: "B037 Psychology",
    score: "~85–110",
    jobs: ["Психолог", "Психотерапевт", "HR-психолог", "Детский психолог", "Карьерный консультант"]
  },

  // --- 6. ТВОРЧЕСКИЙ ЭКЗАМЕН ---
  {
    subject: "creative",
    nameRu: "B029 Изобразительное искусство и прикладные ремесла",
    nameKz: "B029 Бейнелеу өнері және қолөнер",
    nameEn: "B029 Fine Arts",
    score: "~65–90 (творческий + ЕНТ)",
    jobs: ["Художник-живописец", "Иллюстратор", "Концепт-художник для игр и кино", "Скульптор", "Мастер декоративно-прикладного искусства"]
  },
  {
    subject: "creative",
    nameRu: "B030 Аудиовизуальные средства и медиапроизводство",
    nameKz: "B030 Аудиовизуалды құралдар және медиа өндіріс",
    nameEn: "B030 Audiovisual Media",
    score: "~70–100 (творческий + ЕНТ)",
    jobs: ["Режиссер кино, клипов и телевидения", "Оператор-постановщик", "Видеомонтажер (Video Editor)", "Звукорежиссер", "Моушн-дизайнер"]
  },
  {
    subject: "creative",
    nameRu: "B031 Мода, дизайн, графика и интерьер",
    nameKz: "B031 Сән, дизайн және интерьер",
    nameEn: "B031 Fashion and Graphic Design",
    score: "~70–105 (творческий + ЕНТ)",
    jobs: ["Графический дизайнер", "Дизайнер интерьера", "Фэшн-дизайнер (модельер)", "UX/UI Дизайнер интерфейсов", "Ландшафтный дизайнер"]
  },
  {
    subject: "creative",
    nameRu: "B032 Архитектура и градостроительство",
    nameKz: "B032 Сәулет және қала құрылысы",
    nameEn: "B032 Architecture",
    score: "~80–115 (творческий + ЕНТ)",
    jobs: ["Архитектор-градостроитель", "Главный архитектор проекта (ГАП)", "Ландшафтный архитектор", "Реставратор памятников архитектуры"]
  },
  {
    subject: "creative",
    nameRu: "B028 Музыкальное искусство и исполнение",
    nameKz: "B028 Музыка өнері",
    nameEn: "B028 Music Art",
    score: "~65–95 (творческий + ЕНТ)",
    jobs: ["Профессиональный музыкант", "Композитор", "Аранжировщик", "Дирижер", "Преподаватель музыки"]
  },
  {
    subject: "creative",
    nameRu: "B033 Хореография и режиссура представлений",
    nameKz: "B033 Хореография және қойылым режиссурасы",
    nameEn: "B033 Choreography",
    score: "~65–90 (творческий + ЕНТ)",
    jobs: ["Хореограф-постановщик", "Профессиональный танцор", "Режиссер массовых мероприятий и шоу"]
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

    const filteredGops = gopDatabase.filter(g => g.subject === selectedSubject);

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