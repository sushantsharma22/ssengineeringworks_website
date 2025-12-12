# SS Engineering Works Website

Modern, futuristic website for SS Engineering Works - Premier pumping machinery service provider in Himachal Pradesh.

## Features

- 🌅 **Dynamic Day-Night Gradient Background** - Smooth scroll-based transition from sunrise to sunset
- 🎨 **Vibrant Color Scheme** - High-contrast cyan/navy colors for maximum visibility
- ⚡ **Motion-First Design** - GSAP & Framer Motion animations throughout
- 📱 **Fully Responsive** - Optimized for all devices
- 🚀 **Next.js 14+** - App Router with TypeScript
- 💎 **Glassmorphism UI** - Modern glass-effect components

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP 3.x + ScrollTrigger, Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sushantsharma22/ssengineeringworks_website.git

# Navigate to project directory
cd ssengineeringworks_website

# Install dependencies
npm install

# Run development server
npm run dev
```

### Custom Domain (Optional)

After deployment, you can add your custom domain:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `ssengineeringworks.com`)
3. Follow DNS configuration instructions

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── coverage/          # Coverage areas page
│   ├── workshop/          # Workshop page
│   ├── clients/           # Clients page
│   └── contact/           # Contact page
├── components/
│   ├── home/              # Home page components
│   └── layout/            # Layout components (Navbar, Footer, etc.)
└── hooks/                 # Custom React hooks

public/
└── images/                # Static images
```

## Key Components

- **DynamicBackground.tsx** - Scroll-based day-night gradient system
- **Navbar.tsx** - Responsive navigation with dynamic colors
- **HeroSection.tsx** - Landing section with stats
- **AboutSection.tsx** - Company history timeline
- **ServicesGrid.tsx** - Service offerings
- **WhyChooseUs.tsx** - Feature highlights

## License

© 2025 SS Engineering Works. All rights reserved.
