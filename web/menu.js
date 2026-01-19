
(() => {
  const MEGA_DATA = {
  /* =========================
     NEWS & EVENTS
  ========================== */
  news_overview: {
    title: "News & Events",
    desc: "Latest updates, announcements, and upcoming events related to the Dniester Commission.",
    imageUrl: "images/news1.jpg",
    links: [
      { t: "News archive", href: "news-listing.html" },
      // { t: "Search", href: "search.html" },
      { t: "Contacts", href: "contacts.html" }
    ],
    recent: [
      { t: "Featured story (example)", href: "news.html" },
      { t: "Latest news (example)", href: "news.html" },
      { t: "Browse all news", href: "news-listing.html" }
    ]
  },

  news_news: {
    title: "News",
    desc: "Commission updates, official information, and public-facing announcements.",
    imageUrl: "images/news2.jpg",
    links: [
      { t: "Open news archive", href: "news-listing.html" },
      { t: "Example news page", href: "news.html" },
      { t: "Search news", href: "search.html" }
    ],
    recent: [
      { t: "Headline update (example)", href: "news.html" },
      { t: "Monitoring note (example)", href: "news.html" },
      { t: "Press release (example)", href: "news.html" }
    ]
  },

  news_calendar: {
    title: "Events Calendar",
    desc: "Planned meetings, public engagements, and scheduled activities (prototype).",
    imageUrl: "images/news3.jpg",
    links: [
      { t: "Calendar (placeholder)", href: "#" },
      { t: "Past events & materials", href: "#" },
      { t: "Contact Secretariat", href: "contacts.html" }
    ],
    recent: [
      { t: "Upcoming meeting (example)", href: "#" },
      { t: "Workshop (example)", href: "#" },
      { t: "Public event (example)", href: "#" }
    ]
  },

  news_past: {
    title: "Past Events & Materials",
    desc: "Archived agendas, minutes, presentations and supporting materials (prototype).",
    imageUrl: "images/news4.jpg",
    links: [
      { t: "Browse by date (placeholder)", href: "#" },
      { t: "Browse by topic (placeholder)", href: "#" },
      { t: "Search", href: "search.html" }
    ],
    recent: [
      { t: "Meeting materials (example)", href: "#" },
      { t: "Presentation (example)", href: "#" },
      { t: "Archive index (example)", href: "#" }
    ]
  },

  /* =========================
     ACTIVITIES & COOPERATION
  ========================== */
  act_overview: {
    title: "Activities & Cooperation",
    desc: "Key cooperation mechanisms, working formats, and capacity-building activities (prototype).",
    imageUrl: "images/hero1.jpg",
    links: [
      { t: "Key Areas of Work", href: "#" },
      { t: "Projects & Initiatives", href: "#" },
      { t: "Working Groups & Meetings", href: "#" }
    ],
    recent: [
      { t: "Recent cooperation update (example)", href: "news.html" },
      { t: "Meeting summary (example)", href: "news.html" },
      { t: "Browse news", href: "news-listing.html" }
    ]
  },

  act_key_areas: {
    title: "Key Areas of Work",
    desc: "Priority areas and ongoing lines of effort (prototype).",
    imageUrl: "images/hero2.jpg",
    links: [
      { t: "Monitoring coordination (placeholder)", href: "#" },
      { t: "Policy dialogue (placeholder)", href: "#" },
      { t: "Public engagement (placeholder)", href: "#" }
    ],
    recent: [
      { t: "Workshop recap (example)", href: "news.html" },
      { t: "Joint statement (example)", href: "news.html" },
      { t: "Search", href: "search.html" }
    ]
  },

  act_projects: {
    title: "Projects & Initiatives",
    desc: "Project portfolio and thematic initiatives (prototype).",
    imageUrl: "images/min1.jpg",
    links: [
      { t: "Project highlights (placeholder)", href: "#" },
      { t: "Ongoing initiatives (placeholder)", href: "#" },
      { t: "Archive (placeholder)", href: "#" }
    ],
    recent: [
      { t: "Project milestone (example)", href: "news.html" },
      { t: "Partner support (example)", href: "news.html" },
      { t: "News archive", href: "news-listing.html" }
    ]
  },

  act_working_groups: {
    title: "Working Groups & Meetings",
    desc: "Working groups, meeting formats, and documented outputs (prototype).",
    imageUrl: "images/min2.png",
    links: [
      { t: "Working groups (placeholder)", href: "#" },
      { t: "Meeting materials (placeholder)", href: "#" },
      { t: "Contact", href: "contacts.html" }
    ],
    recent: [
      { t: "Agenda (example)", href: "#" },
      { t: "Minutes (example)", href: "#" },
      { t: "Related news", href: "news-listing.html" }
    ]
  },

  act_capacity: {
    title: "Capacity Building",
    desc: "Training, workshops, and knowledge-sharing activities (prototype).",
    imageUrl: "images/g5.jpg",
    links: [
      { t: "Training materials (placeholder)", href: "#" },
      { t: "Upcoming workshops (placeholder)", href: "#" },
      { t: "Public awareness materials", href: "#" }
    ],
    recent: [
      { t: "Training report (example)", href: "news.html" },
      { t: "Workshop recap (example)", href: "news.html" },
      { t: "Archive", href: "news-listing.html" }
    ]
  },

  /* =========================
     DATA
  ========================== */
  data_overview: {
    title: "Data",
    desc: "Maps, monitoring highlights and key indicators prepared for quick review (prototype).",
    imageUrl: "images/g1.jpg",
    links: [
      { t: "Gallery map view", href: "gallery.html" },
      { t: "Search", href: "search.html" },
      { t: "Latest news", href: "news-listing.html" }
    ],
    recent: [
      { t: "Featured gallery (example)", href: "gallery-detail.html" },
      { t: "Browse galleries", href: "gallery.html" },
      { t: "Example data update", href: "news.html" }
    ]
  },

  data_maps: {
    title: "Maps & Layers",
    desc: "Interactive map layers and contextual geography used across the website (prototype).",
    imageUrl: "images/g2.jpg",
    links: [
      { t: "Gallery (with map)", href: "gallery.html" },
      { t: "Gallery detail", href: "gallery-detail.html" },
      { t: "Search", href: "search.html" }
    ],
    recent: [
      { t: "Location set (example)", href: "gallery-detail.html" },
      { t: "Recent photo sets", href: "gallery.html" },
      { t: "News references", href: "news-listing.html" }
    ]
  },

  data_highlights: {
    title: "Monitoring Highlights",
    desc: "Selected highlights prepared for quick review (prototype).",
    imageUrl: "images/g3.jpg",
    links: [
      { t: "Latest news", href: "news-listing.html" },
      { t: "Example news item", href: "news.html" },
      { t: "Search", href: "search.html" }
    ],
    recent: [
      { t: "Highlight: water quality (example)", href: "news.html" },
      { t: "Highlight: hydrology (example)", href: "news.html" },
      { t: "Highlight: ecosystems (example)", href: "news.html" }
    ]
  },

  data_indicators: {
    title: "Environmental Indicators",
    desc: "High-level indicators prepared for reporting and communication (prototype).",
    imageUrl: "images/g4.jpg",
    links: [
      { t: "Indicator catalogue (placeholder)", href: "#" },
      { t: "Methodology (placeholder)", href: "#" },
      { t: "Search", href: "search.html" }
    ],
    recent: [
      { t: "Indicator update (example)", href: "news.html" },
      { t: "Related report (example)", href: "#" },
      { t: "Archive", href: "news-listing.html" }
    ]
  },

  data_method: {
    title: "Method Notes (Data)",
    desc: "Notes and clarifications supporting interpretation of data (prototype).",
    imageUrl: "images/slide1.png",
    links: [
      { t: "Search documents", href: "search.html" },
      { t: "Reports & publications", href: "#" },
      { t: "Contact", href: "contacts.html" }
    ],
    recent: [
      { t: "Method note (example)", href: "#" },
      { t: "QA note (example)", href: "#" },
      { t: "Related news", href: "news-listing.html" }
    ]
  },

  /* =========================
     RESOURCES
  ========================== */
  res_overview: {
    title: "Resources",
    desc: "Reports, legal references, document archives, and media materials (prototype).",
    imageUrl: "images/p3.png",
    links: [
      { t: "Reports & Publications", href: "#" },
      { t: "Legal & Policy Documents", href: "#" },
      { t: "Media Library", href: "gallery.html" }
    ],
    featured: [
      { t: "Search", href: "search.html" },
      { t: "News", href: "news-listing.html" },
      { t: "Contacts", href: "contacts.html" }
    ]
  },

  res_reports: {
    title: "Reports & Publications",
    desc: "Reports, publications and official outputs (prototype).",
    imageUrl: "images/p4.png",
    links: [
      { t: "Search publications", href: "search.html" },
      { t: "Latest news", href: "news-listing.html" },
      { t: "Example news page", href: "news.html" }
    ],
    featured: [
      { t: "Featured report (example)", href: "#" },
      { t: "Annual report (example)", href: "#" },
      { t: "Archive (example)", href: "#" }
    ]
  },

  res_legal: {
    title: "Legal & Policy Documents",
    desc: "Agreements, mandates and legal references (prototype).",
    imageUrl: "images/p4.svg",
    links: [
      { t: "Browse legal docs (placeholder)", href: "#" },
      { t: "Search", href: "search.html" },
      { t: "About: Mission & Mandate", href: "#" }
    ],
    featured: [
      { t: "Mandate (example)", href: "#" },
      { t: "Agreement (example)", href: "#" },
      { t: "Reference note (example)", href: "#" }
    ]
  },

  res_library: {
    title: "Document Library",
    desc: "Structured archive of documents and materials (prototype).",
    imageUrl: "images/slide1.avif",
    links: [
      { t: "Search", href: "search.html" },
      { t: "News references", href: "news-listing.html" },
      { t: "Contact", href: "contacts.html" }
    ],
    featured: [
      { t: "Latest documents (example)", href: "#" },
      { t: "Meeting materials (example)", href: "#" },
      { t: "Archive (example)", href: "#" }
    ]
  },

  res_media: {
    title: "Media Library",
    desc: "Photos, media materials and curated assets (prototype).",
    imageUrl: "images/dniester1.png",
    links: [
      { t: "Gallery", href: "gallery.html" },
      { t: "Gallery detail", href: "gallery-detail.html" },
      { t: "Search", href: "search.html" }
    ],
    featured: [
      { t: "Featured gallery (example)", href: "gallery-detail.html" },
      { t: "Recent photos", href: "gallery.html" },
      { t: "Archive", href: "gallery.html" }
    ]
  },

  res_awareness: {
    title: "Public Awareness Materials",
    desc: "Public-facing materials supporting outreach and awareness (prototype).",
    imageUrl: "images/g5.jpg",
    links: [
      { t: "Downloads (placeholder)", href: "#" },
      { t: "News", href: "news-listing.html" },
      { t: "Get involved (placeholder)", href: "#" }
    ],
    featured: [
      { t: "Featured brochure (example)", href: "#" },
      { t: "Poster set (example)", href: "#" },
      { t: "Archive (example)", href: "#" }
    ]
  },

  /* =========================
     ABOUT
  ========================== */
  about_overview: {
    title: "About",
    desc: "Mission, governance, partners and institutional information (prototype).",
    imageUrl: "images/OSCE_LT_ENG_RGB.png",
    links: [
      { t: "Mission & Mandate", href: "#" },
      { t: "Governance & Structure", href: "#" },
      { t: "Partners & Donors", href: "#" }
    ],
    featured: [
      { t: "Secretariat & Team", href: "#" },
      { t: "Contact", href: "contacts.html" },
      { t: "News", href: "news-listing.html" }
    ]
  },

  about_mandate: {
    title: "Mission & Mandate",
    desc: "Mandate, scope, and priorities (prototype).",
    imageUrl: "images/main_logo.svg",
    links: [
      { t: "Mandate page (placeholder)", href: "#" },
      { t: "Legal references", href: "#" },
      { t: "Contact", href: "contacts.html" }
    ],
    featured: [
      { t: "Key document (example)", href: "#" },
      { t: "Related news", href: "news-listing.html" },
      { t: "Search", href: "search.html" }
    ]
  },

  about_basin: {
    title: "The Dniester River Basin",
    desc: "Geography and basin context (prototype).",
    imageUrl: "images/dniester1.png",
    links: [
      { t: "Gallery map", href: "gallery.html" },
      { t: "Maps & Layers", href: "#" },
      { t: "Search", href: "search.html" }
    ],
    featured: [
      { t: "Featured locations", href: "gallery-detail.html" },
      { t: "Photo highlights", href: "gallery.html" },
      { t: "Related news", href: "news-listing.html" }
    ]
  },

  about_governance: {
    title: "Governance & Structure",
    desc: "Governance model, structure and decision-making (prototype).",
    imageUrl: "images/p3.png",
    links: [
      { t: "Structure (placeholder)", href: "#" },
      { t: "Working groups (placeholder)", href: "#" },
      { t: "Documents", href: "#" }
    ],
    featured: [
      { t: "Recent meeting (example)", href: "news.html" },
      { t: "Minutes (example)", href: "#" },
      { t: "Contact", href: "contacts.html" }
    ]
  },

  about_partners: {
    title: "Partners & Donors",
    desc: "Partner organisations and donors supporting the Commission (prototype).",
    imageUrl: "images/ministerul_mediului_logo.jpg",
    links: [
      { t: "Partner list (placeholder)", href: "#" },
      { t: "Cooperation activities", href: "#" },
      { t: "News", href: "news-listing.html" }
    ],
    featured: [
      { t: "Recent cooperation story", href: "news.html" },
      { t: "Project update", href: "news.html" },
      { t: "Archive", href: "news-listing.html" }
    ]
  },

  about_team: {
    title: "Secretariat & Team",
    desc: "Secretariat information and how to reach the team (prototype).",
    imageUrl: "images/mindovkillya-logo.png",
    links: [
      { t: "Contacts", href: "contacts.html" },
      { t: "Contact form", href: "contacts.html" },
      { t: "Follow us (placeholder)", href: "#" }
    ],
    featured: [
      { t: "General enquiries", href: "contacts.html" },
      { t: "Media contact", href: "contacts.html" },
      { t: "Get involved", href: "#" }
    ]
  },

  /* =========================
     CONTACT & ENGAGEMENT
  ========================== */
  con_overview: {
    title: "Contact & Engagement",
    desc: "Contact details, ways to reach us and engagement options (prototype).",
    imageUrl: "images/g4.jpg",
    links: [
      { t: "Contacts", href: "contacts.html" },
      { t: "Search", href: "search.html" },
      { t: "News", href: "news-listing.html" }
    ],
    featured: [
      { t: "Contact form", href: "contacts.html" },
      { t: "Follow us (placeholder)", href: "#" },
      { t: "Get involved (placeholder)", href: "#" }
    ]
  },

  con_info: {
    title: "Contact Information",
    desc: "Addresses, email and phone details (prototype).",
    imageUrl: "images/g3.jpg",
    links: [
      { t: "Open contacts page", href: "contacts.html" },
      { t: "Send a message", href: "contacts.html" },
      { t: "Search", href: "search.html" }
    ],
    featured: [
      { t: "Secretariat", href: "contacts.html" },
      { t: "Media contact", href: "contacts.html" },
      { t: "Technical enquiries", href: "contacts.html" }
    ]
  },

  con_form: {
    title: "Contact Form",
    desc: "Submit an enquiry via the website form (prototype).",
    imageUrl: "images/g2.jpg",
    links: [
      { t: "Open contact form", href: "contacts.html" },
      { t: "General contacts", href: "contacts.html" },
      { t: "News", href: "news-listing.html" }
    ],
    featured: [
      { t: "Request information", href: "contacts.html" },
      { t: "Report an issue", href: "contacts.html" },
      { t: "Get involved (placeholder)", href: "#" }
    ]
  },

  con_follow: {
    title: "Follow Us",
    desc: "Social channels and updates (prototype).",
    imageUrl: "images/g1.jpg",
    links: [
      { t: "News", href: "news-listing.html" },
      { t: "Gallery", href: "gallery.html" },
      { t: "Contact", href: "contacts.html" }
    ],
    featured: [
      { t: "Facebook (placeholder)", href: "#" },
      { t: "Instagram (placeholder)", href: "#" },
      { t: "Threads (placeholder)", href: "#" }
    ]
  },

  con_involved: {
    title: "Get Involved",
    desc: "Participation and engagement options (prototype).",
    imageUrl: "images/hero2.jpg",
    links: [
      { t: "Engagement options (placeholder)", href: "#" },
      { t: "Public awareness materials", href: "#" },
      { t: "Contact", href: "contacts.html" }
    ],
    featured: [
      { t: "Upcoming events (placeholder)", href: "#" },
      { t: "Recent announcements", href: "news-listing.html" },
      { t: "Search", href: "search.html" }
    ]
  }
};


  const megaNavs = document.querySelectorAll(".mega-nav");

  function closeAll() {
    megaNavs.forEach(n => {
      n.classList.remove("is-open");
      const toggle = n.querySelector(".mega-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }

  function render(panel, itemKey) {
    const d = MEGA_DATA[itemKey];
    if (!d) return;

    const titleEl = panel.querySelector("[data-mega-title]");
    const descEl  = panel.querySelector("[data-mega-desc]");
    const linksEl = panel.querySelector("[data-mega-links]");
    const recentEl= panel.querySelector("[data-mega-recent]");
    const imgEl   = panel.querySelector("[data-mega-image]");

    titleEl.textContent = d.title;
    descEl.textContent = d.desc;

    linksEl.innerHTML = d.links.map(x => `<a href="${x.href}">${x.t}</a>`).join("");

    const list = d.recent || d.featured || [];
    recentEl.innerHTML = list.map(x => `<a href="${x.href}">${x.t}</a>`).join("");

    imgEl.className = "mega-image";
    imgEl.style.backgroundImage = d.imageUrl ? `url("${d.imageUrl}")` : "none";

  }

  megaNavs.forEach(nav => {
    const toggle = nav.querySelector(".mega-toggle");
    const panel  = nav.querySelector(".mega-panel");
    const items  = nav.querySelectorAll(".mega-item");

    const defaultItem = nav.querySelector(".mega-item.is-active");
    if (defaultItem) render(panel, defaultItem.getAttribute("data-mega-item"));

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = nav.classList.contains("is-open");
      closeAll();
      if (!isOpen) {
        nav.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    items.forEach(btn => {
      const key = btn.getAttribute("data-mega-item");
      const activate = () => {
        items.forEach(x => x.classList.remove("is-active"));
        btn.classList.add("is-active");
        render(panel, key);
      };
      btn.addEventListener("mouseenter", activate);
      btn.addEventListener("focus", activate);
      btn.addEventListener("click", activate);
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".mega-nav")) closeAll();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
})();

