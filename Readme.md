
```markdown
# ⚡ Vite + Express Fullstack App (Single Port Dev)

This project is a fullstack JavaScript app using **Vite** for the frontend and **Express** for the backend — running together on a **single port** during development and production.

---

## 📁 Project Structure

```

m.js/
├── app/              # Frontend React app (Vite)
│   ├── index.html
│   ├── main.jsx
│   └── App.jsx
├── server/           # Express backend
│   ├── server.js
│   └── main.js       # API routes
├── public/           # Built Vite app (production only)
├── vite.config.js
├── package.json
└── .gitignore

````

---

## 🚀 Features

- ⚛️ Vite + React frontend
- 🧩 Express API backend
- ✅ Hot Reload (frontend & backend)
- 🔄 SPA fallback handled by Express
- 🔥 Single port for both frontend & backend
- 📦 Single `node_modules/` and `package.json`

---

## 🛠️ Install & Run

### 1️⃣ Install dependencies

```bash
npm install
````

### 2️⃣ Start development server

```bash
npm run dev
```

> ✅ Dev server runs on: [http://localhost:3000](http://localhost:3000)
> `/api/*` routes are handled by Express

### 3️⃣ Build for production

```bash
npm run build
```

### 4️⃣ Start production server

```bash
npm start
```

> Production server runs from the `public/` build

---

## 📡 Example API

```
GET /api/hello

Response:
{ "message": "Manoj" }
```

---

## 🧪 Dev Tools

* [`nodemon`](https://github.com/remy/nodemon): Auto-restart backend
* [`cross-env`](https://github.com/kentcdodds/cross-env): Cross-platform env vars
* [`vite`](https://vitejs.dev/): Lightning-fast frontend dev
* [`express`](https://expressjs.com/): Backend framework

---

## 📄 License

MIT — built by [Manoj Gowda](https://github.com/manoj20002)

```

---

Let me know if you'd like:
- Dockerfile
- GitHub Actions (CI/CD)
- MongoDB integration with `.env` support
- Live demo deploy instructions (e.g. Render)
```
