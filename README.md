# Marc Lloyd — Portfolio

Static multi-page portfolio site (Home, Projects, About, Contact). No build step — plain HTML/CSS/JS, so it deploys straight to GitHub Pages for free.

## How to deploy on GitHub Pages

1. Create a new GitHub repo (e.g. `marc-lloyd-portfolio`, or `yourusername.github.io` if you want it at the root of your GitHub domain).
2. Push all files in this folder to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Wait 1–2 minutes. Your site will be live at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO/` (normal repo), or
   - `https://YOUR_USERNAME.github.io/` (if the repo is named `YOUR_USERNAME.github.io`)

## Before you go live — things to fill in

- **contact.html** — replace `your-email@example.com` (appears twice) and add real links for OnlineJobs.ph, Contra, and GitHub where it currently says "Add link".
- **assets/js/projects-data.js** — this is the single source of truth for every project card (used on both Home and Projects pages). Edit an entry's `status` field to update its badge:
  - `"live"` — green, has a public link
  - `"dev"` — amber, in progress
  - `"case"` — blue, case study / no public link
  - `"off"` — red, temporarily offline
- **Landslide KM project** — currently marked `"off"` since the live site is inaccessible. When you have screenshots/video ready, you can either add an image gallery to that card or link out to a hosted video (YouTube/Loom) by adding a `link` and `linkLabel` to its entry in `projects-data.js`.
- Optional: `assets/img/` is empty and ready for screenshots — add project images and reference them in `projects-data.js` if you want visual cards instead of text-only.

## Adding a new project later

Add a new object to the `PROJECTS` array in `assets/js/projects-data.js` — it will automatically appear on the Projects page and (if it's in the first 3) the Home page. No HTML editing needed.
