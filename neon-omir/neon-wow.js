/* Neon Õmir — «вау» қабаты. script.js-тен кейін қосылады. */
(() => {
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const root = document.documentElement;

  /* ───── Аудармалар (script.js-тегі texts-ке қосамыз) ───── */
  Object.assign(texts.kz, {
    igTitle: "Біздің жұмыстар <i>Instagram-да</i>",
    igLead: "500-ден астам жарқыраған вывеска, монтаж процесі және жаңа жобалар: бәрі @neon.omir парақшасында.",
    igP1: "Күн сайын жаңа неон мен лайтбокс жұмыстары",
    igP2: "Жасау және орнату процесі: сторис пен Reels-те",
    igP3: "Директке жазыңыз: дизайнын тегін жасап береміз",
    igFollow: "Жазылу",
    igDm: "Директке жазу →",
    igHint: "💡 Посттарды екі рет басып көріңіз",
    igB1: "Жаңа вывеска",
    igB2: "Жаңа сторис",
    igB3: "Директке жаз 💬",
    nwNight: "Жарықты сөндіру",
    nwDay: "Жарықты жағу",
  });
  Object.assign(texts.ru, {
    igTitle: "Наши работы <i>в Instagram</i>",
    igLead: "Больше 500 светящихся вывесок, процесс монтажа и новые проекты: всё на странице @neon.omir.",
    igP1: "Новые неоны и лайтбоксы каждый день",
    igP2: "Как мы делаем и монтируем: в сторис и Reels",
    igP3: "Пишите в Direct: сделаем дизайн бесплатно",
    igFollow: "Подписаться",
    igDm: "Написать в Direct →",
    igHint: "💡 Нажмите дважды на пост",
    igB1: "Новая вывеска",
    igB2: "Новая сторис",
    igB3: "Пиши в директ 💬",
    nwNight: "Выключить свет",
    nwDay: "Включить свет",
  });

  /* Instagram айналасындағы хабарламалар */
  const stage = document.getElementById("nwiStage");
  if (stage) {
    [
      ["b1", "💡", "igB1"],
      ["b2", "✨", "igB2"],
      ["b3", "💬", "igB3"],
    ].forEach(([cls, icon, key]) => {
      const d = document.createElement("div");
      d.className = `nwi-bubble ${cls}`;
      d.setAttribute("aria-hidden", "true");
      d.innerHTML = `<b>${icon}</b><span data-text="${key}"></span>`;
      stage.appendChild(d);
    });
  }
  setLanguage(lang);

  /* ───── Түн / күн ажыратқышы ───── */
  const sw = document.getElementById("nwSwitch");
  const setTitle = () => {
    if (sw) sw.title = root.classList.contains("night") ? texts[lang].nwDay : texts[lang].nwNight;
  };
  setTitle();
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", setTitle));
  if (sw)
    sw.addEventListener("click", () => {
      const night = !root.classList.contains("night");
      root.classList.toggle("night", night);
      try {
        localStorage.setItem("nwTheme", night ? "night" : "day");
      } catch (e) {}
      if (!still) {
        root.classList.remove("flick");
        void root.offsetWidth;
        root.classList.add("flick");
        setTimeout(() => root.classList.remove("flick"), 700);
      }
      setTitle();
    });

  /* ───── Скролл-прогресс ───── */
  const prog = document.createElement("div");
  prog.className = "nw-prog";
  document.body.appendChild(prog);
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    prog.style.setProperty("--p", max > 0 ? (scrollY / max).toFixed(4) : 0);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ───── Тақырыптар неон түтік сияқты жанады ───── */
  if (!still && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -15% 0px" },
    );
    document.querySelectorAll("main section h2").forEach((h) => {
      h.classList.add("nf");
      io.observe(h);
    });
  }

  /* ───── Hero прожекторы курсорға ереді ───── */
  const hero = document.querySelector(".hero");
  if (hero && fine) {
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--hx", e.clientX - r.left + "px");
      hero.style.setProperty("--hy", e.clientY - r.top + "px");
    });
  }

  /* ───── Неон курсор ізі (тек түнде, тінтуірмен) ───── */
  if (fine && !still) {
    const cv = document.createElement("canvas");
    cv.className = "nw-trail";
    document.body.appendChild(cv);
    const cx = cv.getContext("2d");
    let W = 0,
      H = 0;
    const size = () => {
      const d = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth;
      H = innerHeight;
      cv.width = W * d;
      cv.height = H * d;
      cx.setTransform(d, 0, 0, d, 0, 0);
    };
    size();
    addEventListener("resize", size);
    const pts = [];
    addEventListener(
      "pointermove",
      (e) => {
        pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
        if (pts.length > 40) pts.shift();
      },
      { passive: true },
    );
    const LIFE = 380;
    const draw = (now) => {
      requestAnimationFrame(draw);
      cx.clearRect(0, 0, W, H);
      if (!root.classList.contains("night")) return;
      while (pts.length && now - pts[0].t > LIFE) pts.shift();
      if (pts.length < 2) return;
      cx.lineCap = "round";
      cx.lineJoin = "round";
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1],
          b = pts[i];
        const k = 1 - (now - b.t) / LIFE; // 1 → жаңа, 0 → ескі
        const hue = 320 - (1 - k) * 140; // қызғылт → көгілдір
        cx.strokeStyle = `hsla(${hue},100%,62%,${(k * 0.9).toFixed(3)})`;
        cx.shadowColor = `hsl(${hue},100%,60%)`;
        cx.shadowBlur = 14;
        cx.lineWidth = 1.5 + k * 3.5;
        cx.beginPath();
        cx.moveTo(a.x, a.y);
        cx.lineTo(b.x, b.y);
        cx.stroke();
      }
    };
    requestAnimationFrame(draw);
  }

  /* ═════════════ Instagram телефоны ═════════════ */
  const sec = document.getElementById("nwInsta");
  if (!sec) return;

  // Экрандағы сағат — нақты уақыт
  const clock = document.getElementById("nwiClock");
  const tick = () => {
    const d = new Date();
    if (clock) clock.textContent = d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
  };
  tick();
  setInterval(tick, 30000);

  new IntersectionObserver(([e]) => sec.classList.toggle("off", !e.isIntersecting)).observe(sec);

  // 3D: телефон курсорға қарай бұрылады
  const phone = document.getElementById("nwiPhone");
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

  // Ұшатын жүректер
  const floats = document.getElementById("nwiFloats");
  const EMO = ["❤️", "💖", "🔥", "✨", "💡", "😍"];
  function fly(n = 1, fromX = null) {
    if (still) return;
    for (let i = 0; i < n; i++) {
      const s = document.createElement("span");
      s.className = "nwi-fly";
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

  // Посттар: бір рет басса — Instagram, екі рет — лайк ❤️
  function like(post) {
    const h = document.createElement("span");
    h.className = "nwi-burst";
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
        window.open(post.href, "_blank", "noopener");
      }, 320);
    });
  });
})();
