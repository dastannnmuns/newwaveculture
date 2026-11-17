const WHATSAPP = "77473628602";
const PAGE_SIZE = 12;

const texts = {
  kz: {
    navServices: "Қызметтер",
    navCatalog: "Кейстер",
    navBuilder: "Конструктор",
    navContacts: "Байланыс",

    lead: "<b>Неон, лайтбокс, көлемді әріптер</b> – Алматыда жарнамалық вывескаларды дизайннан орнатуға дейін жасаймыз.",
    ctaWa: "WhatsApp-қа жазу",
    ctaCatalog: "Кейстерді көру",
    fact1: "Дизайннан орнатуға дейін",
    fact2: "Шебер келіп өлшейді",
    fact3: "Ақбұлақ ш/а, Шорманов к-сі, 1",

    aboutTitle: "Біз туралы",
    about1: "Тәжірибе",
    about1Text: "Нарықта 5 жылдан астам",
    about2: "Сапа",
    about2Text: "Өз құрал-жабдығымыз бен өндірісіміз",
    about3: "Мерзім",
    about3Text: "Вывеска 3–7 жұмыс күнінде дайын болады",
    about4: "Сенімділік",
    about4Text: "Ресми түрде, келісімшарт бойынша жұмыс істейміз",
    about5: "Кепілдік",
    about5Text: "12 айға дейін кепілдік береміз",
    navAbout: "Біз туралы",

    servicesTitle: "Біз не жасаймыз",
    servicesText: "Барлық вывесканы өзіміз жасап, өзіміз орнатамыз. Түрін басып, сол бойынша жұмыстарымызды көріңіз.",
    servicesMore: "Жұмыстарды көру",

    neonTitle: "Неон вывескалар",
    neonText: "Біз жасаған неон жазулар. Фотоны басса, үлкейеді.",

    catalogTitle: "Біздің кейстер",
    catalogText: "Біз жасаған вывескалар. Ұнағанын таңдап, «Тапсырыс беру» батырмасын басыңыз – WhatsApp-қа хабарлама кетеді.",
    priceLabel: "Бағасы",
    priceValue: "келісім бойынша",
    order: "Тапсырыс беру",
    more: "Тағы көрсету",
    orderMessage: "Сәлеметсіз бе! Сайттағы кейстерден көрдім, маған осындай вывеска керек:",

    builderTitle: "Өз неоныңды құрастыр",
    builderText: "Мәтінді жаз, түс пен қаріп таңда. Нәтиже бірден жанып тұрады.",
    textLabel: "Жазу",
    colorLabel: "Түсі",
    fontLabel: "Қаріп",
    nameLabel: "Атыңыз",
    cityLabel: "Қала",
    addressLabel: "Мекенжай (өлшеуге келу үшін)",
    noteLabel: "Қосымша тілек",
    notePlaceholder: "Мысалы: логотип бар, дүкен маңдайшасына, мерзімі…",
    sizeNote: "Өлшемін шебер келіп анықтайды",
    lightWall: "Ашық қабырға",
    darkWall: "Қараңғы қабырға",
    sendBtn: "Өз вывескамды тапсыру",
    messageLabel: "Жіберілетін хабарлама",
    messageHint: "WhatsApp ашылмаса, мәтінді көшіріп, өзіңіз жіберіңіз:",
    copy: "Көшіру",
    copied: "Көшірілді ✓",
    emptyText: "Неонға жазуды енгізіңіз.",
    msgTitle: "Сәлеметсіз бе! Сайттан неон жазуға тапсырыс:",
    msgText: "Жазу",
    msgColor: "Түсі",
    msgFont: "Қаріп",
    msgName: "Аты",
    msgCity: "Қала",
    msgAddress: "Мекенжай",
    msgNote: "Тілек",
    msgEnd: "Өлшеуге қашан келе аласыздар?",

    stepsTitle: "Жұмыс кезеңдері",
    step1: "Өтінім",
    step1Text: "WhatsApp-қа жазасыз немесе кейстерден таңдайсыз.",
    step2: "Өлшеу және дизайн",
    step2Text: "Шебер келіп өлшейді, макет пен бағасын көрсетеміз.",
    step3: "Келісімшарт",
    step3Text: "Баға мен мерзімді келісімшартта бекітеміз.",
    step4: "Дайындау",
    step4Text: "Макет бекітілген соң вывесканы жасаймыз.",
    step5: "Орнату",
    step5Text: "Әкеліп, орнатып, жарығын тексеріп береміз.",

    clientsTitle: "Бізге сенім артады",
    clientsText: "Алматыдағы дүкендер, кафелер, салондар мен компаниялар.",

    reviewsTitle: "Клиенттер пікірі",
    reviewsText: "Клиенттеріміздің 2GIS-те қалдырған пікірлері.",
    reviewsCount: "2GIS-те 22 пікір бар. Сіз де өз пікіріңізді қалдырыңыз.",
    reviewsLeave: "Пікір қалдыру ↗",

    faqLabel: "Сұрақ-жауап",
    faqTitle: "Жиі қойылатын сұрақтар",
    faqText: "Вывеска тапсырыс беру туралы клиенттер жиі сұрайтын сұрақтарға жауап береміз.",
    navFaq: "Сұрақтар",

    contactsTitle: "Байланыс",
    contactsText: "Жазыңыз немесе қоңырау шалыңыз – шебер келіп өлшеп, бағасын айтады.",
    phoneLabel: "Телефон / WhatsApp",
    addressTitle: "Мекенжай",
    address: "Алматы, Ақбұлақ ш/а, Шорманов көшесі, 1",
    openMap: "2GIS-те ашу ↗",
    contactsCta: "Вывеска керек пе? WhatsApp-қа жазыңыз.",

    waHello: "Сәлеметсіз бе! Вывеска жасатқым келеді.",
    waQuestion: "Сәлеметсіз бе! Вывеска туралы сұрағым бар.",

    categories: {
      all: "Барлығы",
      neon: "Неон вывескалар",
      letters: "Көлемді әріптер",
      lightbox: "Лайтбокстар",
      other: "Басқа"
    }
  },

  ru: {
    navServices: "Услуги",
    navCatalog: "Кейсы",
    navBuilder: "Конструктор",
    navContacts: "Контакты",

    lead: "<b>Неон, лайтбоксы, объёмные буквы</b> – делаем рекламные вывески в Алматы от дизайна до монтажа.",
    ctaWa: "Написать в WhatsApp",
    ctaCatalog: "Смотреть кейсы",
    fact1: "От дизайна до монтажа",
    fact2: "Мастер приедет на замер",
    fact3: "мкр. Акбулак, ул. Шорманова, 1",

    aboutTitle: "О нашей компании",
    about1: "Опыт",
    about1Text: "Более 5 лет на рынке",
    about2: "Качество",
    about2Text: "Собственное оборудование и производство",
    about3: "Срок изготовления",
    about3Text: "Вывеска будет готова за 3–7 рабочих дней",
    about4: "Надёжность",
    about4Text: "Работаем официально, по договору",
    about5: "Гарантия",
    about5Text: "Даём гарантию до 12 месяцев",
    navAbout: "О нас",

    servicesTitle: "Что мы делаем",
    servicesText: "Изготавливаем и монтируем вывески сами. Нажмите на вид – покажем работы этого типа.",
    servicesMore: "Смотреть работы",

    neonTitle: "Неоновые вывески",
    neonText: "Неоновые вывески, которые мы сделали. Нажмите на фото, чтобы увеличить.",

    catalogTitle: "Наши кейсы",
    catalogText: "Вывески, которые мы сделали. Выберите понравившуюся и нажмите «Заказать» – сообщение уйдёт в WhatsApp.",
    priceLabel: "Цена",
    priceValue: "по договорённости",
    order: "Заказать",
    more: "Показать ещё",
    orderMessage: "Здравствуйте! Увидел на сайте, хочу такую вывеску:",

    builderTitle: "Соберите свою неоновую вывеску",
    builderText: "Напишите текст, выберите цвет и шрифт. Вывеска сразу загорается.",
    textLabel: "Надпись",
    colorLabel: "Цвет",
    fontLabel: "Шрифт",
    nameLabel: "Ваше имя",
    cityLabel: "Город",
    addressLabel: "Адрес (для замера)",
    noteLabel: "Пожелания",
    notePlaceholder: "Например: есть логотип, над входом магазина, сроки…",
    sizeNote: "Размер определит мастер на замере",
    lightWall: "Светлая стена",
    darkWall: "Тёмная стена",
    sendBtn: "Заказать свою вывеску",
    messageLabel: "Сообщение, которое уйдёт",
    messageHint: "Если WhatsApp не открылся, скопируйте текст и отправьте сами:",
    copy: "Копировать",
    copied: "Скопировано ✓",
    emptyText: "Введите текст для вывески.",
    msgTitle: "Здравствуйте! Заказ неоновой вывески с сайта:",
    msgText: "Надпись",
    msgColor: "Цвет",
    msgFont: "Шрифт",
    msgName: "Имя",
    msgCity: "Город",
    msgAddress: "Адрес",
    msgNote: "Пожелания",
    msgEnd: "Когда сможете приехать на замер?",

    stepsTitle: "Этапы работы",
    step1: "Заявка",
    step1Text: "Пишете в WhatsApp или выбираете в кейсах.",
    step2: "Замер и дизайн",
    step2Text: "Мастер приедет на замер, покажем макет и цену.",
    step3: "Договор",
    step3Text: "Фиксируем цену и сроки в договоре.",
    step4: "Изготовление",
    step4Text: "После утверждения макета изготавливаем вывеску.",
    step5: "Монтаж",
    step5Text: "Привезём, установим и проверим подсветку.",

    clientsTitle: "Нам доверяют",
    clientsText: "Магазины, кафе, салоны и компании Алматы.",

    reviewsTitle: "Отзывы клиентов",
    reviewsText: "Отзывы наших клиентов в 2GIS.",
    reviewsCount: "В 2GIS 22 отзыва. Оставьте и свой отзыв.",
    reviewsLeave: "Оставить отзыв ↗",

    faqLabel: "Вопрос-Ответ",
    faqTitle: "Часто задаваемые вопросы",
    faqText: "Отвечаем на вопросы, которые клиенты чаще всего задают о заказе вывески.",
    navFaq: "Вопросы",

    contactsTitle: "Контакты",
    contactsText: "Напишите или позвоните – мастер приедет на замер и назовёт цену.",
    phoneLabel: "Телефон / WhatsApp",
    addressTitle: "Адрес",
    address: "Алматы, мкр. Акбулак, ул. Шорманова, 1",
    openMap: "Открыть в 2GIS ↗",
    contactsCta: "Нужна вывеска? Напишите в WhatsApp.",

    waHello: "Здравствуйте! Хочу заказать вывеску.",
    waQuestion: "Здравствуйте! У меня вопрос по вывеске.",

    categories: {
      all: "Все",
      neon: "Неоновые вывески",
      letters: "Объёмные буквы",
      lightbox: "Лайтбоксы",
      other: "Другое"
    }
  }
};

const types = {
  neon:        { kz: "Неон вывеска", ru: "Неоновая вывеска" },
  neon2:       { kz: "Екінші буын неон вывеска", ru: "Неоновая вывеска второго поколения" },
  frame:       { kz: "Металл каркастағы көлемді әріптер", ru: "Объёмные буквы на металлическом каркасе" },
  alu:         { kz: "Алюминий борты бар көлемді әріптер", ru: "Объёмные буквы с алюминиевым бортом" },
  noframe:     { kz: "Каркассыз көлемді әріптер", ru: "Объёмные буквы без каркаса" },
  acp:         { kz: "Алюкобонд негізді көлемді әріптер", ru: "Объёмные буквы с подложкой из алюкобонда" },
  cutout:      { kz: "Ойылған әріптері бар жарықты вывеска", ru: "Световая вывеска с вырезными буквами" },
  lightbox:    { kz: "Жарықты лайтбокс", ru: "Световой лайтбокс" },
  lightboxUv:  { kz: "УФ басылымды жарықты лайтбокс", ru: "Световой лайтбокс с УФ печатью" },
  lightbox2:   { kz: "Екі жақты лайтбокс", ru: "Двухсторонний лайтбокс" },
  lightbox2Uv: { kz: "УФ басылымды екі жақты лайтбокс", ru: "Двухсторонний лайтбокс с УФ печатью" },
  inlay:       { kz: "Инкрустациялы жарық қорап", ru: "Световой короб с инкрустацией" },
  backlit:     { kz: "Контражур вывеска", ru: "Контражурная вывеска" },
  repair:      { kz: "Вывесканы қалпына келтіру", ru: "Реставрация вывесок" },
  plate:       { kz: "Навигация тақтайшасы", ru: "Табличка для навигации" },
  brand:       { kz: "Көлікті брендтеу", ru: "Брендирование авто" }
};

const works = [
  { img: "neon-malina",             category: "neon",     type: "neon",        name: "Malina" },
  { img: "letters-mega-motors",     category: "letters",  type: "noframe",     name: "Mega Motors" },
  { img: "neon-shokta",             category: "neon",     type: "neon",        name: "Burgers & Doner" },
  { img: "letters-damie",           category: "letters",  type: "alu",         name: "DAMIE Beauty Salon" },
  { img: "neon-coffee",             category: "neon",     type: "neon2",       name: "Coffee Time" },
  { img: "sign-auto-doctor",        category: "letters",  type: "cutout",      name: "Auto Doctor" },
  { img: "letters-degirmen-front",  category: "letters",  type: "acp",         name: "Degirmen" },
  { img: "lightbox-euro-garage",    category: "lightbox", type: "lightbox",    name: "Euro Garage" },
  { img: "letters-prestige",        category: "letters",  type: "frame",       name: "Prestige House" },
  { img: "box-barber",              category: "lightbox", type: "inlay",       name: "Barber Shop" },
  { img: "neon-red",                category: "neon",     type: "neon",        name: "" },
  { img: "backlit-lombard",         category: "letters",  type: "backlit",     name: "Ломбард" },
  { img: "letters-darikhana-green", category: "letters",  type: "frame",       name: "Дәріхана / Аптека" },
  { img: "lightbox-moms-kids",      category: "lightbox", type: "lightboxUv",  name: "Mom's Kids Boutique" },
  { img: "lightbox-euro-round",     category: "lightbox", type: "lightbox2",   name: "Euro Garage" },
  { img: "letters-degirmen",        category: "letters",  type: "acp",         name: "Degirmen" },
  { img: "lightbox-toi-dami",       category: "lightbox", type: "lightbox2Uv", name: "Той Дәмі" },
  { img: "backlit-emblem",          category: "letters",  type: "backlit",     name: "" },
  { img: "letters-hookah",          category: "letters",  type: "alu",         name: "Hookah Shop" },
  { img: "lightbox-chicken-pizza",  category: "lightbox", type: "lightbox2Uv", name: "Chicken Pizza" },
  { img: "letters-darikhana-white", category: "letters",  type: "frame",       name: "Дәріхана / Аптека" },
  { img: "repair-toi-dami",         category: "other",    type: "repair",      name: "Той Дәмі" },
  { img: "plate-copart",            category: "other",    type: "plate",       name: "Copart Kazakhstan" },
  { img: "brand-van",               category: "other",    type: "brand",       name: "" }
];

const neonWorks = works.filter(w => w.category === "neon");
const categories = ["all", "neon", "letters", "lightbox", "other"];

const services = [
  {
    img: "neon-malina", category: "neon",
    kz: ["Неон вывескалар", "Витринаға, залға, фотозонаға. Мәтін, логотип, сурет."],
    ru: ["Неоновые вывески", "Для витрины, зала, фотозоны. Текст, логотип, рисунок."]
  },
  {
    img: "letters-mega-motors", category: "letters",
    kz: ["Көлемді әріптер", "Жарықты әріптер, металл каркаспен немесе каркассыз."],
    ru: ["Объёмные буквы", "Световые буквы на каркасе и без каркаса."]
  },
  {
    img: "lightbox-euro-round", category: "lightbox",
    kz: ["Лайтбокстар", "Бір және екі жақты, УФ басылыммен."],
    ru: ["Лайтбоксы", "Односторонние и двухсторонние, с УФ печатью."]
  },
  {
    img: "backlit-lombard", category: "letters",
    kz: ["Контражур вывескалар", "Жарық әріптің артынан қабырғаға түседі."],
    ru: ["Контражурные вывески", "Свет падает на стену из-за букв."]
  },
  {
    img: "brand-van", category: "other",
    kz: ["Брендтеу мен навигация", "Көлікке жапсырма, бағыттаушы тақтайшалар."],
    ru: ["Брендирование и навигация", "Оклейка авто, навигационные таблички."]
  },
  {
    img: "repair-toi-dami", category: "other",
    kz: ["Вывеска жөндеу", "Ескі вывесканы қалпына келтіріп, жарығын жаңартамыз."],
    ru: ["Ремонт вывесок", "Восстановим старую вывеску и обновим подсветку."]
  }
];

const reviews = [
  { name: "Мұрат Бағдал", date: "13.06.2026", photo: "hair-beauty",
    text: "Жахсы рахмет кушті шықты" },
  { name: "Ozt 13", date: "21.05.2026", photo: "healpies",
    text: "Хочу выразить огромную благодарность компании за изготовление неоновых вывесок для нашего кафе Healpies 🙌 Все сделали очень быстро, оперативно…" },
  { name: "Muslim Aitkazy", date: "30.01.2026", photo: "copart",
    text: "Заказ лайтбокс все аккуратно и четко👍🏼👍🏼" },
  { name: "Нуршат Бекберген", date: "17.12.2024",
    text: "Сервис жоғары дәрежеде! Бағалары да сапасына сай, керемет! Заказ берсеңіздер еш өкінбейсіздер!" },
  { name: "GERA 🎀", date: "14.12.2024",
    text: "Мастера своего дела 👍🏻 Понравилось, что сами все делают от начала до конца, молодцы ребята." },
  { name: "Алижан Ислямов", date: "01.12.2024", photo: "as-tau",
    text: "Молодцы ребята. Сделали всё чётко и по доступной цене!!!" },
  { name: "Pro Nuralla", date: "01.12.2024",
    text: "Спасибо большое вам. Заказали в Астану. Очень красиво получилось, доставили быстро и в сохранности ✊🏻✊🏻✊🏻" },
  { name: "Oral Ilyassova", date: "06.11.2024",
    text: "Тапсырыс берген вывескаларым толықтай көңілімнен шықты 😍👌🏻. Кафе іші өте әдемі болып қалды, рақмет!" },
  { name: "Dilnaz Kadyrma", date: "06.11.2024",
    text: "Не в первый раз заказываю у вас вывески и постеры, самые качественные и всегда с дизайном сами помогают бесплатно🙏" },
  { name: "Dana Mun", date: "03.11.2024", photo: "moon",
    text: "Заказывала здесь неоновую вывеску для дома, как декор. Качество на высоте, ребята быстро подготовили эскиз и вывеска у меня была уже через неделю…" }
];

const avatarColors = ["#e0218a", "#0a9db0", "#7a4dff", "#f08a24", "#1fa04a"];

const colors = [
  { id: "pink",   hex: "#ff3fb4", kz: "Қызғылт",  ru: "Розовый" },
  { id: "red",    hex: "#ff2d4a", kz: "Қызыл",    ru: "Красный" },
  { id: "warm",   hex: "#ffb54a", kz: "Жылы ақ",  ru: "Тёплый белый" },
  { id: "white",  hex: "#e8f4ff", kz: "Суық ақ",  ru: "Холодный белый" },
  { id: "yellow", hex: "#ffe83d", kz: "Сары",     ru: "Жёлтый" },
  { id: "green",  hex: "#3dff7a", kz: "Жасыл",    ru: "Зелёный" },
  { id: "ice",    hex: "#33f0ff", kz: "Көгілдір", ru: "Голубой" },
  { id: "blue",   hex: "#3d6bff", kz: "Көк",      ru: "Синий" },
  { id: "violet", hex: "#a94dff", kz: "Күлгін",   ru: "Фиолетовый" }
];

const fonts = [
  { id: "logo",   name: "Logo",   family: "Montserrat", weight: 500, spacing: ".12em" },
  { id: "script", name: "Script", family: "Lobster",    weight: 400 },
  { id: "round",  name: "Round",  family: "Comfortaa",  weight: 700 },
  { id: "hand",   name: "Hand",   family: "Caveat",     weight: 700 },
  { id: "block",  name: "Block",  family: "Rubik",      weight: 800 }
];

const faq = [
  {
    kz: ["Вывеска жасаудың қандай тарифтері бар?",
         "Біз үш тариф бойынша жұмыс істейміз: «Эконом» (жылдам іске қосуға арналған негізгі материалдар), «Стандарт» (тиімді баға және берік акрил) және «Премиум» (эксклюзивті жабдықтар және ең жоғары сенімділік)."],
    ru: ["Какие тарифы на изготовление вывесок у вас есть?",
         "Мы работаем по трем тарифам: «Эконом» (базовые материалы для быстрого запуска), «Стандарт» (оптимальная цена и долговечный акрил) и «Премиум» (эксклюзивные комплектующие и максимальная надежность)."]
  },
  {
    kz: ["Вывескаға қандай кепілдік беріледі және оған не кіреді?",
         "Мерзімі таңдалған пакетке байланысты: «Экономда» кепілдік берілмейді, «Стандартта» 6 айлық ресми кепілдік береміз, ал «Премиумда» толық сервистік қызмет көрсетумен 12 айға дейін кеңейтілген кепілдік береміз."],
    ru: ["Какая гарантия дается на вывески и что в нее входит?",
         "Срок зависит от выбранного пакета: в «Экономе» гарантия не предоставляется, в «Стандарте» мы даем официальную гарантию 6 месяцев, а в «Премиуме» — расширенную гарантию до 12 месяцев с полным сервисным обслуживанием."]
  },
  {
    kz: ["Сыртқы жарнама жасау қанша тұрады?",
         "Баға әр жобаға жеке есептеледі, себебі ол өлшемге, материалдарға және орнатудың күрделілігіне байланысты. Өтінім қалдырыңыз, біз нақты есепті тегін жасап береміз."],
    ru: ["Сколько стоит изготовление наружной рекламы?",
         "Стоимость рассчитывается индивидуально под ваш проект, так как зависит от габаритов, материалов и сложности монтажа. Оставьте заявку, и мы бесплатно сделаем точный расчет."]
  },
  {
    kz: ["Вывеска дизайнын жасағанда қандай негізгі ережелерді ескеру керек?",
         "Вывеска алыстан анық оқылуы, күндіз де, түнде де айқын көрінуі керек. Қаріптер жаяу жүргіншілер мен жүргізушілерге оңай оқылуы тиіс, артық бөлшектерсіз."],
    ru: ["Какие главные правила нужно учесть при разработке дизайна вывески?",
         "Вывеска должна быть максимально читабельной издалека, контрастной днем и ночью, а шрифты — легко считываться пешеходами и водителями без лишней перегруженности деталями."]
  },
  {
    kz: ["ҚР заңы бойынша қандай тіл талаптарын сақтау керек?",
         "«Тіл туралы» заңға сәйкес вывескадағы мәтін міндетті түрде мемлекеттік (қазақ) тілде болуы керек. Қосымша орыс немесе басқа тілде қайталауға болады, бірақ қазақша мәтін өлшемі жағынан кіші болмауы тиіс."],
    ru: ["Какие языковые требования нужно соблюдать по закону РК?",
         "Согласно закону «О языках», текст на вывеске обязательно должен быть на государственном (казахском) языке. Дополнительно можно разместить дубликат на русском или другом языке, причем казахский текст не должен быть меньше по размеру."]
  },
  {
    kz: ["Вывеска орнатқаны үшін салық төлеу керек пе?",
         "Егер вывескада тек атауы, логотипі және қызмет түрі көрсетілсе (ақпараттық вывеска), салық төленбейді. Ал онда сайт, телефон нөмірі немесе жарнамалық ұран сияқты қосымша мәліметтер болса, бұл сыртқы жарнама болып саналады және оған алым есептеледі."],
    ru: ["Нужно ли платить налоги за размещение вывески?",
         "Если на вывеске указаны только название, логотип и вид деятельности (информационная вывеска), то налог не платится. Если же на ней размещены дополнительные данные вроде сайта, номера телефона или рекламных слоганов — это считается наружной рекламой, и за нее начисляется сбор."]
  },
  {
    kz: ["Жеткізу мен орнату жалпы бағаға кіре ме?",
         "Иә, біз толық циклді «кілтін қолға беру» қағидасымен орындаймыз: Алматыдағы өз құрал-жабдығымызда жасаймыз, ұқыпты жеткіземіз және вывесканы қасбетке кәсіби түрде орнатамыз."],
    ru: ["Входят ли доставка и монтаж в общую стоимость?",
         "Да, мы выполняем полный цикл «под ключ»: производим на собственном оборудовании в Алматы, бережно доставляем и профессионально устанавливаем вывеску на фасад."]
  },
  {
    kz: ["Жарнамалық вывеска қанша уақытта жасалады?",
         "Жарнамалық конструкцияны жасау мен орнатудың стандартты мерзімі тапсырыстың күрделілігі мен көлеміне қарай 3-тен 7 жұмыс күніне дейін."],
    ru: ["Какие сроки производства рекламных вывесок?",
         "Стандартный срок изготовления и монтажа рекламной конструкции занимает от 3 до 7 рабочих дней в зависимости от сложности и объема заказа."]
  },
  {
    kz: ["Вывеска эскизін қалада келісуге көмектесесіздер ме?",
         "Иә, Алматыдағы барлық өзекті сәулет регламенттері мен сыртқы жарнаманы орналастыру ережелері бойынша клиенттерге кеңес береміз."],
    ru: ["Помогаете ли вы с согласованием эскиза вывески в городе?",
         "Да, мы консультируем клиентов по всем актуальным архитектурным регламентам и правилам размещения наружной рекламы в Алматы."]
  },
  {
    kz: ["Қалай тапсырыс беріп, нақты есеп алуға болады?",
         "Сайтта өтінім қалдырыңыз немесе өлшемдері мен макетін тіркеп, WhatsApp-қа жазыңыз. Таңдалған тарифті ескере отырып, 15 минутта толық есепті тегін дайындап береміз!"],
    ru: ["Как сделать заказ и получить точный расчет?",
         "Оставьте заявку на сайте или напишите нам в WhatsApp, прикрепив размеры и макет. Мы бесплатно подготовим детальный расчет с учетом выбранного тарифа за 15 минут!"]
  }
];

let lang = localStorage.getItem("lang") || "kz";

let catalogFilter = "all";
let catalogShown = PAGE_SIZE;
let modalList = [];
let modalIndex = 0;

let sign = {
  text: "Neon Õmir",
  color: "pink",
  font: "logo",
  lightWall: true
};

function $(id) {
  return document.getElementById(id);
}

function t(key) {
  return texts[lang][key];
}

function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
}

function workTitle(work) {
  return types[work.type][lang];
}

function orderLink(work) {
  let line = "• " + workTitle(work);
  if (work.name) {
    line += " (" + work.name + ")";
  }
  return whatsappLink(t("orderMessage") + "\n" + line);
}

function fontStyle(font) {
  return "font-family:'" + font.family + "', sans-serif;" +
         "font-weight:" + font.weight + ";" +
         "letter-spacing:" + (font.spacing || "normal");
}

function setLanguage(newLang) {
  lang = newLang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang === "kz" ? "kk" : "ru";

  document.querySelectorAll("[data-text]").forEach(el => {
    el.innerHTML = t(el.dataset.text);
  });

  document.querySelectorAll(".lang button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  $("noteInput").placeholder = t("notePlaceholder");
  $("wallBtn").textContent = sign.lightWall ? t("darkWall") : t("lightWall");

  $("heroWa").href = whatsappLink(t("waHello"));
  $("contactWa").href = whatsappLink(t("waHello"));
  $("waFloat").href = whatsappLink(t("waQuestion"));

  showServices();
  showFaq();
  showNeonSlider();
  showFilters();
  showCatalog();
  showBuilderButtons();
  updateSign();
}

function showServices() {
  let html = "";

  services.forEach(item => {
    html += `
      <article class="service">
        <img src="img/${item.img}.jpg" alt="${item[lang][0]}" loading="lazy">
        <div class="service-body">
          <h3>${item[lang][0]}</h3>
          <p>${item[lang][1]}</p>
          <button type="button" data-category="${item.category}">${t("servicesMore")} →</button>
        </div>
      </article>`;
  });

  $("servicesList").innerHTML = html;
}

function showNeonSlider() {
  const list = [...neonWorks, ...neonWorks, ...neonWorks, ...neonWorks];
  let html = "";

  list.forEach((work, i) => {
    html += `
      <div class="slide">
        <button type="button" class="slide-img" data-neon="${i % neonWorks.length}">
          <img src="img/${work.img}.jpg" alt="${workTitle(work)}" loading="lazy">
        </button>
        <a class="order-btn" href="${orderLink(work)}" target="_blank">${t("order")}</a>
      </div>`;
  });

  $("neonTrack").innerHTML = html;
}

function showFilters() {
  let html = "";

  categories.forEach(cat => {
    const active = cat === catalogFilter ? "active" : "";
    const count = cat === "all" ? works.length : works.filter(w => w.category === cat).length;
    html += `<button type="button" class="filter ${active}" data-filter="${cat}">${t("categories")[cat]} <span>${count}</span></button>`;
  });

  $("filters").innerHTML = html;
}

function filteredWorks() {
  if (catalogFilter === "all") {
    return works;
  }
  return works.filter(w => w.category === catalogFilter);
}

function showCatalog() {
  const list = filteredWorks();
  let html = "";

  list.slice(0, catalogShown).forEach((work, i) => {
    html += `
      <article class="card">
        <button type="button" class="card-img" data-index="${i}">
          <img src="img/${work.img}.jpg" alt="${workTitle(work)}" loading="lazy">
        </button>
        <div class="card-body">
          <h3>${workTitle(work)}</h3>
          <p class="card-name">${work.name}</p>
          <p class="card-price">${t("priceLabel")}: <b>${t("priceValue")}</b></p>
          <a class="order-btn" href="${orderLink(work)}" target="_blank">${t("order")}</a>
        </div>
      </article>`;
  });

  $("catalogList").innerHTML = html;
  $("moreBox").hidden = catalogShown >= list.length;
}

function showFaq() {
  let html = "";

  faq.forEach(item => {
    html += `
      <details class="faq-item">
        <summary>${item[lang][0]}<span class="faq-icon"></span></summary>
        <p>${item[lang][1]}</p>
      </details>`;
  });

  $("faqList").innerHTML = html;
}

function showReviews() {
  let html = "";

  reviews.forEach((r, i) => {
    const color = avatarColors[i % avatarColors.length];
    const photo = r.photo ? `<img src="img/reviews/${r.photo}.jpg" alt="" loading="lazy">` : "";
    const cardClass = r.photo ? "review" : "review no-photo";

    html += `
      <article class="${cardClass}">
        <div class="review-top">
          <span class="avatar" style="background:${color}">${r.name[0]}</span>
          <div>
            <p class="review-name">${r.name}</p>
            <p class="review-date">${r.date}</p>
          </div>
        </div>
        <div class="stars">★★★★★</div>
        <p class="review-text">${r.text}</p>
        ${photo}
      </article>`;
  });

  $("reviewsList").innerHTML = html;
}

function scrollReviews(direction) {
  const list = $("reviewsList");
  list.scrollLeft += direction * list.clientWidth;
}

function openModal(list, index) {
  modalList = list;
  modalIndex = (index + list.length) % list.length;

  const work = modalList[modalIndex];
  $("modalImg").src = "img/" + work.img + ".jpg";
  $("modalImg").alt = workTitle(work);
  $("modalOrder").href = orderLink(work);
  $("modalOrder").textContent = t("order");

  $("modal").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("modal").hidden = true;
  document.body.style.overflow = "";
}

function showBuilderButtons() {
  let colorsHtml = "";
  colors.forEach(c => {
    const active = c.id === sign.color ? "active" : "";
    colorsHtml += `<button type="button" class="color ${active}" style="--color:${c.hex}" data-color="${c.id}" title="${c[lang]}"></button>`;
  });
  $("colors").innerHTML = colorsHtml;

  let fontsHtml = "";
  fonts.forEach(f => {
    const active = f.id === sign.font ? "active" : "";
    fontsHtml += `<button type="button" class="${active}" style="${fontStyle(f)}" data-font="${f.id}">Өмір<small>${f.name}</small></button>`;
  });
  $("fonts").innerHTML = fontsHtml;
}

function fitText() {
  const el = $("neonText");
  const maxWidth = el.parentElement.clientWidth - 56;
  let size = 110;

  el.style.fontSize = size + "px";
  while (el.scrollWidth > maxWidth && size > 14) {
    size -= 2;
    el.style.fontSize = size + "px";
  }
}

function buildMessage() {
  const color = colors.find(c => c.id === sign.color);
  const font = fonts.find(f => f.id === sign.font);

  const name = $("nameInput").value.trim();
  const city = $("cityInput").value.trim();
  const address = $("addressInput").value.trim();
  const note = $("noteInput").value.trim();

  let lines = [t("msgTitle"), ""];
  lines.push("• " + t("msgText") + ": " + (sign.text || "–"));
  lines.push("• " + t("msgColor") + ": " + color[lang]);
  lines.push("• " + t("msgFont") + ": " + font.name);

  if (name) lines.push("• " + t("msgName") + ": " + name);
  if (city) lines.push("• " + t("msgCity") + ": " + city);
  if (address) lines.push("• " + t("msgAddress") + ": " + address);
  if (note) lines.push("• " + t("msgNote") + ": " + note);

  lines.push("", t("msgEnd"));
  return lines.join("\n");
}

function updateSign(flash) {
  const color = colors.find(c => c.id === sign.color);
  const font = fonts.find(f => f.id === sign.font);
  const el = $("neonText");

  $("preview").style.setProperty("--color", color.hex);
  el.textContent = sign.text || " ";
  el.style.cssText = fontStyle(font);
  fitText();

  if (flash) {
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
  }

  const message = buildMessage();
  $("message").textContent = message;
  $("sendBtn").href = whatsappLink(message);
}

document.addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;

  if (btn.dataset.lang) {
    setLanguage(btn.dataset.lang);
  }
  else if (btn.dataset.filter) {
    catalogFilter = btn.dataset.filter;
    catalogShown = PAGE_SIZE;
    showFilters();
    showCatalog();
  }
  else if (btn.dataset.category) {
    catalogFilter = btn.dataset.category;
    catalogShown = PAGE_SIZE;
    showFilters();
    showCatalog();
    $("catalog").scrollIntoView({ behavior: "smooth" });
  }
  else if (btn.id === "moreBtn") {
    catalogShown += PAGE_SIZE;
    showCatalog();
  }
  else if (btn.dataset.index) {
    openModal(filteredWorks(), Number(btn.dataset.index));
  }
  else if (btn.dataset.neon) {
    openModal(neonWorks, Number(btn.dataset.neon));
  }
  else if (btn.dataset.color) {
    sign.color = btn.dataset.color;
    showBuilderButtons();
    updateSign(true);
  }
  else if (btn.dataset.font) {
    sign.font = btn.dataset.font;
    showBuilderButtons();
    updateSign(true);
  }
});

$("reviewsPrev").addEventListener("click", () => scrollReviews(-1));
$("reviewsNext").addEventListener("click", () => scrollReviews(1));

$("modalClose").addEventListener("click", closeModal);
$("modalPrev").addEventListener("click", () => openModal(modalList, modalIndex - 1));
$("modalNext").addEventListener("click", () => openModal(modalList, modalIndex + 1));

$("modal").addEventListener("click", e => {
  if (e.target.id === "modal") closeModal();
});

document.addEventListener("keydown", e => {
  if ($("modal").hidden) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") openModal(modalList, modalIndex - 1);
  if (e.key === "ArrowRight") openModal(modalList, modalIndex + 1);
});

$("wallBtn").addEventListener("click", () => {
  sign.lightWall = !sign.lightWall;
  $("wall").classList.toggle("light", sign.lightWall);
  $("wallBtn").textContent = sign.lightWall ? t("darkWall") : t("lightWall");
});

$("textInput").addEventListener("input", e => {
  sign.text = e.target.value;
  $("error").hidden = true;
  updateSign();
});

["nameInput", "cityInput", "addressInput", "noteInput"].forEach(id => {
  $(id).addEventListener("input", () => updateSign());
});

$("sendBtn").addEventListener("click", e => {
  if (!sign.text.trim()) {
    e.preventDefault();
    $("error").textContent = t("emptyText");
    $("error").hidden = false;
  }
});

$("form").addEventListener("submit", e => e.preventDefault());

$("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(buildMessage()).then(() => {
    $("copyBtn").textContent = t("copied");
    setTimeout(() => $("copyBtn").textContent = t("copy"), 1800);
  });
});

window.addEventListener("resize", fitText);

showReviews();
setLanguage(lang);

document.fonts.ready.then(fitText);
