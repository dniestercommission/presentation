(() => {
  const MEGA_DATA = {
    // Section intros
    section_basin: {
      title: "Dniester River Basin",
      desc: "Provides environmental, geographical, and socio-economic context of the Dniester River Basin to support understanding of the Commission’s mandate and activities.",
      imageUrl: "images/menu/1-0.png",
      href: "#",
      isSectionIntro: true
    },
    section_commission: {
      title: "The Dniester Commission",
      desc: "Provides an overview of the Dniester Commission.",
      imageUrl: "images/menu/2-0.svg",
      href: "#",
      isSectionIntro: true
    },
    section_news: {
      title: "News & Events",
      desc: "Provides time-based updates and structured information about meetings, activities, and public communications, including news and announcements.",
      imageUrl: "images/news3.jpg",
      href: "#",
      isSectionIntro: true
    },
    section_activities: {
      title: "Activities & Cooperation",
      desc: "Describes the functional areas of work of the Dniester Commission, cooperation mechanisms, participation opportunities, and ongoing institutional and project-related initiatives, excluding time-based event listings.",
      imageUrl: "images/g5.jpg",
      href: "#",
      isSectionIntro: true
    },
    section_resources: {
      title: "Resources & Publications",
      desc: "Provides centralized, structured access to official documents, publications, policy materials, and knowledge resources, with dedicated search and filtering capabilities.",
      imageUrl: "images/p4.png",
      href: "#",
      isSectionIntro: true
    },
    section_contacts: {
      title: "Contacts & Communication",
      desc: "Provides official contact channels, communication tools, and feedback mechanisms for external stakeholders and the general public.",
      imageUrl: "images/g1.jpg",
      href: "#",
      isSectionIntro: true
    },
    section_project: {
      title: "GEF-UNDP-OSCE Project Subpage",
      desc: "Provides structured access to project-related information, activities, results, reports, and stakeholder engagement opportunities.",
      imageUrl: "images/main_logo.svg",
      href: "#",
      isSectionIntro: true
    },

    // Subsections
    basin_overview: {
      title: "Basin Overview",
      desc: "General description of the Dniester River Basin, including its environmental, geographical, and socio-economic importance.",
      imageUrl: "images/menu/1-1.jpg",
      href: "#"
    },
    basin_challenges: {
      title: "Environmental Challenges",
      desc: "Highlights the major environmental and transboundary challenges affecting the basin, including flood risks, climate change impacts, water quality issues, biodiversity concerns, and coordination across borders.",
      imageUrl: "images/menu/1-2.png",
      href: "#"
    },

    commission_mission: {
      title: "Mission & Mandate",
      desc: "Explains the mandate, purpose, core objectives, and institutional evolution of the Dniester Commission.",
      imageUrl: "images/hero1.jpg",
      href: "#"
    },
    commission_legal: {
      title: "Legal Framework",
      desc: "Provides a structured explanation of the legal basis under which the Dniester Commission operates, with links to related legal documents in the resources section.",
      imageUrl: "images/hero2.jpg",
      href: "#"
    },
    commission_groups: {
      title: "Working Groups",
      desc: "Describes the structure and thematic focus of the Dniester Commission’s working groups.",
      imageUrl: "images/min2.png",
      href: "#"
    },
    commission_partners: {
      title: "Partners",
      desc: "Describes the institutional partners cooperating with the Dniester Commission in support of its mandate.",
      imageUrl: "images/ministerul_mediului_logo.jpg",
      href: "#"
    },

    news_news: {
      title: "News",
      desc: "News and announcements presented in chronological order as part of the Commission’s public communication stream.",
      imageUrl: "images/news3.jpg",
      href: "#"
    },
    news_events: {
      title: "Events",
      desc: "Provides information about upcoming events together with an archive of past events.",
      imageUrl: "images/news4.jpg",
      href: "#"
    },

    activities_areas: {
      title: "Key Areas of Work",
      desc: "Provides an overview of the Commission’s thematic priorities and core operational domains, including water allocation, flood risk management, climate adaptation, water quality, biodiversity, monitoring, and public awareness.",
      imageUrl: "images/g5.jpg",
      href: "#"
    },
    activities_involved: {
      title: "Get Involved",
      desc: "Provides structured entry points for participation in the work of the Commission, including cooperation mechanisms, consultation opportunities, attendance at public events, newsletter links, and general participation guidance.",
      imageUrl: "images/g4.jpg",
      href: "#"
    },
    activities_projects: {
      title: "Projects & Initiatives",
      desc: "Provides an overview of institutional initiatives supporting implementation of the Commission’s mandate, including brief descriptions, implementation partners, and links to dedicated project spaces.",
      imageUrl: "images/min1.jpg",
      href: "#"
    },
    activities_plenipotentiaries: {
      title: "Plenipotentiaries",
      desc: "Describes the institution of the Plenipotentiaries, including their mandate, appointment mechanism, and institutional role.",
      imageUrl: "images/g3.jpg",
      href: "#"
    },

    resources_reports: {
      title: "Reports & Publications",
      desc: "Provides structured access to analytical, technical, and institutional publications.",
      imageUrl: "images/p4.png",
      href: "#"
    },
    resources_legal: {
      title: "Legal & Policy Documents",
      desc: "Provides centralized access to legally binding and policy-level documents.",
      imageUrl: "images/p4.svg",
      href: "#"
    },
    resources_decisions: {
      title: "Decisions",
      desc: "Provides structured access to officially adopted decisions of the Commission.",
      imageUrl: "images/p3.png",
      href: "#"
    },
    resources_media: {
      title: "Media Library",
      desc: "Provides access to visual and communication materials.",
      imageUrl: "images/dniester1.png",
      href: "#"
    },

    contacts_info: {
      title: "Contact Information",
      desc: "Provides official communication details of the Commission Secretariat.",
      imageUrl: "images/g1.jpg",
      href: "#"
    },
    contacts_follow: {
      title: "Follow Us",
      desc: "Links to official social media channels and external communication platforms.",
      imageUrl: "images/g2.jpg",
      href: "#"
    },
    contacts_feedback: {
      title: "Feedback & Complaints",
      desc: "Provides structured channels for submitting inquiries, feedback, or formal complaints related to the work of the Dniester Commission.",
      imageUrl: "images/g3.jpg",
      href: "#"
    },
    contacts_newsletter: {
      title: "Newsletter Subscription",
      desc: "Allows users to subscribe to receive periodic updates related to the work of the Dniester Commission.",
      imageUrl: "images/g4.jpg",
      href: "#"
    },

    project_overview: {
      title: "Project Overview",
      desc: "Provides a description of the GEF-funded project and its overall purpose.",
      imageUrl: "images/main_logo.svg",
      href: "#"
    },
    project_components: {
      title: "Project Components",
      desc: "Provides a structured breakdown of project implementation areas, including Component 1, Component 2, and Component 3.",
      imageUrl: "images/slide1.png",
      href: "#"
    },
    project_activities: {
      title: "Activities",
      desc: "Presents project events, short summaries of major completed activities, and optional links to related deliverables.",
      imageUrl: "images/slide1.avif",
      href: "#"
    },
    project_news: {
      title: "Project News",
      desc: "Provides project-related news and public updates.",
      imageUrl: "images/news1.jpg",
      href: "#"
    },
    project_deliverables: {
      title: "Deliverables & Reports",
      desc: "Provides structured and transparent access to formal project outputs and reporting materials.",
      imageUrl: "images/p3.png",
      href: "#"
    },
    project_results: {
      title: "Results & Impact",
      desc: "Presents achievements, outcomes, and long-term impact of the project in an accessible format.",
      imageUrl: "images/g5.jpg",
      href: "#"
    },
    project_stakeholders: {
      title: "Stakeholder Platform",
      desc: "Explains how stakeholder groups such as students, community organisations, women’s groups, displaced persons, and the general public can access information, participate in consultations, and engage in public awareness activities through the project platform.",
      imageUrl: "images/hero2.jpg",
      href: "#"
    }
  };

  const SECTION_INTRO_MAP = {
    "Dniester River Basin": "section_basin",
    "Commission": "section_commission",
    "News": "section_news",
    "Activities": "section_activities",
    "Resources": "section_resources",
    "Contacts": "section_contacts",
    "GEF-UNDP-OSCE Project": "section_project"
  };

  const megaNavs = document.querySelectorAll(".mega-nav");

  function closeAll() {
    megaNavs.forEach((nav) => {
      nav.classList.remove("is-open");
      const toggle = nav.querySelector(".mega-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }

  function getSectionIntroKey(nav) {
    const toggle = nav.querySelector(".mega-toggle");
    if (!toggle) return null;
    const label = toggle.textContent.trim();
    return SECTION_INTRO_MAP[label] || null;
  }

  function render(panel, itemKey) {
    const d = MEGA_DATA[itemKey];
    if (!d) return;

    const titleEl = panel.querySelector("[data-mega-title]");
    const descEl = panel.querySelector("[data-mega-desc]");
    const imgEl = panel.querySelector("[data-mega-image]");
    const ctaEl = panel.querySelector(".mega-cta");

    if (titleEl) titleEl.textContent = d.title;
    if (descEl) descEl.textContent = d.desc;

    if (imgEl) {
      imgEl.className = "mega-image";
      imgEl.style.backgroundImage = d.imageUrl ? `url("${d.imageUrl}")` : "none";
    }

    if (ctaEl) {
      if (d.isSectionIntro) {
        ctaEl.style.display = "none";
        ctaEl.removeAttribute("href");
      } else {
        ctaEl.style.display = "";
        ctaEl.setAttribute("href", d.href || "#");
      }
    }
  }

  megaNavs.forEach((nav) => {
    const toggle = nav.querySelector(".mega-toggle");
    const panel = nav.querySelector(".mega-panel");
    const items = nav.querySelectorAll(".mega-item");
    const introKey = getSectionIntroKey(nav);

    if (toggle && panel && introKey) {
      render(panel, introKey);
    }

    if (toggle) {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = nav.classList.contains("is-open");
        closeAll();

        if (!isOpen) {
          nav.classList.add("is-open");
          toggle.setAttribute("aria-expanded", "true");

          items.forEach((x) => x.classList.remove("is-active"));
          if (introKey) render(panel, introKey);
        }
      });
    }

    items.forEach((btn) => {
      const key = btn.getAttribute("data-mega-item");

      const activate = () => {
        items.forEach((x) => x.classList.remove("is-active"));
        btn.classList.add("is-active");
        render(panel, key);
      };

      btn.addEventListener("mouseenter", activate);
      btn.addEventListener("focus", activate);
      btn.addEventListener("click", activate);
    });

    nav.addEventListener("mouseleave", () => {
      items.forEach((x) => x.classList.remove("is-active"));
      if (introKey) render(panel, introKey);
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".mega-nav")) closeAll();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
})();