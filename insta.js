/* newwave — «Сайттың иесі»: Instagram профилі.
   Аккаунт атын және сандарды осы жерде өзгертіңіз 👇 */
const IG_USER = "abzallovichh";
const IG_STATS = { posts: 0, followers: 103, following: 109 };

(() => {
  const sec = document.getElementById("insta");
  if (!sec) return;

  /* Сілтемелер, атау, сандар */
  const url = `https://www.instagram.com/${IG_USER}/`;
  document.querySelectorAll("[data-ig-link]").forEach((a) => (a.href = url));
  document.querySelectorAll("[data-ig-user]").forEach((s) => (s.textContent = IG_USER));
  document.querySelectorAll("[data-ig-stat]").forEach((b) => {
    const v = IG_STATS[b.dataset.igStat];
    if (v !== undefined) b.textContent = v;
  });

  /* Аудармалар (script.js-тегі texts нысанына қосамыз) */
  if (typeof texts !== "undefined") {
    Object.assign(texts.kz, {
      igLabel: "Сайттың иесі",
    });
    Object.assign(texts.ru, {
      igLabel: "Владелец сайта",
    });
    if (typeof applyLang === "function") applyLang();
  }

  /* Экраннан тыс болса — фон анимациясын тоқтатамыз */
  const aur = sec.querySelector(".ig-aurora");
  if (aur)
    new IntersectionObserver(([e]) => {
      aur.style.animationPlayState = e.isIntersecting ? "running" : "paused";
    }).observe(sec);
})();
