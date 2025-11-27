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

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (already done ✅)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository: `sushantsharma22/ssengineeringworks_website`
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live at: `https://ssengineeringworks-website.vercel.app`

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

## Color System

The website uses a dynamic color system that changes based on scroll position:

- **Dark backgrounds** (0-10%, 90-100%): White text, Light cyan accents
- **Light backgrounds** (10-90%): Deep navy text, Dark cyan accents
- **Gradients**: Smooth transition from navy/yellow → blue/white → navy/orange

## License

© 2025 SS Engineering Works. All rights reserved.

## Contact

- **Email**: contact@ssengineeringworks.com
- **Phone**: +91-XXXXXXXXXX
- **Location**: Himachal Pradesh, India
