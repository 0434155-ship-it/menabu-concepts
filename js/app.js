const PRODUCTS = [
  { id: "grech", cat: "bread", name: "Гречишный", hit: true, img: "assets/real/racks.jpg", alt: "Стеллаж с хлебом на закваске после утренней выпечки", desc: "Гречневый аромат и лёгкая ореховая нота. Холодная ферментация от 12 часов на родниковой воде.", weights: [{ g: "190 г", price: 155 }, { g: "370 г", price: 240 }, { g: "640 г", price: 380 }] },
  { id: "nas", cat: "bread", name: "Насущный", img: "assets/real/racks.jpg", pos: "center 8%", alt: "Светлые пшеничные хлеба на верхней полке", desc: "Тартин. Выраженный хлебный вкус, плотная хрустящая корка и благородная кислинка.", weights: [{ g: "370 г", price: 205 }, { g: "640 г", price: 350 }, { g: "1,5 кг", price: 515 }] },
  { id: "taiga", cat: "bread", name: "Таёжный", img: "assets/real/slice.jpg", alt: "Тёмный хлеб в разрезе, с семенами и сухофруктами", desc: "С ржаным солодом, вяленой клюквой и изюмом.", weights: [{ g: "370 г", price: 300 }] },
  { id: "croissant", cat: "lam", name: "Классический круассан", hit: true, img: "assets/real/croissant.jpg", alt: "Классические круассаны на противне", desc: "Многослойный, на качественном голландском масле 82,5%. Без растительных жиров и консервантов.", weights: [{ g: "55 г", price: 125 }] },
  { id: "cube", cat: "lam", name: "Куб", img: "assets/real/cube.jpg", alt: "Слоёный куб с черничным кремом, в разрезе", desc: "Слоёный куб с кремом. Сделали чуть меньше, чтобы взять к кофе.", weights: [{ g: "классика", price: 130 }, { g: "ваниль", price: 175 }, { g: "черника", price: 200 }, { g: "малина", price: 205 }, { g: "карамель", price: 185 }] },
  { id: "poppy", cat: "lam", name: "Маковая булочка", img: "assets/real/poppy.jpg", alt: "Маковые булочки на противне", desc: "Сдобная булочка со щедрой маковой начинкой.", weights: [{ g: "150 г", price: 140 }] },
  { id: "canele", cat: "canele", name: "Канеле", img: "assets/real/canele.jpg", alt: "Канеле с малиновой шапкой", desc: "Бордоское пирожное с карамельной корочкой. На фото — с малиной.", weights: [{ g: "классика", price: 110 }, { g: "малина", price: 150 }, { g: "шоколад", price: 140 }] },
  { id: "tart", cat: "dessert", name: "Тарт с малиной", img: "assets/real/tart.jpg", alt: "Три тарта с малиной", desc: "Песочная основа, нежный крем и свежие ягоды.", weights: [{ g: "1 шт", price: 485 }] },
  { id: "cheese", cat: "dessert", name: "Малиновый чизкейк", img: "assets/real/cheesecake.jpg", alt: "Малиновый чизкейк на доске пекарни", desc: "Нежный чизкейк с малиной.", weights: [{ g: "130 г", price: 350 }] }
];

const SEASON = [
  { id: "stollen", name: "Штоллен классический", img: "assets/fruit.jpg", alt: "Праздничный круглый хлеб в муке", desc: "Сдобный, с цукатами и орехами. Пылит сахарной пудрой.", weights: [{ g: "500 г", price: 1650 }, { g: "750 г", price: 2300 }] },
  { id: "stollen-m", name: "Штоллен с марципаном", img: "assets/rack.jpg", alt: "Зерновой хлеб для праздничного стола", desc: "Долгий сдобный мякиш и марципановая лента внутри.", weights: [{ g: "500 г", price: 1890 }, { g: "750 г", price: 2600 }] },
  { id: "fruitcake", name: "Фруткейк", img: "assets/dark.jpg", alt: "Праздничный тёмный кекс с вишней", desc: "Плотный праздничный кекс с сухофруктами. Его как раз и ждут к столу.", weights: [{ g: "500 г", price: 1750 }, { g: "900 г", price: 2900 }] },
  { id: "panettone", name: "Паннетоне", img: "assets/cake.jpg", alt: "Высокий праздничный кекс", desc: "Высокий, на закваске, с цукатами. К кофе в рождественское утро.", weights: [{ g: "500 г", price: 1700 }, { g: "750 г", price: 2400 }] }
];

const CATS = [
  { id: "all", name: "Всё" },
  { id: "bread", name: "Хлеб на закваске" },
  { id: "lam", name: "Слоёное и булочки" },
  { id: "canele", name: "Канеле" },
  { id: "dessert", name: "Десерты" }
];

const LIFE = [
  { src: "assets/real/bar.jpg", alt: "Стопка круассанов на барной стойке", cap: "Круассаны на стойке. Сюда возвращаются." },
  { src: "assets/real/racks.jpg", alt: "Стеллажи с хлебом сразу после выпечки", cap: "Пять утра. Первая полка уже тёплая." },
  { src: "assets/real/buns.jpg", alt: "Свердловские булочки с сахарной крошкой", cap: "Свердловские булочки. Повод не нужен." },
  { src: "assets/real/eclairs.jpg", alt: "Набор эклеров в коробке с записками", cap: "Эклеры с записками — десерт, который дарят." },
  { src: "assets/real/macarons.jpg", alt: "Коробка макарон на кедровой муке", cap: "Макарон на кедровой муке, без красителей." }
];

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const statusEl = document.getElementById("status");
let concept = "stol";
let page = "board";
let filter = "all";
let cart = load("menabu-cart", []);
let season = load("menabu-season", []);
let lastFocus = null;

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; }
}
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function rub(n) { return new Intl.NumberFormat("ru-RU").format(n) + " ₽"; }
function digits(v) { return (v || "").replace(/\D/g, ""); }
function say(text) { statusEl.textContent = text; }
function productById(id) { return PRODUCTS.find((p) => p.id === id); }

function cardHtml(p, layout) {
  if (!p) return "";
  const grams = p.weights.map((w, i) => `<button type="button" class="gram" aria-pressed="${i === 0}" data-price="${w.price}" data-g="${w.g}">${w.g}</button>`).join("");
  const badge = p.hit ? `<span class="badge">хит</span>` : "";
  const photoHtml = p.img
    ? `<div class="photo">${badge}<img src="${p.img}" alt="${p.alt}" ${p.pos ? `style="object-position:${p.pos}"` : ""}></div>`
    : `<div class="photo mold-wrap">${badge}<div class="mold" role="img" aria-label="Медная форма канеле"></div></div>`;
  if (layout === "menu") {
    return `<div class="menu-row" data-id="${p.id}">
      <h3>${p.name} ${badge}</h3>
      <p>${p.desc}</p>
      <div class="grams" role="group" aria-label="Граммовка ${p.name}">${grams}</div>
      <div class="card-buy"><span class="price">${rub(p.weights[0].price)}</span><button type="button" class="add">В корзину</button></div>
    </div>`;
  }
  return `<article class="card" data-id="${p.id}">
    ${photoHtml}
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="grams" role="group" aria-label="Граммовка ${p.name}">${grams}</div>
    <div class="card-buy"><span class="price">${rub(p.weights[0].price)}</span><button type="button" class="add">В корзину</button></div>
  </article>`;
}

function renderPicks() {
  document.querySelectorAll("[data-picks]").forEach((el) => {
    const ids = el.dataset.picks.split(",");
    el.innerHTML = ids.map((id) => cardHtml(productById(id), el.dataset.layout)).join("");
  });
}

function renderFilters() {
  document.getElementById("filters").innerHTML = CATS.map((c) =>
    `<button type="button" role="tab" data-filter="${c.id}" aria-selected="${c.id === filter}">${c.name}</button>`
  ).join("");
}

function renderCatalog() {
  const list = PRODUCTS.filter((p) => filter === "all" || p.cat === filter);
  document.getElementById("catalog-grid").innerHTML = list.map((p) => cardHtml(p, "cards")).join("");
}

function renderSeason() {
  document.getElementById("season-grid").innerHTML = SEASON.map((p) => {
    const grams = p.weights.map((w, i) => `<button type="button" class="gram" aria-pressed="${i === 0}" data-price="${w.price}" data-g="${w.g}">${w.g}</button>`).join("");
    return `<article class="card" data-id="${p.id}" data-season="1">
      <div class="photo"><img src="${p.img}" alt="${p.alt}"></div>
      <span class="badge">сезон</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="grams" role="group" aria-label="Граммовка ${p.name}">${grams}</div>
      <div class="card-buy"><span class="price">${rub(p.weights[0].price)}</span><button type="button" class="add">В предзаказ</button></div>
    </article>`;
  }).join("");
  renderPayLines();
}

function selectedWeight(node) {
  const pressed = node.querySelector('.gram[aria-pressed="true"]') || node.querySelector(".gram");
  return { g: pressed.dataset.g, price: Number(pressed.dataset.price) };
}

function renderCart() {
  const body = document.getElementById("cartBody");
  const form = document.getElementById("cartForm");
  document.getElementById("cartCount").textContent = cart.reduce((s, l) => s + l.qty, 0);
  if (!cart.length) {
    body.innerHTML = "<p>Пока пусто. В корзине — хлеб на сегодня, предзаказ живёт на своей странице.</p>";
    form.hidden = true;
    return;
  }
  form.hidden = false;
  body.innerHTML = cart.map((l) => `<div class="cart-line">
    <div><strong>${l.name}</strong><div class="fine">${l.g}</div></div>
    <div class="qty">
      <button type="button" data-qty="${l.key}" data-d="-1" aria-label="Меньше">−</button>
      <span>${l.qty}</span>
      <button type="button" data-qty="${l.key}" data-d="1" aria-label="Больше">+</button>
    </div>
    <span>${rub(l.price * l.qty)}</span>
  </div>`).join("") + `<p class="pay-total">К самовывозу <strong>${rub(cart.reduce((s, l) => s + l.price * l.qty, 0))}</strong></p>`;
}

function renderPayLines() {
  const list = document.getElementById("payLines");
  const empty = document.getElementById("payEmpty");
  const total = season.reduce((s, l) => s + l.price * l.qty, 0);
  document.getElementById("payTotal").textContent = rub(total);
  empty.hidden = season.length > 0;
  list.innerHTML = season.map((l) => `<li><span>${l.name}, ${l.g} × ${l.qty}</span><span>${rub(l.price * l.qty)}</span></li>`).join("");
}

function addLine(bucket, item) {
  const key = item.id + "|" + item.g;
  const found = bucket.find((l) => l.key === key);
  if (found) found.qty += 1;
  else bucket.push({ key, id: item.id, name: item.name, g: item.g, price: item.price, qty: 1 });
}

function openCart() {
  lastFocus = document.activeElement;
  document.getElementById("scrim").hidden = false;
  const cartEl = document.getElementById("cart");
  cartEl.hidden = false;
  cartEl.querySelector("button").focus();
}
function closeCart() {
  document.getElementById("scrim").hidden = true;
  document.getElementById("cart").hidden = true;
  if (lastFocus) lastFocus.focus();
}

function phoneOk(v) { return digits(v).length >= 10; }

function route() {
  const parts = (location.hash.replace(/^#\/?/, "") || "board").split("/").filter(Boolean);
  const known = ["stol", "polka", "utro", "pismo", "kadr", "bumaga", "muka", "polya", "kadrlong", "mukalong"];
  const covers = ["kadr", "bumaga", "muka", "polya"];
  const longs = ["kadrlong", "mukalong"];
  if (parts[0] === "board" || !known.includes(parts[0])) {
    concept = "stol";
    page = "board";
  } else {
    concept = parts[0];
    page = parts[1] || "home";
  }
  const pages = ["home", "catalog", "food", "about", "business", "contacts", "preorder"];
  if (page !== "board" && !pages.includes(page)) page = "home";

  document.body.dataset.concept = page === "board" ? "" : concept;
  document.body.classList.toggle("is-home", page === "home");
  document.body.classList.toggle("is-inner", page !== "home" && page !== "board");
  document.body.classList.toggle("is-cover", page === "home" && covers.includes(concept));
  document.body.classList.toggle("is-long", page === "home" && longs.includes(concept));
  document.body.classList.toggle("has-switch", page !== "board");
  document.getElementById("plaque").hidden = page === "board";
  document.getElementById("foot").hidden = page === "board";
  document.getElementById("switcher").hidden = page === "board";
  document.getElementById("board").hidden = page !== "board";
  document.querySelectorAll("[data-home]").forEach((el) => { el.hidden = !(page === "home" && el.dataset.home === concept); });
  ["catalog", "food", "about", "business", "contacts", "preorder"].forEach((name) => {
    document.getElementById("page-" + name).hidden = page !== name;
  });

  document.querySelectorAll("#nav a").forEach((a) => {
    const dest = a.dataset.page;
    a.href = `#/${concept}/${dest}`;
    if (dest === page) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  document.getElementById("logoHome").href = `#/${concept}`;
  const footLogo = document.getElementById("footLogo");
  if (footLogo) footLogo.href = `#/${concept}`;
  document.querySelectorAll("[data-switch]").forEach((a) => {
    if (page !== "board" && a.dataset.switch === concept) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
  const titles = { board: "Кадр и Мука", home: "Главная", catalog: "Каталог", food: "Еда", about: "О пекарне", business: "Для бизнеса", contacts: "Контакты", preorder: "Предзаказ" };
  if (page === "food" && typeof renderFood === "function") renderFood();
  const names = { stol: "Стол", polka: "Полка", utro: "Утро", pismo: "Письмо", kadr: "Кадр", bumaga: "Бумага", muka: "Мука", polya: "Поля", kadrlong: "Кадр · страница", mukalong: "Мука · страница" };
  document.title = page === "board"
    ? "Между Нами Булочками — десять вариантов"
    : `${titles[page]} · ${names[concept]} · Между Нами Булочками`;
  document.getElementById("nav").classList.remove("is-open");
  document.getElementById("menuBtn").setAttribute("aria-expanded", "false");
  closeCart();
  const h = document.querySelector(`${page === "board" ? "#board" : page === "home" ? `[data-home="${concept}"]` : "#page-" + page} h1`);
  if (h) h.setAttribute("tabindex", "-1"), h.focus({ preventScroll: true });
  window.scrollTo(0, 0);
  observe();
}

function observe() {
  const nodes = document.querySelectorAll("[data-animate]:not([hidden])");
  if (reduce) {
    nodes.forEach((n) => reveal(n));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) reveal(entry.target); });
  }, { threshold: 0.35 });
  nodes.forEach((n) => io.observe(n));
}
function reveal(node) {
  if (node.dataset.done) return;
  node.dataset.done = "1";
  node.classList.add("is-in");
  node.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    if (reduce) { el.textContent = target + suffix; return; }
    const start = performance.now();
    const tick = (now) => {
      const k = Math.min(1, (now - start) / 900);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + suffix;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function setupLife(root) {
  let index = 0;
  let timer = null;
  const img = root.querySelector("img");
  const cap = root.querySelector("figcaption");
  const dots = root.querySelector(".life-dots");
  dots.innerHTML = LIFE.map((_, i) => `<button type="button" role="tab" aria-label="Фото ${i + 1}" aria-selected="${i === 0}"></button>`).join("");
  const show = (i) => {
    index = (i + LIFE.length) % LIFE.length;
    img.src = LIFE[index].src;
    img.alt = LIFE[index].alt;
    cap.textContent = LIFE[index].cap;
    dots.querySelectorAll("button").forEach((b, n) => b.setAttribute("aria-selected", n === index));
  };
  const play = () => {
    clearInterval(timer);
    if (reduce) return;
    timer = setInterval(() => {
      const paused = root.querySelector(".life-pause").getAttribute("aria-pressed") === "true";
      if (!root.hidden && !paused) show(index + 1);
    }, 3800);
  };
  show(0);
  play();
  root.querySelector(".life-next").addEventListener("click", () => show(index + 1));
  root.querySelector(".life-prev").addEventListener("click", () => show(index - 1));
  root.querySelector(".life-pause").addEventListener("click", (e) => {
    const on = e.currentTarget.getAttribute("aria-pressed") === "true";
    e.currentTarget.setAttribute("aria-pressed", String(!on));
    e.currentTarget.textContent = on ? "Пауза" : "Дальше";
    if (on) play(); else clearInterval(timer);
  });
  dots.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    show([...dots.children].indexOf(btn));
  });
}

document.addEventListener("click", (e) => {
  const gram = e.target.closest(".gram");
  if (gram) {
    const group = gram.parentElement;
    group.querySelectorAll(".gram").forEach((b) => b.setAttribute("aria-pressed", "false"));
    gram.setAttribute("aria-pressed", "true");
    const price = gram.closest("[data-id]").querySelector(".price");
    if (price) price.textContent = rub(Number(gram.dataset.price));
    return;
  }
  const add = e.target.closest(".add");
  if (add) {
    const node = add.closest("[data-id]");
    const seasonCard = node.dataset.season === "1";
    const source = seasonCard ? SEASON : PRODUCTS;
    const item = source.find((p) => p.id === node.dataset.id);
    const w = selectedWeight(node);
    if (seasonCard) {
      addLine(season, { id: item.id, name: item.name, g: w.g, price: w.price });
      save("menabu-season", season);
      renderPayLines();
      say(item.name + " в предзаказе");
      document.getElementById("payForm").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    } else {
      addLine(cart, { id: item.id, name: item.name, g: w.g, price: w.price });
      save("menabu-cart", cart);
      renderCart();
      openCart();
      say(item.name + ", " + w.g + " в корзине");
    }
    return;
  }
  const qty = e.target.closest("[data-qty]");
  if (qty) {
    const line = cart.find((l) => l.key === qty.dataset.qty);
    line.qty += Number(qty.dataset.d);
    if (line.qty <= 0) cart = cart.filter((l) => l !== line);
    save("menabu-cart", cart);
    renderCart();
    return;
  }
  const tab = e.target.closest("[data-filter]");
  if (tab) {
    filter = tab.dataset.filter;
    renderFilters();
    renderCatalog();
  }
});

document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("scrim").addEventListener("click", closeCart);
document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.getElementById("nav");
  const open = nav.classList.toggle("is-open");
  document.getElementById("menuBtn").setAttribute("aria-expanded", String(open));
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    document.getElementById("nav").classList.remove("is-open");
  }
});

document.getElementById("cartForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const error = document.getElementById("cartError");
  if (!data.get("name") || !phoneOk(data.get("phone")) || !data.get("shop")) {
    error.hidden = false;
    error.textContent = "Нужны имя, телефон и пекарня.";
    return;
  }
  error.hidden = true;
  cart = [];
  save("menabu-cart", cart);
  document.getElementById("cartCount").textContent = "0";
  e.target.hidden = true;
  document.getElementById("cartBody").innerHTML = "<p>Бронь собрана в макете. Хлеб вас подождёт — на настоящем сайте здесь будет сообщение от пекарни.</p>";
});

document.getElementById("bizForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const error = document.getElementById("bizError");
  if (!data.get("name") || !data.get("place") || !phoneOk(data.get("phone")) || !data.get("note")) {
    error.hidden = false;
    error.textContent = "Заполните имя, заведение, телефон и пару слов о задаче.";
    return;
  }
  error.hidden = true;
  e.target.querySelector("button").hidden = true;
  document.getElementById("bizOk").hidden = false;
});

document.getElementById("payForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const error = document.getElementById("payError");
  const card = digits(data.get("card"));
  const exp = (data.get("exp") || "").trim();
  const cvc = digits(data.get("cvc"));
  let message = "";
  if (!season.length) message = "В предзаказе пока ничего нет.";
  else if (!data.get("name") || !phoneOk(data.get("phone")) || !data.get("shop")) message = "Нужны имя, телефон и пекарня.";
  else if (card.length !== 16) message = "Номер карты — 16 цифр. Это макет, деньги не спишутся.";
  else if (!/^\d{2}\/\d{2}$/.test(exp)) message = "Срок укажите как ММ/ГГ.";
  else if (cvc.length < 3) message = "Код карты — три цифры.";
  error.hidden = !message;
  error.textContent = message;
  if (message) return;
  const no = String(Math.floor(1000 + Math.random() * 9000));
  season = [];
  save("menabu-season", season);
  renderPayLines();
  e.target.querySelector("button").hidden = true;
  const ok = document.getElementById("payOk");
  ok.hidden = false;
  ok.textContent = "Предзаказ " + no + " собран в макете. Карту мы не сохранили и никуда не отправили.";
  ["card", "exp", "cvc"].forEach((name) => { e.target.elements[name].value = ""; });
});

let foodCat = "";
let foodIndex = 0;
function renderFood() {
  const root = document.getElementById("foodTabs");
  if (!root || typeof FOOD === "undefined") return;
  const cats = [];
  FOOD.forEach((item) => { if (!cats.includes(item.c)) cats.push(item.c); });
  if (!foodCat) foodCat = cats[0];
  root.innerHTML = cats.map((c) => `<button type="button" role="tab" data-food="${c}" aria-selected="${c === foodCat}">${c}</button>`).join("");
  const list = FOOD.filter((item) => item.c === foodCat);
  document.getElementById("foodList").innerHTML = list.map((item) =>
    `<div class="food-line"><span>${item.n}</span><span class="fine">${item.w || ""}</span><span>${item.p ? item.p + " ₽" : ""}</span></div>`
  ).join("");
  const photos = list.filter((item) => item.img);
  const stage = document.getElementById("foodPhoto");
  const cap = document.getElementById("foodCap");
  const arrows = document.querySelector(".food-arrows");
  if (!photos.length) {
    stage.hidden = true;
    if (arrows) arrows.hidden = true;
    cap.textContent = "В этом разделе фотографии ещё не выложены.";
    return;
  }
  stage.hidden = false;
  if (arrows) arrows.hidden = false;
  foodIndex = (foodIndex % photos.length + photos.length) % photos.length;
  stage.src = photos[foodIndex].img;
  stage.alt = photos[foodIndex].alt;
  cap.textContent = photos[foodIndex].n + (photos[foodIndex].w ? ", " + photos[foodIndex].w : "");
}
document.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-food]");
  if (tab) {
    foodCat = tab.dataset.food;
    foodIndex = 0;
    renderFood();
    return;
  }
  if (e.target.id === "foodNext" || e.target.id === "foodPrev") {
    const list = FOOD.filter((item) => item.c === foodCat && item.img);
    if (!list.length) return;
    foodIndex += e.target.id === "foodNext" ? 1 : -1;
    renderFood();
  }
});

document.addEventListener("click", (e) => {
  const jump = e.target.closest("[data-scroll]");
  if (!jump) return;
  const target = document.getElementById(jump.dataset.scroll);
  if (target) target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
});
window.addEventListener("scroll", () => {
  document.body.classList.toggle("is-scrolled", window.scrollY > 48);
}, { passive: true });
window.addEventListener("hashchange", route);
renderPicks();
renderFilters();
renderCatalog();
renderSeason();
renderCart();
document.querySelectorAll("[data-life]").forEach(setupLife);
route();
if (!location.hash) history.replaceState(null, "", "#/board");
