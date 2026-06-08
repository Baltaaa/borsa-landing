# AI Development Rules & Guidelines

This document outlines the tech stack, architectural rules, and library guidelines for the **Borsa Abogados** landing page application.

## Tech Stack

*   **React 19**: Modern frontend library utilizing functional components and hooks.
*   **Vite 8**: Fast build tool and development server.
*   **Tailwind CSS 3.4**: Utility-first CSS framework for rapid, responsive, and modern styling.
*   **Lucide React**: Icon library for clean, consistent, and scalable vector icons.
*   **Google Fonts**: 
    *   `Playfair Display` (Serif) for elegant, premium headings (`font-serif`).
    *   `Plus Jakarta Sans` (Sans-serif) for highly readable body text.
*   **Single-Page Architecture**: Optimized for high-converting landing pages with smooth scrolling and interactive elements.

## Development & Library Rules

### 1. Styling & Design System
*   **Tailwind CSS**: Always use Tailwind utility classes for layout, spacing, colors, and typography. Avoid writing custom CSS in `src/index.css` or `src/App.css` unless defining custom keyframe animations.
*   **Color Palette**:
    *   Primary Dark: `#111a2b` / `#1e2d4a` (Deep Navy)
    *   Accent Gold: `#D1A649` (Premium Gold)
    *   Backgrounds: `bg-slate-50` (Light) and `bg-slate-100` (Section backgrounds)
*   **Typography**: Use `font-serif` for main headings to convey authority and trust. Use default sans-serif (`font-sans`) for body copy, forms, and buttons.

### 2. Icons
*   **Lucide React**: Use `lucide-react` exclusively for all icons (e.g., `Scale`, `Phone`, `Shield`, `CheckCircle`). Do not install or import other icon libraries like FontAwesome or React Icons.

### 3. Component Structure
*   **Modular & Clean**: Keep components focused and under 100 lines of code where possible.
*   **Responsive Design**: Always design mobile-first. Ensure all sections, forms, and navigation bars look flawless on mobile, tablet, and desktop screens.
*   **Interactivity**: Use Tailwind transitions (`transition-all duration-300`) and hover states (`hover:scale-105`, `hover:shadow-lg`) to make the page feel premium and responsive.

### 4. State & Forms
*   **Local State**: Use standard React hooks (`useState`, `useEffect`, `useRef`) for interactive elements like FAQs, scroll indicators, and counters.
*   **Lead Capture**: Keep the consultation form simple, high-converting, and directly integrated with WhatsApp API redirects for instant communication.