# J. Abiraj — Professional Tutor Profile

A single-page professional tutor profile website built with **React + Vite** and styled with **Tailwind CSS**.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS v3
- Google Fonts (Playfair Display + Inter)

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**

The `vercel.json` in the root handles all configuration automatically.

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx       # Full-screen hero with avatar & CTA
│   ├── Subjects.jsx   # Chemistry & ICT subject cards
│   ├── About.jsx      # Bio + stats grid
│   ├── Contact.jsx    # Email, Phone, WhatsApp cards
│   └── Footer.jsx     # Footer with copyright
├── App.jsx            # Root component
├── main.jsx           # Entry point
└── index.css          # Tailwind directives + Google Fonts
```
