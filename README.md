# Developer Portfolio

A modern, interactive portfolio for Zin Min Latt, built with React, TypeScript, Vite, Tailwind CSS, Motion, Zustand, and Lucide icons.

The site presents a full-stack developer profile through animated sections, a selected projects gallery, case study drawers, a technical stack dashboard, and an interactive terminal-style console.

## Features

- Responsive portfolio layout with fixed navigation and smooth section scrolling
- Animated hero section with profile image, status badge, and call-to-action buttons
- Technical stack section powered by reusable data objects and dynamic Lucide icons
- Selected projects gallery with Professional and Personal filters
- Case study drawer for detailed project overviews, contributions, outcomes, images, and links
- Interactive terminal console with typed commands such as `help`, `projects`, `about`, `tech_stack`, `contact`, `resume`, and `clear`
- Resume download support from `public/resume.pdf`
- Lightweight global state management with Zustand
- Production build setup with Vite

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Zustand
- Lucide React

## Project Structure

```text
developer-portfolio/
├── public/
│   ├── profile_porfolio.jpg
│   ├── resume.pdf
│   └── project screenshots
├── src/
│   ├── components/
│   │   ├── CaseStudyDrawer.tsx
│   │   ├── DeploymentsSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GridBackground.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InfrastructureSection.tsx
│   │   ├── TelemetrySection.tsx
│   │   └── TerminalConsole.tsx
│   ├── App.tsx
│   ├── data.ts
│   ├── index.css
│   ├── main.tsx
│   ├── store.ts
│   └── types.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The app runs on:

```text
http://localhost:3000
```

### Type Check

```bash
npm run lint
```

This project uses `tsc --noEmit` for TypeScript validation.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

| Script              | Description                                       |
| ------------------- | ------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server on port 3000   |
| `npm run build`   | Builds the app for production                     |
| `npm run preview` | Serves the production build locally               |
| `npm run lint`    | Runs TypeScript checks without emitting files     |
| `npm run clean`   | Removes generated`dist` and `server.js` files |

## Customization

### Profile Content

Update the main profile text, contact details, system metadata, and technical stack in:

```text
src/data.ts
src/components/HeroSection.tsx
src/components/TelemetrySection.tsx
```

### Projects and Case Studies

Project cards and case study drawer data are currently defined inside:

```text
src/components/DeploymentsSection.tsx
```

Each project supports:

- title
- subtitle
- description
- category
- project type
- tags
- runtime
- role
- tech stack
- overview
- contributions
- outcome
- GitHub URL
- live URL
- images

### Terminal Commands

The terminal behavior is managed in:

```text
src/store.ts
```

Current commands include:

```text
help
about
whoami
sys_info
projects
deployments
tech_stack
contact
resume
download_resume
resume_download
navigation
clear
```

### Static Assets

Images and downloadable files live in:

```text
public/
```

Important assets:

- `profile_porfolio.jpg` - hero profile image
- `resume.pdf` - downloadable resume
- project screenshots used by case studies

## Deployment

This is a standard Vite app and can be deployed to platforms such as Vercel, Netlify, Render, or GitHub Pages.

For most platforms:

```text
Build command: npm run build
Output directory: dist
```

## Notes

- The app uses `@tailwindcss/vite`, so Tailwind is configured through the Vite plugin.
- React JSX runtime typings require `@types/react` and `@types/react-dom`, already included in `devDependencies`.
- Vite may show a chunk size warning during production builds. The build still succeeds; code splitting can be added later if bundle size becomes a priority.
