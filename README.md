# DrXCloudPhone

<div align="center">

<img src="./public/logo.png" alt="DrXCloudPhone Logo" width="180" />

**The only wireless system operating millions of iPhones & Samsungs, processing native original videos to legitimately bypass platform policies.**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Available Scripts](#-available-scripts)
- [Key Features & Components](#-key-features--components)
- [Pricing Plans](#-pricing-plans)
- [Platform Support](#-platform-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Links](#-links)

---

## 🎯 About

DrXCloudPhone is a cutting-edge wireless device management system designed to operate millions of iPhone and Samsung devices at scale. The platform processes native original videos to legitimately bypass platform policies with maximum effectiveness, making it ideal for businesses operating across multiple social media and e-commerce platforms.

### Core Value Proposition

- **Wireless Device Management**: Operate millions of devices without physical constraints
- **Native Video Processing**: Process original videos to maximize platform policy compliance
- **Account Trust Optimization**: Thoroughly optimized to maximize account trust and operation lifespan
- **AI-Powered Ecosystem**: Integrated with DrXAIKOC, DrXAIStudio, and DrXAIChat for enhanced automation
- **Multi-Platform Support**: Seamless integration with TikTok, Facebook, Instagram, Google, YouTube, Shopee, and X

---

## ✨ Features

### 🚀 Core Capabilities

- **Millions of Devices**: The only wireless system operating millions of iPhones & Samsungs for maximum scale and efficiency
- **Native Video Processing**: Process original videos to legitimately bypass platform policies with maximum effectiveness
- **Strong AI Ecosystem**: Direct API connection with DrXAIKOC, DrXAIStudio for AI-powered creative content generation
- **DrXAIChat Integration**: Consolidates all customer messages from Page and seeding accounts, finalizing orders on the spot
- **Account Trust Optimization**: Thoroughly optimized to maximize account trust and operation lifespan, addressing core business pain points
- **Platform Coverage**: Support all major platforms: TikTok, Facebook, Instagram, Google, YouTube, Shopee, and X
- **Feedback-Driven**: Continuously improved based on user feedback to best suit your needs
- **Highest Efficiency**: Streamlined operations and automated workflows ensure maximum productivity and minimal manual intervention

### 🎨 UI/UX Features

- Modern, responsive design with dark mode support
- Smooth animations powered by Framer Motion and GSAP
- Interactive components built with Radix UI
- Custom Tailwind CSS configuration with advanced utilities
- Optimized performance with Next.js 14 App Router

---

## 🛠 Tech Stack

### Core Framework
- **[Next.js 14.2.6](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
  - Accordion, Avatar, Dialog, Dropdown Menu, Navigation Menu, Progress, Select, Tabs, Tooltip
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[GSAP](https://gsap.com/)** - Professional animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolvers

### Additional Libraries
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode support
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Recharts](https://recharts.org/)** - Chart library
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel component
- **[React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt)** - 3D tilt effects
- **[React Use](https://github.com/streamich/react-use)** - React hooks collection

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **pnpm** (recommended) or npm/yarn
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/drx-cloud-phone.git
cd drx-cloud-phone
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Set up environment variables**

Copy the example environment file and fill in your values:

```bash
cp env.example .env.local
```

Edit `.env.local` with your configuration:

```env
NEXT_PUBLIC_APP_NAME=DrXCloudPhone
NEXT_PUBLIC_APP_DOMAIN=your-domain.com
```

### Running the Project

**Development Mode**

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

**Production Build**

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

**Linting**

```bash
pnpm lint
# or
npm run lint
```

---

## 📁 Project Structure

```
drx-cloud-phone/
├── public/                 # Static assets
│   ├── brands/            # Brand logos (Facebook, Google, Instagram, etc.)
│   ├── fonts/             # Custom fonts (Satoshi, Switzer, Walsheim)
│   ├── images/            # Image assets
│   ├── avatar.jpg         # Avatar image
│   ├── logo.png           # Logo
│   └── video.MP4          # Video assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (marketing)/   # Marketing pages group
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx   # Home page
│   │   └── layout.tsx     # Root layout
│   ├── components/        # React components
│   │   ├── global/        # Global components (Background, Container, etc.)
│   │   ├── marketing/     # Marketing page components
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── pricing.tsx
│   │   │   ├── reviews.tsx
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   └── ui/            # Reusable UI components (shadcn/ui)
│   ├── constants/         # Constants and configuration
│   │   ├── site.ts        # Site configuration
│   │   ├── plans.ts       # Pricing plans
│   │   ├── perks.ts       # Feature perks
│   │   ├── reviews.ts     # Customer reviews
│   │   └── links.ts       # Navigation links
│   ├── functions/         # Utility functions
│   │   ├── cn.ts          # Class name utility
│   │   └── metadata.ts    # Metadata generation
│   ├── hooks/             # Custom React hooks
│   │   ├── use-click-outside.ts
│   │   └── use-scroll-spy.ts
│   ├── lib/               # Library configurations
│   └── styles/            # Global styles
│       └── globals.css    # Global CSS with Tailwind
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
├── components.json        # shadcn/ui configuration
├── env.example            # Environment variables example
├── LICENSE                # MIT License
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── pnpm-lock.yaml         # pnpm lock file
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Application
NEXT_PUBLIC_APP_NAME=DrXCloudPhone
NEXT_PUBLIC_APP_DOMAIN=your-domain.com
```

### Next.js Configuration

The project is configured to allow images from `randomuser.me` for avatar generation. You can modify `next.config.mjs` to add additional image domains.

### Tailwind CSS

Custom Tailwind configuration includes:
- Custom color palette with CSS variables
- Custom fonts (Satoshi for headings, Inter for body)
- Custom animations (grid, marquee, ripple, spotlight, etc.)
- Custom utilities (bg-grid, bg-dot patterns)

### TypeScript

The project uses strict TypeScript configuration with path aliases:
- `@/*` maps to `./src/*`

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server on http://localhost:3000 |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint to check code quality |

---

## 🎨 Key Features & Components

### Marketing Components

- **Hero Section**: Eye-catching landing section with video background
- **Features Section**: Showcase of platform capabilities
- **Pricing Section**: Three-tier pricing plans (Starter, Professional, Enterprise)
- **Reviews Section**: Customer testimonials
- **Platform Orbit**: Interactive visualization of supported platforms
- **Companies Section**: Trusted brand logos
- **CTA Section**: Call-to-action for user conversion
- **Footer**: Comprehensive site navigation and links

### UI Components

Built with shadcn/ui and Radix UI primitives:
- Accordion, Avatar, Badge, Button, Card
- Carousel, Chart, Dialog, Dropdown Menu
- Form components (Input, Textarea, Select)
- Navigation Menu, Progress, Tabs, Tooltip
- Custom components: Blur Text, Border Beam, Magic Card, Particles, Spotlight, etc.

### Animation & Effects

- Smooth page transitions with Framer Motion
- GSAP animations for complex interactions
- Parallax tilt effects
- Particle effects
- Spotlight effects
- Grid and dot pattern backgrounds

---

## 💰 Pricing Plans

### Starter
- **Price**: $99/month or $990/year
- **Devices**: Up to 100 devices
- **Features**: Basic video processing, 3 platforms, community support

### Professional ⭐ Most Popular
- **Price**: $299/month or $2,990/year
- **Devices**: Up to 1,000 devices
- **Features**: Advanced native video processing, all platform integrations, priority support, full AI ecosystem access

### Enterprise
- **Price**: $999/month or $9,990/year
- **Devices**: Unlimited devices
- **Features**: Premium video processing, dedicated account manager, enterprise-grade security, 24/7 priority support, custom SLA

---

## 🌐 Platform Support

DrXCloudPhone supports integration with:

- **TikTok** - Short-form video content
- **Facebook** - Social media marketing
- **Instagram** - Visual content sharing
- **Google** - Search and advertising
- **YouTube** - Video content platform
- **Shopee** - E-commerce marketplace
- **X (Twitter)** - Social media platform

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Application**: [https://app.drxcloudphone.com](https://app.drxcloudphone.com)
- **Registration**: [https://app.drxcloudphone.com/register](https://app.drxcloudphone.com/register)
- **Documentation**: Coming soon
- **Support**: Contact us through the application

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts: Satoshi, Switzer, Walsheim

---

<div align="center">

**Made with ❤️ by the DrXCloudPhone Team**

[⬆ Back to Top](#drxcloudphone)

</div>

