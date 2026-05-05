export const PROFILE = {
  handle: "victoryil",
  name: "Victor Daniel Gil Becerra",
  role: "Team Leader · Big Data & Backend",
  company: "Banco Santander",
  location: "Madrid, ES",
  email: "me@victoryil.com",
  github: "https://github.com/victoryil",
  linkedin: "https://www.linkedin.com/in/victor-daniel-gil-becerra-010140199",
  tagline: "Lidero un equipo construyendo frameworks de datos que procesan millones de eventos al día.",
  blurb: [
    "Trabajo en la intersección entre Big Data y arquitecturas backend distribuidas.",
    "Diseño frameworks y librerías que estandarizan ETL, simplifican el día a día del equipo y reducen el time-to-production de cada nuevo pipeline.",
    "Cuando no estoy con Spark, escribo microservicios reactivos en Spring Boot, despliego en Kubernetes, o hago modding en C# para Rust.",
  ],
};

export const STATS = [
  { k: "years_xp",       v: "7+",     label: "años en backend & data" },
  { k: "team_size",      v: "8",      label: "personas en mi equipo" },
  { k: "prod_pipelines", v: "40+",    label: "pipelines en producción" },
  { k: "uptime",         v: "99.95%", label: "uptime de servicios" },
];

export const EXPERIENCE = [
  {
    company: "Banco Santander",
    role: "Team Leader — Big Data & Backend",
    period: "2023 — Present",
    location: "Madrid",
    bullets: [
      "Lidero un equipo de 8 ingenieros entre Data y Backend.",
      "Diseño frameworks internos sobre Spark/Hudi para estandarizar ETL en Cloudera y Databricks.",
      "Arquitectura de microservicios reactivos con Spring WebFlux + Kafka sobre Kubernetes / OpenShift.",
    ],
    stack: ["Spark", "Hudi", "Spring WebFlux", "Kafka", "Kubernetes", "OpenShift"],
  },
  {
    company: "Banco Santander",
    role: "Senior Data Engineer",
    period: "2021 — 2023",
    location: "Madrid",
    bullets: [
      "Migración de pipelines on-prem (Cloudera) a Databricks con Delta/Hudi.",
      "Librerías Scala/Java que abstraen origen, calidad y sink — adoptadas por 5 squads.",
      "Mentoring técnico y onboarding de juniors.",
    ],
    stack: ["Scala", "Spark", "Databricks", "Delta Lake", "Airflow"],
  },
  {
    company: "Previous roles",
    role: "Backend / Full-stack Engineer",
    period: "2018 — 2021",
    location: "España",
    bullets: [
      "Microservicios Spring Boot, integraciones REST y mensajería con Kafka/RabbitMQ.",
      "Frontends en React/TypeScript para dashboards internos.",
      "Infraestructura en AWS, Docker y primeros pasos con Kubernetes.",
    ],
    stack: ["Spring Boot", "React", "TypeScript", "AWS", "Docker"],
  },
];

export const PROJECTS = [
  {
    name: "GPE — Team Productivity Platform",
    status: "private" as const,
    year: "2024",
    desc: "Plataforma interna para análisis de productividad de equipos. Backend reactivo en microservicios con auth federada y un API Gateway propio.",
    stack: ["Spring Boot", "WebFlux", "OpenSearch", "PostgreSQL", "Keycloak", "Kubernetes"],
    link: null,
    icon: "gpe" as const,
  },
  {
    name: "Race Manager for Rust",
    status: "open-source" as const,
    year: "2023",
    desc: "Plugin de Oxide para el videojuego Rust que gestiona carreras de coches: rankings, stats, persistencia, comandos in-game.",
    stack: ["C#", "Oxide", "Rust (game)", "JSON"],
    link: "https://github.com/victoryil",
    icon: "rust" as const,
  },
  {
    name: "React Calendar Library",
    status: "wip" as const,
    year: "2025",
    desc: "Librería de calendario inspirada en FullCalendar pero centrada en time-tracking de empleados. Tipada, headless-first.",
    stack: ["React", "TypeScript", "Tailwind", "Vite", "date-fns"],
    link: "https://github.com/victoryil",
    icon: "calendar" as const,
  },
  {
    name: "ETL Framework (internal)",
    status: "internal" as const,
    year: "2023 — present",
    desc: "Framework Scala/Spark que estandariza ingestion, calidad, transformación y sink. Usado por múltiples squads.",
    stack: ["Scala", "Spark", "Hudi", "Databricks"],
    link: null,
    icon: "etl" as const,
  },
];

// ── Stack ────────────────────────────────────────────────────────────────────
// Edit the lists freely — each key becomes a card, each value a chip.
export const STACK: Record<string, string[]> = {
  Backend:    ["Java", "Spring Boot", "WebFlux", "Kafka", "PostgreSQL", "OpenSearch"],
  "Big Data": ["Spark", "Databricks", "Cloudera", "Hudi", "Delta Lake", "Airflow"],
  Frontend:   ["React", "TypeScript", "Vite", "TailwindCSS", "Flutter"],
  Infra:      ["Kubernetes", "OpenShift", "AWS", "Docker", "MicroK8s"],
  Other:      ["Keycloak", "Oxide / C#", "Firebase", "NextUI"],
};

export const HOBBIES = [
  {
    title: "Rust modding",
    tag: "C# · Oxide",
    desc: "Escribo plugins en C# para el juego Rust. Entender un engine ajeno y hackearlo es buen ejercicio de ingeniería inversa.",
  },
  {
    title: "Sim racing",
    tag: "iRacing · ACC",
    desc: "De ahí salió el Race Manager. Pista favorita: Spa-Francorchamps bajo la lluvia.",
  },
  {
    title: "Open source side-projects",
    tag: "GitHub",
    desc: "Librerías pequeñas que nacen de fricciones reales en el trabajo. Si me molesta dos veces, lo escribo.",
  },
];

export const NAV = [
  { id: "home",       n: "00", label: "home" },
  { id: "about",      n: "01", label: "about" },
  { id: "experience", n: "02", label: "experience" },
  { id: "projects",   n: "03", label: "projects" },
  { id: "stack",      n: "04", label: "stack" },
  { id: "hobbies",    n: "05", label: "off-hours" },
];
