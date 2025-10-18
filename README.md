# Dynamic UI Editor for Customizable Components

This project is a **React-based single-page web application** that allows users to customize and visualize a 3D cabinet model in real time. It includes a built-in UI editor panel to control typography, button styles, colors, and layout properties dynamically. The 3D model rendering is powered by **react-three-fiber** and **three.js**, while all styling is handled using **pure CSS** for a clean and modular structure.

---

## Component API & Configurable Props

Each UI element is configurable through a shared global state using a lightweight store (`useConfig`).  
Below are the main configurable properties:

### **Typography**
- `fontSize` – adjusts text size.  
- `fontWeight` – controls heading thickness.

### **Button**
- `btnRadius` – sets corner curvature.  
- `btnShadow` – applies shadow depth.  
- `btnAlign` – aligns the button (left, center, right).  
- `btnBg` – sets button background color.  
- `btnText` – sets text color.

### **Gallery & Layout**
- `galleryGap` – adjusts spacing between images.  
- `galleryRadius` – defines image corner roundness.  
- `cardRadius` – sets panel border radius.  
- `containerPad` – manages internal padding.  
- `sectionBg` – changes background color of main sections.  
- `strokeColor` & `strokeWeight` – define border color and thickness.

### **3D Model Customization**
- `bodyColor` – main cabinet body color.  
- `shelfColor` – color for the shelf component.  
- `hardwareColor` – color for metallic or hardware parts.

---

## How the Editor Works

- The **Editor panel** (left sidebar) contains input controls like sliders, dropdowns, and color pickers.  
- Each change updates the global configuration instantly.  
- The **Product panel** reflects all changes in real time:
  - The 3D cabinet updates its materials and finishes using `react-three-fiber`.  
  - Typography, borders, and buttons update dynamically based on current settings.
- Gallery thumbnails beside the model open their full-sized versions in a new tab when clicked.
- The **Export JSON** button allows users to download their complete configuration as a `.json` file.

---

## Design & UX Decisions

- Built as a **single-page interactive application** for a seamless experience.  
- The 3D cabinet model is fully interactive, with orbit controls for rotation and zoom.  
- A responsive **Desktop/Mobile toggle** helps preview UI layouts across devices.  
- Clean, minimal, and readable CSS ensures consistency and ease of modification.  
- Real-time updates enhance user feedback and interactivity.

---

## Tech Stack

- **React.js + Vite** – core framework and bundler.  
- **React Three Fiber + Drei** – 3D rendering and model interaction.  
- **Three.js** – underlying 3D engine.  
- **CSS** – for layout, styling, and responsive design.

---

## Running the Project

```bash
npm install
npm run dev
