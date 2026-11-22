/* Batyr Barber — сайт-визитка (пакет Start, newwave.website)
   Все данные — здесь. Чтобы поменять цену, часы или мастера — правьте только этот блок. */

const CONFIG = {
  phone: "+77086995739",
  hours: "Ежедневно 10:00–21:00", // ← уточнить у клиента
  whatsapp: "77086995739", // номер для записи в WhatsApp (без +)
};

// [услуга, 1-я категория, 2-я категория]
const PRICES = [
  ["Стрижка", 6000, 5000],
  ["Удлинённая стрижка", 7000, 6000],
  ["Стрижка под машинку", 2500, 2500],
  ["Коррекция бороды", 3000, 3000],
  ["Стрижка + коррекция бороды", 8500, 7500],
  ["Королевское бритьё", 7000, 6000],
  ["Бритьё под 0", 1000, 1000],
  ["Тонировка головы", 4500, 4500],
  ["Тонировка бороды", 3500, 3500],
  ["Стрижка + удаление воском (1 зона)", 7000, 6000],
  ["Стрижка + удаление воском (2 зоны)", 7500, 6500],
  ["Укладка", 2500, 2500],
  ["Скрабирование", 2000, 2000],
  ["Чёрная маска", 3000, 3000],
  ["Чёрная маска + скрабирование", 4500, 4500],
];

const TIMA = [
  ["Стрижка мужская", 8000],
  ["Стрижка удлинённая", 9000],
  ["Стрижка детская", 8000],
  ["Бритьё головы под лезвие", 8000],
  ["Бритьё бороды опасной бритвой", 5000],
  ["Стрижка + коррекция бороды", 12000],
  ["Стрижка + коррекция бороды + тонировка головы + тонировка бороды", 20000],
  ["Отец + сын", 14000],
];
const TIMA_VIP = [
  ["Стрижка + коррекция бороды + скрабирование + чёрная маска", 14000],
  ["Стрижка + скрабирование + удаление волос воском", 12000],
  ["Стрижка + чёрная маска + удаление волос воском", 11000],
];

const TEAM = [
  { name: "Руслан", img: "ruslan", exp: "7+ лет", tags: ["Дипломированный специалист"], about: "Превратил работу в ремесло: важна не только техника, но и отношение к каждому клиенту." },
  { name: "Тима", img: "tima", exp: "6+ лет", top: true, tags: ["Обучение: Астана, Алматы, Караганда"], about: "Особое внимание — естественной форме и идеальной чистоте переходов." },
  { name: "Айбек", img: "aibek", exp: "6+ лет", tags: ["Black Barber", "Arai Tulegen"], about: "Справится с любой техникой и уровнем сложности." },
  { name: "Алишер", img: "alisher", exp: "6 лет", tags: ["Проф. стаж 3,5 года"], about: "Спокойствие, концентрация и точность в каждом движении." },
  { name: "Абзал", img: "abzal", exp: "5+ лет", tags: ["Волосы и борода"], about: "Поможет подобрать стиль, который подчеркнёт индивидуальность. Ценит комфорт и сервис." },
  { name: "Айбол", img: "aibol", exp: "3+ года", tags: ["Fade", "Crop", "Side part"], about: "Учился у Joma Barber. Специализируется на модельных стрижках." },
  { name: "Азат", img: "azat", exp: "2,5 года", tags: ["Arai Tulegen"], about: "Работает на результат, который заметен." },
  { name: "Даниал", img: "danial", exp: "2 года", tags: ["Fast fade", "French crop"], about: "Выпускник обучения BatyrBarber, остался в команде." },
];

/* ---------- рендер ---------- */
const $ = (s) => document.querySelector(s);
const tg = (n) => n.toLocaleString("ru-RU").replace(/ /g, " ") + " ₸";

$("#mainRows").innerHTML = PRICES.map(
  ([n, a, b]) => `<div class="prow"><span>${n}</span><b>${tg(a)}</b><b>${tg(b)}</b></div>`
).join("");

const one = (list) =>
  list.map(([n, p]) => `<div class="prow"><span>${n}</span><b>${tg(p)}</b></div>`).join("");
$("#timaRows").innerHTML = one(TIMA);
$("#timaVip").innerHTML = one(TIMA_VIP);

$("#team-grid").innerHTML = TEAM.map(
  (m) => `<article class="card">
    <div class="ph"><img src="images/${m.img}.jpg" alt="Барбер ${m.name}" loading="lazy" />${m.top ? '<span class="badge">Топ-барбер</span>' : ""}</div>
    <div class="in">
      <div class="nm"><h3>${m.name}</h3><span class="exp">${m.exp}</span></div>
      <p>${m.about}</p>
      <div class="tags">${m.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </div>
  </article>`
).join("");

/* вкладки прайса */
document.querySelectorAll("[data-tab]").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-tab]").forEach((b) => b.setAttribute("aria-selected", b === btn));
    document.querySelectorAll("[data-panel]").forEach((p) => (p.hidden = p.dataset.panel !== btn.dataset.tab));
  })
);

/* часы, телефон, WhatsApp, год */
$("#hoursMain").textContent = CONFIG.hours;
document.querySelectorAll("[data-call]").forEach((a) => (a.href = "tel:" + CONFIG.phone));
/* Телефонда — tel: нөмірді бірден теру экранына шығарады.
   Компьютерде қоңырау шалу мүмкін емес, сондықтан нөмір терезеде көрсетіледі. */
const isPhone = matchMedia("(pointer: coarse)").matches || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const nice = "+7 708 699 57 39";
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-call]");
  if (!a || isPhone) return; // телефонда стандартты tel: жұмыс істейді
  e.preventDefault();
  let m = document.getElementById("callBox");
  if (!m) {
    m = document.createElement("div");
    m.id = "callBox";
    m.innerHTML = `<div class="cb-in" role="dialog" aria-modal="true" aria-label="Позвонить">
      <button class="cb-x" aria-label="Закрыть">✕</button>
      <div class="eyebrow">Позвоните нам</div>
      <a class="cb-num" href="tel:${CONFIG.phone}">${nice}</a>
      <p>С компьютера позвонить нельзя — наберите этот номер с телефона.</p>
      <div class="btns" style="justify-content:center;margin-top:14px">
        <button class="btn" id="cbCopy">Скопировать номер</button>
        <a class="btn ghost" href="tel:${CONFIG.phone}">Позвонить</a>
      </div></div>`;
    document.body.appendChild(m);
    m.addEventListener("click", (ev) => {
      if (ev.target === m || ev.target.closest(".cb-x")) m.hidden = true;
    });
    m.querySelector("#cbCopy").onclick = (ev) => {
      navigator.clipboard?.writeText(CONFIG.phone);
      ev.target.textContent = "Скопировано ✓";
    };
  }
  m.hidden = false;
});
addEventListener("keydown", (e) => { if (e.key === "Escape" && document.getElementById("callBox")) document.getElementById("callBox").hidden = true; });
const waLink = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent("Здравствуйте! Хочу записаться в Batyr Barber.");
document.querySelectorAll("[data-wa]").forEach((a) => (a.href = waLink));
const yr = document.getElementById("yr");
if (yr) yr.textContent = new Date().getFullYear();
