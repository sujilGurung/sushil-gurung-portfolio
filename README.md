# Sushil Gurung — Personal Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-FF6C37)](https://www.emailjs.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Live Portfolio: **[https://gurungsushil.com.np/](https://gurungsushil.com.np/)**

Modern, fast, and responsive personal developer portfolio website designed for **Sushil Gurung** — Computing Graduate, Full-Stack Developer, and Aspiring AI & Machine Learning Professional.

---

## 🌟 Key Highlights

- **Aesthetic Dark Navy / Electric Blue Theme**: High-contrast, sleek palette (`#030712`, electric cyan `#00f0ff`, and blue `#0070f3`) with clean glassmorphic cards and subtle animations.
- **Modern Typography**: Inter and Space Grotesk fonts for crisp readability.
- **Real Headshot in Hero**: Integrated circular frame with cyan glow and status indicator from `/profile.jpeg`.
- **CV Integration**: Both **View CV** (opens in new tab) and **Download CV** (downloads `/Sushil_Gurung_CV.pdf`) functional across Hero, Navbar, and Contact sections.
- **Interactive EmailJS Contact Form**: Form validation, honeypot anti-spam protection, loading state, and direct message delivery to `sujilgurung15@gmail.com`.
- **Single-Page Flow**: Smooth scrolling navigation across 6 sections: Home, About, Skills, Projects, Experience, and Contact.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── Favicon.png            # Custom favicon
│   ├── profile.jpeg           # Hero headshot photograph
│   └── Sushil_Gurung_CV.pdf   # Verified Curriculum Vitae PDF
├── src/
│   ├── components/
│   │   ├── About.jsx               # About Me narrative & highlights
│   │   ├── Contact.jsx             # Functional EmailJS contact form & socials
│   │   ├── CustomCursor.jsx        # Subtle desktop cursor enhancement
│   │   ├── ExperienceEducation.jsx # Combined experience & education section
│   │   ├── Footer.jsx              # Minimalist responsive footer
│   │   ├── Hero.jsx                # Hero section with profile headshot & CTA
│   │   ├── Icons.jsx               # Custom SVG brand icons
│   │   ├── Navbar.jsx              # Floating glass navbar with responsive drawer
│   │   ├── NetworkBackground.jsx   # Lightweight interactive neural web canvas
│   │   ├── Projects.jsx            # 5 curated projects with tech badges & links
│   │   └── Skills.jsx              # Categorized skills (6 domains)
│   ├── data/
│   │   └── portfolioData.js        # Centralized information & content
│   ├── hooks/
│   │   └── useScrollReveal.js      # IntersectionObserver scroll reveal hooks
│   ├── styles/
│   │   └── theme.css               # Design tokens, variables & typography
│   ├── App.jsx                     # Root application component
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Vite entrypoint
├── .env.example                    # Template for EmailJS environment variables
├── index.html                      # HTML entry with metadata & SEO tags
├── package.json                    # Dependencies & scripts
└── vite.config.js                  # Vite configuration
```

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite 8, Lucide React icons
- **Form Delivery:** `@emailjs/browser`
- **Styling:** CSS variables, Glassmorphism, Responsive CSS Grid & Flexbox
- **Typography:** Space Grotesk, Inter, JetBrains Mono

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables (EmailJS):
   ```bash
   cp .env.example .env
   ```
   Add your keys in `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## ✉️ EmailJS Setup Guide

To enable live message forwarding to `sujilgurung15@gmail.com`:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Under **Email Services**, add Gmail and connect `sujilgurung15@gmail.com`. Note the `Service ID`.
3. Under **Email Templates**, create a template with the following variables:
   - `{{from_name}}` — Sender's name
   - `{{from_email}}` — Sender's email
   - `{{subject}}` — Message subject
   - `{{message}}` — Message body
   - `{{to_email}}` — Target recipient (`sujilgurung15@gmail.com`)
   - Configure the template **Reply-To** field as `{{from_email}}`. Note the `Template ID`.
4. Under **Account → API Keys**, copy your `Public Key`.
5. Enter these three values into `.env` (or in your hosting provider's dashboard for Vercel/Netlify).

---

## 👤 Contact & Profiles

- **Name:** Sushil Gurung
- **Location:** Pokhara, Nepal
- **Email:** [sujilgurung15@gmail.com](mailto:sujilgurung15@gmail.com)
- **GitHub:** [https://github.com/sujilGurung](https://github.com/sujilGurung)
- **LinkedIn:** [https://www.linkedin.com/in/sujil-gurung-2a8a002b0/](https://www.linkedin.com/in/sujil-gurung-2a8a002b0/)
- **Live Portfolio:** [https://gurungsushil.com.np/](https://gurungsushil.com.np/)
