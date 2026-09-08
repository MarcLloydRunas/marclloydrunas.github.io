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
    detail: "A WordPress-based business site for a real-estate investment company, built and maintained end to end — from initial setup through ongoing security and SEO upkeep. Flipping Pro CRM handles lead capture so inquiries flow straight into the client's pipeline instead of sitting in an inbox, while Google Analytics tracks where traffic is actually coming from. Hosting runs on Hostinger, with security plugins and SEO configuration managed on an ongoing basis rather than a one-time setup.",
    stack: ["WordPress", "Hostinger", "Flipping Pro CRM", "Google Analytics", "SEO plugins"],
    link: "https://txdistressedhomebuyers.com",
    linkLabel: "Visit site",
    media: null,
    mediaLabel: null
  },
  {
    id: "animated-shorts",
    name: "AI-Generated Animated Shorts",
    status: "case",
    statusLabel: "Ongoing",
    summary: "Pixar-style 3D animated short films produced end-to-end with AI generation tools.",
    detail: "A self-directed animation studio of one — short-form, Pixar-style 3D films taken from concept to finished video without an external production team. The pipeline runs character and asset reference generation first, then per-shot start frames, then final clips rendered with Veo 3.1 Fast, with ElevenLabs handling narration and voice work and CapCut/Premiere Pro doing final assembly. The part that actually makes this repeatable is a strict prompting standard: every AI generation prompt has to be fully self-contained and explicit, so scenes stay visually consistent across dozens of separate generations instead of drifting.",
    stack: ["Veo 3.1 Fast", "ElevenLabs", "Google Flow", "HiggsField", "KlingAI", "Suno AI", "CapCut / Premiere Pro"],
    link: null,
    linkLabel: null,
    media: "https://drive.google.com/drive/folders/1WzqNTaqGJisOVQrzDrSJN_Ky84SrwstO?usp=sharing",
    mediaLabel: "View samples"
  },
  {
    id: "rsps",
    name: "RSPS — Recruitment, Selection & Placement System",
    status: "case",
    statusLabel: "Case study",
    summary: "A web-based system that automates HR recruitment processes for EMB-CAR, from application to final scoring.",
    detail: "Government HR recruitment used to run on manual scoring and paper forms — this system replaces that end to end. Applicants register online, and the system auto-generates baseline ratings straight from their submitted information. During interviews, panelists score candidates live through the platform instead of on paper, and overall scores calculate automatically the moment scoring closes, removing manual tallying and the errors that come with it. Once deliberation wraps up, the required post-deliberation forms generate automatically. Net effect: faster turnaround, fewer scoring disputes, and a paper trail that holds up to scrutiny.",
    stack: ["PHP", "MySQL", "JavaScript"],
    link: null,
    linkLabel: null,
    media: "https://drive.google.com/drive/folders/1W9IncSHt0bjTIIzGUp-8tC0x8nFYSvh4?usp=sharing",
    mediaLabel: "View samples"
  },
  {
    id: "ambient-system",
    name: "Ambient System — Air & Water Quality Monitoring",
    status: "case",
    statusLabel: "Case study",
    summary: "An online repository for EMB-CAR's regional air and water quality monitoring data.",
    detail: "Air and water quality data comes in from monitoring stations and field technicians across the whole region — this system is where it all lands, gets interpreted, and gets made useful. Raw sensor and lab readings are converted into formats that make sense to two very different audiences at once: technical staff who need the underlying data, and the general public who just want to know if conditions in their area are safe. It doubles as a standing public information channel, keeping regional air and water quality conditions visible and current rather than buried in periodic reports.",
    stack: ["PHP", "MySQL", "Data visualization/reporting"],
    link: null,
    linkLabel: null,
    media: "https://drive.google.com/drive/folders/1z2WWzFJj5CYusBuKfTY4EIiN9ne9RFad?usp=sharing",
    mediaLabel: "View samples"
  },
  {
    id: "kiosk-display",
    name: "Web-Based Front Desk Kiosk",
    status: "case",
    statusLabel: "Case study",
    summary: "An interactive touchscreen kiosk that replaced EMB-CAR's old PowerPoint-based front desk display.",
    detail: "The front desk display used to be a PowerPoint deck someone had to manually edit and re-upload every time something changed — the org chart, the citizen's charter, anything. This project rebuilt it as a proper interactive web application running on a front desk touchscreen kiosk. Visitors navigate content directly instead of watching a slideshow loop, and updates happen in real time from the backend, so what's on screen stays accurate without anyone re-exporting slides. Small project, but it cut a recurring manual task down to near zero.",
    stack: ["JavaScript", "HTML/CSS", "Touchscreen UI"],
    link: null,
    linkLabel: null,
    media: "https://drive.google.com/drive/folders/1LWwct_s7chOsZz9pqeKkq-BCR5nLZz9o?usp=sharing",
    mediaLabel: "View samples"
  },
  {
    id: "alisto",
    name: "ALISTO",
    status: "case",
    statusLabel: "Case study",
    summary: "A CodeIgniter 4 application with a document/image preview system, hosted on a local network.",
    detail: "Inherited a broken file preview feature — images and PDFs simply wouldn't render in-browser. Root cause was a structural one: uploads were sitting in CodeIgniter 4's app/uploads/ directory, which isn't web-accessible by design. Fixed it by migrating the upload path to public/uploads/, aligning the app with how CodeIgniter 4 expects file storage to work, rather than patching around the symptom. Runs on a local network rather than the public internet.",
    stack: ["CodeIgniter 4", "PHP", "MySQL"],
    link: null,
    linkLabel: null,
    media: "https://drive.google.com/drive/folders/1W2z3CARLDsKmYfxryMN9dm-6E0HS_6VH?usp=sharing",
    mediaLabel: "View samples"
  },
  {
    id: "landslide-km",
    name: "Landslide Knowledge Management System",
    status: "off",
    statusLabel: "Offline",
    summary: "An online repository and information dissemination platform for landslide-related materials.",
    detail: "Built during a full-stack programmer stint at the University of the Philippines - Baguio, in support of the Landslide Knowledge and Management Project. The goal was straightforward but valuable: get landslide-related research, reports, and historical records out of scattered files and into a searchable online repository that researchers and the public could actually use, plus supporting fieldwork and project meetings with direct technical help. The live site (landslidekm.dostcar.ph) is temporarily inaccessible.",
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
    detail: "Currently in the architecture and design phase for a talent-management client. The scope is essentially a full streamer lifecycle system: automated recruitment intake, a structured onboarding/bootcamp flow for new streamers, ongoing performance tracking once they're live, and a competitions/points system designed to keep engagement up over time.",
    stack: ["Node.js", "React/Next.js", "MongoDB", "MySQL"],
    link: null,
    linkLabel: null,
    media: null,
    mediaLabel: "Compilation coming soon"
  }
];
