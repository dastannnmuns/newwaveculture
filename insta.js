/* newwave — «Сайттың иесі»: 3D телефонның ішінде Instagram профилі.
   Аккаунт атын және сандарды осы жерде өзгертіңіз 👇 */
const IG_USER = "abzallovichh";
const IG_STATS = { posts: 3, followers: 103, following: 109 };

(() => {
  const sec = document.getElementById("insta");
  if (!sec) return;
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;

  /* Сілтемелер, атау, сандар */
  const url = `https://www.instagram.com/${IG_USER}/`;
  document.querySelectorAll("[data-ig-link]").forEach((a) => (a.href = url));
  document.querySelectorAll("[data-ig-user]").forEach((s) => (s.textContent = IG_USER));
  document.querySelectorAll("[data-ig-stat]").forEach((b) => {
    const v = IG_STATS[b.dataset.igStat];
    if (v !== undefined) b.textContent = v;
  });

  /* Аудармалар */
  if (typeof texts !== "undefined") {
    Object.assign(texts.kz, {
      igTitle: "Сайттың <i>иесі</i>",
      igText: "Сайтты жасаған мен: Дастан. Instagram-да жазылыңыз, сұрағыңыз болса директке жазыңыз.",
      igP1: "Сайттың иесі және авторы: DASTAN",
      igP2: "Жаңалықтар мен сторис: Instagram-да",
      igP3: "Директке жазсаңыз, тез жауап беремін",
      igFollow: "Жазылу",
      igDm: "Директке жазу →",
      igHint: "💡 Посттарды екі рет басып көріңіз",
      igB1: "Жаңа пост",
      igB2: "Жаңа сторис",
      igB3: "Директке жаз 💬",
    });
    Object.assign(texts.ru, {
      igTitle: "Владелец <i>сайта</i>",
      igText: "Сайт сделал я: Дастан. Подписывайтесь в Instagram, а если есть вопрос, пишите в директ.",
      igP1: "Владелец и автор сайта: DASTAN",
      igP2: "Новости и сторис: в Instagram",
      igP3: "Пишите в директ, отвечаю быстро",
      igFollow: "Подписаться",
      igDm: "Написать в директ →",
      igHint: "💡 Попробуйте дважды нажать на пост",
      igB1: "Новый пост",
      igB2: "Новая сторис",
      igB3: "Пиши в директ 💬",
    });
  }

  /* Телефон айналасындағы хабарламалар */
  const stage = document.getElementById("igStage");
  [
    ["b1", "❤️", "igB1"],
    ["b2", "✨", "igB2"],
    ["b3", "💬", "igB3"],
  ].forEach(([cls, icon, key]) => {
    const d = document.createElement("div");
    d.className = `ig-bubble ${cls}`;
    d.setAttribute("aria-hidden", "true");
    d.innerHTML = `<b>${icon}</b><span data-text="${key}"></span>`;
    stage.appendChild(d);
  });
  if (typeof applyLang === "function") applyLang();

  /* Телефон экранындағы сағат — нақты уақыт */
  const clock = document.getElementById("igClock");
  const tick = () => {
    const d = new Date();
    if (clock) clock.textContent = d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
  };
  tick();
  setInterval(tick, 30000);

  /* Экраннан тыс болса — анимацияларды тоқтатамыз */
  new IntersectionObserver(([e]) => sec.classList.toggle("off", !e.isIntersecting)).observe(sec);

  /* 3D: телефон курсорға қарай бұрылады */
  const phone = document.getElementById("igPhone");
  if (fine && !still) {
    stage.addEventListener("pointermove", (e) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      phone.classList.add("live");
      phone.style.setProperty("--ry", (x * 30).toFixed(1) + "deg");
      phone.style.setProperty("--rx", (-y * 18).toFixed(1) + "deg");
      phone.style.setProperty("--gx", (50 + x * 80).toFixed(0) + "%");
    });
    stage.addEventListener("pointerleave", () => {
      phone.classList.remove("live");
      ["--ry", "--rx", "--gx"].forEach((v) => phone.style.removeProperty(v));
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
  setInterval(() => {
    if (!sec.classList.contains("off") && !document.hidden) fly(1);
  }, 1500);

  /* Посттар: бір рет басса — Instagram ашылады, екі рет басса — лайк ❤️ */
  function like(post) {
    const h = document.createElement("span");
    h.className = "ig-burst";
    h.textContent = "❤️";
    post.appendChild(h);
    setTimeout(() => h.remove(), 950);
    const sr = stage.getBoundingClientRect(),
      pr = post.getBoundingClientRect();
    fly(6, pr.left + pr.width / 2 - sr.left);
  }
  sec.querySelectorAll(".iga-grid a").forEach((post) => {
    let timer = null;
    post.addEventListener("click", (e) => {
      e.preventDefault();
      if (timer) {
        clearTimeout(timer);
        timer = null;
        like(post);
        return;
      }
      timer = setTimeout(() => {
        timer = null;
        window.open(url, "_blank", "noopener");
      }, 320);
    });
  });
})();
