/* newwave — «Сайттың иесі»: Instagram профилі.
   Аккаунт атын және сандарды осы жерде өзгертіңіз 👇 */
const IG_USER = "abzallovichh";
const IG_STATS = { posts: 3, followers: 103, following: 109 };

(() => {
  const sec = document.getElementById("insta");
  if (!sec) return;

  /* Телефонда батырмалар профильдің астында толық енімен тұрады (қолданбадағыдай) */
  const head = sec.querySelector(".igp-head");
  const btns = sec.querySelector(".igp-row1 .igp-btns");
  if (head && btns) {
    const m = btns.cloneNode(true);
    m.classList.add("igp-mbtns");
    head.after(m);
  }

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
      igFollow: "Жазылу",
      igMsg: "Хабарлама",
      igPosts: "жазба",
      igFollowers: "жазылушы",
      igFollowing: "жазылым",
      igTabPosts: "Жазбалар",
      igTabTags: "Белгілер",
      igOpen: "Instagram-да ашу",
    });
    Object.assign(texts.ru, {
      igLabel: "Владелец сайта",
      igFollow: "Подписаться",
      igMsg: "Сообщение",
      igPosts: "публикации",
      igFollowers: "подписчики",
      igFollowing: "подписки",
      igTabPosts: "Публикации",
      igTabTags: "Отметки",
      igOpen: "Открыть в Instagram",
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
