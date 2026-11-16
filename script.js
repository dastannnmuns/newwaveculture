/* newwave — скрипттер */

/* ═══════════════ ТІЛ / ЯЗЫК ═══════════════ */
const texts = {
  kz: {
    navPrices: "Бағалар",
    navAddons: "Қосымша",
    navProcess: "Кезеңдер",
    navFaq: "Сұрақтар",
    navLogin: "Кіру",
    ctaLead: "Өтінім қалдыру",
    lHint: "↓ жібін тарт",
    tabIn: "Кіру",
    tabUp: "Тіркелу",
    remember: "Есте сақтау",
    forgot: "Құпия сөзді ұмыттыңыз ба?",
    or: "немесе",
    s0k: "newwave · сайт жасау",
    s0h: "Сен <i>бизнес</i> жүргіз. Сайт <i>сатсын.</i>",
    s0p: "Визиткадан онлайн-дүкенге дейін: дизайн, код және іске қосу бір қолда. 50 000 ₸-ден бастап.",
    s0btn: "Маған қай пакет керек?",
    s1k: "01 · Дизайн мен код",
    s1h: "Сырты <i>әдемі.</i> Іші <i>таза.</i>",
    s1p: "Әр сайт қолмен жазылады: шаблонсыз, жылдам ашылады, телефонда дұрыс көрінеді.",
    s1c1: "Фигмада макет",
    s1c3: "Телефонға бейім",
    s2k: "02 · Сату",
    s2h: "Өтінім <i>Telegram-ға.</i> Төлем <i>картамен.</i>",
    s2p: "Клиент корзинаға салып, Kaspi, Visa немесе Mastercard картасымен төлейді. Өтінім бірден телефоныңызға келеді, сайт түнде де сатады.",
    s3k: "03 · Бағалар",
    s3h: "6 пакет. <i>Бір мақсат.</i>",
    s3p: "50К визиткадан 450К+ брендтік сайтқа дейін. Әр деңгейдің плюсы мен минусы төменде ашық жазылған.",
    s3btn: "Бағаларды көру →",
    s4k: "04 · Бастайық",
    s4h: "Тиынды <i>лақтыр.</i> Сайтың <i>дайын.</i>",
    s4p: "Өтінім қалдырыңыз, бір сағат ішінде жауап беремін және бизнесіңізге лайық пакетті бірге таңдаймыз.",
    phHero: "Жаңа коллекция<small>Қазақстан бойынша жеткізу</small>",
    phPill: "Каталог →",
    phBot: "<b>newwave бот</b><small>онлайн</small>",
    phMsg1:
      "<b>🔥 Жаңа өтінім</b>👤 Айгерім Сейітова<br>📦 Средний · 100 000 ₸<br>📝 Барбершопқа сайт",
    phMsg2: "Сәлеметсіз бе, Айгерім! Бүгін макет жіберемін 👍",
    phMsg3: "<b>✅ Төлем түсті</b>50 000 ₸ · алдын ала",
    pickLabel: "Пакет таңдағыш",
    pickTitle: "Сайттан не күтесіз?",
    pick0: "Тек байланыс, прайс және WhatsApp / Telegram батырмасы",
    pick1: "Бірнеше бет, өтінім формасы, екі тіл",
    pick2: "Жеке дизайн, калькулятор немесе портфолио",
    pick3: "Корзина, онлайн төлем немесе онлайн жазылу",
    pick4: "Анимация, жеңілдік дөңгелегі, акция таймері",
    pick5: "Ешкімде жоқ креатив, брендтік интерактив",
    pickRec: "Сізге лайық пакет",
    pickMore: "Толығырақ көру",
    priceLabel: "Бағалар",
    priceTitle: "6 деңгей: плюсы мен минусы",
    addLabel: "Қосымша қызметтер",
    addTitle: "Кез келген пакетке қосуға болады",
    add1: "Қосымша бет<small>пакет ішіндегі стильде</small>",
    add2: "Екінші тіл<small>қазақша / орысша / ағылшынша</small>",
    add3: "Telegram ботқа өтінім<small>форма → сіздің чатқа</small>",
    add4: "Жеңілдік дөңгелегі немесе таймер<small>сатылымды арттыруға</small>",
    add5: "Домен .kz + хостинг<small>1 жылға, баптаумен</small>",
    add6: "Ай сайынғы қолдау<small>мәтін, фото, баға жаңарту</small>",
    add6p: "10–15 000 ₸/ай",
    procLabel: "Қалай жұмыс істеймін",
    procTitle: "Өтінімнен сайтқа дейін",
    st1h: "Танысу",
    st1p: "Бизнесіңіз бен мақсатыңызды сұраймын, пакет таңдаймыз",
    st2h: "Алдын ала төлем",
    st2p: "50% төлем, қалғаны тапсырғанда",
    st3h: "Дизайн",
    st3p: "150К-дан бастап Фигмада макет көрсетемін",
    st4h: "Код",
    st4p: "Сайтты жасап, телефонда тексеремін",
    st5h: "Іске қосу",
    st5p: "Доменге қосып, қалай өзгертуді үйретемін",
    faqLabel: "Сұрақтар",
    faqTitle: "Жиі сұралатындар",
    q1: "Мәтін мен суретті кім дайындайды?",
    a1: "Негізгі мәтін мен фотоны сіз бересіз. Жоқ болса, мәтінді өзім жазып беремін, ал фото үшін тегін фотобанктерді қолданамыз немесе фотограф ұсынамын.",
    q2: "Сайтты кейін өзім өзгерте аламын ба?",
    a2: "200К-дан бастап админка бар, мәтін мен тауарды өзіңіз өзгертесіз. Төменгі пакеттерде маған жазасыз немесе ай сайынғы қолдауды аласыз.",
    q3: "Неше рет түзету енгізуге болады?",
    a3: "Әр пакетте 2 тегін түзету раунды бар. Одан кейінгі үлкен өзгерістер бөлек бағаланады.",
    q4: "Хостинг ақылы ма?",
    a4: "50–150К сайттар тегін хостингте (Netlify, GitHub Pages) тұра алады. Тек .kz домені жылына шамамен 5–10 000 ₸.",
    q5: "Төлемді қалай қабылдайсыз?",
    a5: "Kaspi аударымы немесе Visa / Mastercard картасы. 50% алдын ала, 50% сайт дайын болғанда.",
    contLabel: "Байланыс",
    contTitle: "Сайтыңызды талқылайық",
    contText: "Өтінім қалдырыңыз немесе тікелей жазыңыз. Әдетте бір сағат ішінде жауап беремін.",
    tgDm: "Telegram · жеке хат",
    write: "Жазу",
    copy: "Көшіру",
    tgCh: "Telegram · арна",
    subscribe: "Жазылу",
    tgSubTitle: "Telegram арнама жазылыңыз",
    tgSubText:
      "Жаңа жұмыстар, жеңілдіктер мен сайт туралы кеңестер сонда. Пост ұнаса, ⭐ жұлдызша қойып қолдаңыз.",
    tgSubBtn: "Арнаға жазылу",
    regTitle: "Тіркелу",
    regText: "Өтінім жіберу үшін поштаңызды, атыңызды және нөміріңізді жазыңыз",
    fMail: "Электрондық пошта",
    fName: "Аты",
    fSurname: "Тегі",
    fPhone: "Телефон нөмірі",
    fPack: "Пакет",
    fAbout: "Бизнесіңіз туралы қысқаша",
    fSend: "Тіркеліп, өтінім жіберу",
    fText: "Бизнесіңізге сайт. Жаңа жұмыстар мен пайдалы кеңестер әр апта Telegram арнада.",
    fStar: "⭐ Пост ұнаса, жұлдызша қойып қолдаңыз",
    fPacks: "Пакеттер",
    fT0: "Визитка",
    fT1: "Шағын сайт",
    fT2: "Корпоративтік",
    fT3: "Онлайн-дүкен",
    fT5: 'Люкс <span class="tag">жаңа</span>',
    fSite: "Сайт",
    fPick: "Пакет таңдау",
    fChannel: "Арна",
    fLead: "Өтінім",
    fCopy: "© 2026 newwave · Мысал сайттар портфолио үшін жасалған",
    fUp: "Жоғары ↑",
    phLogin: "Email немесе телефон",
    phPass: "Құпия сөз",
    phName: "Аты",
    phSurname: "Тегі",
    phMail: "name@gmail.com немесе @mail.ru",
    phNewPass: "Құпия сөз (кемінде 8 таңба)",
    phAbout: "Мысалы: Шымкенттегі барбершоп, бағалар мен жазылу керек",
    tInside: "Ішінде",
    tPlus: "Плюсы",
    tMinus: "Минусы",
    tWho: "Кімге:",
    tEx: "Мысал:",
    tTerm: "Мерзімі:",
    errMailName: "Поштаның атын дұрыс жазыңыз (тек латын әріп, сан, нүкте)",
    errName: "Атыңызды жазыңыз",
    errSurname: "Тегіңізді жазыңыз",
    errPhone: "Телефон нөмірін толық жазыңыз: +7 7XX XXX XX XX",
    okLead:
      "Рақмет, {name}! Сіз {email} поштасымен тіркелдіңіз, өтінім қабылданды. Жақын арада {phone} нөміріне хабарласамын.",
    copied: "Көшірілді",
    copySelected: "Белгіледім, көшіріп ал",
    lTitleIn: "Қайта қош келдіңіз",
    lSubIn: "Аккаунтыңызға кіріңіз",
    lTitleUp: "Аккаунт ашу",
    lSubUp: "Бір минутта тіркеліңіз",
    lDoneUp: "Тіркелдіңіз!",
    lDoneIn: "Қош келдіңіз!",
    lGo: "Сайтқа өту →",
    lDemo:
      "Демо нұсқа: деректер тек осы браузерде сақталады. Нақты кіру Firebase қосылғанда іске қосылады.",
    eLogin: "Gmail / Mail.ru поштасын немесе телефон нөмірін жазыңыз",
    ePass: "Құпия сөз кемінде 8 таңба",
    ePhoneShort: "Телефон: +7 7XX XXX XX XX",
    eMailOnly: "Тек Gmail немесе Mail.ru поштасы",
    socNote:
      "{soc} арқылы кіру сервер (Firebase) қосылғанда жұмыс істейді. Әзірге форманы толтырыңыз.",
    forgotNote: "Құпия сөзді қалпына келтіру сілтемесі поштаға жіберіледі (сервер қосылғанда).",
  },
  ru: {
    navPrices: "Цены",
    navAddons: "Доп. услуги",
    navProcess: "Этапы",
    navFaq: "Вопросы",
    navLogin: "Войти",
    ctaLead: "Оставить заявку",
    lHint: "↓ потяни за шнурок",
    tabIn: "Войти",
    tabUp: "Регистрация",
    remember: "Запомнить меня",
    forgot: "Забыли пароль?",
    or: "или",
    s0k: "newwave · создание сайтов",
    s0h: "Ты веди <i>бизнес.</i> Сайт будет <i>продавать.</i>",
    s0p: "От визитки до интернет-магазина: дизайн, код и запуск в одних руках. От 50 000 ₸.",
    s0btn: "Какой пакет мне нужен?",
    s1k: "01 · Дизайн и код",
    s1h: "Снаружи <i>красиво.</i> Внутри <i>чисто.</i>",
    s1p: "Каждый сайт пишется вручную: без шаблонов, быстро грузится, правильно выглядит на телефоне.",
    s1c1: "Макет в Figma",
    s1c3: "Адаптив под телефон",
    s2k: "02 · Продажи",
    s2h: "Заявки <i>в Telegram.</i> Оплата <i>картой.</i>",
    s2p: "Клиент кладёт товар в корзину и платит Kaspi, Visa или Mastercard. Заявка сразу приходит вам на телефон, сайт продаёт даже ночью.",
    s3k: "03 · Цены",
    s3h: "6 пакетов. <i>Одна цель.</i>",
    s3p: "От визитки за 50К до брендового сайта за 450К+. Плюсы и минусы каждого уровня честно расписаны ниже.",
    s3btn: "Смотреть цены →",
    s4k: "04 · Начнём",
    s4h: "Подбрось <i>монетку.</i> Сайт <i>готов.</i>",
    s4p: "Оставьте заявку: отвечу в течение часа, и вместе подберём пакет под ваш бизнес.",
    phHero: "Новая коллекция<small>Доставка по Казахстану</small>",
    phPill: "Каталог →",
    phBot: "<b>newwave бот</b><small>в сети</small>",
    phMsg1:
      "<b>🔥 Новая заявка</b>👤 Айгерим Сеитова<br>📦 Средний · 100 000 ₸<br>📝 Сайт для барбершопа",
    phMsg2: "Здравствуйте, Айгерим! Сегодня пришлю макет 👍",
    phMsg3: "<b>✅ Оплата получена</b>50 000 ₸ · предоплата",
    pickLabel: "Подбор пакета",
    pickTitle: "Что вы ждёте от сайта?",
    pick0: "Только контакты, прайс и кнопка WhatsApp / Telegram",
    pick1: "Несколько страниц, форма заявки, два языка",
    pick2: "Свой дизайн, калькулятор или портфолио",
    pick3: "Корзина, онлайн-оплата или онлайн-запись",
    pick4: "Анимации, колесо скидок, таймер акции",
    pick5: "Креатив, которого нет ни у кого, брендовый интерактив",
    pickRec: "Вам подойдёт пакет",
    pickMore: "Подробнее",
    priceLabel: "Цены",
    priceTitle: "6 уровней: плюсы и минусы",
    addLabel: "Дополнительные услуги",
    addTitle: "Можно добавить к любому пакету",
    add1: "Дополнительная страница<small>в стиле пакета</small>",
    add2: "Второй язык<small>казахский / русский / английский</small>",
    add3: "Заявки в Telegram-бот<small>форма → ваш чат</small>",
    add4: "Колесо скидок или таймер<small>для роста продаж</small>",
    add5: "Домен .kz + хостинг<small>на 1 год, с настройкой</small>",
    add6: "Ежемесячная поддержка<small>текст, фото, обновление цен</small>",
    add6p: "10–15 000 ₸/мес",
    procLabel: "Как я работаю",
    procTitle: "От заявки до сайта",
    st1h: "Знакомство",
    st1p: "Узнаю о вашем бизнесе и целях, выбираем пакет",
    st2h: "Предоплата",
    st2p: "50% сразу, остальное при сдаче",
    st3h: "Дизайн",
    st3p: "С пакета 150К показываю макет в Figma",
    st4h: "Код",
    st4p: "Делаю сайт и проверяю на телефоне",
    st5h: "Запуск",
    st5p: "Подключаю домен и учу вносить изменения",
    faqLabel: "Вопросы",
    faqTitle: "Частые вопросы",
    q1: "Кто готовит тексты и фото?",
    a1: "Основные тексты и фото даёте вы. Если их нет, тексты напишу сам, а для фото используем бесплатные фотобанки или посоветую фотографа.",
    q2: "Смогу ли я потом сам менять сайт?",
    a2: "С пакета 200К есть админка: тексты и товары меняете сами. В младших пакетах пишете мне или берёте ежемесячную поддержку.",
    q3: "Сколько правок можно внести?",
    a3: "В каждом пакете 2 бесплатных круга правок. Крупные изменения после этого оцениваются отдельно.",
    q4: "Хостинг платный?",
    a4: "Сайты на 50–150К могут жить на бесплатном хостинге (Netlify, GitHub Pages). Только домен .kz стоит примерно 5–10 000 ₸ в год.",
    q5: "Как принимаете оплату?",
    a5: "Перевод Kaspi или карта Visa / Mastercard. 50% предоплата, 50% после готовности сайта.",
    contLabel: "Контакты",
    contTitle: "Обсудим ваш сайт",
    contText: "Оставьте заявку или напишите напрямую. Обычно отвечаю в течение часа.",
    tgDm: "Telegram · личные сообщения",
    write: "Написать",
    copy: "Копировать",
    tgCh: "Telegram · канал",
    subscribe: "Подписаться",
    tgSubTitle: "Подпишитесь на мой Telegram-канал",
    tgSubText:
      "Там новые работы, скидки и советы по сайтам. Понравился пост — поддержите звёздочкой ⭐.",
    tgSubBtn: "Подписаться на канал",
    regTitle: "Регистрация",
    regText: "Чтобы отправить заявку, укажите почту, имя и номер телефона",
    fMail: "Электронная почта",
    fName: "Имя",
    fSurname: "Фамилия",
    fPhone: "Номер телефона",
    fPack: "Пакет",
    fAbout: "Коротко о вашем бизнесе",
    fSend: "Зарегистрироваться и отправить",
    fText: "Сайты для бизнеса. Новые работы и полезные советы каждую неделю в Telegram-канале.",
    fStar: "⭐ Понравился пост — поставьте звёздочку",
    fPacks: "Пакеты",
    fT0: "Визитка",
    fT1: "Небольшой сайт",
    fT2: "Корпоративный",
    fT3: "Интернет-магазин",
    fT5: 'Люкс <span class="tag">новое</span>',
    fSite: "Сайт",
    fPick: "Подбор пакета",
    fChannel: "Канал",
    fLead: "Заявка",
    fCopy: "© 2026 newwave · Примеры сайтов сделаны для портфолио",
    fUp: "Наверх ↑",
    phLogin: "Email или телефон",
    phPass: "Пароль",
    phName: "Имя",
    phSurname: "Фамилия",
    phMail: "name@gmail.com или @mail.ru",
    phNewPass: "Пароль (минимум 8 символов)",
    phAbout: "Например: барбершоп в Шымкенте, нужны цены и онлайн-запись",
    tInside: "Что входит",
    tPlus: "Плюсы",
    tMinus: "Минусы",
    tWho: "Кому:",
    tEx: "Пример:",
    tTerm: "Срок:",
    errMailName: "Введите имя почты правильно (латиница, цифры, точка)",
    errName: "Введите имя",
    errSurname: "Введите фамилию",
    errPhone: "Введите номер полностью: +7 7XX XXX XX XX",
    okLead:
      "Спасибо, {name}! Вы зарегистрированы с почтой {email}, заявка принята. Скоро свяжусь с вами по номеру {phone}.",
    copied: "Скопировано",
    copySelected: "Выделил, скопируйте",
    lTitleIn: "С возвращением",
    lSubIn: "Войдите в аккаунт",
    lTitleUp: "Создать аккаунт",
    lSubUp: "Регистрация за минуту",
    lDoneUp: "Вы зарегистрированы!",
    lDoneIn: "Добро пожаловать!",
    lGo: "Перейти на сайт →",
    lDemo:
      "Демо-версия: данные хранятся только в этом браузере. Настоящий вход заработает после подключения Firebase.",
    eLogin: "Введите почту Gmail / Mail.ru или номер телефона",
    ePass: "Пароль — минимум 8 символов",
    ePhoneShort: "Телефон: +7 7XX XXX XX XX",
    eMailOnly: "Только почта Gmail или Mail.ru",
    socNote:
      "Вход через {soc} заработает после подключения сервера (Firebase). Пока заполните форму.",
    forgotNote: "Ссылка для восстановления пароля придёт на почту (после подключения сервера).",
  },
};

let lang = "kz";
try {
  lang = localStorage.getItem("nw-lang") || "kz";
} catch (e) {}

// tr("okLead", { name: "Айгерім" }) → мәтін {name} орнына қойылады
const tr = (key, vars = {}) =>
  (texts[lang][key] ?? texts.kz[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

function applyLang() {
  document.documentElement.lang = lang === "kz" ? "kk" : "ru";
  document.querySelectorAll("[data-text]").forEach((el) => {
    const value = texts[lang][el.dataset.text];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll("[data-ph]").forEach((el) => {
    const value = texts[lang][el.dataset.ph];
    if (value !== undefined) el.placeholder = value;
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
  });
  document.dispatchEvent(new CustomEvent("langchange"));
}

function setLang(next) {
  lang = next;
  try {
    localStorage.setItem("nw-lang", lang);
  } catch (e) {}
  applyLang();
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

(() => {
  const el = document.getElementById("intro");
  if (!el) return;
  let seen = false;
  try {
    seen = sessionStorage.getItem("nw-intro") === "1";
    sessionStorage.setItem("nw-intro", "1");
  } catch (e) {}
  if (seen) {
    el.remove();
    return;
  }
  const done = () => el.remove();
  el.addEventListener("click", () => {
    el.classList.add("skip");
    setTimeout(done, 320);
  });
  el.addEventListener("animationend", (e) => {
    if (e.target === el) done();
  });
  setTimeout(done, 3200);
})();

const A = "sites/";
const T = [
  {
    k: "Слабый",
    p: 50000,
    pg: "1 бет",
    time: "2–3 күн",
    bg: "--t1",
    fg: "var(--ink)",
    f: [
      "Бір беттік визитка/лендинг",
      "Прайс, мекенжай, жұмыс уақыты",
      "WhatsApp / Telegram батырмасы",
      "Мобильдік нұсқа",
    ],
    plus: ["Ең арзан бастау", "2–3 күнде дайын", "Хостинг тегін"],
    minus: ["Тек 1 бет", "Дайын шаблон стилі", "Өтінім формасы жоқ", "Google-да әлсіз көрінеді"],
    who: "Жеке мастер, шаштараз, маникюр",
    ex: [
      ["Барбершоп", "qaishy-barber.html"],
      ["Маникюр", "dana-nails.html"],
    ],
  },
  {
    k: "Средний",
    p: 100000,
    pg: "2–3 бет",
    time: "4–6 күн",
    bg: "--t2",
    fg: "var(--ink)",
    f: [
      "Басты бет, қызметтер мен прайс, байланыс",
      "Өтінім формасы Telegram-ға",
      "Қазақша + орысша",
      "Галерея, жеңіл SEO",
    ],
    plus: ["Клиент өтінімі бірден телефонға келеді", "Екі тілде", "Бизнеске толыққанды көрінеді"],
    minus: ["Жеке дизайн жоқ", "Админка жоқ: өзгерту үшін маған жазасыз", "Онлайн төлем жоқ"],
    who: "Автосервис, стоматология, кафе",
    ex: [
      ["Автосервис", "turbo-service.html"],
      ["Стоматология", "aq-tis-dental.html"],
    ],
  },
  {
    k: "Четкий",
    p: 150000,
    pg: "3–4 бет",
    time: "1–2 апта",
    bg: "--t3",
    fg: "var(--ink)",
    f: [
      "Фигмада жеке макет",
      "Калькулятор, фильтр немесе кесте",
      "FAQ, пікірлер, портфолио",
      "Аналитика + 1 ай қолдау",
    ],
    plus: [
      "Бәсекелестерден ерекше дизайн",
      "Макетті кодқа дейін бекітесіз",
      "Интерактив клиентті ұстайды",
    ],
    minus: ["Корзина мен онлайн төлем жоқ", "Уақыты ұзағырақ", "Админка жоқ"],
    who: "Құрылыс, оқу орталығы, кофехана",
    ex: [
      ["Кофехана", "aport-coffee.html"],
      ["Құрылыс", "qala-stroy.html"],
      ["Оқу орталығы", "bilim-plus.html"],
    ],
  },
  {
    k: "Бешный",
    p: 200000,
    pg: "5–6 бет",
    time: "2–3 апта",
    bg: "--t4",
    fg: "#f3f1ec",
    f: [
      "Каталог, фильтр, сұрыптау",
      "Корзина + Kaspi, Visa, Mastercard төлем",
      "Онлайн жазылу немесе бронь",
      "Админка: тауарды өзіңіз қосасыз",
    ],
    plus: [
      "Сайт өзі сатады, түнде де",
      "Тауар мен бағаны өзіңіз өзгертесіз",
      "Клиент кезексіз жазылады",
    ],
    minus: [
      "Дерекқор/хостинг ай сайын ақылы болуы мүмкін",
      "2–3 апта уақыт",
      "Тауар фотосы сапалы болуы керек",
    ],
    who: "Дүкен, фитнес, жеткізу қызметі",
    ex: [
      ["Киім дүкені", "dala-wear.html"],
      ["Фитнес", "pulse-fitness.html"],
    ],
  },
  {
    k: "Премиум",
    p: 300000,
    pg: "7–8 бет",
    time: "3–4 апта",
    bg: "--t5",
    fg: "#0c0c12",
    f: [
      "200К-дағының бәрі",
      "Анимациялар, жүгірген жолақ",
      "Жеңілдік дөңгелегі, таймер, промокод",
      "Акция беті, блог, жеке кабинет",
    ],
    plus: [
      "Сатылымды акциямен арттырады",
      "Есте қалатын «вау» әсер",
      "Клиент қайта келеді (кабинет, промокод)",
    ],
    minus: [
      "Қымбатырақ",
      "Ескі телефонда анимация баяулауы мүмкін",
      "Акцияларды үнемі жаңарту керек",
    ],
    who: "Жеткізу, мейрамхана, косметика дүкені",
    ex: [["Суши жеткізу", "tamaq-sushi.html"]],
  },
  {
    k: "Люкс",
    p: 450000,
    from: 1,
    pg: "8+ бет",
    time: "4–6 апта",
    bg: "--t6",
    fg: "var(--bg)",
    f: [
      "Бренд үшін бірегей интерактив",
      "Тауар 3D/ілгіш/карусель эффектілері",
      "Дүкен + төлем + админка",
      "Жеке анимациялар",
    ],
    plus: [
      "Ешкімде жоқ сайт",
      "Instagram-да вирусқа айналуы мүмкін",
      "Брендті премиум етіп көрсетеді",
    ],
    minus: ["Ең қымбат", "Кәсіби фото міндетті (фонсыз PNG)", "Ұзақ әзірлеу, көп келісу"],
    who: "Киім бренді, премиум бренд",
    ex: [["Киім бренді", "bult-store.html"]],
  },
];
const T_RU = [
  {
    pg: "1 стр.",
    time: "2–3 дня",
    f: [
      "Одностраничная визитка/лендинг",
      "Прайс, адрес, часы работы",
      "Кнопка WhatsApp / Telegram",
      "Мобильная версия",
    ],
    plus: ["Самый дешёвый старт", "Готов за 2–3 дня", "Бесплатный хостинг"],
    minus: ["Только 1 страница", "Шаблонный стиль", "Нет формы заявки", "Слабо виден в Google"],
    who: "Частный мастер, парикмахерская, маникюр",
    ex: ["Барбершоп", "Маникюр"],
  },
  {
    pg: "2–3 стр.",
    time: "4–6 дней",
    f: [
      "Главная, услуги и прайс, контакты",
      "Форма заявки в Telegram",
      "Казахский + русский",
      "Галерея, базовое SEO",
    ],
    plus: ["Заявка клиента сразу приходит на телефон", "На двух языках", "Бизнес выглядит солидно"],
    minus: ["Нет своего дизайна", "Нет админки: для изменений пишете мне", "Нет онлайн-оплаты"],
    who: "Автосервис, стоматология, кафе",
    ex: ["Автосервис", "Стоматология"],
  },
  {
    pg: "3–4 стр.",
    time: "1–2 недели",
    f: [
      "Свой макет в Figma",
      "Калькулятор, фильтр или расписание",
      "FAQ, отзывы, портфолио",
      "Аналитика + 1 месяц поддержки",
    ],
    plus: [
      "Дизайн отличается от конкурентов",
      "Макет утверждаете до кода",
      "Интерактив удерживает клиента",
    ],
    minus: ["Нет корзины и онлайн-оплаты", "Дольше по срокам", "Нет админки"],
    who: "Стройка, учебный центр, кофейня",
    ex: ["Кофейня", "Стройка", "Учебный центр"],
  },
  {
    pg: "5–6 стр.",
    time: "2–3 недели",
    f: [
      "Каталог, фильтр, сортировка",
      "Корзина + оплата Kaspi, Visa, Mastercard",
      "Онлайн-запись или бронь",
      "Админка: товары добавляете сами",
    ],
    plus: [
      "Сайт продаёт сам, даже ночью",
      "Товары и цены меняете сами",
      "Клиенты записываются без очереди",
    ],
    minus: [
      "База данных/хостинг может быть платным",
      "2–3 недели работы",
      "Нужны качественные фото товаров",
    ],
    who: "Магазин, фитнес, доставка",
    ex: ["Магазин одежды", "Фитнес"],
  },
  {
    pg: "7–8 стр.",
    time: "3–4 недели",
    f: [
      "Всё из пакета 200К",
      "Анимации, бегущая строка",
      "Колесо скидок, таймер, промокод",
      "Страница акций, блог, личный кабинет",
    ],
    plus: [
      "Акции поднимают продажи",
      "Запоминающийся «вау»-эффект",
      "Клиенты возвращаются (кабинет, промокод)",
    ],
    minus: [
      "Дороже",
      "На старых телефонах анимации могут тормозить",
      "Акции нужно постоянно обновлять",
    ],
    who: "Доставка, ресторан, магазин косметики",
    ex: ["Доставка суши"],
  },
  {
    pg: "8+ стр.",
    time: "4–6 недель",
    f: [
      "Уникальный интерактив для бренда",
      "3D / вешалка / карусель для товаров",
      "Магазин + оплата + админка",
      "Свои анимации",
    ],
    plus: [
      "Такого сайта нет ни у кого",
      "Может завируситься в Instagram",
      "Бренд выглядит премиально",
    ],
    minus: [
      "Самый дорогой",
      "Нужны профессиональные фото (PNG без фона)",
      "Долгая разработка, много согласований",
    ],
    who: "Бренд одежды, премиум-бренд",
    ex: ["Бренд одежды"],
  },
];

// Пакеттің мәтінін таңдалған тілде алу
const tierTx = (i, key) => (lang === "ru" ? T_RU[i][key] : T[i][key]);

const tg = (n) => n.toLocaleString("ru-RU") + " ₸";
const priceTxt = (t) => (t.from ? "" : "") + tg(t.p) + (t.from ? "+" : "");

// Саты
if (document.getElementById("ladder"))
  document.getElementById("ladder").innerHTML = T.map(
    (t, i) =>
      `<a href="#tier-${i}" style="height:${44 + i * 11}%;background:var(${t.bg});color:${t.fg}"><b>${t.p / 1000}К${t.from ? "+" : ""}</b><span>${t.k}</span></a>`,
  ).join("");

// Карточкалар
function renderTiers() {
  document.getElementById("tiers").innerHTML = T.map(
    (t, i) => `
 <article class="tier" id="tier-${i}">
  <div class="top" style="background:var(${t.bg});color:${t.fg}">
    <h3 style="font-size:1.15rem">${t.k}</h3>
    <div class="price">${priceTxt(t)}</div>
    <small class="meta">${tierTx(i, "pg")} · ${tr("tTerm")} ${tierTx(i, "time")}</small>
    <div class="gcoin tcoin" aria-hidden="true">${t.p / 1000}К${t.from ? "+" : ""}</div>
  </div>
  <div class="body">
    <div><h3>${tr("tInside")}</h3><ul class="feat">${tierTx(i, "f")
      .map((x) => `<li>${x}</li>`)
      .join("")}</ul></div>
    <div><h3>${tr("tPlus")}</h3><ul class="plus">${tierTx(i, "plus")
      .map((x) => `<li>${x}</li>`)
      .join("")}</ul></div>
    <div><h3>${tr("tMinus")}</h3><ul class="minus">${tierTx(i, "minus")
      .map((x) => `<li>${x}</li>`)
      .join("")}</ul></div>
    <div class="when">${tr("tWho")} ${tierTx(i, "who")}</div>
  </div>
  <div class="ex"><span>${tr("tEx")}</span>${t.ex.map(([n, id], j) => `<a href="${A + id}" target="_blank" rel="noopener">${lang === "ru" ? T_RU[i].ex[j] : n} ↗</a>`).join("")}</div>
 </article>`,
  ).join("");
}
renderTiers();

// Таңдағыш
const checks = [...document.querySelectorAll("#checks input")];
function recommend() {
  const lv = checks.filter((c) => c.checked).reduce((m, c) => Math.max(m, +c.dataset.t), 0),
    t = T[lv];
  document.getElementById("recPrice").textContent = priceTxt(t);
  document.getElementById("recText").textContent =
    `${t.k} · ${tierTx(lv, "pg")} · ${tierTx(lv, "time")}`;
  document.getElementById("recLink").href = "#tier-" + lv;
  const pc = document.getElementById("pcoin");
  if (pc) {
    if (recommend.lv !== undefined && recommend.lv !== lv) {
      recommend.rot = (recommend.rot || 0) + 360;
      pc.style.transform = `rotateY(${recommend.rot}deg)`;
    }
    recommend.lv = lv;
    document.getElementById("pcoinP").textContent = `${t.p / 1000}К${t.from ? "+" : ""}`;
    document.getElementById("pcoinN").textContent = t.k;
  }
  document.querySelectorAll(".tier").forEach((el, i) => el.classList.toggle("hl", i === lv));
  document.getElementById("t").value = lv;
}
checks.forEach((c) => (c.onchange = recommend));

// Форма
document.getElementById("t").innerHTML = T.map(
  (t, i) => `<option value="${i}">${t.k} — ${priceTxt(t)}</option>`,
).join("");
recommend();

// Тіл ауысқанда пакет карточкаларын қайта салу
document.addEventListener("langchange", () => {
  renderTiers();
  recommend();
});
/* Тіркелу: Gmail немесе Mail.ru, аты, тегі, телефон */
const MAILRU = ["mail.ru", "inbox.ru", "list.ru", "bk.ru"];
let prov = "gmail.com";
const $id = (x) => document.getElementById(x);
function setProv(p) {
  prov = p;
  document
    .querySelectorAll("[data-prov]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.prov === (MAILRU.includes(p) ? "mail.ru" : p)),
    );
  $id("dom").textContent = "@" + p;
}
document.querySelectorAll("[data-prov]").forEach(
  (b) =>
    (b.onclick = () => {
      setProv(b.dataset.prov);
      $id("em").focus();
    }),
);
$id("em").addEventListener("input", (e) => {
  const v = e.target.value.trim().toLowerCase();
  if (v.includes("@")) {
    const d = v.split("@")[1];
    if (d === "gmail.com" || MAILRU.includes(d)) {
      setProv(d);
      e.target.value = v.split("@")[0];
    }
  }
});
function fmtPhone(v) {
  let d = v.replace(/\D/g, "");
  if (d[0] === "8") d = "7" + d.slice(1);
  if (d && d[0] !== "7") d = "7" + d;
  d = d.slice(0, 11);
  const p = [d.slice(1, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)].filter(Boolean);
  return d ? "+7 " + p.join(" ") : "";
}
$id("p").addEventListener("input", (e) => {
  e.target.value = fmtPhone(e.target.value);
});
try {
  const u = JSON.parse(localStorage.getItem("nw-user") || "null");
  if (u) {
    $id("n").value = u.name;
    $id("sn").value = u.surname;
    $id("p").value = u.phone;
    setProv(u.email.split("@")[1]);
    $id("em").value = u.email.split("@")[0];
  }
} catch (e) {}
$id("form").onsubmit = (e) => {
  e.preventDefault();
  const user = $id("em").value.trim().toLowerCase(),
    name = $id("n").value.trim(),
    sur = $id("sn").value.trim(),
    digits = $id("p").value.replace(/\D/g, "");
  const letters = /^[A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі\- ]{2,}$/;
  const errs = [];
  if (!/^[a-z0-9._-]{3,}$/.test(user)) errs.push(tr("errMailName"));
  if (!letters.test(name)) errs.push(tr("errName"));
  if (!letters.test(sur)) errs.push(tr("errSurname"));
  if (digits.length !== 11) errs.push(tr("errPhone"));
  const er = $id("err");
  ["em", "n", "sn", "p"].forEach((i) => $id(i).removeAttribute("aria-invalid"));
  if (errs.length) {
    er.innerHTML = errs.map((x) => "• " + x).join("<br>");
    er.hidden = false;
    if (errs[0] === tr("errMailName")) $id("em").setAttribute("aria-invalid", "true");
    return;
  }
  er.hidden = true;
  const u = { email: user + "@" + prov, name, surname: sur, phone: $id("p").value };
  try {
    localStorage.setItem("nw-user", JSON.stringify(u));
  } catch (x) {}
  const ok = $id("ok");
  ok.textContent = tr("okLead", { name: `${name} ${sur}`, email: u.email, phone: u.phone });
  ok.hidden = false;
  $id("m").value = "";
  recommend();
};

// Көшіру
function toast(t) {
  const el = document.getElementById("toast");
  el.textContent = t;
  el.hidden = false;
  clearTimeout(toast.t);
  toast.t = setTimeout(() => (el.hidden = true), 1600);
}
document.querySelectorAll("[data-copy]").forEach(
  (b) =>
    (b.onclick = () => {
      const el = document.getElementById(b.dataset.copy);
      navigator.clipboard
        .writeText(el.textContent)
        .then(() => toast(tr("copied")))
        .catch(() => {
          const r = document.createRange();
          r.selectNodeContents(el);
          const s = getSelection();
          s.removeAllRanges();
          s.addRange(r);
          toast(tr("copySelected"));
        });
    }),
);

/* ───── Скролл-оқиға: тиын, телефон, пакет тиындары ───── */
(() => {
  const story = document.getElementById("story"),
    stage = document.getElementById("stage3d"),
    scene = document.getElementById("scene");
  const coin = document.getElementById("coin"),
    phone = document.getElementById("phone"),
    ring = document.getElementById("ring"),
    portal = document.getElementById("portal");
  const chapters = [...document.querySelectorAll(".chapter")],
    scrA = document.getElementById("scrA"),
    scrB = document.getElementById("scrB");
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  // тиынның қалыңдығы
  let h = "";
  for (let i = -7; i <= 7; i++)
    h += `<div class="edge" style="transform:translateZ(${i}px)"></div>`;
  coin.innerHTML = h + `<div class="f front">N.<small>WAVE</small></div><div class="f back">₸</div>`;
  // пакет тиындары
  const T = [
    ["50К", "Слабый"],
    ["100К", "Средний"],
    ["150К", "Четкий"],
    ["200К", "Бешный"],
    ["300К", "Премиум"],
    ["450К+", "Люкс"],
  ];
  ring.innerHTML = T.map(([p, n]) => `<div class="mini">${p}<small>${n}</small></div>`).join("");
  const minis = [...ring.children];
  // Кадрлар: әр тарау үшін [x,y,z,rotX,rotY,rotZ,scale,opacity]
  const F = {
    coin: [
      [130, -90, 60, 12, -28, 0, 1, 1],
      [170, -150, 40, 20, 170, 8, 0.72, 1],
      [20, -10, 120, 8, 540, 0, 1.25, 1],
      [0, 0, 40, 0, 720, 0, 0.55, 1],
      [0, -10, 140, 0, 1080, 0, 1.35, 1],
    ],
    phone: [
      [-70, 40, 0, 8, -20, -6, 1, 1],
      [-30, 30, 0, 4, 172, 2, 1.06, 1],
      [-120, 40, 0, 6, -16, -4, 0.98, 1],
      [-250, 120, -200, 10, -40, -10, 0.55, 0],
      [-120, 260, -300, 20, -20, 0, 0.5, 0],
    ],
    ring: [
      [0, 0, 0, 62, 0, 0, 0.2, 0],
      [0, 0, 0, 62, 0, 0, 0.2, 0],
      [0, 0, 0, 62, 0, 0, 0.4, 0],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, -60, 0, 0, 0, 1.1, 0.3],
    ],
    portal: [
      [0, 0, -200, 0, 0, 0, 0.6, 0],
      [0, 0, -200, 0, 0, 0, 0.6, 0],
      [0, 0, -200, 0, 0, 0, 0.7, 0.15],
      [0, 0, -200, 0, 0, 0, 0.8, 0.3],
      [0, -10, -120, 0, 0, 0, 1.15, 1],
    ],
  };
  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  function at(fr, t) {
    const i = Math.min(fr.length - 2, Math.floor(t)),
      f = ease(Math.min(1, Math.max(0, t - i)));
    return fr[i].map((v, k) => v + (fr[i + 1][k] - v) * f);
  }
  const tf = (v) =>
    `translate3d(${v[0]}px,${v[1]}px,${v[2]}px) rotateX(${v[3]}deg) rotateY(${v[4]}deg) rotateZ(${v[5]}deg) scale(${v[6]})`;
  let tNow = 0,
    tGoal = 0,
    last = -1;
  const mtext = document.getElementById("mtext");
  let swapT = 0;
  function showText(i, first) {
    const html = chapters[i].querySelector(".cin").innerHTML;
    if (first || still) {
      mtext.innerHTML = html;
      return;
    }
    mtext.classList.add("swap");
    clearTimeout(swapT);
    swapT = setTimeout(() => {
      mtext.innerHTML = html;
      mtext.classList.remove("swap");
    }, 180);
  }
  document.addEventListener("langchange", () => {
    if (last >= 0) showText(last, true);
  });
  function measure() {
    const hd = document.querySelector("header");
    if (hd) document.documentElement.style.setProperty("--hh", hd.offsetHeight + "px");
    const w = stage.clientWidth,
      hh = stage.clientHeight;
    stage.style.setProperty("--s", Math.min(1.25, Math.max(0.55, Math.min(w / 560, hh / 620))));
  }
  function progress() {
    const top = story.getBoundingClientRect().top + scrollY,
      H = chapters[0].offsetHeight;
    return Math.max(
      0,
      Math.min(chapters.length - 1, (scrollY + innerHeight / 2 - top - H / 2) / H),
    );
  }
  function draw(time) {
    const t = tNow,
      idle = still ? 0 : Math.sin(time / 900) * 6;
    const c = at(F.coin, t);
    c[4] += idle * 1.5;
    c[1] += idle;
    coin.style.transform = tf(c);
    coin.style.opacity = c[7];
    const p = at(F.phone, t);
    p[1] -= idle * 0.6;
    phone.style.transform = tf(p);
    phone.style.opacity = p[7];
    const r = at(F.ring, t);
    ring.style.transform = tf(r);
    ring.style.opacity = r[7];
    const g = at(F.portal, t);
    portal.style.transform = tf(g) + ` rotate(${still ? 0 : time / 60}deg)`;
    portal.style.opacity = g[7];
    const rad = 150 + Math.max(0, t - 3) * 30,
      spin = still ? 0 : time / 120 + (t - 3) * 40;
    minis.forEach((m, i) => {
      const a = (i / 6) * 360 + spin;
      m.style.transform = `rotate(${a}deg) translateY(${-rad}px) rotate(${-a}deg) rotateY(${still ? 0 : Math.sin(time / 700 + i) * 28}deg)`;
    });
    const sh = Math.min(1, Math.max(0, (t - 1.5) * 2)) * (t < 3 ? 1 : 0);
    scrA.style.opacity = 1 - sh;
    scrB.style.opacity = sh;
    const on = Math.round(t);
    if (on !== last) {
      chapters.forEach((ch, i) => ch.classList.toggle("on", i === on));
      showText(on, last < 0);
      last = on;
    }
  }
  function loop(time) {
    tGoal = progress();
    tNow += (tGoal - tNow) * (still ? 1 : 0.12);
    draw(time || 0);
    requestAnimationFrame(loop);
  }
  addEventListener("resize", measure);
  measure();
  tNow = tGoal = progress();
  requestAnimationFrame(loop);
})();
/* ───── Шыны футер: курсор жарығы, толқын, сұйық бұрмалау ───── */
(() => {
  const foot = document.getElementById("gfoot");
  if (!foot) return;
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  if (!still && window.chrome) foot.classList.add("liq"); // Chrome-да шыныдың өзі де толқиды
  const map = document.getElementById("liqMap"),
    mapB = document.getElementById("liqMapB");
  let amp = 0,
    last = 0,
    lx = 0,
    ly = 0;
  function ripple(g, x, y) {
    if (still) return;
    const r = document.createElement("span");
    r.className = "rip";
    r.style.left = x + "px";
    r.style.top = y + "px";
    g.appendChild(r);
    setTimeout(() => r.remove(), 1150);
  }
  foot.querySelectorAll("[data-glass]").forEach((g) => {
    const move = (e) => {
      const b = g.getBoundingClientRect(),
        x = e.clientX - b.left,
        y = e.clientY - b.top;
      g.style.setProperty("--mx", x + "px");
      g.style.setProperty("--my", y + "px");
      const now = performance.now(),
        d = Math.hypot(e.clientX - lx, e.clientY - ly);
      lx = e.clientX;
      ly = e.clientY;
      amp = Math.min(38, amp + d * 0.25);
      if (now - last > 140 && d > 4) {
        ripple(g, x, y);
        last = now;
      }
    };
    g.addEventListener("pointermove", move);
    g.addEventListener("pointerdown", (e) => {
      const b = g.getBoundingClientRect();
      ripple(g, e.clientX - b.left, e.clientY - b.top);
      amp = 40;
      g.classList.add("touch");
      setTimeout(() => g.classList.remove("touch"), 700);
    });
  });
  const giant = foot.querySelector(".giant");
  giant.addEventListener("pointermove", (e) => {
    const d = Math.hypot(e.clientX - lx, e.clientY - ly);
    lx = e.clientX;
    ly = e.clientY;
    amp = Math.min(45, amp + d * 0.35);
  });
  giant.addEventListener("pointerdown", () => (amp = 45));
  // Терең теңіздегі шам: жарық өзі толқынмен жүзеді, тінтуір келсе соған ереді
  let gx = null;
  giant.addEventListener("pointermove", (e) => {
    const b = giant.getBoundingClientRect();
    gx = ((e.clientX - b.left) / b.width) * 100;
  });
  giant.addEventListener("pointerleave", () => (gx = null));
  let gt = 0, cx = 50;
  (function lampLoop() {
    gt += still ? 0 : 0.01;
    const target = gx ?? 50 + Math.sin(gt) * 48;
    cx += (target - cx) * 0.08;
    giant.style.setProperty("--x", cx.toFixed(2) + "%");
    giant.style.setProperty("--y", (45 + Math.sin(gt * 2.3) * 12).toFixed(2) + "%");
    requestAnimationFrame(lampLoop);
  })();
  if (still) return;
  (function tick() {
    amp *= 0.93;
    const v = amp < 0.3 ? 0 : amp.toFixed(1);
    map.setAttribute("scale", v);
    mapB.setAttribute("scale", (amp * 0.6).toFixed(1));
    requestAnimationFrame(tick);
  })();
})();

/* Пакет карточкаларының 3D иілуі */
(() => {
  if (matchMedia("(prefers-reduced-motion:reduce)").matches || !matchMedia("(hover:hover)").matches)
    return;
  const grid = document.getElementById("tiers");
  let cur = null;
  const reset = (c) => {
    c.style.setProperty("--rx", "0deg");
    c.style.setProperty("--ry", "0deg");
  };
  grid.addEventListener("pointermove", (e) => {
    const c = e.target.closest(".tier");
    if (cur && cur !== c) reset(cur);
    cur = c;
    if (!c) return;
    {
      const b = c.getBoundingClientRect(),
        x = (e.clientX - b.left) / b.width,
        y = (e.clientY - b.top) / b.height;
      c.style.setProperty("--ry", ((x - 0.5) * 10).toFixed(2) + "deg");
      c.style.setProperty("--rx", ((0.5 - y) * 8).toFixed(2) + "deg");
      c.style.setProperty("--gx", x * 100 + "%");
      c.style.setProperty("--gy", y * 100 + "%");
    }
  });
  grid.addEventListener("pointerleave", () => {
    if (cur) reset(cur);
    cur = null;
  });
})();

/* Әр басқан сайын дөңгелек: алтын нүкте + алтын шеңбер + күлгін толқын */
(() => {
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  addEventListener(
    "pointerdown",
    (e) => {
      for (const cls of ["tap dot", "tap", "tap slow"]) {
        const d = document.createElement("span");
        d.className = cls;
        d.style.left = e.clientX + "px";
        d.style.top = e.clientY + "px";
        document.body.appendChild(d);
        setTimeout(() => d.remove(), 1200);
      }
    },
    { passive: true },
  );
})();

/* ───── Кіру беті: шам, шаң, форма ───── */
(() => {
  const lg = document.getElementById("lg");
  if (!lg) return;
  const $ = (id) => document.getElementById(id);
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  let on = false,
    raf = 0;
  function setLamp(v) {
    on = v;
    lg.classList.toggle("on", v);
    $("cord").setAttribute("aria-pressed", v);
    if (v && !still) startDust();
    if (v)
      setTimeout(() => {
        const f = lg.querySelector(".lform:not([hidden]) input");
        f && f.focus({ preventScroll: true });
      }, 500);
  }
  function open() {
    lg.hidden = false;
    document.body.style.overflow = "hidden";
    sizeDust();
    if (still) setLamp(true);
  }
  function close() {
    lg.hidden = true;
    document.body.style.overflow = "";
    setLamp(false);
    cancelAnimationFrame(raf);
    if (location.hash === "#login")
      history.replaceState(null, "", location.pathname + location.search);
  }
  document.querySelectorAll("[data-login]").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.preventDefault();
      open();
    }),
  );
  $("lgClose").onclick = close;
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lg.hidden) close();
  });

  /* Жіпті тарту */
  const cord = $("cord");
  let y0 = null,
    pulled = 0;
  const L = 110;
  cord.addEventListener("pointerdown", (e) => {
    y0 = e.clientY;
    cord.classList.add("drag");
    cord.setPointerCapture(e.pointerId);
  });
  cord.addEventListener("pointermove", (e) => {
    if (y0 === null) return;
    pulled = Math.max(0, Math.min(90, e.clientY - y0));
    cord.style.setProperty("--len", L + pulled + "px");
  });
  const release = () => {
    if (y0 === null) return;
    cord.classList.remove("drag");
    if (pulled > 28 || pulled < 4) setLamp(!on);
    y0 = null;
    pulled = 0;
    cord.style.setProperty("--len", L + "px");
  };
  cord.addEventListener("pointerup", release);
  cord.addEventListener("pointercancel", release);
  cord.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      cord.style.setProperty("--len", L + 40 + "px");
      setTimeout(() => cord.style.setProperty("--len", L + "px"), 180);
      setLamp(!on);
    }
  });

  /* Жарықтағы шаң */
  const cv = $("dust"),
    cx = cv.getContext("2d");
  let P = [];
  function sizeDust() {
    const r = cv.getBoundingClientRect();
    cv.width = r.width * devicePixelRatio;
    cv.height = r.height * devicePixelRatio;
    P = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.0006,
      vy: -(Math.random() * 0.0008 + 0.0002),
      a: Math.random() * Math.PI * 2,
    }));
  }
  addEventListener("resize", () => {
    if (!lg.hidden) sizeDust();
  });
  function startDust() {
    cancelAnimationFrame(raf);
    (function f() {
      if (lg.hidden || !on) {
        cx.clearRect(0, 0, cv.width, cv.height);
        return;
      }
      const W = cv.width,
        H = cv.height;
      cx.clearRect(0, 0, W, H);
      const shade = lg.querySelector(".bulb").getBoundingClientRect(),
        box = cv.getBoundingClientRect();
      const tx = (shade.left + shade.width / 2 - box.left) * devicePixelRatio,
        ty = (shade.top - box.top) * devicePixelRatio;
      P.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.a += 0.03;
        if (p.y < 0) {
          p.y = 1;
          p.x = Math.random();
        }
        if (p.x < 0 || p.x > 1) p.x = Math.random();
        const py = ty + (H - ty) * p.y,
          spread = (py - ty) * 0.62,
          px = tx + (p.x - 0.5) * 2 * spread;
        if (py < ty + 8) return;
        cx.globalAlpha = 0.35 + 0.45 * Math.sin(p.a) ** 2;
        cx.fillStyle = "#ffe7a0";
        cx.beginPath();
        cx.arc(px, py, p.r * devicePixelRatio, 0, 7);
        cx.fill();
      });
      raf = requestAnimationFrame(f);
    })();
  }

  /* Табтар */
  const tabs = [...lg.querySelectorAll("[data-lt]")];
  let curTab = "in";
  function tab(t) {
    curTab = t;
    tabs.forEach((b) => b.setAttribute("aria-selected", b.dataset.lt === t));
    $("fIn").hidden = t !== "in";
    $("fUp").hidden = t !== "up";
    $("lTitle").textContent = t === "in" ? tr("lTitleIn") : tr("lTitleUp");
    $("lSub").textContent = t === "in" ? tr("lSubIn") : tr("lSubUp");
  }
  tabs.forEach((b) => (b.onclick = () => tab(b.dataset.lt)));
  document.addEventListener("langchange", () => {
    if ($("lOk").hidden) tab(curTab);
  });
  lg.querySelectorAll("[data-eye]").forEach(
    (b) =>
      (b.onclick = () => {
        const i = $(b.dataset.eye);
        i.type = i.type === "password" ? "text" : "password";
      }),
  );

  /* Тексеру */
  const phoneFmt = (v) => {
    let d = v.replace(/\D/g, "");
    if (d[0] === "8") d = "7" + d.slice(1);
    if (d && d[0] !== "7") d = "7" + d;
    d = d.slice(0, 11);
    const p = [d.slice(1, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)].filter(Boolean);
    return d ? "+7 " + p.join(" ") : "";
  };
  $("upPhone").addEventListener("input", (e) => (e.target.value = phoneFmt(e.target.value)));
  const MAILS = ["gmail.com", "mail.ru", "inbox.ru", "list.ru", "bk.ru"];
  const okMail = (v) =>
    /^[a-z0-9._-]{3,}@([a-z0-9.-]+)$/i.test(v) && MAILS.includes(v.split("@")[1].toLowerCase());
  const letters = /^[A-Za-zА-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі\- ]{2,}$/;
  $("upPass").addEventListener("input", (e) => {
    const v = e.target.value;
    let s = 0;
    if (v.length >= 8) s++;
    if (/[A-ZА-Я]/.test(v)) s++;
    if (/\d/.test(v)) s++;
    if (/[^A-Za-zА-Яа-я0-9]/.test(v)) s++;
    $("strBar").style.width = [0, 30, 55, 80, 100][s] + "%";
    $("strBar").style.background = ["#ff8a5c", "#ff8a5c", "#f5c518", "#9fd356", "#4cc488"][s];
  });
  function err(id, list, bad) {
    const e = $(id);
    lg.querySelectorAll("[aria-invalid]").forEach((i) => i.removeAttribute("aria-invalid"));
    bad.forEach((i) => $(i).setAttribute("aria-invalid", "true"));
    if (list.length) {
      e.innerHTML = list.map((x) => "• " + x).join("<br>");
      e.hidden = false;
      return true;
    }
    e.hidden = true;
    return false;
  }
  function success(u, first) {
    $("fIn").hidden = $("fUp").hidden = true;
    $("lSocial").hidden = true;
    lg.querySelector(".ltabs").hidden = true;
    $("lTitle").textContent = first ? tr("lDoneUp") : tr("lDoneIn");
    $("lSub").textContent = u.email || u.phone || "";
    $("lOk").innerHTML =
      `<div class="gcoin">${(u.name || "N")[0].toUpperCase()}</div><div><b style="font-size:1.15rem">${u.name || ""} ${u.surname || ""}</b><div style="color:#9a98a6;font-size:.9rem">${u.phone || ""}</div></div><button class="lbtn" style="width:100%" id="lGo">${tr("lGo")}</button>`;
    $("lOk").hidden = false;
    $("lNote").hidden = false;
    $("lNote").textContent = tr("lDemo");
    $("lGo").onclick = close;
    updateHeader();
  }
  $("fIn").onsubmit = (e) => {
    e.preventDefault();
    const l = $("inLogin").value.trim(),
      p = $("inPass").value;
    const L = [],
      B = [];
    const isPhone = l.replace(/\D/g, "").length === 11;
    if (!(okMail(l) || isPhone)) {
      L.push(tr("eLogin"));
      B.push("inLogin");
    }
    if (p.length < 8) {
      L.push(tr("ePass"));
      B.push("inPass");
    }
    if (err("inErr", L, B)) return;
    let u = null;
    try {
      u = JSON.parse(localStorage.getItem("nw-user") || "null");
    } catch (x) {}
    success(
      u || { name: l.split("@")[0], email: isPhone ? "" : l, phone: isPhone ? phoneFmt(l) : "" },
      false,
    );
  };
  $("fUp").onsubmit = (e) => {
    e.preventDefault();
    const L = [],
      B = [];
    const n = $("upName").value.trim(),
      s = $("upSur").value.trim(),
      ph = $("upPhone").value,
      m = $("upMail").value.trim().toLowerCase(),
      p = $("upPass").value;
    if (!letters.test(n)) {
      L.push(tr("errName"));
      B.push("upName");
    }
    if (!letters.test(s)) {
      L.push(tr("errSurname"));
      B.push("upSur");
    }
    if (ph.replace(/\D/g, "").length !== 11) {
      L.push(tr("ePhoneShort"));
      B.push("upPhone");
    }
    if (!okMail(m)) {
      L.push(tr("eMailOnly"));
      B.push("upMail");
    }
    if (p.length < 8) {
      L.push(tr("ePass"));
      B.push("upPass");
    }
    if (err("upErr", L, B)) return;
    const u = { name: n, surname: s, phone: ph, email: m };
    try {
      localStorage.setItem("nw-user", JSON.stringify(u));
    } catch (x) {}
    success(u, true);
  };
  lg.querySelectorAll("[data-soc]").forEach(
    (b) =>
      (b.onclick = () => {
        $("lNote").hidden = false;
        $("lNote").textContent = tr("socNote", { soc: b.dataset.soc });
      }),
  );
  $("forgot").onclick = (e) => {
    e.preventDefault();
    $("lNote").hidden = false;
    $("lNote").textContent = tr("forgotNote");
  };

  /* Шапкадағы «Кіру» батырмасы → атыңыз */
  function updateHeader() {
    let u = null;
    try {
      u = JSON.parse(localStorage.getItem("nw-user") || "null");
    } catch (x) {}
    const b = document.getElementById("hdrLogin");
    if (b && u && u.name) b.textContent = u.name;
  }
  updateHeader();
  document.addEventListener("langchange", updateHeader);
  if (location.hash === "#login") open();
  addEventListener("hashchange", () => {
    if (location.hash === "#login") open();
  });
})();

// Бетті сақталған тілмен ашу
applyLang();
