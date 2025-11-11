# Web Login with Google Auth (Mock)

A Next.js demonstration project showcasing authentication capabilities using NextAuth.js in mock mode.

## Project Overview

This project implements a web login system with Google authentication simulation, built with:
- Next.js 14+ with App Router
- NextAuth.js v4 for authentication (mock mode)
- Tailwind CSS for styling
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
NODE_ENV=development
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Route group for auth pages
│   │   └── login/
│   │       └── page.tsx         # Login page
│   ├── dashboard/               # Protected route
│   │   └── page.tsx            # User dashboard
│   ├── api/auth/
│   │   └── [...nextauth]/       # NextAuth API route
│   ├── globals.css
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home/Landing page
├── components/                   # Reusable React components
│   ├── ui/                      # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Loading.tsx
│   ├── auth/                    # Authentication-specific components
│   └── layout/                  # Layout components
└── lib/                         # Utility functions and configurations
    ├── auth.ts                  # NextAuth configuration
    ├── types.ts                 # TypeScript type definitions
    └── utils.ts                 # General utilities
```

## Features

- ✅ Next.js 14+ with App Router setup
- ✅ TypeScript configuration
- ✅ Tailwind CSS styling
- ✅ NextAuth.js configuration (ready for implementation)
- ✅ Basic project structure
- ✅ Development environment setup

## Stories Implemented

- **1-1**: Project Infrastructure Setup ✅ (Current)
- **1-2**: NextAuth Mock Configuration (Pending)
- **1-3**: Basic Login Page Implementation (Pending)
- **1-4**: Mock Authentication Flow Implementation (Pending)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Development Notes

This is a demonstration project focused on implementing authentication patterns. The mock authentication mode allows for development without requiring real Google OAuth credentials.

## BMAD Workflow

This project was created using the BMAD (Business Model-driven Agile Development) workflow, specifically using the dev-story workflow for Story 1-1 implementation.