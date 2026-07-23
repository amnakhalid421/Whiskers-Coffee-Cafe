# 🐱☕ Whiskers & Coffee — Cat Café Website
*Where Purrs Meet Perfect Brews*

A fully interactive, single-page website (Frontend) for a fictional cat café, built with **HTML, JavaScript, and Tailwind CSS**. — open `index.html` and it runs.


---

## ✨ Features

### 🧭 SPA-Style Navigation
- 8 sections (Home, Cats, Menu, Gallery, Games, Booking, Visit, Contact) rendered as a single-page app — no page reloads
- **Dynamic theming:** the navbar, logo, and footer change their entire color scheme based on the active section (amber for Home, purple for Cats, green for Menu, cyan for Games, etc.)
- Smooth fade/slide entrance animations on every section switch

### 🐈 Meet the Cats
- Cat profile cards generated dynamically from a JavaScript data array
- Click any cat to open a **detail modal** with photo, age, breed, personality, and favorite things
- Graceful image fallback — if a photo fails to load, an emoji placeholder renders instead of a broken image

### ☕ Menu & Gallery
- Menu grid rendered from structured data (easy to update — edit one array, the UI updates)
- Photo gallery with lightbox-style modal viewer

### 🎮 Built-In Mini Games
- **Cat Memory Match:** 4×4 card-flip matching game with score tracking, match detection, and a win state
- **Cat Clicker:** incremental clicker game with a treat economy, purchasable upgrades (Auto Clicker, 2x Multiplier), and disabled-state logic on upgrade buttons
- **Random Cat Facts** generator

### 📅 Booking & Contact
- Full booking form: name, email, phone, group size, date, time slot, with HTML5 validation
- Contact form with the same validation approach
- Both are demo forms with honest UX — the user is told no real submission occurs

### 🎨 Custom Animations
Hand-written CSS keyframe animations: fade-in, bounce, float, slide-in (left/right), sparkle, glow effects, and an animated gradient background — all without any animation library.

---

## Screenshots

### Home

<img width="1895" height="948" alt="Image1" src="https://github.com/user-attachments/assets/3feda522-b532-414d-be77-7a4dfdc56ab4" />

---

<img width="1878" height="946" alt="image2" src="https://github.com/user-attachments/assets/fcd94671-2462-4504-bacb-8e1980b98b8a" />

---

<img width="1886" height="944" alt="image3" src="https://github.com/user-attachments/assets/a955a542-e06b-42df-baed-318dc3aa6c7e" />

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic sections) |
| Styling | Tailwind CSS (CDN) + custom CSS keyframes |
| Logic | Vanilla JavaScript (ES6)  |
| Fonts | Google Fonts (Poppins) |
| State | In-memory JS objects (games, navigation, modals) |


---

## 🚀 Getting Started

No installation. No build step.

```bash
git clone https://github.com/amnakhalid421/Whiskers-Coffee-Cafe.git
cd Whiskers-Coffee-Cafe
# Open index.html in any browser — that's it.
```

Or serve it locally:

```bash
npx serve .
```

---

## 📂 Project Structure

```
Whiskers-Coffee-Cafe/
├── index.html    # All markup, custom CSS, and section layouts
├── script.js     # Data arrays, navigation, theming, games, modals,forms
└── README.md
```

---

## 🧠 How It Works (Architecture Notes)

- **Data-driven rendering:** Cats, menu items, testimonials, gallery items, and cat facts live in plain JS arrays. Grid sections are generated on `DOMContentLoaded`, so content updates never require touching HTML.
- **Section switching:** `showSection()` toggles an `.active` class and triggers `updateThemes()`, which swaps navbar/footer classes from a theme lookup object — one function controls the entire site's visual identity per page.
- **Game state:** Both games hold state in small JS objects (`memoryGame`, `clickerGame`) with pure update functions — simple, readable, and easy to extend.
- **Modals:** Event delegation closes modals on backdrop click; content is injected per-item at open time.

---

## 🔮 Possible Improvements

- Move Tailwind from CDN to a compiled build for production
- Persist clicker game progress with `localStorage`
- Connect the booking form to a real backend (Formspree, Google Sheets, or an API)
- Add mobile hamburger navigation
- Split data arrays into a separate `data.js` file

---

## 📄 License

Free to use for learning and portfolio purposes.
