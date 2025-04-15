# Portfolio Website Structure

## Project Overview
This is a modern, interactive personal portfolio website showcasing Fahad's work, skills, and experience. It features smooth animations, interactive elements, and a professional design with a focus on visual appeal and user experience.

## Technology Stack
- **Frontend**: React with TypeScript
- **Styling**: TailwindCSS with custom theming
- **Animation**: Framer Motion + AOS (Animate on Scroll)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Context API + React Query
- **Backend**: Express.js with Node.js

## Project Structure

### Root Directory
- `package.json` - Project dependencies and scripts
- `tailwind.config.ts` - TailwindCSS configuration with custom color palette
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build tool configuration
- `theme.json` - Theming configuration for light/dark mode
- `structure.md` - This documentation file

### Client Directory (`/client`)
The frontend React application.

#### Main Files
- `/client/src/main.tsx` - Application entry point
- `/client/src/App.tsx` - Main application component with routing
- `/client/src/index.css` - Global CSS styles and Tailwind imports

#### Key Directories
- `/client/src/components/` - Reusable UI components
  - `/client/src/components/ui/` - Base UI components using shadcn/ui
  - `/client/src/components/ThemeProvider.tsx` - Theme context for light/dark mode
  - `/client/src/components/Header.tsx` - Site navigation header
  - `/client/src/components/Footer.tsx` - Site footer
  - `/client/src/components/CustomCursor.tsx` - Custom cursor effect
  - `/client/src/components/HeroSection.tsx` - Main landing section
  - `/client/src/components/AboutSection.tsx` - About me section
  - `/client/src/components/SkillsSection.tsx` - Skills showcase
  - `/client/src/components/ProjectsSection.tsx` - Projects gallery
  - `/client/src/components/ExperienceSection.tsx` - Work experience timeline
  - `/client/src/components/ContactSection.tsx` - Contact form and info
  - `/client/src/components/TestimonialsSection.tsx` - Client testimonials carousel


- `/client/src/pages/` - Page components
  - `/client/src/pages/Home.tsx` - Main landing page combining all sections
  - `/client/src/pages/not-found.tsx` - 404 error page

- `/client/src/data/` - Static data files
  - `/client/src/data/skills.ts` - Skills data and categories
  - `/client/src/data/projects.ts` - Project portfolio data
  - `/client/src/data/experience.ts` - Work experience data
  - `/client/src/data/testimonials.ts` - Client testimonial data


- `/client/src/hooks/` - Custom React hooks
  - `/client/src/hooks/use-toast.ts` - Toast notification system
  - `/client/src/hooks/use-mobile.tsx` - Responsive design hook
  - `/client/src/hooks/useScrollAnimation.ts` - Scroll-based animation hook

- `/client/src/lib/` - Utility functions
  - `/client/src/lib/utils.ts` - General utility functions
  - `/client/src/lib/queryClient.ts` - React Query configuration

- `/client/src/types/` - TypeScript type definitions
  - `/client/src/types/aos.d.ts` - Animation library type definitions

### Server Directory (`/server`)
The backend Express application.

- `/server/index.ts` - Server entry point
- `/server/routes.ts` - API route definitions
- `/server/storage.ts` - Data storage interface
- `/server/vite.ts` - Vite integration for the server

### Shared Directory (`/shared`)
Code shared between frontend and backend.

- `/shared/schema.ts` - Database schema definitions using Drizzle ORM

## Components Breakdown

### Layout Components
- **Header**: Navigation bar with links to different sections and theme toggle
- **Footer**: Site footer with copyright and social links (LinkedIn, WhatsApp, Twitter)
- **ThemeProvider**: Context provider for theme state (dark/light mode)

### Section Components
- **HeroSection**: Main landing section with introduction and call-to-action
- **AboutSection**: Information about the portfolio owner with image and description
- **SkillsSection**: Skills showcase with categorized skill items and visual indicators
- **ProjectsSection**: Project gallery with crypto-style banner and interactive cards
- **ExperienceSection**: Right-aligned timeline with experience cards and interactive animations
- **ContactSection**: Contact form with validation and submission handling
- **TestimonialsSection**: Client feedback carousel with 1-second autoplay timer

### UI Components
- **Custom shadcn/ui components**: Button, Card, Dialog, Dropdown, etc.
- **CustomCursor**: Interactive cursor effect that changes based on hover state
- **ThemeToggle**: Toggle switch for dark/light mode

## Advanced Features

### Visual and Interactive Elements
- **Custom cursor**: Changes appearance based on interactive elements
- **Scroll animations**: Elements animate as they enter the viewport
- **Theme switching**: Seamless transition between light and dark modes
- **Card animations**: Interactive card effects on hover and click
- **Project filtering**: Filter projects by category or technology
- **Timeline visualization**: Interactive timeline for experience section
- **3D particle system**: Three.js powered dynamic 3D elements in hero section
- **Testimonial carousel**: 3D depth effect carousel with interactive controls
- **Microinteractions**: Small animations triggered by user interactions
- **Animated backgrounds**: Dynamic gradients and particle effects
- **Hover-driven animations**: Elements that respond to mouse position

### Functional Features
- **Contact form**: Email submission with validation and success/error handling
- **Theme persistence**: Remembers user's theme preference
- **Responsive design**: Adapts to all device sizes from mobile to desktop
- **Optimized images**: Fast loading, properly sized project images
- **Project search**: Search functionality to find specific projects
- **Social integration**: Displays GitHub activity and social media links
- **Accessibility features**: Screen reader support and keyboard navigation
- **Performance optimization**: Lazy loading, code splitting and resource optimization
- **Autoplay controls**: User can toggle autoplay for carousel elements
- **Personalized experience**: UI adapts based on user preferences and device capabilities

### Technical Implementation Details

#### 3D Particle System
The interactive 3D background in the hero section uses Three.js to create a dynamic particle system that:
- Responds to mouse movements for an interactive experience
- Automatically adapts colors to match the current theme
- Uses performance detection to disable on low-end devices
- Incorporates smooth animations and transitions

#### Testimonials 3D Carousel
The testimonials section features a sophisticated 3D carousel that:
- Creates a depth perspective effect for multiple testimonials
- Includes smooth transitions between items with proper z-index handling
- Features responsive design that adapts to different screen sizes
- Provides multiple navigation options (dots, arrows, autoplay)
- Dynamically adjusts card positioning based on active index
- Includes accessibility features for better usability

#### Performance Optimizations
- Code splitting to reduce initial load time
- Conditional rendering of heavy components
- Responsive image handling
- Lazy loading of off-screen content
- Device capability detection to adjust features accordingly

## State Management
- **Theme state**: Managed by ThemeProvider context
- **Project filters**: Local state in ProjectsSection component
- **Form state**: Managed with React Hook Form
- **Animation state**: Controlled by Framer Motion and AOS

## Styling Approach
- **TailwindCSS**: Utility-first CSS framework for consistent styling
- **Custom color palette**: Defined in tailwind.config.ts
- **Component classes**: Reusable class combinations (glassmorphism, card-animation, etc.)
- **Dark mode support**: Using Tailwind's dark: variant with theme context
- **Responsive design**: Mobile-first approach with responsive breakpoints

