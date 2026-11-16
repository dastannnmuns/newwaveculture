/* newwave — «вау» қабаты. script.js-тен кейін қосылады, оған тәуелсіз. */
(() => {
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const mouse = { x: innerWidth / 2, y: innerHeight / 2, on: false };
  addEventListener(
    "pointermove",
    (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.on = true;
    },
    { passive: true },
  );

  /* ───── Скролл-прогресс ───── */
  const prog = document.createElement("div");
  prog.className = "wprog";
  prog.setAttribute("aria-hidden", "true");
  document.body.append(prog);

  /* ───── Түйіршік ───── */
  if (!still) {
    const g = document.createElement("div");
    g.className = "grain";
    g.setAttribute("aria-hidden", "true");
    document.body.append(g);
  }

  /* ───── Скролл: прогресс + жүгіртпе жолдың қисаюы ───── */
  const ticker = $(".ticker");
  let lastY = scrollY,
    skew = 0,
    skTimer;
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    prog.style.setProperty("--p", max > 0 ? (scrollY / max).toFixed(4) : 0);
    if (!still && ticker) {
      const v = scrollY - lastY;
      skew = Math.max(-5, Math.min(5, v * 0.12));
      ticker.style.setProperty("--sk", skew.toFixed(2) + "deg");
      clearTimeout(skTimer);
      skTimer = setTimeout(() => ticker.style.setProperty("--sk", "0deg"), 120);
    }
    lastY = scrollY;
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  /* ───── 3D толқынды мұхит (бірінші бөлім) ───── */
  const story = $("#story");
  if (story && !still) {
    const box = document.createElement("div");
    box.className = "ocean";
    box.setAttribute("aria-hidden", "true");
    const cv = document.createElement("canvas");
    box.append(cv);
    story.prepend(box);
    const cx = cv.getContext("2d");
    let W = 0,
      H = 0,
      dpr = 1,
      visible = true,
      t0 = performance.now();
    const COLS = innerWidth < 700 ? 34 : 64,
      ROWS = innerWidth < 700 ? 22 : 34;
    const ripples = [];
    const size = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    addEventListener("resize", size);
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(story);
    requestAnimationFrame(() => box.classList.add("on"));

    // Бірінші бөлімдегі басу — мұхитта толқын
    story.addEventListener("pointerdown", (e) => {
      ripples.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (ripples.length > 6) ripples.shift();
    });

    // түстер: лайм → көгілдір → күлгін
    const lerp = (a, b, k) => a + (b - a) * k;
    const C = [
      [212, 255, 58],
      [63, 240, 255],
      [139, 107, 255],
    ];
    const col = (k) => {
      const i = k < 0.5 ? 0 : 1,
        f = k < 0.5 ? k * 2 : (k - 0.5) * 2;
      return C[i].map((v, j) => Math.round(lerp(v, C[i + 1][j], f)));
    };
    const pal = Array.from({ length: COLS }, (_, i) => col(i / (COLS - 1)));

    const proj = new Float32Array(COLS * ROWS * 3);
    const frame = (now) => {
      requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      const t = (now - t0) / 1000;
      cx.clearRect(0, 0, W, H);
      const horizon = H * 0.42,
        fov = H * 0.9,
        camY = 140;
      // мұхит нүктелерін есептеу
      const mxN = mouse.on ? (mouse.x / W - 0.5) * 2 : 0;
      const myN = mouse.on ? mouse.y / H : 0.5;
      for (let r = 0; r < ROWS; r++) {
        const z = 120 + r * 26; // алыстау
        for (let c = 0; c < COLS; c++) {
          const x = (c / (COLS - 1) - 0.5) * 1700;
          let y =
            Math.sin(x * 0.006 + t * 1.1 + r * 0.32) * 18 +
            Math.sin(z * 0.012 - t * 1.6) * 16 +
            Math.cos((x + z) * 0.004 + t * 0.6) * 22;
          const sx0 = W / 2 + (x * fov) / z;
          const sy0 = horizon + ((camY - y) * fov) / z;
          // тінтуірдің маңында су көтеріледі
          if (mouse.on) {
            const dx = sx0 - mouse.x,
              dy = sy0 - mouse.y;
            const d2 = dx * dx + dy * dy;
            y += 38 * Math.exp(-d2 / 60000);
          }
          for (const rp of ripples) {
            const age = (now - rp.t) / 1000;
            if (age > 2.4) continue;
            const dx = sx0 - rp.x,
              dy = sy0 - rp.y,
              d = Math.sqrt(dx * dx + dy * dy);
            const front = age * 520;
            y += Math.exp(-((d - front) ** 2) / 3000) * 70 * (1 - age / 2.4);
          }
          const i = (r * COLS + c) * 3;
          proj[i] = W / 2 + ((x - mxN * 120) * fov) / z;
          proj[i + 1] = horizon + ((camY - y + (myN - 0.5) * 40) * fov) / z;
          proj[i + 2] = z;
        }
      }
      // сызықтар (толқын жолдары)
      cx.lineWidth = 1;
      for (let r = 0; r < ROWS; r++) {
        const fade = 1 - r / ROWS;
        cx.beginPath();
        for (let c = 0; c < COLS; c++) {
          const i = (r * COLS + c) * 3;
          c ? cx.lineTo(proj[i], proj[i + 1]) : cx.moveTo(proj[i], proj[i + 1]);
        }
        const k = r / ROWS;
        const [R, G, B] = col(0.15 + k * 0.85);
        cx.strokeStyle = `rgba(${R},${G},${B},${(0.07 + fade * 0.22).toFixed(3)})`;
        cx.stroke();
      }
      // нүктелер
      for (let r = 0; r < ROWS; r++) {
        const fade = 1 - r / ROWS;
        for (let c = 0; c < COLS; c++) {
          const i = (r * COLS + c) * 3;
          const x = proj[i],
            y = proj[i + 1];
          if (x < -10 || x > W + 10 || y < -10 || y > H + 10) continue;
          const s = Math.max(0.6, (2.6 * 200) / proj[i + 2]);
          const [R, G, B] = pal[c];
          cx.fillStyle = `rgba(${R},${G},${B},${(0.15 + fade * 0.75).toFixed(3)})`;
          cx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
      // көкжиектегі жарық
      const gr = cx.createLinearGradient(0, horizon - 120, 0, horizon + 260);
      gr.addColorStop(0, "rgba(7,7,13,1)");
      gr.addColorStop(0.35, "rgba(7,7,13,0)");
      cx.fillStyle = gr;
      cx.fillRect(0, 0, W, horizon + 260);
    };
    requestAnimationFrame(frame);
  }

  /* ───── Жеке курсор ───── */
  if (fine && !still) {
    const dot = document.createElement("div"),
      ring = document.createElement("div");
    dot.className = "cur";
    ring.className = "cur-ring";
    document.body.append(dot, ring);
    document.documentElement.classList.add("has-cur", "cur-hide");
    let rx = mouse.x,
      ry = mouse.y;
    const hotSel = "a,button,summary,label,[role=button],[data-copy],.tier,select,.cord";
    const txtSel = "input:not([type=checkbox]):not([type=radio]),textarea";
    addEventListener("pointermove", (e) => {
      document.documentElement.classList.remove("cur-hide");
      const t = e.target;
      ring.classList.toggle("txt", !!(t.closest && t.closest(txtSel)));
      ring.classList.toggle("hot", !!(t.closest && t.closest(hotSel)) && !ring.classList.contains("txt"));
    });
    document.addEventListener("pointerleave", () => document.documentElement.classList.add("cur-hide"));
    addEventListener("pointerdown", () => ring.classList.add("down"));
    addEventListener("pointerup", () => ring.classList.remove("down"));
    const loop = () => {
      rx += (mouse.x - rx) * 0.18;
      ry += (mouse.y - ry) * 0.18;
      dot.style.transform = `translate3d(${mouse.x}px,${mouse.y}px,0)`;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  /* ───── Магнитті батырмалар ───── */
  if (fine && !still) {
    const bind = (b) => {
      if (b.dataset.mag) return;
      b.dataset.mag = 1;
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.classList.add("mag");
        b.style.setProperty("--tx", ((e.clientX - r.left - r.width / 2) * 0.3).toFixed(1) + "px");
        b.style.setProperty("--ty", ((e.clientY - r.top - r.height / 2) * 0.4).toFixed(1) + "px");
      });
      b.addEventListener("pointerleave", () => {
        b.classList.remove("mag");
        b.style.setProperty("--tx", "0px");
        b.style.setProperty("--ty", "0px");
      });
    };
    const scan = () => $$(".btn, .lbtn").forEach(bind);
    scan();
    new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
  }

  /* ───── Тінтуірдің артынан жүретін жарық ───── */
  const spotSel = ".addon, .step, .faq details, .way, .tgsub, #form, .picker";
  const spot = () =>
    $$(spotSel).forEach((el) => {
      if (el.classList.contains("spot")) return;
      el.classList.add("spot");
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", e.clientX - r.left + "px");
        el.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });
  if (fine) spot();

  /* ───── Пайда болу анимациялары ───── */
  if (!still && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px" },
    );
    $$("main section:not(.story) .label, main section:not(.story) h2").forEach((el) => {
      el.classList.add("rv");
      io.observe(el);
    });
    const groups = [".addons > .addon", ".steps > .step", ".faq > details", ".ways > .way", ".checks > label"];
    groups.forEach((g) =>
      $$(g).forEach((el, i) => {
        el.classList.add("st");
        el.style.setProperty("--d", i);
        io.observe(el);
      }),
    );
    // Пакет карточкалары кейін салынады (тіл ауысқанда да)
    const tiers = $("#tiers");
    if (tiers) {
      const tio = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              const el = e.target;
              el.animate(
                [
                  { opacity: 0, transform: "translateY(60px) rotateX(18deg) scale(.94)" },
                  { opacity: 1, transform: "none" },
                ],
                {
                  duration: 900,
                  delay: (+el.dataset.wi % 3) * 110,
                  easing: "cubic-bezier(.19,1,.22,1)",
                  fill: "backwards",
                },
              );
              tio.unobserve(el);
            }
          }),
        { rootMargin: "0px 0px -8% 0px" },
      );
      let done = false;
      const watch = () => {
        if (done) return;
        const kids = [...tiers.children];
        if (!kids.length) return;
        done = true;
        kids.forEach((k, i) => {
          k.dataset.wi = i;
          tio.observe(k);
        });
      };
      watch();
      new MutationObserver(watch).observe(tiers, { childList: true });
    }
  }

  /* ───── Кезеңдер: толқын-жол скроллмен толады ───── */
  const steps = $(".steps");
  if (steps) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "wpath");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("viewBox", "0 0 1000 40");
    svg.innerHTML =
      '<defs><linearGradient id="wgrad" x1="0" x2="1"><stop offset="0" stop-color="#d4ff3a"/><stop offset=".5" stop-color="#3ff0ff"/><stop offset="1" stop-color="#8b6bff"/></linearGradient></defs>';
    let d = "M0 20";
    for (let x = 0; x < 1000; x += 50) d += ` Q${x + 25} ${(x / 50) % 2 ? 34 : 6} ${x + 50} 20`;
    const bg = document.createElementNS(ns, "path"),
      fg = document.createElementNS(ns, "path");
    bg.setAttribute("d", d);
    fg.setAttribute("d", d);
    bg.setAttribute("class", "bgp");
    fg.setAttribute("class", "fg");
    bg.setAttribute("vector-effect", "non-scaling-stroke");
    fg.setAttribute("vector-effect", "non-scaling-stroke");
    svg.append(bg, fg);
    steps.prepend(svg);
    const L = fg.getTotalLength();
    fg.style.strokeDasharray = L;
    const upd = () => {
      const r = steps.getBoundingClientRect();
      const k = still ? 1 : Math.max(0, Math.min(1, (innerHeight * 0.85 - r.top) / (innerHeight * 0.55)));
      fg.style.strokeDashoffset = (L * (1 - k)).toFixed(1);
    };
    addEventListener("scroll", upd, { passive: true });
    addEventListener("resize", upd);
    upd();
  }

  /* ───── Ұсынылған баға санап өзгереді ───── */
  const price = $("#recPrice");
  if (price && !still) {
    let cur = parseInt(price.textContent.replace(/\D/g, ""), 10) || 0,
      mine = null,
      raf;
    new MutationObserver(() => {
      const txt = price.textContent;
      if (txt === mine) return; // өзіміз жазған мән
      const target = parseInt(txt.replace(/\D/g, ""), 10);
      if (!target || target === cur) return;
      const m = txt.match(/^([\d\s\u00a0]*\d)(.*)$/);
      const tail = m ? m[2] : " ₸";
      const sep = (txt.match(/\d([\s\u00a0])\d/) || [, " "])[1];
      const from = cur,
        start = performance.now();
      cur = target;
      cancelAnimationFrame(raf);
      price.classList.remove("tick");
      void price.offsetWidth;
      price.classList.add("tick");
      const step = (now) => {
        const k = Math.min(1, (now - start) / 650),
          e = 1 - (1 - k) ** 3;
        if (k < 1) {
          const n = Math.round((from + (target - from) * e) / 100) * 100;
          mine = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep) + tail;
          price.textContent = mine;
          raf = requestAnimationFrame(step);
        } else {
          mine = txt;
          price.textContent = txt;
        }
      };
      raf = requestAnimationFrame(step);
    }).observe(price, { childList: true, characterData: true, subtree: true });
  }

  /* ───── Мәзір сілтемелері: әріптер «шашырап» жиналады ───── */
  if (fine && !still) {
    const chars = "▲◆●NEWAVE0123456789#%&";
    $$(".nav ul a").forEach((a) => {
      let busy = false;
      a.addEventListener("pointerenter", () => {
        if (busy) return;
        busy = true;
        const final = a.textContent;
        const t0 = performance.now();
        const run = (now) => {
          const k = (now - t0) / 450;
          if (k >= 1) {
            a.textContent = final;
            busy = false;
            return;
          }
          a.textContent = [...final]
            .map((ch, i) => (ch === " " || i < k * final.length ? ch : chars[(Math.random() * chars.length) | 0]))
            .join("");
          requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      });
    });
  }
})();
