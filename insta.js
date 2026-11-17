/* newwave — Instagram бөлімі.
   Instagram атыңызды осы жерде өзгертіңіз 👇 */
const IG_USER = "abzallovichh";

(() => {
  const sec = document.getElementById("insta");
  if (!sec) return;
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;

  /* Сілтемелер мен атау */
  const url = `https://instagram.com/${IG_USER}`;
  document.querySelectorAll("[data-ig-link]").forEach((a) => (a.href = url));
  document.querySelectorAll("[data-ig-user]").forEach((s) => (s.textContent = IG_USER));

  /* Аудармалар (script.js-тегі texts нысанына қосамыз) */
  if (typeof texts !== "undefined") {
    Object.assign(texts.kz, {
      igLabel: "Instagram",
      igTitle: "Сайттың <i>иесі</i>",
      igText: "Instagram-да жазылыңыз немесе директке жазыңыз 👇",
      igFollow: "Жазылу",
      igDm: "Директке жазу →",
      igMsg: "Хабарлама",
      igOpen: "Instagram-да ашу",
      igB1: "Жаңа пост",
      igB2: "Жаңа сторис",
      igB3: "Жаңа хабарлама",
    });
    Object.assign(texts.ru, {
      igLabel: "Instagram",
      igTitle: "Владелец <i>сайта</i>",
      igText: "Подписывайтесь в Instagram или пишите в директ 👇",
      igFollow: "Подписаться",
      igDm: "Написать в директ →",
      igMsg: "Сообщение",
      igOpen: "Открыть в Instagram",
      igB1: "Новый пост",
      igB2: "Новая сторис",
      igB3: "Новое сообщение",
    });
  }
  /* Телефон айналасындағы хабарламалар */
  const stage = document.getElementById("igStage");
  const bubbles = [
    ["b1", "❤️", "igB1"],
    ["b2", "✨", "igB2"],
    ["b3", "💬", "igB3"],
  ];
  bubbles.forEach(([cls, icon, key]) => {
    const d = document.createElement("div");
    d.className = `ig-bubble ${cls}`;
    d.setAttribute("aria-hidden", "true");
    d.innerHTML = `<b>${icon}</b><span data-text="${key}"></span>`;
    stage.appendChild(d);
  });
  if (typeof applyLang === "function") applyLang();

  /* Экраннан тыс болса — анимацияларды тоқтатамыз (батарея үнемі) */
  new IntersectionObserver(([e]) => sec.classList.toggle("off", !e.isIntersecting)).observe(sec);

  /* 3D: телефон курсорға қарай бұрылады */
  const phone = document.getElementById("igPhone");
  if (fine && !still) {
    stage.addEventListener("pointermove", (e) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      phone.classList.add("live");
      phone.style.setProperty("--ry", (x * 34).toFixed(1) + "deg");
      phone.style.setProperty("--rx", (-y * 22).toFixed(1) + "deg");
      phone.style.setProperty("--gx", (50 + x * 80).toFixed(0) + "%");
    });
    stage.addEventListener("pointerleave", () => {
      phone.classList.remove("live");
      phone.style.removeProperty("--ry");
      phone.style.removeProperty("--rx");
      phone.style.removeProperty("--gx");
    });
  }

  /* Ұшатын жүректер */
  const floats = document.getElementById("igFloats");
  const EMO = ["❤️", "💖", "🔥", "✨", "💙", "😍"];
  function fly(n = 1, fromX = null) {
    if (still) return;
    for (let i = 0; i < n; i++) {
      const s = document.createElement("span");
      s.className = "ig-fly";
      s.textContent = EMO[(Math.random() * EMO.length) | 0];
      if (fromX !== null) s.style.left = fromX + "px";
      s.style.setProperty("--dx", (Math.random() - 0.5) * 220 + "px");
      s.style.setProperty("--dy", -(220 + Math.random() * 220) + "px");
      s.style.setProperty("--r", (Math.random() - 0.5) * 60 + "deg");
      s.style.setProperty("--s", 16 + Math.random() * 18 + "px");
      s.style.setProperty("--t", 2 + Math.random() * 1.6 + "s");
      floats.appendChild(s);
      setTimeout(() => s.remove(), 4000);
    }
  }
  // Өздігінен анда-санда ұшады
  setInterval(() => {
    if (!sec.classList.contains("off") && !document.hidden) fly(1);
  }, 1400);

})();
