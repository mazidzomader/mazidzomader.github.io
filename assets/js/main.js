"use strict";

/* ----------------------------
   Edit your content here
---------------------------- */

const SITE = {
  name: "Your Name",
};

// Theme Switching Logic
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
});

const SKILLS = [
  {
    category: "Programming Languages",
    levelLabel: "Strong",
    items: [
      { name: "Python", level: 85 },
      { name: "Java", level: 82 },
      { name: "C++", level: 70 },
      { name: "SQL / MySQL", level: 75 },
    ],
  },
  {
    category: "CS Fundamentals",
    levelLabel: "Strong",
    items: [
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 78 },
      { name: "Object-Oriented Programming", level: 82 },
      { name: "Database Management", level: 75 },
    ],
  },
  {
    category: "AI / Machine Learning",
    levelLabel: "Developing",
    items: [
      { name: "NumPy & Pandas", level: 72 },
      { name: "Scikit-Learn", level: 65 },
      { name: "Machine Learning (intro)", level: 62 },
      { name: "Data Analysis", level: 68 },
    ],
  },
  {
    category: "Tools & Technologies",
    levelLabel: "Daily use",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 78 },
      { name: "Cisco Packet Tracer", level: 70 },
      { name: "VS Code", level: 88 },
    ],
  },
];

const RESEARCH = [
  //   {
  //     id: "paper-a11y",
  //     title: "Efficient UI Prototyping for Accessibility Audits (Placeholder)",
  //     authors: ["Your Name", "Coauthor Name"],
  //     year: 2025,
  //     venue: "Workshop (placeholder)",
  //     status: "Preprint",
  //     summary:
  //       "A lightweight workflow for building accessible prototypes and automatically flagging common interaction issues during iteration.",
  //     tags: ["HCI", "Accessibility", "Tooling"],
  //     featured: true,
  //     links: { pdf: "#", arxiv: "#", code: "#", project: "#" },
  //     bibtex: `@article{yourname2025a11y,
  //   title={Efficient UI Prototyping for Accessibility Audits},
  //   author={Your Name and Coauthor Name},
  //   journal={arXiv preprint arXiv:XXXX.XXXXX},
  //   year={2025}
  // }`,
  //   },
  //   {
  //     id: "paper-perf",
  //     title: "Benchmarking Frontend Performance Budgets on Low-End Devices (Placeholder)",
  //     authors: ["Your Name"],
  //     year: 2024,
  //     venue: "Under review (placeholder)",
  //     status: "Under review",
  //     summary:
  //       "Measures how bundle size, rendering patterns, and animation strategies affect real-world performance and perceived smoothness on constrained hardware.",
  //     tags: ["Systems", "Web Performance", "Measurement"],
  //     featured: false,
  //     links: { pdf: "#", code: "#" },
  //     bibtex: `@inproceedings{yourname2024perf,
  //   title={Benchmarking Frontend Performance Budgets on Low-End Devices},
  //   author={Your Name},
  //   booktitle={Conference/Workshop (under review)},
  //   year={2024}
  // }`,
  //   },
  //   {
  //     id: "paper-micro",
  //     title: "A Reproducible Study of UI Micro-Interactions and User Trust (Placeholder)",
  //     authors: ["Your Name", "Coauthor Name", "Coauthor Name"],
  //     year: 2024,
  //     venue: "In progress",
  //     status: "In progress",
  //     summary:
  //       "Investigates whether subtle motion and feedback patterns change user confidence, with open materials and replication-friendly methodology.",
  //     tags: ["HCI", "UX", "Reproducibility"],
  //     featured: false,
  //     links: { project: "#" },
  //     bibtex: `@misc{yourname2024micro,
  //   title={A Reproducible Study of UI Micro-Interactions and User Trust},
  //   author={Your Name and Coauthor Name and Coauthor Name},
  //   note={In progress},
  //   year={2024}
  // }`,
  //   },
];

const PROJECTS = [
  {
    id: "proj-database",
    title: "CarrerHigh",
    description:
      "Minimalist single-page portfolio with accessibility-first components, data-driven research section, and a screenshot showcase modal.",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    links: { code: "https://github.com/mazidzomader/CSE370-Project-CareerHigh" },
    categories: ["Database"],
    featured: true,
    images: [
      { src: "assets/img/Project1/Homepage.png", alt: "Portfolio — hero section", caption: "Homepage" },
      { src: "assets/img/Project1/Features.png", alt: "Portfolio — research section", caption: "Features" },
      { src: "assets/img/Project1/Login.png", alt: "Portfolio — projects section", caption: "Login" },
      { src: "assets/img/Project1/Signup.png", alt: "Portfolio — projects section", caption: "Signup" },
      { src: "assets/img/Project1/Dashboard.png", alt: "Portfolio — projects section", caption: "Dashboard" },
      { src: "assets/img/Project1/Roadmap.png", alt: "Portfolio — projects section", caption: "Roadmap" },
      { src: "assets/img/Project1/Activities.png", alt: "Portfolio — projects section", caption: "Activities" },
      { src: "assets/img/Project1/Document.png", alt: "Portfolio — projects section", caption: "Document" },
      { src: "assets/img/Project1/Exam.png", alt: "Portfolio — projects section", caption: "Exam" },
      { src: "assets/img/Project1/Research Ideas.png", alt: "Portfolio — projects section", caption: "Research Ideas" },
    ],
  },
  {
    id: "proj-networks",
    title: "BRACU Campus Network Design",
    description:
      "This project designs and implements a secure, scalable campus network for BRAC University using Cisco Packet Tracer, integrating VLSM, routing, and centralized enterprise services.",
    stack: ["Cisco Packet Tracker"],
    links: { code: "https://github.com/mazidzomader/CSE421-Project-BRACU_Campus_Network_Design" },
    categories: ["Computer Networks"],
    featured: false,
    images: [
      { src: "assets/img/Project2/421_Project_Diagram.png", alt: "Protocol Diagram", caption: "Protocol Diagram" },
    ],
  },
  {
    id: "proj-ML",
    title: "Flat Pricing Analysis",
    description:
      "This project analyzes and classifies apartment price ranges using machine learning techniques to predict housing categories based on key features.",
    stack: ["Python", "Numpy", "Pandas", "Scikit-Learn", "Seaborn"],
    links: { code: "https://github.com/mazidzomader/CSE422-Project-Flat_Price_Prediction" },
    categories: ["AI", "Machine Learning", "Neural Network"],
    featured: true,
    images: [{ src: "assets/img/Project3/422.png", alt: "ProjectSummary", caption: "Model Scores" },
    { src: "assets/img/Project3/confusion_matrix.png", alt: "Confusion", caption: "Confusion" },
    { src: "assets/img/Project3/Accuracy.png", alt: "Accuracy", caption: "Accuracy" },
    { src: "assets/img/Project3/Precision.png", alt: "Precision", caption: "Precision" },
    { src: "assets/img/Project3/Recall.png", alt: "Recall", caption: "Recall" },
    { src: "assets/img/Project3/AUC.png", alt: "AUC", caption: "AUC" },
    ],
  },
];

/* ----------------------------
   Utilities
---------------------------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[m]));
}

function hasReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }
}

/* ----------------------------
   Nav
---------------------------- */

function setupNav() {
  const toggle = $(".nav-toggle");
  const menu = $("#navMenu");
  const links = $$(".nav-link", menu);

  if (!toggle || !menu) return;

  let lastFocused = null;
  const focusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function setOpen(isOpen) {
    menu.dataset.state = isOpen ? "open" : "closed";
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

    if (isOpen) {
      lastFocused = document.activeElement;
      $(focusableSelector, menu)?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }
  }

  const isOpen = () => menu.dataset.state === "open";

  toggle.addEventListener("click", () => setOpen(!isOpen()));
  links.forEach((a) => a.addEventListener("click", () => setOpen(false)));

  document.addEventListener("click", (e) => {
    if (!isOpen()) return;
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (menu.contains(target) || toggle.contains(target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (!isOpen()) return;

    if (e.key === "Escape") { setOpen(false); return; }
    if (e.key !== "Tab") return;

    const focusables = $$(focusableSelector, menu);
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  });
}

/* ----------------------------
   Scrollspy
---------------------------- */



/* ----------------------------
   Reveal
---------------------------- */

function setupReveal() {
  const nodes = $$(".reveal");
  if (!nodes.length) return;

  if (hasReducedMotion()) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.15 }
  );

  nodes.forEach((n) => io.observe(n));
}

/* ----------------------------
   Skills
---------------------------- */

function renderSkills() {
  const root = $("#skillsGrid");
  if (!root) return;

  root.innerHTML = SKILLS.map((group) => {
    const items = group.items.map((s) => {
      const safeName = escapeHtml(s.name);
      const level = Math.max(0, Math.min(100, Number(s.level) || 0));
      return `
        <div class="skill-item">
          <div class="skill-top">
            <strong>${safeName}</strong>
            <span aria-hidden="true">${level}%</span>
          </div>
          <div class="progress" role="progressbar"
            aria-label="${safeName} proficiency"
            aria-valuemin="0" aria-valuemax="100" aria-valuenow="${level}">
            <span data-progress="${level}"></span>
          </div>
        </div>
      `;
    }).join("");

    return `
      <article class="skill-card">
        <div class="skill-head">
          <div class="skill-cat">${escapeHtml(group.category)}</div>
          <div class="skill-level">${escapeHtml(group.levelLabel || "")}</div>
        </div>
        <div class="skill-list">${items}</div>
      </article>
    `;
  }).join("");

  const spans = $$("[data-progress]", root);

  if (hasReducedMotion()) {
    spans.forEach((el) => (el.style.width = `${el.dataset.progress}%`));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.style.width = `${e.target.dataset.progress}%`;
        io.unobserve(e.target);
      });
    },
    { threshold: 0.3 }
  );

  spans.forEach((el) => io.observe(el));
}

/* ----------------------------
   Research
---------------------------- */

const RESEARCH_STATUSES = ["All", "Published", "Under review", "Preprint", "In progress"];
const normalizeStatus = (s) => (String(s || "").trim() || "In progress");

function renderResearchFilters(activeStatus) {
  const root = $("#researchFilters");
  if (!root) return;

  root.innerHTML = RESEARCH_STATUSES.map((s) => {
    const pressed = s === activeStatus ? "true" : "false";
    return `<button class="filter" type="button" aria-pressed="${pressed}" data-filter="${escapeHtml(s)}">${escapeHtml(s)}</button>`;
  }).join("");
}

function paperMatches(p, { status, query }) {
  const statusOk = status === "All" ? true : normalizeStatus(p.status) === status;
  const q = String(query || "").trim().toLowerCase();
  if (!q) return statusOk;

  const hay = [
    p.title, p.venue, normalizeStatus(p.status), String(p.year),
    ...(p.tags || []), ...(p.authors || [])
  ].join(" ").toLowerCase();

  return statusOk && hay.includes(q);
}

function makeCitationLine(p) {
  const authors = (p.authors || []).join(", ");
  return `${authors}. ${p.title}. ${p.venue}, ${p.year}.`;
}

function renderPaperCard(p) {
  const authors = (p.authors || []).map((a) => {
    const name = escapeHtml(a);
    if (a.trim().toLowerCase() === SITE.name.trim().toLowerCase()) return `<strong>${name}</strong>`;
    return name;
  }).join(", ");

  const tags = (p.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
  const links = p.links || {};
  const actions = [
    links.pdf ? { label: "PDF", href: links.pdf } : null,
    links.arxiv ? { label: "arXiv", href: links.arxiv } : null,
    links.code ? { label: "Code", href: links.code } : null,
    links.project ? { label: "Project", href: links.project } : null,
  ].filter(Boolean);

  const hasBib = Boolean(p.bibtex && String(p.bibtex).trim().length);

  return `
    <article class="paper reveal" data-paper="${escapeHtml(p.id)}">
      <div class="paper-top">
        <h3 class="paper-title">${escapeHtml(p.title)}</h3>
        <div class="paper-meta">
          <span class="badge ${p.featured ? "badge-accent" : ""}">${p.featured ? "Featured" : escapeHtml(normalizeStatus(p.status))}</span>
          <span class="badge">${escapeHtml(p.venue || "")}</span>
          <span class="badge">${escapeHtml(p.year || "")}</span>
        </div>
        <div class="muted small">${authors}</div>
      </div>

      <p class="muted" style="margin:0;">${escapeHtml(p.summary || "")}</p>

      <div class="tags" aria-label="Paper tags">${tags}</div>

      <div class="paper-actions" aria-label="Paper actions">
        ${actions.map((l) => `<a class="btn btn-sm" href="${escapeHtml(l.href)}" target="_blank" rel="noreferrer">${escapeHtml(l.label)}</a>`).join("")}
        <button class="btn btn-sm" type="button" data-cite="${escapeHtml(p.id)}">Copy citation</button>
        ${hasBib ? `<button class="btn btn-sm" type="button" data-bib-toggle="${escapeHtml(p.id)}">BibTeX</button>` : ""}
        ${hasBib ? `<button class="btn btn-sm" type="button" data-bib-copy="${escapeHtml(p.id)}">Copy BibTeX</button>` : ""}
      </div>

      <div class="bibtex" id="bib-${escapeHtml(p.id)}" aria-label="BibTeX">
        <pre>${escapeHtml(p.bibtex || "")}</pre>
      </div>

      <span class="sr-only" id="cite-${escapeHtml(p.id)}">${escapeHtml(makeCitationLine(p))}</span>
    </article>
  `;
}

function renderResearchList(activeStatus, query) {
  const root = $("#researchList");
  if (!root) return;

  const filtered = RESEARCH
    .filter((p) => paperMatches(p, { status: activeStatus, query }))
    .sort((a, b) => {
      if (Boolean(b.featured) !== Boolean(a.featured)) return b.featured ? 1 : -1;
      return (b.year || 0) - (a.year || 0);
    });

  root.innerHTML = filtered.length
    ? filtered.map(renderPaperCard).join("")
    : `<div class="paper"><p class="muted" style="margin:0;">No papers match your filter. Try a different status or search term.</p></div>`;
}

function setupResearch() {
  let activeStatus = "All";
  let query = "";

  renderResearchFilters(activeStatus);
  renderResearchList(activeStatus, query);

  $("#researchFilters")?.addEventListener("click", (e) => {
    const btn = e.target instanceof Element ? e.target.closest("[data-filter]") : null;
    if (!btn) return;
    activeStatus = btn.getAttribute("data-filter") || "All";
    renderResearchFilters(activeStatus);
    renderResearchList(activeStatus, query);
    setupReveal();
  });

  $("#researchSearch")?.addEventListener("input", (e) => {
    query = e.target.value || "";
    renderResearchList(activeStatus, query);
    setupReveal();
  });

  $("#researchList")?.addEventListener("click", async (e) => {
    const t = e.target instanceof Element ? e.target : null;
    if (!t) return;

    const citeBtn = t.closest("[data-cite]");
    if (citeBtn) {
      const id = citeBtn.getAttribute("data-cite");
      const node = document.getElementById(`cite-${id}`);
      const ok = await copyText(node?.textContent || "");
      citeBtn.textContent = ok ? "Copied" : "Copy failed";
      window.setTimeout(() => (citeBtn.textContent = "Copy citation"), 900);
      return;
    }

    const toggleBib = t.closest("[data-bib-toggle]");
    if (toggleBib) {
      const id = toggleBib.getAttribute("data-bib-toggle");
      const panel = document.getElementById(`bib-${id}`);
      if (!panel) return;
      panel.classList.toggle("is-open");
      toggleBib.textContent = panel.classList.contains("is-open") ? "Hide BibTeX" : "BibTeX";
      return;
    }

    const copyBib = t.closest("[data-bib-copy]");
    if (copyBib) {
      const id = copyBib.getAttribute("data-bib-copy");
      const paper = RESEARCH.find((p) => p.id === id);
      const ok = await copyText(paper?.bibtex || "");
      copyBib.textContent = ok ? "Copied" : "Copy failed";
      window.setTimeout(() => (copyBib.textContent = "Copy BibTeX"), 900);
    }
  });
}

/* ----------------------------
   Projects + Gallery (same behavior)
---------------------------- */

const PROJECT_CATEGORIES = ["All", "Database", "Machine Learning", "Neural Network", "NLP", "Computer Networks", "Computer Graphics"]; // demo

function renderProjectFilters(activeCategory) {
  const root = $("#projectFilters");
  if (!root) return;

  root.innerHTML = PROJECT_CATEGORIES.map((cat) => {
    const pressed = cat === activeCategory ? "true" : "false";
    return `<button class="filter" type="button" aria-pressed="${pressed}" data-filter="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`;
  }).join("");
}

function projectMatches(p, { category, query }) {
  const categoryOk = category === "All" ? true : (p.categories || []).includes(category);
  const q = String(query || "").trim().toLowerCase();
  if (!q) return categoryOk;

  const hay = [
    p.title, p.description, ...(p.categories || []),
    ...(p.stack || [])
  ].join(" ").toLowerCase();

  return categoryOk && hay.includes(q);
}

function renderProjectList(activeCategory, query) {
  const root = $("#projectsGrid");
  if (!root) return;

  const filtered = PROJECTS
    .filter((p) => projectMatches(p, { category: activeCategory, query }))
    .sort((a, b) => (Boolean(b.featured) === Boolean(a.featured) ? 0 : b.featured ? 1 : -1));

  root.innerHTML = filtered.length
    ? filtered.map((p) => {
      const shots = Array.isArray(p.images) ? p.images : [];
      const cover = shots[0]?.src ? `<img src="${escapeHtml(shots[0].src)}" alt="${escapeHtml(shots[0].alt || "")}" loading="lazy" />` : "";
      const badge = p.featured ? `<span class="project-badge">Featured</span>` : "";

      return `
          <article class="project reveal" data-project="${escapeHtml(p.id)}">
            <div class="project-media" aria-label="Project preview">
              ${cover}
              ${badge}
            </div>

            <div>
              <h3 class="project-title">${escapeHtml(p.title)}</h3>
              <p class="project-desc">${escapeHtml(p.description)}</p>
            </div>

            <div class="project-stack" aria-label="Tech stack">
              ${(p.stack || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
            </div>

            <div class="project-links" aria-label="Project links">
              ${p.links?.live ? `<a class="btn btn-sm btn-primary" href="${escapeHtml(p.links.live)}" target="_blank" rel="noreferrer">Live</a>` : ""}
              ${p.links?.code ? `<a class="btn btn-sm" href="${escapeHtml(p.links.code)}" target="_blank" rel="noreferrer">Code</a>` : ""}
              <button class="btn btn-sm" type="button" data-open-gallery="${escapeHtml(p.id)}">
                View screenshots (${shots.length || 0})
              </button>
            </div>
          </article>
        `;
    }).join("")
    : `<div class="project"><p class="muted" style="margin:0;">No projects match your filter. Try a different category or search term.</p></div>`;
}

function setupProjects() {
  let activeCategory = "All";
  let query = "";

  renderProjectFilters(activeCategory);
  renderProjectList(activeCategory, query);

  $("#projectFilters")?.addEventListener("click", (e) => {
    const btn = e.target instanceof Element ? e.target.closest("[data-filter]") : null;
    if (!btn) return;
    activeCategory = btn.getAttribute("data-filter") || "All";
    renderProjectFilters(activeCategory);
    renderProjectList(activeCategory, query);
    setupReveal();
  });

  $("#projectSearch")?.addEventListener("input", (e) => {
    query = e.target.value || "";
    renderProjectList(activeCategory, query);
    setupReveal();
  });
}

function setupGallery() {
  const modal = $("#galleryModal");
  if (!modal) return;

  const closeBtn = $("#galleryClose");
  const overlay = $(".modal-overlay", modal);

  const imgEl = $("#galleryImage");
  const capEl = $("#galleryCaption");
  const titleEl = $("#galleryTitle");

  const prevBtn = $("#galleryPrev");
  const nextBtn = $("#galleryNext");
  const thumbsRoot = $("#galleryThumbs");

  const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  let state = { projectId: null, index: 0, items: [], lastFocused: null };

  function setOpen(isOpen) {
    modal.setAttribute("aria-hidden", String(!isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) {
      state.lastFocused = document.activeElement;
      $(".modal-panel", modal)?.focus();
    } else {
      if (state.lastFocused && typeof state.lastFocused.focus === "function") state.lastFocused.focus();
    }
  }

  function render() {
    const current = state.items[state.index];
    if (!current) return;

    imgEl.src = current.src;
    imgEl.alt = current.alt || "";
    capEl.textContent = current.caption ? `${current.caption} (${state.index + 1}/${state.items.length})` : `(${state.index + 1}/${state.items.length})`;

    thumbsRoot.innerHTML = state.items.map((it, i) => {
      const isCurrent = i === state.index;
      return `
        <button class="thumb" type="button" data-thumb="${i}" aria-current="${isCurrent ? "true" : "false"}" aria-label="Open image ${i + 1}">
          <img src="${escapeHtml(it.src)}" alt="${escapeHtml(it.alt || "")}" loading="lazy" />
        </button>
      `;
    }).join("");
  }

  function setIndex(next) {
    const n = state.items.length;
    if (!n) return;
    state.index = (next + n) % n;
    render();
    $(`[data-thumb="${state.index}"]`, thumbsRoot)?.scrollIntoView({ behavior: hasReducedMotion() ? "auto" : "smooth", inline: "center", block: "nearest" });
  }

  function openForProject(projectId) {
    const proj = PROJECTS.find((p) => p.id === projectId);
    const items = Array.isArray(proj?.images) ? proj.images : [];
    if (!items.length) return;

    state.projectId = projectId;
    state.items = items;
    state.index = 0;

    titleEl.textContent = `${proj.title} — Screenshots`;
    render();
    setOpen(true);
  }

  document.addEventListener("click", (e) => {
    const btn = e.target instanceof Element ? e.target.closest("[data-open-gallery]") : null;
    if (!btn) return;
    openForProject(btn.getAttribute("data-open-gallery"));
  });

  function close() { setOpen(false); }
  closeBtn?.addEventListener("click", close);
  overlay?.addEventListener("click", close);

  prevBtn?.addEventListener("click", () => setIndex(state.index - 1));
  nextBtn?.addEventListener("click", () => setIndex(state.index + 1));

  thumbsRoot?.addEventListener("click", (e) => {
    const btn = e.target instanceof Element ? e.target.closest("[data-thumb]") : null;
    if (!btn) return;
    const i = Number(btn.getAttribute("data-thumb"));
    if (Number.isFinite(i)) setIndex(i);
  });

  document.addEventListener("keydown", (e) => {
    const open = modal.getAttribute("aria-hidden") === "false";
    if (!open) return;

    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key === "ArrowLeft") { e.preventDefault(); setIndex(state.index - 1); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); setIndex(state.index + 1); return; }

    if (e.key !== "Tab") return;

    const panel = $(".modal-panel", modal);
    if (!panel) return;

    const focusables = $$(focusableSelector, panel);
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  });
}

/* ----------------------------
   Contact form — Web3Forms submit (IMPORTANT CHANGE)
---------------------------- */

function setupContactForm() {
  const form = $("#form");
  if (!form) return;

  const nameEl = $("#name");
  const emailEl = $("#email");
  const msgEl = $("#message");

  const errName = $("#errName");
  const errEmail = $("#errEmail");
  const errMsg = $("#errMessage");

  const statusEl = $("#formStatus");
  const submitBtn = $("#submitBtn");

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(el, msg) { if (el) el.textContent = msg || ""; }

  function validate() {
    const name = (nameEl?.value || "").trim();
    const email = (emailEl?.value || "").trim();
    const message = (msgEl?.value || "").trim();

    let ok = true;

    if (name.length < 2) { setError(errName, "Please enter your name."); ok = false; }
    else setError(errName, "");

    if (!emailRe.test(email)) { setError(errEmail, "Please enter a valid email address."); ok = false; }
    else setError(errEmail, "");

    if (message.length < 10) { setError(errMsg, "Please write a message (at least 10 characters)."); ok = false; }
    else setError(errMsg, "");

    return ok;
  }

  async function submitWeb3Forms() {
    const formData = new FormData(form);

    // Web3Forms accepts multipart/form-data and JSON. We'll use FormData for simplicity.
    const endpoint = form.getAttribute("action");
    if (!endpoint) throw new Error("Missing form action URL.");

    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) {
      const msg = data.message || "Submission failed. Please try again.";
      throw new Error(msg);
    }

    return data;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "";

    if (!validate()) {
      statusEl.textContent = "Please fix the highlighted fields.";
      return;
    }

    const prev = submitBtn?.textContent;
    if (submitBtn) submitBtn.disabled = true;
    if (submitBtn) submitBtn.textContent = "Sending…";
    statusEl.textContent = "Sending your message…";

    try {
      await submitWeb3Forms();
      statusEl.innerHTML = '<i class="fa-solid fa-check"></i> Message sent successfully. I’ll get back to you soon.';
      form.reset();
      setError(errName, "");
      setError(errEmail, "");
      setError(errMsg, "");
    } catch (err) {
      statusEl.textContent = `❌ ${err?.message || "Something went wrong. Please try again."}`;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtn) submitBtn.textContent = prev || "Send message";
    }
  });
}

/* ----------------------------
   Init
---------------------------- */

function setYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  setupNav();
  setupScrollSpy();
  setupBackToTop();   // ✅ add this
  setupReveal();

  renderSkills();
  setupResearch();
  setupProjects();

  setupGallery();
  setupContactForm();

  setupReveal();
});


function setupScrollSpy() {
  const header = document.querySelector(".site-header");
  const navLinks = $$(".nav-link");
  const ids = ["home", "about", "skills", "certifications", "research", "projects", "contact"];

  const sections = ids
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length || !navLinks.length) return;

  const linkById = new Map(
    navLinks
      .map((a) => {
        const href = a.getAttribute("href") || "";
        const id = href.startsWith("#") ? href.slice(1) : "";
        return [id, a];
      })
      .filter(([id]) => id)
  );

  let sectionTops = [];
  let ticking = false;

  function computeTops() {
    // offsetTop is fast + stable for single-page layouts
    sectionTops = sections.map((s) => ({
      id: s.id,
      top: s.offsetTop,
      el: s,
    }));
    sectionTops.sort((a, b) => a.top - b.top);
  }

  function setActive(id) {
    navLinks.forEach((a) => a.classList.remove("active"));
    const link = linkById.get(id);
    if (link) link.classList.add("active");
  }

  function updateActive() {
    ticking = false;

    const headerH = header ? header.offsetHeight : 0;

    // This is the "reading line" slightly below the sticky header
    const y = window.scrollY + headerH + 16;

    // If near bottom, lock to last section (prevents weird jumps)
    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (nearBottom) {
      setActive(sectionTops[sectionTops.length - 1].id);
      return;
    }

    // Find the last section whose top is <= y
    let current = sectionTops[0]?.id || sections[0].id;
    for (let i = 0; i < sectionTops.length; i++) {
      if (sectionTops[i].top <= y) current = sectionTops[i].id;
      else break;
    }
    setActive(current);
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateActive);
  }

  computeTops();
  updateActive();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", () => {
    computeTops();
    updateActive();
  });

  // If images load later and shift layout, recalc once
  window.addEventListener("load", () => {
    computeTops();
    updateActive();
  });
}

function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  const topTarget = document.getElementById("top");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    // Prevent hash-jank and do consistent smooth scroll
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: hasReducedMotion() ? "auto" : "smooth",
    });

    // Accessibility: move focus to the top anchor after scroll
    window.setTimeout(() => {
      topTarget?.focus?.();
    }, hasReducedMotion() ? 0 : 350);
  });
}


