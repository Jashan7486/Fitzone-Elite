# FitZone Elite

A professional, fully-responsive fitness center web application built with React, Vite, and Tailwind CSS. FitZone Elite serves as both a public-facing platform for gym marketing and a comprehensive portal for member tracking and administration.

## 🌟 Key Features

* **Member Portal (Workout Log):** Enables users to log daily exercises, track total lifting volume via interactive charts, and visualize their workout streak with an activity calendar.
* **BMI & Health Calculator:** A dynamic calculator providing instant BMI insights with personalized visual gauges.
* **Admin Dashboard:** A responsive control panel for gym owners to track facility metrics, member tenure, 30-day visit counts, and manage 'Elite' loyalty statuses.
* **Public Landing Pages:** High-conversion sections for services, membership tiers, testimonials, trainer profiles, and gym information.
* **Theme Support:** Persistent light and dark mode toggles tailored for different viewing preferences.

## 🛠️ Technology Stack

* **Frontend Framework:** React 18
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Data Visualization:** Recharts
* **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm 

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd fitzone-elite
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server:

```bash
npm run dev
```

The application will typically be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` directory with the compiled, minified assets ready for deployment.

## 📂 Project Structure

```text
├── public/             # Static assets
└── src/
    ├── assets/         # Images and uncompiled assets
    ├── components/     # Reusable React components (Header, Dashboards, etc.)
    ├── App.tsx         # Main application entry point and layout
    ├── index.css       # Global styles and Tailwind configuration
    ├── main.tsx        # React DOM rendering
    └── vite-env.d.ts   # TypeScript types
```

## 📄 License

This project is licensed under the MIT License.
