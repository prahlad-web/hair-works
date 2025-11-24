# Design Guidelines for HairWorks Salon Premium Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from luxury brands and premium digital experiences with futuristic, 3D-enabled aesthetics. This is a high-end salon experience that demands cutting-edge visual design.

## Core Design Elements

### Typography
- **Headings**: Premium sans-serif (Satoshi/Neue Haas style) - large, responsive headlines using clamp() for fluid scaling
- **Body**: Clean, modern sans-serif with excellent readability
- **Accent**: Optional elegant serif for premium touch points
- **Mobile**: Extra-large headlines optimized for mobile viewports and thumb-friendly interactions

### Color Palette
- **Primary Dark**: Deep charcoal (#0f1115) - main background
- **Accent Neutrals**: Pearl/ivory for text and subtle contrasts
- **Luxury Highlight**: Warm gold (#D4AF37) for CTAs and premium accents
- **Interactive**: Neon gradient accents for micro-interactions and hover states

### Layout System
**Spacing**: Use Tailwind units focusing on 4, 6, 8, 12, 16, 20, 24, 32 for consistent vertical rhythm
**Grid Strategy**: Asymmetric layouts with diagonal/slanted section dividers, layered parallax imagery, and floating elements

### Visual Language
- **Glassmorphism panels** with subtle blur and chrome borders for service cards
- **Diagonal section dividers** creating dynamic transitions between content blocks
- **Layered parallax** imagery for depth and premium feel
- **Animated gradient backgrounds** with subtle noise overlay
- **Asymmetric grids** breaking traditional layouts for modern edge

## Component Library

### Hero Section
- **Layout**: Full viewport with 3D interactive element (left or center positioned)
- **3D Element**: Orbital/flowing hair-strand model with pointer and scroll reactivity (touch-friendly)
- **Content**: Large headline, premium subhead, dual CTAs (primary "Book an Experience" + secondary "View Gallery")
- **Background**: Animated gradient with parallax layers and optional WebGL shader effects
- **Fallback**: Static premium hero image for non-WebGL devices

### Navigation
- **Mobile**: Hamburger with full-screen overlay menu, premium transitions
- **Desktop**: Horizontal navigation with micro-animations on hover
- **Sticky mobile bottom bar**: Luxury CTA ("Book Now — 10% off first visit") with gold accent

### Service Cards
- **Style**: Glassmorphic cards with blur effect and chrome borders
- **Interaction**: Hover reveals price-range, timeline, and icon animation
- **Action**: Opens modal with detailed info and booking CTA
- **Animation**: Micro-tilt on hover (3D transform), staggered reveal on scroll

### Gallery
- **Layouts**: Dual presentation - 3D carousel view AND masonry grid
- **Images**: Retain existing salon gallery images exactly as-is
- **Lightbox**: Fullscreen with swipe gestures, keyboard arrows, and metadata overlay
- **Grid**: Responsive masonry with intersection-observer lazy loading

### Forms (Contact/Booking)
- **Style**: Multi-step modern form with floating labels
- **Validation**: Inline validation with accessible error states
- **Success State**: Animated confetti/Lottie celebration with calendar link
- **Steps**: Phone/email → service selection → date/time → notes
- **CTAs**: Prominent luxury pill buttons with gold shine animation

### Marquee
- **Content**: Client testimonials, brands, or services
- **Animation**: Slow, hardware-accelerated CSS transform (infinite loop)
- **Interaction**: Pause on hover/tap, smooth resume

### CTA Buttons
- **Shape**: Luxurious pill/rounded rectangle
- **Style**: Small icon + text, gold (#D4AF37) accent
- **Hover**: Gold glow effect + micro-tilt transform
- **Press**: Scale down with ripple effect
- **Accessibility**: Reduced motion alternative available

### Footer
- **Content**: Social icons (Instagram, Facebook, YouTube, WhatsApp) with deep links
- **Structure**: Contact info, quick links, structured data implementation
- **Style**: Elegant spacing with subtle dividers

## Animations & Motion
- **Scroll Animations**: GSAP ScrollTrigger for section reveals, parallax, and pinning effects
- **3D Interactions**: react-three-fiber for hero model with physics-like motion
- **UI Transitions**: Framer Motion for component animations and page transitions
- **Vector Motion**: Lottie for loader, success states, and icon animations
- **Accessibility**: Respect prefers-reduced-motion, provide toggle option

## Page-Specific Guidelines

### Home
Sections: Hero (3D + CTAs) → Services Preview → Why Us → Testimonials Marquee → Gallery Strip → CTA Banner → Footer
All sections use scroll-triggered staggered reveal animations

### Services
Interactive cards in asymmetric grid, each opening detailed modal with booking flow

### About
Timeline layout with parallax images, team cards with hover 3D micro-tilt effects

### Gallery
Full gallery experience with carousel + masonry views, responsive lightbox

### Contact/Book
Multi-step booking form, map embed (static fallback), stylized contact info, WhatsApp quick action

## Images
**Hero**: Large 3D canvas element with static fallback image showing premium salon interior or styled model
**Gallery**: Retain all existing hairworkssalon.ca gallery images exactly as provided
**About**: Parallax team/salon images throughout timeline
**Services**: Icon animations (Lottie) rather than static images

## Accessibility
- Keyboard navigation for all interactions
- ARIA labels on all interactive elements
- Focus ring styles with high contrast
- Color contrast meeting WCAG standards
- Reduced motion preferences respected throughout
- Screen-reader friendly form validation and error messages
- Descriptive alt text for all images