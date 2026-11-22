const WHATSAPP = "77017410164";
const FREE_FROM = 30000;
const PAGE_SIZE = 24;

const SHEET_CSV = "";

const texts = {
  kz: {
    back: "← Артқа",
    drag: "Тарт",
    dragHint: "← Тінтуірмен тартыңыз немесе саусақпен жылжытыңыз →",
    aboutTitle: "Күн сайын <em>классика</em>",
    aboutLead: "Billion.co – ерлер киімі мен аяқ киімі: классикалық костюмдер, поло, трикотаж, курткалар және табиғи былғарыдан тігілген аяқ киім. Сапасына жауап бере алатын заттарды таңдап, Қазақстан бойынша жеткіземіз.",
    aboutQuote: "«Өзіңді биллиондай сезін»",
    aboutQuoteSub: "Қарапайым. Сапалы. Ұқыпты.",
    whyTitle: "Неге Billion.co",
    q4: "Kaspi-де бар",
    q4Text: "Әр тауарды Kaspi дүкенінен де сатып алуға болады",
    statModels: "модель каталогта",
    statCats: "санат",
    statCountry: "негізгі өндіруші ел",
    statCountryValue: "Түркия",
    statSeason: "Күз-Қыс және Көктем-Жаз коллекциялары",
    buyKaspi: "Kaspi-де сатып алу",
    color: "Түсі",
    showMore: "Тағы көрсету",
    loading: "Тауарлар жүктелуде…",
    shopNow: "Барлығын көру",
    igText: "Біздің клиенттер мен жаңа заттар",
    igBtn: "Instagram-да ашу",
    mayLike: "Сізге ұнауы мүмкін",
    quickAdd: "Өлшемді таңдаңыз – бірден себетке",
    zoom: "Үлкейту",
    sizeHelp: "Өлшем таңдауға көмек керек пе? WhatsApp-қа жазыңыз.",
    concept: "<b>Концепт</b> · billionco.kz жаңа сайты · дайындаған <a href=\"https://newwave.website\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;font-weight:700\">newwave</a>",
    hide: "Жасыру",
    info1: "Қазақстан бойынша жеткізу",
    info2: "Kaspi арқылы төлем",
    info3: "14 күн ішінде айырбас",
    brandSub: "Киім · Аяқ киім",

    navCatalog: "Каталог",
    navNew: "Жаңалықтар",
    navLookbook: "Лукбук",
    navAbout: "Біз туралы",
    navDelivery: "Жеткізу",
    navSizes: "Өлшемдер",
    navContacts: "Байланыс",
    navCart: "Себет",

    heroEyebrow: "Киім және аяқ киім",
    heroTitle: "Өзіңді биллиондай сезін",
    heroText: "Спорттық двойкалар, толстовкалар, тенискалар, футболкалар, джинсылар мен аяқ киім. Қазақстан бойынша жеткізу, Kaspi арқылы төлем.",
    heroBtn: "Каталог",

    catsEyebrow: "Санаттар",
    catsTitle: "Өнім каталогы",
    allGoods: "Барлық тауар",
    newTitle: "Жаңа ғана келді",
    allNew: "Барлық жаңалық",

    perk1: "Қазақстан бойынша жеткізу",
    perk1Text: "Қалалар бойынша мерзімі мен бағасы",
    perk2: "Kaspi арқылы төлем",
    perk2Text: "Kaspi Gold, Kaspi Red, бөліп төлеу",
    perk3: "Өлшемдер кестесі",
    perk3Text: "Өлшемді бір минутта таңдаңыз",
    perk4: "14 күн ішінде айырбас",
    perk4Text: "Өлшемі келмесе",

    looksTitle: "Дайын образдар",
    allLooks: "Барлығын көру",
    bandTitle: "Қай өлшемді алу керегін білмейсіз бе?",
    bandText: "Менеджерге бойыңыз бен салмағыңызды жазыңыз – бірнеше минутта таңдап береміз.",
    writeWa: "WhatsApp-қа жазу",

    allTitle: "Барлық тауар",
    all: "Барлығы",
    searchPh: "Тауар іздеу",
    sortNew: "Алдымен жаңалары",
    sortAsc: "Алдымен арзаны",
    sortDesc: "Алдымен қымбаты",
    nothing: "Ештеңе табылмады.",

    newPageTitle: "Жаңа түсімдер",
    newPageText: "Дүкенде жақында пайда болған заттар.",

    home: "Басты бет",
    size: "Өлшем",
    sizeTable: "Өлшемдер кестесі",
    chooseSize: "Өлшемді таңдаңыз",
    toCart: "Себетке",
    addToCart: "Себетке қосу",
    description: "Сипаттама",
    sizesTab: "Өлшемдер",
    deliveryTitle: "Жеткізу және төлем",
    deliveryShort: "Қазақстан бойынша 1 күннен бастап жеткізу. {sum} бастап – тегін. Kaspi арқылы төлем. 14 күн ішінде айырбас.",
    withThis: "Бұны немен киеді",
    completeLook: "Образды толықтырыңыз",
    photo: "Фото",
    less: "Азайту",
    more: "Көбейту",
    added: "себетке қосылды",
    newBadge: "New",

    lookPageTitle: "Қалай киюге болады",
    lookPageText: "Дүкендегі заттардан құралған дайын үйлесімдер.",

    aboutText1: "<span class=\"ph\">Дүкен иесінен мәтін:</span> қашан ашылды, дүкен қай жерде, тауар қайдан келеді, неге осындай атау таңдалды.",
    aboutText2: "Біз күнделікті киім мен аяқ киім сатамыз: спорттық двойкалар, толстовкалар, тенискалар, футболкалар, джинсылар мен аяқ киім. Әр затты жіберер алдында тексеріп, өлшемді таңдауға көмектесеміз.",
    aboutBtn: "Каталогты көру",
    q1: "Сапаны тексеру",
    q1Text: "Жіберер алдында тігісін, фурнитурасын және өлшемін қараймыз",
    q2: "Өлшем бойынша көмек",
    q2Text: "Менеджер бойыңыз бен салмағыңызға қарап кеңес береді",
    q3: "Жылдам жіберу",
    q3Text: "Тапсырыс берген күні Қазақстан бойынша жібереміз",

    buyers: "Сатып алушыларға",
    city: "Қала",
    days: "Мерзімі",
    cost: "Бағасы",
    freeNote: "{sum} бастап тапсырыс берсеңіз, жеткізу тегін. Сары түспен белгіленген мәліметтерді дүкен иесімен нақтылау керек.",
    payTitle: "Төлем",
    pay1: "Kaspi Gold / аударым",
    pay1Text: "Тапсырыс расталған соң менеджер шот жібереді",
    pay2: "Kaspi Red бөліп төлеу",
    pay2Text: "Артық төлемсіз бөліп төлейсіз",
    pay3: "Қолма-қол",
    pay3Text: "Дүкеннен өзіңіз алып кеткенде",
    returnTitle: "Айырбас және қайтару",
    returnText: "Затты 14 күн ішінде айырбастауға немесе қайтаруға болады, егер ол киілмеген болса және бирка сақталса. WhatsApp-қа жазыңыз – тауарды қалай кері жіберу керегін айтамыз.",

    sizesClothes: "Двойка, толстовка, теннис, футболка",
    sizesJeans: "Джинсылар",
    sizesShoes: "Аяқ киім",
    measureTitle: "Өлшемді қалай алу керек",
    m1: "<b>Кеуде</b> – ең шығыңқы жерінен, лентаны көлденең ұстаңыз",
    m2: "<b>Бел</b> – іштің ең жіңішке жерінен",
    m3: "<b>Жамбас</b> – ең кең жерінен",
    m4: "<b>Табан</b> – қағаз үстінде тұрып, өкшеден бас бармаққа дейін",
    measureTip: "Екі өлшемнің ортасында болсаңыз, еркін отыруы үшін үлкенін алыңыз.",

    help: "Көмек",
    faqTitle: "Жиі қойылатын сұрақтар",
    shop: "Дүкен",
    shopAddress: "Қала, көше, үй",
    hours: "Жұмыс уақыты",
    hoursValue: "Күн сайын 10:00–22:00",
    shopsTitle: "Алматыдағы дүкендеріміз",
    call: "Қоңырау шалу",
    route: "2ГИС-те маршрут",
    open2gis: "2ГИС-те ашу",

    checkout: "Тапсырыс беру",
    goods: "Тауарлар",
    total: "Барлығы",
    nameLabel: "Атыңыз",
    phoneLabel: "Телефон",
    cityLabel: "Қала",
    addressLabel: "Мекенжай немесе «өзім алып кетемін»",
    sendOrder: "Тапсырысты WhatsApp-қа жіберу",
    sendHint: "WhatsApp дайын мәтінмен ашылады.",
    cartEmpty: "Себет бос.",
    remove: "Жою",
    freeAdd: "Себетке тауар қосыңыз",
    freeYes: "Жеткізу тегін",
    freeLeft: "Тегін жеткізуге дейін {sum} қалды",
    orderReady: "Тапсырыс дайын. Оны WhatsApp-та жіберіңіз",

    msgTitle: "Сәлеметсіз бе! Сайттан жаңа тапсырыс:",
    msgSize: "өлшемі",
    msgDelivery: "Жеткізу",
    msgFree: "тегін",
    msgTotal: "Барлығы",
    msgName: "Аты",
    msgPhone: "Телефон",
    msgCity: "Қала",
    msgAddress: "Мекенжай",
    msgPay: "Төлем",
    waHello: "Сәлеметсіз бе! Billion Co сайтынан жазып отырмын.",
    waSize: "Сәлеметсіз бе! Өлшем таңдауға көмектесіңізші. Бойым: , салмағым: ",

    footerText: "Алматыдағы ерлер киімі мен аяқ киімі. Қазақстан бойынша жеткізу.",
    company: "Компания",
    madeBy: "Сайт концепті: <a href=\"https://newwave.website\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;font-weight:700\">newwave</a>"
  },

  ru: {
    back: "← Назад",
    drag: "Тяни",
    dragHint: "← Тяните мышкой или листайте пальцем →",
    aboutTitle: "Классика <em>на каждый день</em>",
    aboutLead: "Billion.co – мужская одежда и обувь: классические костюмы, поло, трикотаж, куртки и обувь из натуральной кожи. Мы отбираем вещи, за качество которых готовы отвечать, и доставляем их по всему Казахстану.",
    aboutQuote: "«Одежда, в которой ты на биллион»",
    aboutQuoteSub: "Просто. Качественно. Аккуратно.",
    whyTitle: "Почему Billion.co",
    q4: "Есть на Kaspi",
    q4Text: "Каждый товар можно купить и в магазине Kaspi",
    statModels: "моделей в каталоге",
    statCats: "категорий",
    statCountry: "основная страна производства",
    statCountryValue: "Турция",
    statSeason: "коллекции Осень-Зима и Весна-Лето",
    buyKaspi: "Купить на Kaspi",
    color: "Цвет",
    showMore: "Показать ещё",
    loading: "Загружаем товары…",
    shopNow: "Смотреть все",
    igText: "Наши клиенты и новинки",
    igBtn: "Открыть Instagram",
    mayLike: "Вам может понравиться",
    quickAdd: "Выберите размер – сразу в корзину",
    zoom: "Увеличить",
    sizeHelp: "Нужна помощь с размером? Напишите в WhatsApp.",
    concept: "<b>Концепт</b> · нового сайта billionco.kz · подготовил <a href=\"https://newwave.website\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;font-weight:700\">newwave</a>",
    hide: "Скрыть",
    info1: "Доставка по всему Казахстану",
    info2: "Оплата Kaspi",
    info3: "Обмен 14 дней",
    brandSub: "Одежда · Обувь",

    navCatalog: "Каталог",
    navNew: "Новинки",
    navLookbook: "Лукбук",
    navAbout: "О нас",
    navDelivery: "Доставка",
    navSizes: "Размеры",
    navContacts: "Контакты",
    navCart: "Корзина",

    heroEyebrow: "Одежда и обувь",
    heroTitle: "Одежда, в которой ты на биллион",
    heroText: "Спортивные двойки, толстовки, тенниски, футболки, джинсы и обувь. Доставка по всему Казахстану, оплата Kaspi.",
    heroBtn: "Каталог",

    catsEyebrow: "Категории",
    catsTitle: "Каталог продукции",
    allGoods: "Все товары",
    newTitle: "Только поступили",
    allNew: "Все новинки",

    perk1: "Доставка по Казахстану",
    perk1Text: "Сроки и стоимость по городам",
    perk2: "Оплата Kaspi",
    perk2Text: "Kaspi Gold, Kaspi Red, рассрочка",
    perk3: "Таблица размеров",
    perk3Text: "Подберите размер за минуту",
    perk4: "Обмен 14 дней",
    perk4Text: "Если размер не подошёл",

    looksTitle: "Готовые образы",
    allLooks: "Смотреть все",
    bandTitle: "Не знаете, какой размер взять?",
    bandText: "Напишите менеджеру свой рост и вес – подберём за пару минут.",
    writeWa: "Написать в WhatsApp",

    allTitle: "Все товары",
    all: "Все",
    searchPh: "Поиск по товарам",
    sortNew: "Сначала новинки",
    sortAsc: "Сначала дешевле",
    sortDesc: "Сначала дороже",
    nothing: "Ничего не нашлось.",

    newPageTitle: "Новые поступления",
    newPageText: "Вещи, которые появились в магазине недавно.",

    home: "Главная",
    size: "Размер",
    sizeTable: "Таблица размеров",
    chooseSize: "Выберите размер",
    toCart: "В корзину",
    addToCart: "Добавить в корзину",
    description: "Описание",
    sizesTab: "Размеры",
    deliveryTitle: "Доставка и оплата",
    deliveryShort: "Доставка по всему Казахстану от 1 дня. Бесплатно от {sum}. Оплата Kaspi. Обмен 14 дней.",
    withThis: "С этим носят",
    completeLook: "Дополните образ",
    photo: "Фото",
    less: "Меньше",
    more: "Больше",
    added: "добавлено в корзину",
    newBadge: "New",

    lookPageTitle: "Как носить",
    lookPageText: "Готовые сочетания из вещей магазина.",

    aboutText1: "<span class=\"ph\">Текст о магазине от владельца:</span> когда открылись, где находится магазин, откуда товар, почему выбрали такое название.",
    aboutText2: "Мы продаём одежду и обувь на каждый день: спортивные двойки, толстовки, тенниски, футболки, джинсы и обувь. Каждую вещь проверяем перед отправкой и помогаем подобрать размер.",
    aboutBtn: "Смотреть каталог",
    q1: "Проверка качества",
    q1Text: "Смотрим швы, фурнитуру и размер перед отправкой",
    q2: "Помощь с размером",
    q2Text: "Менеджер подскажет по росту и весу",
    q3: "Быстрая отправка",
    q3Text: "Отправляем в день заказа по всему Казахстану",

    buyers: "Покупателям",
    city: "Город",
    days: "Срок",
    cost: "Стоимость",
    freeNote: "При заказе от {sum} доставка бесплатная. Жёлтым отмечены данные, которые нужно уточнить у владельца.",
    payTitle: "Оплата",
    pay1: "Kaspi Gold / перевод",
    pay1Text: "Менеджер отправит счёт после подтверждения заказа",
    pay2: "Рассрочка Kaspi Red",
    pay2Text: "Платите частями без переплаты",
    pay3: "Наличными",
    pay3Text: "При самовывозе из магазина",
    returnTitle: "Обмен и возврат",
    returnText: "Обменять или вернуть вещь можно в течение 14 дней, если её не носили и сохранены бирки. Напишите менеджеру в WhatsApp, и мы подскажем, как отправить товар обратно.",

    sizesClothes: "Двойки, толстовки, тенниски, футболки",
    sizesJeans: "Джинсы",
    sizesShoes: "Обувь",
    measureTitle: "Как снять мерки",
    m1: "<b>Грудь</b> – по самой выступающей точке, лента горизонтально",
    m2: "<b>Талия</b> – по самой узкой части живота",
    m3: "<b>Бёдра</b> – по самой широкой части",
    m4: "<b>Стопа</b> – от пятки до большого пальца, стоя на листе бумаги",
    measureTip: "Если вы между размерами, для свободной посадки берите больший.",

    help: "Помощь",
    faqTitle: "Частые вопросы",
    shop: "Магазин",
    shopAddress: "Город, улица, дом",
    hours: "График",
    hoursValue: "Ежедневно 10:00–22:00",
    shopsTitle: "Наши магазины в Алматы",
    call: "Позвонить",
    route: "Маршрут в 2ГИС",
    open2gis: "Открыть в 2ГИС",

    checkout: "Оформление заказа",
    goods: "Товары",
    total: "Итого",
    nameLabel: "Имя",
    phoneLabel: "Телефон",
    cityLabel: "Город",
    addressLabel: "Адрес или «самовывоз»",
    sendOrder: "Отправить заказ в WhatsApp",
    sendHint: "Откроется WhatsApp с готовым текстом заказа.",
    cartEmpty: "Корзина пуста.",
    remove: "Удалить",
    freeAdd: "Добавьте товары в корзину",
    freeYes: "Доставка бесплатная",
    freeLeft: "До бесплатной доставки осталось {sum}",
    orderReady: "Заказ сформирован. Отправьте его в WhatsApp",

    msgTitle: "Здравствуйте! Новый заказ с сайта:",
    msgSize: "размер",
    msgDelivery: "Доставка",
    msgFree: "бесплатно",
    msgTotal: "Итого",
    msgName: "Имя",
    msgPhone: "Телефон",
    msgCity: "Город",
    msgAddress: "Адрес",
    msgPay: "Оплата",
    waHello: "Здравствуйте! Пишу с сайта Billion Co.",
    waSize: "Здравствуйте! Помогите подобрать размер. Рост: , вес: ",

    footerText: "Мужская одежда и обувь в Алматы. Доставка по всему Казахстану.",
    company: "Компания",
    madeBy: "Концепт сайта: <a href=\"https://newwave.website\" target=\"_blank\" rel=\"noopener\" style=\"color:inherit;font-weight:700\">newwave</a>"
  }
};

const categories = [
  { id: "suits", kz: "Костюмдер",          ru: "Костюмы",            fb: "set|#1f2a44|#b08d57" },
  { id: "sport", kz: "Спорттық костюмдер", ru: "Спортивные костюмы", fb: "set|#2c2f33|#b08d57" },
  { id: "polo",  kz: "Поло",               ru: "Поло",               fb: "polo|#f3efe6|#1f2a44" },
  { id: "tee",   kz: "Футболкалар",        ru: "Футболки",           fb: "tee|#1b1d22|#b08d57" },
  { id: "shirt", kz: "Жейделер",           ru: "Рубашки",            fb: "polo|#e9e1d0|#1f2a44" },
  { id: "knit",  kz: "Кофталар",           ru: "Кофты и кардиганы",  fb: "hoodie|#b08d57|#1b1d22" },
  { id: "outer", kz: "Курткалар",          ru: "Куртки",             fb: "hoodie|#2f3d33|#e9e1d0" },
  { id: "pants", kz: "Шалбарлар",          ru: "Брюки и джинсы",     fb: "jeans|#3b4f6b|#e2d3a8" },
  { id: "shoes", kz: "Аяқ киім",           ru: "Обувь",              fb: "shoe|#f3efe6|#1f2a44" },
  { id: "other", kz: "Басқа",              ru: "Другое",             fb: "tee|#8a9bb5|#1b2848" }
];

const sizesByCategory = {
  pants: ["W30", "W31", "W32", "W33", "W34", "W36"],
  shoes: ["38", "39", "40", "41", "42", "43"]
};
const DEFAULT_SIZES = ["M (48)", "L (50)", "XL (52)", "2XL (54)"];

const demoProducts = [
  { cat: "sport", price: 32990, isNew: true, ru: ["Спортивный костюм (пример)", "темно-синий"], kz: ["Спорттық костюм (үлгі)", "қара көк"] },
  { cat: "polo",  price: 12990, isNew: true, ru: ["Поло (пример)", "белый"], kz: ["Поло (үлгі)", "ақ"] },
  { cat: "shoes", price: 24990, ru: ["Кроссовки (пример)", "белые"], kz: ["Кроссовка (үлгі)", "ақ"] }
];

const products = (window.PRODUCTS_DATA || demoProducts).slice();

products.forEach((p, i) => {
  p.id = i + 1;
  p.out = p.out || [];
});

const descriptions = {
  kz: "Billion Co дүкенінен. Өлшем бойынша кеңес керек болса, WhatsApp-қа жазыңыз.",
  ru: "Из магазина Billion Co. Нужна помощь с размером – напишите в WhatsApp."
};

const looks = [
  { cats: ["suits", "shoes"],
    kz: ["Классика", "Костюм-двойка және туфли"],
    ru: ["Классика", "Костюм-двойка и туфли"] },
  { cats: ["polo", "pants"],
    kz: ["Пиджаксыз, бірақ сыпайы", "Поло және классикалық шалбар"],
    ru: ["Без пиджака, но строго", "Поло и классические брюки"] },
  { cats: ["sport", "shoes"],
    kz: ["Күнделікті спорт", "Спорттық костюм және кроссовка"],
    ru: ["Спорт на каждый день", "Спортивный костюм и кроссовки"] }
];

const stores = [
  { kz: "Mega Center",    ru: "Mega Center",     noteKz: "Сауда орталығы",             noteRu: "Торговый центр",          q: "Mega Center Alma-Ata Billion.co" },
  { kz: "Mega Park",      ru: "Mega Park",       noteKz: "Сауда орталығы",             noteRu: "Торговый центр",          q: "Mega Park Billion.co" },
  { kz: "Aport Mall",     ru: "Апорт Молл",      noteKz: "Сауда орталығы",             noteRu: "Торговый центр",          q: "Aport Mall Billion.co" },
  { kz: "Абылай хан, 68", ru: "Абылай хана, 68", noteKz: "Көшедегі дүкен",             noteRu: "Магазин на улице",        q: "Абылай хана 68" },
  { kz: "«Москва» ТК",    ru: "ЖК «Москва»",     noteKz: "Абай, 8 ш/а, 41/6",          noteRu: "Абай, 8 мкр, 41/6",       q: "8 микрорайон 41/6" },
  { kz: "Пушкин, 23",     ru: "Пушкина, 23",     noteKz: "Мәметова көшесімен қиылысы", noteRu: "Пересечение с Маметовой", q: "Пушкина 23" }
];

const delivery = [
  { kz: "Алматы",                      ru: "Алматы",                     daysKz: "1 күн",   daysRu: "1 день",   price: 1000 },
  { kz: "Астана",                      ru: "Астана",                     daysKz: "1–2 күн", daysRu: "1–2 дня",  price: 1500 },
  { kz: "Шымкент, Қарағанды, Ақтөбе",  ru: "Шымкент, Караганда, Актобе", daysKz: "2–3 күн", daysRu: "2–3 дня",  price: 1500 },
  { kz: "Қазақстанның басқа қалалары", ru: "Другие города Казахстана",   daysKz: "3–5 күн", daysRu: "3–5 дней", price: 2000 }
];

const cities = [
  { id: "almaty",    kz: "Алматы",     ru: "Алматы",       ship: 1000 },
  { id: "astana",    kz: "Астана",     ru: "Астана",       ship: 1500 },
  { id: "shymkent",  kz: "Шымкент",    ru: "Шымкент",      ship: 1500 },
  { id: "karaganda", kz: "Қарағанды",  ru: "Караганда",    ship: 1500 },
  { id: "aktobe",    kz: "Ақтөбе",     ru: "Актобе",       ship: 1500 },
  { id: "other",     kz: "Басқа қала", ru: "Другой город", ship: 2000 }
];

const payments = [
  { id: "kaspi", kz: "Kaspi аударым",              ru: "Kaspi перевод" },
  { id: "red",   kz: "Kaspi Red бөліп төлеу",      ru: "Kaspi Red рассрочка" },
  { id: "cash",  kz: "Өзім алып кеткенде қолма-қол", ru: "Наличными при самовывозе" }
];

const sizeTables = {
  clothes: {
    kz: ["Өлшем", "Кеуде", "Бел", "Бой"],
    ru: ["Размер", "Грудь", "Талия", "Рост"],
    rows: [["S (46)", "92–96", "76–80", "165–172"], ["M (48)", "96–100", "80–84", "170–178"], ["L (50)", "100–106", "84–90", "175–182"], ["XL (52)", "104–108", "88–94", "178–185"], ["2XL (54)", "108–112", "94–100", "180–188"], ["3XL (56)", "112–116", "100–106", "182–190"]]
  },
  jeans: {
    kz: ["Өлшем", "Бел, см", "Жамбас, см", "Ұзындығы, см"],
    ru: ["Размер", "Талия, см", "Бёдра, см", "Длина, см"],
    rows: [["W30 (46)", "76", "96", "102"], ["W31 (46–48)", "79", "98", "103"], ["W32 (48)", "81", "100", "104"], ["W33 (48–50)", "84", "102", "105"], ["W34 (50)", "86", "104", "106"], ["W36 (52)", "91", "108", "107"]]
  },
  shoes: {
    kz: ["Өлшем", "Табан ұзындығы, см"],
    ru: ["Размер", "Длина стопы, см"],
    rows: [["38", "24.5"], ["39", "25.0"], ["40", "25.5"], ["41", "26.2"], ["42", "26.8"], ["43", "27.5"]]
  }
};

const faq = [
  {
    kz: ["Тапсырысты қалай беремін?", "Тауарларды себетке қосып, атыңызды, телефоныңызды және мекенжайыңызды толтырыңыз да, «Тапсырысты WhatsApp-қа жіберу» батырмасын басыңыз. Менеджер тауардың барын растап, Kaspi шотын жібереді."],
    ru: ["Как оформить заказ?", "Добавьте товары в корзину, заполните имя, телефон и адрес и нажмите «Отправить заказ в WhatsApp». Менеджер подтвердит наличие и пришлёт счёт Kaspi."]
  },
  {
    kz: ["Өлшемді қалай таңдаймын?", "Өлшемдер кестесін қараңыз немесе менеджерге бойыңыз бен салмағыңызды жазыңыз."],
    ru: ["Как подобрать размер?", "Посмотрите таблицу размеров или напишите менеджеру свой рост и вес."]
  },
  {
    kz: ["Жеткізу қанша уақыт алады?", "Алматы бойынша 1 күннен, алыс қалаларға 3–5 күнге дейін. Толығырақ «Жеткізу және төлем» бетінде."],
    ru: ["Сколько идёт доставка?", "От 1 дня по Алматы до 3–5 дней в отдалённые города. Подробнее на странице «Доставка и оплата»."]
  },
  {
    kz: ["Киіп көруге бола ма?", "Иә, Алматыдағы 6 дүкеніміздің кез келгенінде, күн сайын 10:00–22:00. Мекенжайлары оң жақта."],
    ru: ["Можно ли примерить?", "Да, в любом из 6 наших магазинов в Алматы, ежедневно с 10:00 до 22:00. Адреса указаны справа."]
  }
];

let lang = loadValue("lang", "kz");
let cart = loadValue("cart", []);

let catalogFilter = "all";
let catalogSort = "new";
let catalogQuery = "";
let catalogShown = PAGE_SIZE;
let newShown = PAGE_SIZE;
let chosenSize = {};
let productQty = 1;
let currentProduct = null;

function $(id) {
  return document.getElementById(id);
}

function t(key) {
  return texts[lang][key];
}

function loadValue(key, fallback) {
  try {
    const value = localStorage.getItem("billion-" + key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveValue(key, value) {
  try {
    localStorage.setItem("billion-" + key, JSON.stringify(value));
  } catch (e) {}
}

function money(n) {
  return Math.round(n).toLocaleString("ru-RU") + " ₸";
}

function whatsappLink(message) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
}

function productById(id) {
  return products.find(p => p.id === id);
}

function productName(p) {
  return p[lang][0];
}

function productInfo(p) {
  return p[lang][1];
}

function categoryName(id) {
  return categoryOf(id)[lang];
}

function goodsCount(n) {
  if (lang === "kz") {
    return n + " тауар";
  }
  const a = n % 10;
  const b = n % 100;
  if (a === 1 && b !== 11) return n + " товар";
  if (a >= 2 && a <= 4 && (b < 10 || b >= 20)) return n + " товара";
  return n + " товаров";
}

function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16);
  const f = v => Math.max(0, Math.min(255, Math.round(v * k)));
  return "rgb(" + f(n >> 16) + "," + f((n >> 8) & 255) + "," + f(n & 255) + ")";
}

function drawing(type, color, accent) {
  const dark = shade(color, .8);
  const edge = `stroke="${shade(color, .7)}" stroke-width="1.2"`;
  const tee = "M64 30Q100 44 136 30L172 46 192 86 160 98 154 84V206H46V84L40 98 8 86 28 46Z";
  const long = "M64 30Q100 44 136 30L166 44 186 196 162 200 154 96V206H46V96L38 200 14 196 34 44Z";
  let svg = "";

  if (type === "tee") {
    svg = `<path d="${tee}" fill="${color}" ${edge}/>
      <path d="M64 30Q100 44 136 30Q100 58 64 30" fill="${dark}"/>
      <text x="100" y="116" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="21" letter-spacing="2" fill="${accent}">BILLION</text>`;
  }
  if (type === "polo") {
    svg = `<path d="${tee}" fill="${color}" ${edge}/>
      <path d="M78 30 100 58 122 30 136 30 112 70H88L64 30Z" fill="${dark}"/>
      <path d="M100 58v40" stroke="${dark}" stroke-width="3"/>
      ${[66, 80, 94].map(y => `<circle cx="100" cy="${y}" r="2.6" fill="${accent}"/>`).join("")}
      <path d="M40 98 8 86M160 98l32-12" stroke="${accent}" stroke-width="4"/>`;
  }
  if (type === "hoodie") {
    svg = `<path d="${long}" fill="${color}" ${edge}/>
      <path d="M60 38Q100-14 140 38Q100 62 60 38" fill="${dark}"/>
      <path d="M70 150h60l10 44H60z" fill="${dark}"/>
      <path d="M92 50v34M108 50v30" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>
      <rect x="46" y="194" width="108" height="12" fill="${dark}"/>`;
  }
  if (type === "set") {
    svg = `<path d="${long}" fill="${color}" ${edge}/>
      <path d="M64 30Q100 44 136 30" fill="none" stroke="${dark}" stroke-width="8"/>
      <path d="M100 36V206" stroke="${accent}" stroke-width="3"/>
      <path d="M164 46l20 150M36 46 16 196" stroke="${accent}" stroke-width="5"/>
      <rect x="46" y="194" width="108" height="12" fill="${dark}"/>`;
  }
  if (type === "jeans") {
    svg = `<path d="M52 18H148L156 212H112L100 86 88 212H44Z" fill="${color}" ${edge}/>
      <rect x="52" y="18" width="96" height="16" fill="${dark}"/>
      <path d="M64 34q8 26 30 26M136 34q-8 26-30 26M100 34v40" fill="none" stroke="${accent}" stroke-width="2" stroke-dasharray="4 3"/>`;
  }
  if (type === "shoe") {
    svg = `<g transform="translate(0,20)">
      <path d="M14 150Q16 104 58 98L92 88Q118 116 150 120L178 128Q194 134 192 154H14Z" fill="${color}" ${edge}/>
      <rect x="12" y="150" width="182" height="18" rx="8" fill="${accent}"/>
      <path d="M80 98l18 18M92 92l18 18M104 88l16 20" stroke="${dark}" stroke-width="4" stroke-linecap="round"/></g>`;
  }

  return `<svg viewBox="0 0 200 220" aria-hidden="true">${svg}</svg>`;
}

function photo(src, fb, alt) {
  const [type, color, accent] = fb.split("|");
  return `<span class="fallback">${drawing(type, color, accent)}</span>
    <img src="${src}" alt="${alt || ""}" loading="lazy" onload="this.classList.add('ok')" onerror="this.remove()">`;
}

function categoryOf(id) {
  return categories.find(c => c.id === id) || categories[categories.length - 1];
}

function productFb(p) {
  return categoryOf(p.cat).fb;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
}

function usedCategories() {
  return categories.filter(c => products.some(p => p.cat === c.id));
}

function photoSrc(p, i) {
  if (p.photos && p.photos.length) {
    return p.photos[i] || "";
  }
  return "photos/p" + p.id + (i ? "-" + (i + 1) : "") + ".jpg";
}

function productImages(p) {
  const count = p.photos && p.photos.length ? p.photos.length : 3;
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(photoSrc(p, i));
  }
  return list;
}

function sizesOf(p) {
  return p.sizes && p.sizes.length ? p.sizes : sizesByCategory[p.cat] || DEFAULT_SIZES;
}

function tableHtml(table) {
  let html = "<table><tr>";
  table[lang].forEach(cell => {
    html += `<th>${cell}</th>`;
  });
  html += "</tr>";
  table.rows.forEach(row => {
    html += "<tr>" + row.map(cell => `<td>${cell}</td>`).join("") + "</tr>";
  });
  return html + "</table>";
}

function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => {
    el.hidden = true;
  }, 2400);
}

function setLanguage(newLang) {
  lang = newLang;
  saveValue("lang", lang);
  document.documentElement.lang = lang === "kz" ? "kk" : "ru";

  document.querySelectorAll("[data-text]").forEach(el => {
    el.innerHTML = t(el.dataset.text);
  });

  document.querySelectorAll("[data-ph]").forEach(el => {
    el.placeholder = t(el.dataset.ph);
  });

  document.querySelectorAll(".lang button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  $("bandWa").href = whatsappLink(t("waSize"));
  $("contactWa").href = whatsappLink(t("waHello"));
  $("waFloat").href = whatsappLink(t("waHello"));
  document.querySelectorAll(".wa-link").forEach(a => {
    a.href = whatsappLink(t("waHello"));
  });

  showCategoryTiles();
  showAbout();
  showStores();
  showFooterCategories();
  showLooks();
  showInstagram();
  showChips();
  showSortOptions();
  showDeliveryTable();
  showSizeTables();
  showFaq();
  showCartSelects();
  route(false);
}

function productCard(p) {
  let sizes = "";
  sizesOf(p).forEach(s => {
    const disabled = p.out.includes(s) ? "disabled" : "";
    sizes += `<button type="button" data-quick-size="${s}" data-id="${p.id}" ${disabled}>${s}</button>`;
  });

  const [type, color, accent] = productFb(p).split("|");

  return `
    <article class="card" data-card="${p.id}">
      <div class="card-top">
        <a class="photo card-img" href="#product-${p.id}" aria-label="${productName(p)}">
          ${p.isNew ? `<span class="badge">${t("newBadge")}</span>` : ""}
          <span class="fallback">${drawing(type, color, accent)}</span>
          ${photoSrc(p, 1) ? `<img class="back" src="${photoSrc(p, 1)}" alt="" loading="lazy" onload="this.classList.add('ok')" onerror="this.remove()">` : ""}
          <img class="front" src="${photoSrc(p, 0)}" alt="${productName(p)}" loading="lazy" onload="this.classList.add('ok')" onerror="this.remove()">
        </a>
        <button type="button" class="quick-btn" data-quick="${p.id}" aria-label="${t("toCart")}">+</button>
        <div class="quick" hidden>
          <p>${t("quickAdd")}</p>
          <div class="sizes">${sizes}</div>
        </div>
      </div>
      <h3><a href="#product-${p.id}">${productName(p)}</a></h3>
      <p class="meta">${productInfo(p)}</p>
      <p class="price">${money(p.price)}</p>
    </article>`;
}

function showCategoryTiles() {
  let html = "";

  usedCategories().forEach(c => {
    const list = products.filter(p => p.cat === c.id);
    const count = list.length;
    html += `
      <a class="cat" href="#catalog" data-go="${c.id}">
        <div class="photo cover">${photo(photoSrc(list[0], 0), c.fb, c[lang])}</div>
        <b>${c[lang]}</b>
        <small>${goodsCount(count)}</small>
      </a>`;
  });

  $("catTiles").innerHTML = html;
}

function showAbout() {
  const picks = ["suits", "polo", "shoes"]
    .map(cat => products.find(p => p.cat === cat))
    .filter(Boolean);

  $("aboutCollage").innerHTML = picks.map(p => `
    <a class="photo cover" href="#product-${p.id}">${photo(photoSrc(p, 0), productFb(p), productName(p))}</a>`).join("");

  const stats = [
    [products.length, t("statModels")],
    [usedCategories().length, t("statCats")],
    [t("statCountryValue"), t("statCountry")],
    ["2026", t("statSeason")]
  ];
  $("aboutStats").innerHTML = stats.map(s => `<div class="stat"><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");

  $("aboutCats").innerHTML = $("catTiles").innerHTML;
}

function showStores() {
  const html = stores.map((st, i) => `
    <a class="store" href="https://2gis.kz/almaty/search/${encodeURIComponent(st.q)}" target="_blank" rel="noopener">
      <i>${String(i + 1).padStart(2, "0")}</i>
      <b>${st[lang]}</b>
      <span>${lang === "kz" ? st.noteKz : st.noteRu}</span>
      <em>${t("route")} →</em>
    </a>`).join("");
  $("homeStores").innerHTML = html;
  $("contactStores").innerHTML = html;
}

function showFooterCategories() {
  let html = "";
  usedCategories().forEach(c => {
    html += `<a href="#catalog" data-go="${c.id}">${c[lang]}</a>`;
  });
  $("footerCats").innerHTML = html;
}

function lookCard(look, i) {
  const items = look.cats
    .map((cat, k) => products.filter(p => p.cat === cat)[i + k])
    .filter(Boolean);
  if (!items.length) return "";

  let links = "";
  items.forEach(p => {
    links += `<a href="#product-${p.id}"><span>${productName(p)}</span><span>${money(p.price)}</span></a>`;
  });

  return `
    <article class="look">
      <a class="photo cover" href="#product-${items[0].id}">${photo(photoSrc(items[0], 0), productFb(items[0]), look[lang][0])}</a>
      <div>
        <h3>${look[lang][0]}</h3>
        <p>${look[lang][1]}</p>
      </div>
      <div>${links}</div>
    </article>`;
}

function showLooks() {
  const html = looks.map(lookCard).join("");
  $("homeLooks").innerHTML = html;
  $("looksList").innerHTML = html;
}

function showInstagram() {
  let html = "";
  usedCategories().slice(0, 8).forEach(c => {
    const p = products.filter(x => x.cat === c.id)[1] || products.find(x => x.cat === c.id);
    const src = photoSrc(p, 2) || photoSrc(p, 0);
    html += `
      <a class="photo cover ig-item" href="#product-${p.id}" style="background:var(--navy)">
        <span class="fallback"><img src="img/emblem-white.png" alt="" style="position:static;opacity:.85"></span>
        <img src="${src}" alt="${escapeHtml(productName(p))}" loading="lazy" onload="this.classList.add('ok')" onerror="this.remove()">
      </a>`;
  });
  $("igHome").innerHTML = html + html;
  $("igProduct").innerHTML = html + html;
  showHeroWall();
}

function showHomeNew() {
  const html = products.filter(p => p.isNew).concat(products.filter(p => !p.isNew)).slice(0, 10).map(productCard).join("");
  $("homeNew").innerHTML = html + html;
}

function showNewPage() {
  const list = products.filter(p => p.isNew);
  $("newGrid").innerHTML = list.slice(0, newShown).map(productCard).join("");
  $("newMore").hidden = newShown >= list.length;
}

function showChips() {
  let html = `<button type="button" data-filter="all" aria-pressed="${catalogFilter === "all"}">${t("all")}</button>`;
  usedCategories().forEach(c => {
    html += `<button type="button" data-filter="${c.id}" aria-pressed="${catalogFilter === c.id}">${c[lang]}</button>`;
  });
  $("chips").innerHTML = html;
}

function showSortOptions() {
  const options = [["new", "sortNew"], ["asc", "sortAsc"], ["desc", "sortDesc"]];
  $("sort").innerHTML = options.map(o => `<option value="${o[0]}">${t(o[1])}</option>`).join("");
  $("sort").value = catalogSort;
}

function showCatalog() {
  let list = products.filter(p => {
    const inCategory = catalogFilter === "all" || p.cat === catalogFilter;
    const found = (p.kz[0] + " " + p.ru[0] + " " + (p.ru[1] || "")).toLowerCase().includes(catalogQuery);
    return inCategory && found;
  });

  list = [...list].sort((a, b) => {
    if (catalogSort === "asc") return a.price - b.price;
    if (catalogSort === "desc") return b.price - a.price;
    return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
  });

  $("catalogGrid").innerHTML = list.length
    ? list.slice(0, catalogShown).map(productCard).join("")
    : `<p class="empty">${t("nothing")}</p>`;
  $("catalogMore").hidden = catalogShown >= list.length;

  $("catalogTitle").textContent = catalogFilter === "all" ? t("allTitle") : categoryName(catalogFilter);
}

function setFilter(category) {
  catalogFilter = category;
  catalogShown = PAGE_SIZE;
  showChips();
  showCatalog();
}

function showProduct(id) {
  const p = productById(id);
  if (!p) {
    location.hash = "catalog";
    return;
  }

  currentProduct = p;
  productQty = 1;
  const table = p.cat === "pants" ? sizeTables.jeans : p.cat === "shoes" ? sizeTables.shoes : sizeTables.clothes;
  const size = chosenSize[p.id];

  let images = "";
  productImages(p).forEach((src, i) => {
    images += `
      <div class="photo p-img">
        ${photo(src, productFb(p), productName(p) + " " + (i + 1))}
        <button type="button" class="zoom-btn" data-zoom="${i}" aria-label="${t("zoom")}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M11 8v6M8 11h6"/></svg>
        </button>
      </div>`;
  });

  let sizes = "";
  sizesOf(p).forEach(s => {
    const disabled = p.out.includes(s) ? "disabled" : "";
    sizes += `<button type="button" data-product-size="${s}" aria-pressed="${size === s}" ${disabled}>${s}</button>`;
  });

  $("productPage").innerHTML = `
    <div class="p-left">
      <a class="p-back" href="#catalog" data-go="${p.cat}">${t("back")}</a>
      <div>
        <p class="eyebrow">${categoryName(p.cat)}</p>
        <h1>${productName(p)}</h1>
      </div>
      <p>${escapeHtml(p.about || descriptions[lang])}</p>
      <div>
        ${p.details && p.details.length ? `<details open><summary>${t("description")}</summary><table class="specs">${p.details.map(d => `<tr><th>${escapeHtml(d[0])}</th><td>${escapeHtml(d[1])}</td></tr>`).join("")}</table></details>` : ""}
        <details><summary>${t("sizesTab")}</summary><div class="table-box" style="margin-bottom:16px">${tableHtml(table)}</div></details>
        <details><summary>${t("deliveryTitle")}</summary><p>${t("deliveryShort").replace("{sum}", money(FREE_FROM))}</p></details>
      </div>
    </div>

    <div class="p-center">${images}</div>

    <div class="p-right">
      <p class="price">${money(p.price)}</p>
      <div>
        <div class="size-head">
          <span class="label">${t("size")}</span>
          <a class="link" href="#sizes">${t("sizeTable")}</a>
        </div>
        <div class="sizes" style="margin-top:10px">${sizes}</div>
      </div>
      <div class="buy-row">
        <div class="qty">
          <button type="button" id="qtyMinus" aria-label="${t("less")}">−</button>
          <b id="qtyValue">1</b>
          <button type="button" id="qtyPlus" aria-label="${t("more")}">+</button>
        </div>
        <button type="button" class="btn btn-dark" id="productAdd" ${size ? "" : "disabled"}>${size ? t("addToCart") : t("chooseSize")}</button>
      </div>
      ${p.kaspi ? `<a class="btn btn-kaspi" href="${escapeHtml(p.kaspi)}" target="_blank" rel="noopener">${t("buyKaspi")}</a>` : ""}
      <p class="p-note">${productInfo(p) ? t("color") + ": " + escapeHtml(productInfo(p)) + ". " : ""}${t("deliveryShort").replace("{sum}", money(FREE_FROM))}</p>
      <a class="link" href="${whatsappLink(t("waSize"))}" target="_blank" rel="noopener">${t("sizeHelp")}</a>
    </div>`;

  const same = products.filter(x => x.id !== p.id && x.cat === p.cat);
  const other = products.filter(x => x.cat !== p.cat && x.isNew);
  $("related").innerHTML = same.slice(0, 6).concat(other.slice(p.id % 20, p.id % 20 + 4)).map(productCard).join("");

  document.querySelectorAll("[data-product-size]").forEach(btn => {
    btn.onclick = () => {
      chosenSize[p.id] = btn.dataset.productSize;
      document.querySelectorAll("[data-product-size]").forEach(b => b.setAttribute("aria-pressed", b === btn));
      $("productAdd").disabled = false;
      $("productAdd").textContent = t("addToCart");
      showStickyBuy();
    };
  });

  $("qtyMinus").onclick = () => {
    productQty = Math.max(1, productQty - 1);
    $("qtyValue").textContent = productQty;
  };

  $("qtyPlus").onclick = () => {
    productQty = Math.min(10, productQty + 1);
    $("qtyValue").textContent = productQty;
  };

  $("productAdd").onclick = () => {
    if (chosenSize[p.id]) {
      addToCart(p.id, chosenSize[p.id], productQty);
    }
  };

  showStickyBuy();
}

function showStickyBuy() {
  const p = currentProduct;
  if (!p) return;
  const size = chosenSize[p.id];

  $("stickyBuy").innerHTML = `
    <span class="photo">${photo(photoSrc(p, 0), productFb(p), "")}</span>
    <div><b>${productName(p)}</b><span>${money(p.price)}${size ? " · " + size : ""}</span></div>
    <button type="button" class="btn btn-dark" id="stickyAdd">${size ? t("toCart") : t("chooseSize")}</button>`;

  $("stickyAdd").onclick = () => {
    if (chosenSize[p.id]) {
      addToCart(p.id, chosenSize[p.id], productQty);
    } else {
      $("productAdd").scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
}

function updateStickyBuy() {
  const onProduct = !document.querySelector('[data-view="product"]').hidden;
  const button = $("productAdd");
  let show = false;

  if (onProduct && button) {
    const box = button.getBoundingClientRect();
    show = box.bottom < 0 || box.top > window.innerHeight;
  }

  $("stickyBuy").hidden = !show;
}

function openZoom(index) {
  const p = currentProduct;
  const src = productImages(p)[index];
  $("zoomImg").innerHTML = `<div class="photo">${photo(src, productFb(p), productName(p))}</div>`;
  $("zoom").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeZoom() {
  $("zoom").hidden = true;
  document.body.style.overflow = "";
}

function showDeliveryTable() {
  let html = `<table><tr><th>${t("city")}</th><th>${t("days")}</th><th>${t("cost")}</th></tr>`;
  delivery.forEach(d => {
    html += `<tr>
      <td>${d[lang]}</td>
      <td>${lang === "kz" ? d.daysKz : d.daysRu}</td>
      <td><span class="ph">${money(d.price)}</span></td>
    </tr>`;
  });
  $("deliveryTable").innerHTML = html + "</table>";
  $("freeNote").textContent = t("freeNote").replace("{sum}", money(FREE_FROM));
}

function showSizeTables() {
  $("tableClothes").innerHTML = tableHtml(sizeTables.clothes);
  $("tableJeans").innerHTML = tableHtml(sizeTables.jeans);
  $("tableShoes").innerHTML = tableHtml(sizeTables.shoes);
}

function showFaq() {
  let html = "";
  faq.forEach((item, i) => {
    html += `
      <details ${i === 0 ? "open" : ""}>
        <summary>${item[lang][0]}</summary>
        <p>${item[lang][1]}</p>
      </details>`;
  });
  $("faqList").innerHTML = html;
}

function addToCart(id, size, qty) {
  const line = cart.find(item => item.id === id && item.size === size);
  if (line) {
    line.qty += qty || 1;
  } else {
    cart.push({ id: id, size: size, qty: qty || 1 });
  }
  saveValue("cart", cart);
  updateCartCount();
  toast(productName(productById(id)) + ", " + size + " – " + t("added"));
}

function updateCartCount() {
  $("cartCount").textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  const icon = document.querySelector(".icon-cart");
  icon.classList.remove("bump");
  void icon.offsetWidth;
  icon.classList.add("bump");
}

function showCartSelects() {
  const city = $("cityInput").value || "almaty";
  const pay = $("payInput").value || "kaspi";
  $("cityInput").innerHTML = cities.map(c => `<option value="${c.id}">${c[lang]}</option>`).join("");
  $("payInput").innerHTML = payments.map(p => `<option value="${p.id}">${p[lang]}</option>`).join("");
  $("cityInput").value = city;
  $("payInput").value = pay;
}

function cartTotals() {
  const sum = cart.reduce((s, item) => s + productById(item.id).price * item.qty, 0);
  const city = cities.find(c => c.id === $("cityInput").value) || cities[cities.length - 1];
  const ship = !sum || sum >= FREE_FROM ? 0 : city.ship;
  return { sum: sum, ship: ship, total: sum + ship };
}

function showCart() {
  updateCartCount();

  if (!cart.length) {
    $("cartLines").innerHTML = `
      <div class="empty">${t("cartEmpty")}<br><br>
        <a class="btn btn-dark" href="#catalog" data-go="all">${t("heroBtn")}</a>
      </div>`;
  } else {
    let html = "";
    cart.forEach((item, i) => {
      const p = productById(item.id);
      html += `
        <div class="cart-line">
          <a class="photo" href="#product-${p.id}">${photo(photoSrc(p, 0), productFb(p), productName(p))}</a>
          <div>
            <h3>${productName(p)}</h3>
            <small>${t("size")} ${item.size} · ${money(p.price)}</small>
            <button type="button" class="remove" data-remove="${i}">${t("remove")}</button>
          </div>
          <div class="qty">
            <button type="button" data-line="${i}" data-step="-1" aria-label="${t("less")}">−</button>
            <b>${item.qty}</b>
            <button type="button" data-line="${i}" data-step="1" aria-label="${t("more")}">+</button>
          </div>
          <b class="line-price">${money(p.price * item.qty)}</b>
        </div>`;
    });
    $("cartLines").innerHTML = html;
  }

  const totals = cartTotals();
  $("sumGoods").textContent = money(totals.sum);
  $("sumShip").textContent = money(totals.ship);
  $("sumTotal").textContent = money(totals.total);

  if (!totals.sum) {
    $("freeMsg").textContent = t("freeAdd");
  } else if (totals.sum >= FREE_FROM) {
    $("freeMsg").textContent = t("freeYes");
  } else {
    $("freeMsg").textContent = t("freeLeft").replace("{sum}", money(FREE_FROM - totals.sum));
  }

  $("sendOrder").disabled = !cart.length;
}

function orderMessage() {
  const totals = cartTotals();
  const city = cities.find(c => c.id === $("cityInput").value);
  const pay = payments.find(p => p.id === $("payInput").value);
  let lines = [t("msgTitle")];

  cart.forEach(item => {
    const p = productById(item.id);
    lines.push("• " + productName(p) + ", " + t("msgSize") + " " + item.size + " × " + item.qty + " = " + money(p.price * item.qty));
  });

  lines.push(t("msgDelivery") + ": " + (totals.ship ? money(totals.ship) : t("msgFree")));
  lines.push(t("msgTotal") + ": " + money(totals.total));
  lines.push("");
  lines.push(t("msgName") + ": " + $("nameInput").value);
  lines.push(t("msgPhone") + ": " + $("phoneInput").value);
  lines.push(t("msgCity") + ": " + city[lang]);
  lines.push(t("msgAddress") + ": " + $("addressInput").value);
  lines.push(t("msgPay") + ": " + pay[lang]);

  return lines.join("\n");
}

const views = ["home", "catalog", "new", "lookbook", "about", "delivery", "sizes", "contacts", "cart"];

function route(scrollUp) {
  const hash = location.hash.slice(1) || "home";
  const match = hash.match(/^product-(\d+)$/);
  const view = match ? "product" : views.includes(hash) ? hash : "home";

  document.querySelectorAll(".view").forEach(el => {
    el.hidden = el.dataset.view !== view;
  });

  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.dataset.nav === view) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });

  document.body.classList.toggle("home", view === "home");
  document.body.classList.toggle("product-open", view === "product");

  if (view === "home") showHomeNew();
  if (view === "catalog") showCatalog();
  if (view === "new") showNewPage();
  if (view === "cart") showCart();
  if (match) showProduct(+match[1]);
  if (!match) currentProduct = null;

  $("mobileNav").hidden = true;
  $("burger").setAttribute("aria-expanded", "false");

  if (scrollUp !== false) {
    window.scrollTo(0, 0);
  }

  updateHeader();
  updateStickyBuy();
}

function updateHeader() {
  const onHome = document.body.classList.contains("home");
  const heroBottom = $("hero").getBoundingClientRect().bottom;
  const menuOpen = !$("mobileNav").hidden;
  $("header").classList.toggle("on-hero", onHome && window.scrollY < 40 && heroBottom > 80 && !menuOpen);
  document.body.classList.toggle("at-hero", onHome && heroBottom > window.innerHeight * .4);
}

document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) {
    setFilter(go.dataset.go);
  }

  const quick = e.target.closest("[data-quick]");
  if (quick) {
    const card = quick.closest(".card");
    const panel = card.querySelector(".quick");
    document.querySelectorAll(".card.open").forEach(c => {
      if (c !== card) {
        c.classList.remove("open");
        c.querySelector(".quick").hidden = true;
      }
    });
    panel.hidden = !panel.hidden;
    card.classList.toggle("open", !panel.hidden);
    return;
  }

  const quickSize = e.target.closest("[data-quick-size]");
  if (quickSize) {
    const card = quickSize.closest(".card");
    addToCart(+quickSize.dataset.id, quickSize.dataset.quickSize, 1);
    card.classList.remove("open");
    card.querySelector(".quick").hidden = true;
    return;
  }

  if (!e.target.closest(".quick")) {
    document.querySelectorAll(".card.open").forEach(c => {
      c.classList.remove("open");
      c.querySelector(".quick").hidden = true;
    });
  }

  const arrow = e.target.closest("[data-scroll]");
  if (arrow) {
    const row = $(arrow.dataset.scroll);
    row.scrollBy({ left: +arrow.dataset.dir * row.clientWidth * .8, behavior: "smooth" });
  }

  const zoom = e.target.closest("[data-zoom]");
  if (zoom) {
    openZoom(+zoom.dataset.zoom);
  }

  const filter = e.target.closest("[data-filter]");
  if (filter) {
    setFilter(filter.dataset.filter);
  }

  const langBtn = e.target.closest("[data-lang]");
  if (langBtn) {
    setLanguage(langBtn.dataset.lang);
  }
});

$("cartLines").addEventListener("click", e => {
  const step = e.target.closest("[data-step]");
  const remove = e.target.closest("[data-remove]");

  if (step) {
    const item = cart[+step.dataset.line];
    item.qty += +step.dataset.step;
    if (item.qty < 1) {
      cart.splice(+step.dataset.line, 1);
    }
  }

  if (remove) {
    cart.splice(+remove.dataset.remove, 1);
  }

  if (step || remove) {
    saveValue("cart", cart);
    showCart();
  }
});

$("sort").onchange = e => {
  catalogSort = e.target.value;
  catalogShown = PAGE_SIZE;
  showCatalog();
};

$("search").oninput = e => {
  catalogQuery = e.target.value.trim().toLowerCase();
  catalogShown = PAGE_SIZE;
  showCatalog();
};

$("searchBtn").onclick = () => {
  setTimeout(() => $("search").focus(), 50);
};

$("cityInput").onchange = showCart;

$("catalogMoreBtn").onclick = () => {
  catalogShown += PAGE_SIZE;
  showCatalog();
};

$("newMoreBtn").onclick = () => {
  newShown += PAGE_SIZE;
  showNewPage();
};

$("orderForm").onsubmit = e => {
  e.preventDefault();
  if (!cart.length) return;

  const link = document.createElement("a");
  link.href = whatsappLink(orderMessage());
  link.target = "_blank";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();

  toast(t("orderReady"));
};

$("burger").onclick = () => {
  const nav = $("mobileNav");
  nav.hidden = !nav.hidden;
  $("burger").setAttribute("aria-expanded", !nav.hidden);
  updateHeader();
};

$("hideConcept").onclick = () => {
  $("concept").hidden = true;
};

$("zoomClose").onclick = closeZoom;
$("zoom").onclick = e => {
  if (e.target === $("zoom")) closeZoom();
};

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeZoom();
});

window.addEventListener("scroll", () => {
  updateHeader();
  updateStickyBuy();
}, { passive: true });

window.addEventListener("hashchange", () => route());

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        quoted = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (ch !== "\r") {
      cell += ch;
    }
  }
  row.push(cell);
  rows.push(row);
  return rows.filter(r => r.some(c => c.trim()));
}

const columns = {
  name:   ["атауы", "название", "аты"],
  nameRu: ["атауы (орысша)", "название (рус)", "название на русском"],
  cat:    ["санаты", "санат", "категория"],
  price:  ["бағасы", "баға", "цена"],
  sizes:  ["өлшемдер", "өлшемі", "размеры"],
  out:    ["жоқ өлшемдер", "нет размеров", "нет в наличии"],
  info:   ["сипаттама", "описание"],
  infoRu: ["сипаттама (орысша)", "описание (рус)"],
  isNew:  ["жаңа", "новинка", "new"],
  photo:  ["фото", "фотолар", "photo"]
};

function findColumns(header) {
  const clean = header.map(h => h.trim().toLowerCase());
  const index = {};
  Object.keys(columns).forEach(key => {
    index[key] = clean.findIndex(h => columns[key].includes(h));
  });
  return index;
}

function guessCategory(text) {
  const v = (text || "").toLowerCase();
  if (/спорт/.test(v) && /костюм|двойк/.test(v)) return "sport";
  if (/костюм|двойк|жилет/.test(v)) return "suits";
  if (/тенниск|теннис|поло|polo/.test(v)) return "polo";
  if (/футболк|tee|t-shirt/.test(v)) return "tee";
  if (/рубашк|жейде/.test(v)) return "shirt";
  if (/толстовк|худи|hood|свитшот|кофт|кардиган/.test(v)) return "knit";
  if (/куртк|пальто/.test(v)) return "outer";
  if (/джинс|шалбар|брюк|штан|слакс|джоггер|jeans/.test(v)) return "pants";
  if (/аяқ|обув|кроссов|кед|туфл|етік|мокасин|лофер|дерби|shoe/.test(v)) return "shoes";
  return "other";
}

function photoLink(value) {
  const v = value.trim();
  const id = (v.match(/\/d\/([\w-]{20,})/) || v.match(/[?&]id=([\w-]{20,})/) || [])[1];
  if (id) return "https://drive.google.com/thumbnail?id=" + id + "&sz=w1600";
  if (/^https?:\/\//.test(v)) return v;
  return "photos/" + v;
}

function splitList(value) {
  return (value || "").split(/[\s,;]+/).map(x => x.trim()).filter(Boolean);
}

function productsFromSheet(rows) {
  const col = findColumns(rows[0]);
  const get = (row, key) => (col[key] >= 0 ? (row[col[key]] || "").trim() : "");
  const list = [];

  rows.slice(1).forEach((row, i) => {
    const name = get(row, "name");
    const price = parseInt(get(row, "price").replace(/\D/g, ""), 10);
    if (!name || !price) return;

    const cat = guessCategory(get(row, "cat") + " " + name);
    const look = categoryOf(cat).fb.split("|");
    const nameRu = get(row, "nameRu") || name;
    const info = get(row, "info");
    const infoRu = get(row, "infoRu") || info;

    list.push({
      id: i + 1,
      cat: cat,
      price: price,
      isNew: /^(иә|ия|да|yes|1|\+|new|жаңа)/i.test(get(row, "isNew")),
      sizes: splitList(get(row, "sizes")),
      out: splitList(get(row, "out")),
      photos: splitList(get(row, "photo")).map(photoLink),
      color: look[1],
      accent: look[2],
      kz: [name, info],
      ru: [nameRu, infoRu]
    });
  });

  return list;
}

function loadSheet() {
  if (!SHEET_CSV) return;

  fetch(SHEET_CSV)
    .then(r => r.text())
    .then(text => {
      const list = productsFromSheet(parseCsv(text));
      if (!list.length) return;
      products.length = 0;
      list.forEach(p => products.push(p));
      cart = cart.filter(item => productById(item.id));
      saveValue("cart", cart);
      updateCartCount();
      setLanguage(lang);
    })
    .catch(() => {
      console.warn("Google Sheets кестесі ашылмады – үлгі тауарлар көрсетілді");
    });
}

const REVEAL = ".store, .head, .page-title, .card, .cat, .look, .perk, .band, .icard, .stat, .about-quote, .about-collage, .about-text, .faq details, .contact, .ig-item, .table-box, .measure li";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObserver = "IntersectionObserver" in window && !reduceMotion
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = [...el.parentElement.children].filter(x => x.classList.contains("reveal") && !x.classList.contains("in"));
        const index = Math.max(0, siblings.indexOf(el));
        el.style.transitionDelay = Math.min(index, 6) * 80 + "ms";
        el.classList.add("in");
        revealObserver.unobserve(el);
        if (el.classList.contains("stat")) countUp(el.querySelector("b"));
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
  : null;

function prepareReveal() {
  if (!revealObserver) return;
  document.querySelectorAll(REVEAL).forEach(el => {
    if (el.dataset.reveal) return;
    el.dataset.reveal = "1";
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}

function countUp(el) {
  const target = parseInt(el.textContent, 10);
  if (!target || reduceMotion) return;
  const start = performance.now();
  const from = target > 1900 ? target - 40 : 0;
  const step = now => {
    const k = Math.min(1, (now - start) / 1400);
    el.textContent = Math.round(from + (target - from) * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

new MutationObserver(() => {
  clearTimeout(prepareReveal.timer);
  prepareReveal.timer = setTimeout(prepareReveal, 30);
}).observe(document.querySelector("main"), { childList: true, subtree: true });

function heroParallax() {
  if (reduceMotion || !document.body.classList.contains("home")) return;
  const y = Math.min(window.scrollY, 800);
  const logo = document.querySelector(".hero-logo");
  logo.style.transform = "translateY(" + y * 0.35 + "px) scale(" + (1 - y / 4000) + ")";
  logo.style.opacity = Math.max(0, 1 - y / 520);
}

window.addEventListener("scroll", heroParallax, { passive: true });

function showHeroWall() {
  const cats = usedCategories().map(c => products.filter(p => p.cat === c.id));
  const picks = [];
  for (let i = 0; picks.length < 15 && i < 10; i++) {
    cats.forEach(list => {
      if (list[i] && picks.length < 15) picks.push(list[i]);
    });
  }
  let html = "";
  for (let col = 0; col < 5; col++) {
    const items = picks.slice(col * 3, col * 3 + 3);
    const imgs = items.map(p => `<div class="photo cover">${photo(photoSrc(p, 0), productFb(p), "")}</div>`).join("");
    html += `<div class="wall-col${col % 2 ? " down" : ""}" style="animation-duration:${50 + col * 6}s">${imgs}${imgs}</div>`;
  }
  $("heroWall").innerHTML = html;
}

function setupDragRow(row) {
  if (row.dataset.drag) return;
  row.dataset.drag = "1";

  let down = false;
  let moved = 0;
  let startX = 0;
  let startScroll = 0;
  let lastX = 0;
  let velocity = 0;
  let pos = row.scrollLeft;
  let paused = false;
  const autoplay = row.dataset.autoplay && !reduceMotion;

  const loopWidth = () => {
    const half = row.children[row.children.length / 2];
    return half ? half.offsetLeft - row.children[0].offsetLeft : 0;
  };

  const wrap = () => {
    const w = loopWidth();
    if (!autoplay || !w) return;
    if (row.scrollLeft >= w) row.scrollLeft -= w;
    if (row.scrollLeft <= 0 && velocity > 0) row.scrollLeft += w;
  };

  const skew = v => {
    row.style.setProperty("--skew", Math.max(-5, Math.min(5, -v * 0.25)) + "deg");
  };

  row.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    if (e.target.closest("button")) return;
    e.preventDefault();
    down = true;
    moved = 0;
    startX = lastX = e.clientX;
    startScroll = row.scrollLeft;
    velocity = 0;
    row.classList.add("dragging");
  });

  window.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - startX;
    moved = Math.max(moved, Math.abs(dx));
    velocity = e.clientX - lastX;
    lastX = e.clientX;
    row.scrollLeft = startScroll - dx;
    wrap();
    skew(velocity);
  });

  window.addEventListener("pointerup", () => {
    if (!down) return;
    down = false;
    row.classList.remove("dragging");
    const glide = () => {
      velocity *= 0.94;
      row.scrollLeft -= velocity;
      wrap();
      skew(velocity);
      if (Math.abs(velocity) > 0.4 && !down) requestAnimationFrame(glide);
      else skew(0);
      pos = row.scrollLeft;
    };
    requestAnimationFrame(glide);
  });

  row.addEventListener("click", e => {
    if (moved > 6) {
      e.preventDefault();
      e.stopPropagation();
      moved = 0;
    }
  }, true);

  row.addEventListener("mouseenter", () => { paused = true; });
  row.addEventListener("mouseleave", () => { paused = false; pos = row.scrollLeft; });
  row.addEventListener("touchstart", () => { paused = true; }, { passive: true });
  row.addEventListener("touchend", () => {
    setTimeout(() => { paused = false; pos = row.scrollLeft; }, 2500);
  });

  let visible = false;
  if (autoplay && "IntersectionObserver" in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
    }).observe(row);
  }

  if (autoplay) {
    let last = 0;
    const tick = now => {
      if (visible && !paused && !down && now - last > 14) {
        last = now;
        const w = loopWidth();
        let next = row.scrollLeft + 1;
        if (w && next >= w) next -= w;
        row.scrollLeft = next;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}

cart = cart.filter(item => productById(item.id));
updateCartCount();
setLanguage(lang);
window.scrollTo(0, 0);
loadSheet();
prepareReveal();
document.querySelectorAll(".drag-row").forEach(setupDragRow);
