
COMPANY : CODTECH IT SOLUTION

NAME : HARINI S

INTERN ID : CT4MGDV

DOMAIN NAME : FRONTEND WEB DEVELOPMENT

BATCH DURATION : DECEMBER 25th, 2024 to APRIL 25th, 2025

MENTOR NAME : NEELA SANTHOSH

DESCRIPTION OF THE TASK: E-LEARNING PLATFORM

**E‑Learning Front‑End Design – Project Overview**  
*(≈260 words)*  

The goal is to build the **client‑side (front‑end) interface** of an online learning platform—the part every learner and instructor sees and clicks. It must be visually appealing, responsive on phones and laptops, and ready to plug into any back‑end API later.

1. User‑Facing Pages  
1. **Landing / Course Catalog**  
   * Grid or list of all courses with thumbnail, title, brief tagline, teacher name, price (or “Free”), and rating stars.  
   * Category filter, search box, and sort options (Newest, Popular, A‑Z).  

2. **Course Detail / Player**  
   * Hero section: course banner, description, enrol button.  
   * Left sidebar: collapsible syllabus. Selecting a lesson loads the video.  
   * Main panel: HTML5/YouTube/Vimeo player, “Next / Previous” lesson buttons, resource downloads.  

3. **Learner Dashboard**  
   * Cards for every enrolled course showing a progress bar (e.g., 65 % complete).  
   * Quick stats: total learning hours, current streak, certificates earned.  

4. **Authentication (optional for MVP)**  
   * Sign‑up, login, password reset modals or pages.  

2. Core Interactions  
- **Routing:** SPA navigation with React Router—no full‑page reloads.  
- **State Management:** Context API or Redux to store user data, course list, and per‑lesson completion.  
- **Progress Tracking:** When a video ends or “Mark complete” is clicked, update state and persist to Local Storage (or future REST / GraphQL endpoint).  
- **Responsive Design:** Flexbox/grid + media queries (or Tailwind utilities) so cards collapse into a single column on mobile, while the player remains 16:9.  
- **Accessibility:** Semantic HTML, alt text on thumbnails, keyboard‑navigable menus, ARIA labels on progress bars.  

3. Technology Stack  
- **React** – component architecture and hooks.  
- **Tailwind CSS** – rapid theming and utility classes.  
- **React Router v6** – multi‑page feel within a SPA.  
- **Headless UI / shadcn** – accessible dropdowns, modals, tabs.  
- **Axios / fetch** – placeholder API calls for future back‑end integration.  

4. Deliverables  
1. **Source code** (`/src` folder) with clearly named components: `CourseCard`, `Player`, `ProgressBar`, etc.  
2. **README** explaining setup (`npm install`, `npm start`) and folder structure.  
3. Pixel‑perfect, mobile‑first styling; no console errors or lint warnings.

The finished front‑end should feel like a lightweight clone of Coursera or Udemy—clean, intuitive, and ready to be wired to real data later.

OUTPUT OF THE TASK :



