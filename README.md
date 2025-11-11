# 🛰️ My Portfolio 2025 – Malek Dinari

Personal portfolio built with **Vite + React**, **Tailwind CSS**, and a Firebase-ready contact pipeline. It highlights projects across computer vision, rPPG-based biomedical signals, NLP, and full-stack development while providing quick access to my CV and social presence.

---

## ⚙️ Tech Stack

| Layer            | Technology / Service                | Purpose                                             |
|------------------|-------------------------------------|-----------------------------------------------------|
| Frontend         | Vite (React 19)                     | Component-driven UI with fast HMR / build times     |
| Styling          | Tailwind CSS + custom theming       | Dark mode aesthetic, responsive grid, motion cues   |
| Animations       | Framer Motion                       | Section fade-ins, modal transitions                 |
| Contact Storage  | Firebase Firestore (optional)       | Persist visitor messages when env vars are provided |
| Tooling          | TypeScript-ready config, ESLint     | Code quality and future type adoption               |

Assets (profile, project imagery, CV) live in `public/` and `src/assets/` so Vercel can serve them statically.

---

## 🏃‍♂️ Run Locally

```bash
git clone git@github.com:Malek-Dinari/my-pf-2025.git
cd my-pf-2025/malek-portfolio
npm install
npm run dev
```

Navigate to the printed `http://localhost:5173/` URL.

---

## 🔐 Environment Variables

The contact form writes to Firestore when Firebase credentials are present. Create a `.env.local` (or `.env`) inside `malek-portfolio/` with:

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

- Leave the file out of git (`.gitignore` already covers it).  
- Without these variables, the form gracefully falls back to a `mailto:` link so no deploy blocks occur.

---

## 🚀 Deploying to Vercel

1. Push the project to GitHub (`main` branch).  
2. On [vercel.com](https://vercel.com/), **New Project → Import** `Malek-Dinari/my-pf-2025`.  
3. Framework preset: **Vite** (Vercel auto-detects).  
4. Add the environment variables from `.env.local` under **Settings → Environment Variables** (use the same keys as above).  
5. Redeploy whenever `main` updates. Vercel outputs at `https://malek-dinari.vercel.app`.

> Tip: the large hero image is ~1.5 MB. Optimising it (and the Mini-GPT illustration) can keep the bundle under Vercel’s 500 kB warning threshold.

---

## 📁 Key Sections

- `src/components/` – shared layout components (navbar, timelines, etc.).  
- `src/sections/` – hero, about, skills, experience, projects, contact, footer.  
- `src/data/content.js` – copy, images, and metadata for education, experience, and project cards. Edit here to update the site content.

---

## 👤 Author

**Malek Dinari**  
- Computer Vision & Machine Learning Engineer (ENSI · CRISTAL Lab)  
- 📧 dinari.malek1@gmail.com  
- 🔗 [GitHub](https://github.com/Malek-Dinari) · [LinkedIn](https://www.linkedin.com/in/malek-dinari-99b431263/) · [RateYourMusic](https://rateyourmusic.com/~dinnarus)

---

### 📄 License
MIT License © 2025 Malek Dinari