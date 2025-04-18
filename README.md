# React Starter

A React Starter built with **React**, **TypeScript** and **Tailwind CSS**. This project follows **Atomic Design principles** and a clean architecture to ensure maintainability and scalability.

---

## 🚀 Tech Stack

- **React 19** – Component-based UI
- **TypeScript** – Static typing for scalable code
- **Tailwind CSS** – Utility-first CSS framework
- **React Query** – Data fetching & caching
- **Zustand / Redux** – State management
- **Vite** – Lightning-fast frontend tooling

---

## 📁 Folder Structure

```bash
src/
├── assets/                # Static assets (images, fonts)
│   ├── fonts/
│   ├── images/
│
├── components/            # UI Components (Atomic Design)
│   ├── atoms/             # Smallest reusable components (Button, Input, Label)
│   ├── molecules/         # Grouped atoms forming functional components
│   ├── organisms/         # Complex UI structures combining molecules
│   ├── templates/         # Page layouts (AuthLayout, DashboardLayout)
│
├── lib/                   # Business logic and utilities
│   ├── theme/             # ✅ UI themes
│   ├── constants/         # Global constants
│   ├── helpers/           # Utility functions
│   ├── hooks/             # Custom reusable hooks
│   ├── store/             # State management (Redux/Zustand)
│   ├── types/types.d.ts   # Shared TypeScript types and interfaces
│
├── pages/                 # Page components (LoginPage, DashboardPage)
│   ├── App.tsx            # Main app entry point
│
├── routes/                # Centralized app routing
│   ├── routes.tsx
│
├── services/              # API services (fetching data)
│   ├── products/          # Product API services
│   │   ├── queries/queries.ts # React Query fetching
│   │   ├── keys/keys.ts   # Query keys
│   │   ├── mutations.ts   # React Query mutationsx
│   │   ├── api.ts         # API functions
│
├── styles/                # Global styles (CSS Modules, Tailwind, etc.)
│   ├── globals.css
│
├── index.tsx              # React root file
├── .env.local             # Environment variables
├── .gitignore
├── package.json
```

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/rlbk/React-Starter.git
cd react-starter
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code (optional)
