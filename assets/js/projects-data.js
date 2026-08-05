// Central project data — edit this file to add/update projects.
// status: "live" | "dev" | "case" | "off"
const PROJECTS = [
  {
    id: "tx-distressed",
    name: "TX Distressed Home Buyers",
    status: "live",
    statusLabel: "Live",
    summary: "Client website for a Texas real-estate investment business, integrated with their existing CRM for lead capture and scheduling.",
    detail: "Built on WordPress (Astra theme) and hosted on Hostinger. Integrated the client's existing Flipping Pro CRM (GoHighLevel infrastructure) via native form and calendar embeds so leads flow directly into their pipeline. Implemented Rank Math for on-page SEO, custom CSS for full responsiveness, and front-end animations. Currently working through a post-launch SEO plan: Search Console setup, sitemap submission, and city-specific landing pages.",
    stack: ["WordPress", "Astra", "Hostinger", "Rank Math", "GoHighLevel CRM", "Custom CSS"],
    link: "https://txdistressedhomebuyers.com",
    linkLabel: "Visit site"
  },
  {
    id: "denr-systems",
    name: "DENR Government Systems",
    status: "case",
    statusLabel: "Case study",
    summary: "A set of internal monitoring and management systems built for the Department of Environment and Natural Resources.",
    detail: "Delivered as a government contractor across three connected systems: air and water quality monitoring, a recruitment/selection/placement system for personnel, and an ICT equipment monitoring & inspection tracker. Built for internal government use — access and source are restricted, so this is presented as a case study rather than a live link.",
    stack: ["PHP", "MySQL", "JavaScript"],
    link: null,
    linkLabel: null
  },
  {
    id: "alisto",
    name: "ALISTO",
    status: "case",
    statusLabel: "Case study",
    summary: "A CodeIgniter 4 application with a document/image preview system, hosted on a local network.",
    detail: "Diagnosed and fixed a broken file preview system for images and PDFs by migrating uploads from the non-web-accessible app/uploads/ directory to public/uploads/, aligning the app with CodeIgniter 4's expected web-accessible structure. Runs on a local network rather than the public internet.",
    stack: ["CodeIgniter 4", "PHP", "MySQL"],
    link: null,
    linkLabel: null
  },
  {
    id: "tiktok-live",
    name: "TikTok LIVE Streamer Management Platform",
    status: "dev",
    statusLabel: "In development",
    summary: "A system for a talent-management client to recruit, onboard, and track the performance of TikTok LIVE streamers.",
    detail: "Currently in the architecture and design phase. Scope covers recruitment automation, an onboarding/bootcamp flow for new streamers, ongoing performance tracking, and a competitions/points system to drive engagement. Still resolving how the system will integrate with TikTok Backstage's data export capabilities.",
    stack: ["Node.js", "React/Next.js", "MySQL"],
    link: null,
    linkLabel: null
  },
  {
    id: "landslide-km",
    name: "Landslide Knowledge Management System",
    status: "off",
    statusLabel: "Live",
    summary: "An online library and knowledge base for landslide-related research and materials.",
    detail: "Built for landslidekm.dostcar.ph as a searchable digital library of landslide-related reports, research, and historical records. The live site is temporarily inaccessible — screenshots and a walkthrough video are available on request in the meantime.",
    stack: ["PHP", "MySQL"],
    link: "https://landslidekm.dostcar.ph",
    linkLabel: null
  },
  {
    id: "ai-video",
    name: "AI-Assisted Video & Image Production (Generative AI)",
    status: "case",
    statusLabel: "Case study",
    summary: "AI-enhanced video editing and short-form animated production for client projects.",
    detail: "Produced client video content (including work for Sultana Legacy Law and Title) using AI background-removal tools and Google Flow/Veo for generative video. Also produced a full phased production guide for an original animated short, 'The Little Kite Who Couldn't Fly… Yet!', using Veo 3.1 Fast — including character references, start frames, and shot-by-shot prompts.",
    stack: ["Google Flow", "Veo 3.1", "CapCut", "AI image/video tools"],
    link: null,
    linkLabel: null
  }
];
