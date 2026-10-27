# SamuelPortfolio

about me

---

# Samuel L. — Personal Portfolio Website (Full-Stack MERN)

A complete, modern, fully responsive personal portfolio website engineered specifically for **Samuel L.**, an engineering student pursuing **B.E. Computer Science and Engineering** at **Easwari Engineering College**.

Built with a high-performance **React.js + Vite** frontend and an **Express.js + MongoDB** backend architecture featuring rate limiting, Helmet security headers, CORS protection, and JWT-authenticated administrator inbox.

---

## 🎯 Personal Details & Student Profile

- **Name:** Samuel L.
- **Title:** Aspiring Full-Stack Developer
- **College:** Easwari Engineering College
- **Degree:** B.E. Computer Science and Engineering
- **Current Status:** Engineering Student
- **Career Goal:** Become a skilled software developer and build real-world applications.
- **Honesty Guarantee:** All unprovided contact details, social links, graduation years, marks, and work experiences are maintained as clearly labeled editable placeholders (`[your-email@example.com]`, `[+91-XXXXXXXXXX]`, `[GitHub Placeholder]`, `[CGPA Placeholder]`).

---

## 🚀 Architecture & Tech Stack

### Frontend (`/client`)
- **Framework:** React 18 with Vite
- **Styling:** Vanilla CSS3 with customized design tokens, glassmorphism, responsive utilities, and dynamic Dark/Light theme toggling
- **Icons:** Lucide React
- **Typography:** Google Fonts (`Outfit` & `JetBrains Mono`)
- **Key Modules:**
  - `Navbar.jsx`: Responsive header with smooth navigation, theme toggle, and Admin lock trigger
  - `Hero.jsx`: Intro narrative, student badges, CTA buttons, and interactive code card
  - `About.jsx`: Student journey, honest disclosure box, and quick facts
  - `Skills.jsx`: Categorized technical toolkit (Frontend, Backend, Databases, Tools)
  - `Education.jsx`: Easwari Engineering College milestone timeline & academic details
  - `Projects.jsx`: Interactive filterable project cards with engineering highlights
  - `ResumeSection.jsx`: Printable student resume view with instant print/save triggers
  - `Contact.jsx`: Live contact form posting directly to backend with rate limiting & status alerts
  - `AdminModal.jsx`: Secure JWT-authenticated dashboard to read submitted contact messages
  - `Footer.jsx`: Clean closing with sitemap links and scroll-to-top button

### Backend (`/server`)
- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js REST API
- **Security Middleware:**
  - `helmet`: Secure HTTP headers
  - `cors`: Allowed origins & credential validation
  - `express-rate-limit`: Prevents spam / brute-force on contact and API endpoints
- **Database:** MongoDB & Mongoose schemas with an automatic, zero-downtime **in-memory fallback** if local MongoDB is not running
- **Authentication:** JSON Web Tokens (JWT) for the protected admin route (`/api/admin/messages`)

---

## 📁 Project Structure

```text
portfolio/
├── client/                      # Frontend Application (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── AdminModal.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── ResumeSection.jsx
│   │   ├── App.jsx
│   │   ├── index.css            # Design tokens & glassmorphism system
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                      # Backend API (Node.js + Express + MongoDB)
│   ├── src/
│   │   ├── data/
│   │   │   └── initialProjects.js
│   │   ├── middleware/
│   │   │   └── auth.js          # JWT protection middleware
│   │   ├── models/
│   │   │   ├── ContactMessage.js
│   │   │   └── Project.js
│   │   └── server.js            # Express application entry
│   ├── .env
│   ├── .env.example
│   └── package.json
└── README.md
```

---

## 💻 Running Locally

### 1. Backend Server
```powershell
cd server
npm install
npm start
# Server starts on http://localhost:5000
```

### 2. Frontend Application
```powershell
cd client
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

Open `http://localhost:5173` in your browser.

---

## 🔐 Admin Dashboard Access

- Click the **Admin** button in the top navigation bar.
- **Default Username:** `admin`
- **Default Password:** `Admin@1234`
- Once logged in, you can view all messages submitted through the contact form in real-time.

---

## 🌐 Deployment Instructions

### Deploy Frontend to Vercel
1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), click **Add New Project** and select the repository.
3. Set the **Root Directory** to `client`.
4. Framework Preset: `Vite`.
5. Under **Environment Variables**, set:
   - `VITE_API_URL`: Your deployed backend URL on Render (e.g., `https://samuel-portfolio-api.onrender.com`).

### Deploy Backend to Render
1. In [Render](https://render.com), create a new **Web Service**.
2. Connect your GitHub repository and set the **Root Directory** to `server`.
3. Build Command: `npm install`
4. Start Command: `node src/server.js`
5. Set Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
   - `JWT_SECRET`: A secure random secret string.
   - `ADMIN_USER`: Your chosen admin username.
   - `ADMIN_PASS`: Your chosen admin password.
   - `CLIENT_URL`: Your Vercel frontend domain.

### Database Setup on MongoDB Atlas
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Under **Database Access**, create a user with read/write permissions.
3. Under **Network Access**, add `0.0.0.0/0` (allow access from anywhere) or specific Render IP ranges.
4. Copy your connection URI into Render's `MONGODB_URI` environment variable.

