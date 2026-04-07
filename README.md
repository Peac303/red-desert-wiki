# Red Desert Wiki

A comprehensive wiki website for the Red Desert game by Pearl Abyss, built with Next.js 14, TypeScript, and Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

Red Desert Wiki is a fan-made wiki website dedicated to providing comprehensive information about the Red Desert game by Pearl Abyss. It features detailed guides, game database, community forums, and news updates all in one place.

## Features

- **Home Page**: Welcome section with game highlights and quick links
- **News Section**: Latest game updates and announcements
- **Guides Section**: Detailed guides for classes, dungeons, resources, and combat
- **Database Section**: Comprehensive database of characters, weapons, maps, and items
- **Community Section**: Forums, leaderboards, and media sharing
- **Responsive Design**: Fully responsive layout for all devices
- **Desert Theme**: Consistent desert-themed UI design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/red-desert-wiki.git
   cd red-desert-wiki
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open the application**

   Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production

1. **Build the application**

   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

2. **Start the production server**

   ```bash
   npm start
   # or
   yarn start
   # or
   pnpm start
   ```

## Deployment

### Vercel (Recommended)

1. **Sign up for Vercel** at [vercel.com](https://vercel.com)
2. **Connect your GitHub repository** to Vercel
3. **Deploy** the project with default settings
4. **Access your deployment** at the URL provided by Vercel

### Other Hosting Providers

The application can be deployed to any hosting provider that supports Next.js applications, such as:

- Netlify
- GitHub Pages (with Next.js export)
- AWS Amplify
- Google Cloud Platform

## Project Structure

```
red-desert-wiki/
├── app/
│   ├── components/        # Reusable components
│   ├── community/         # Community section
│   ├── database/          # Game database
│   ├── guides/            # Game guides
│   ├── news/              # News section
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # Project documentation
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Red Desert game by [Pearl Abyss](https://www.pearlabyss.com)
- All game-related content and images are property of Pearl Abyss
- This is a fan-made project and is not affiliated with Pearl Abyss
