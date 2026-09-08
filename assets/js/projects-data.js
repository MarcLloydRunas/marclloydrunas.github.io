// Central project data — edit this file to add/update projects.
// status: "live" | "dev" | "case" | "off"
// link:  a real public URL for the live project (optional)
// media: a Drive/YouTube link to a screenshot/video compilation for
//        projects that aren't publicly hosted (optional)
const PROJECTS = [
  {
    id: "tx-distressed",
    name: "TX Distressed Home Buyers",
    status: "live",
    statusLabel: "Live",
    summary: "WordPress business site for a Texas real-estate investment company, with CRM and analytics integration.",
    detail: "Built and maintain a WordPress-based business website live at txdistressedhomebuyers.com. Integrated Flipping Pro CRM for lead capture and management, and Google Analytics for traffic and performance tracking. Configured hosting on Hostinger and manage plugins for site security and SEO optimization.",
    stack: ["WordPress", "Hostinger", "Flipping Pro CRM", "Google Analytics", "SEO plugins"],
    link: "https://txdistressedhomebuyers.com",
    linkLabel: "Visit site",
    media: null,
    mediaLabel: null
  },
  {
    id: "emb-systems",
    name: "EMB-CAR Internal Systems",
    status: "case",
    statusLabel: "Case study",
    summary: "Standalone and web-based systems built for the Environmental Management Bureau - CAR, including payroll automation.",
    detail: "As System Management and Development Programmer at Environmental Management Bureau - CAR (Jan 2023–Present), I develop standalone applications and web-based systems supporting agency operations, including an automated payroll generation system. I also administer databases across multiple departments, manage LAN network security and access control, provide technical support and troubleshooting agency-wide, and operate drones (UAVs) for aerial fieldwork data collection. Internal government systems — restricted access, so this is presented as a case study.",
    stack: ["PHP", "MySQL", "JavaScript", "Network Security", "DB Administration"],
    link: null,
    linkLabel: null,
    media: null,
    mediaLabel: "Compilation coming soon"
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
    linkLabel: null,
    media: null,
    mediaLabel: "Compilation coming soon"
  },
  {
    id: "landslide-km",
    name: "Landslide Knowledge Management System",
    status: "off",
    statusLabel: "Offline",
    summary: "An online repository and information dissemination platform for landslide-related materials.",
    detail: "As Programmer (Full-Stack) at the University of the Philippines - Baguio (Dec 2022–Nov 2023), developed an online repository and information dissemination platform for landslide-related materials in support of the Landslide Knowledge and Management Project, and provided technical support during fieldwork and meetings. The live site (landslidekm.dostcar.ph) is temporarily inaccessible.",
    stack: ["PHP", "MySQL"],
    link: null,
    linkLabel: null,
    media: null,
    mediaLabel: "Compilation coming soon"
  },
  {
    id: "tiktok-live",
    name: "TikTok LIVE Streamer Management Platform",
    status: "dev",
    statusLabel: "In development",
    summary: "A system for a talent-management client to recruit, onboard, and track the performance of TikTok LIVE streamers.",
    detail: "Currently in the architecture and design phase. Scope covers recruitment automation, an onboarding/bootcamp flow for new streamers, ongoing performance tracking, and a competitions/points system to drive engagement.",
    stack: ["Node.js", "React/Next.js", "MySQL"],
    link: null,
    linkLabel: null,
    media: null,
    mediaLabel: "Compilation coming soon"
  },
  {
    id: "animated-shorts",
    name: "AI-Generated Animated Shorts",
    status: "case",
    statusLabel: "Ongoing",
    summary: "Pixar-style 3D animated short films produced end-to-end with AI generation tools.",
    detail: "Independently produce short-form, Pixar-style 3D animated videos, managing each project from concept through final edit. Designed and manage an end-to-end AI-generation production pipeline: character/asset reference images, per-shot start frames, and final video clips generated with Veo 3.1 Fast. Produce narration and voice work with ElevenLabs, and handle final assembly and editing. Established a production standard requiring fully self-contained, explicit AI generation prompts for consistent, reliable output across scenes.",
    stack: ["Veo 3.1 Fast", "ElevenLabs", "Google Flow", "HiggsField", "KlingAI", "Suno AI", "CapCut / Premiere Pro"],
    link: null,
    linkLabel: null,
    media: "https://drive.google.com/drive/folders/1WzqNTaqGJisOVQrzDrSJN_Ky84SrwstO?usp=sharing",
    mediaLabel: "View samples"
  }
];
