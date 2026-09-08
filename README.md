# Marc Lloyd Runas — Portfolio

Static multi-page portfolio site (Home, Projects, About, Contact). No build step — plain HTML/CSS/JS, deploys straight to GitHub Pages for free.

Live links wired in: TX Distressed Home Buyers (live site), LinkedIn, Upwork, Contra. The animated-shorts project links to a Google Drive samples folder. Internal/offline systems (EMB-CAR, ALISTO, Landslide KM, TikTok LIVE platform) show "Compilation coming soon" until you add a media link.

## Adding a media compilation link later

Open `assets/js/projects-data.js` and find the project's entry. Set:
```js
media: "https://your-drive-or-youtube-link",
mediaLabel: "View samples"
```
It'll automatically render as a button on both the Home and Projects pages — no HTML editing needed.

## Editing this repo from a tablet/phone browser (github.dev)

1. Open your repo on github.com, then press `.` on your keyboard (or change `github.com` to `github.dev` in the URL) to open the built-in browser editor.
2. Edit files directly, folders included — no drag-and-drop needed.
3. Use the **Source Control** icon in the sidebar to commit, then **Sync Changes** / **Push** to send it to GitHub.
4. Confirm **Settings → Pages** is still set to deploy from `main` / root.

## Structure

```
portfolio/
├── index.html
├── projects.html
├── about.html
├── contact.html
├── README.md
└── assets/
    ├── css/  (style.css, home.css, projects.css, about.css, contact.css)
    ├── js/   (main.js, projects-data.js)
    └── img/  (empty — add project screenshots here if you want image cards later)
```
