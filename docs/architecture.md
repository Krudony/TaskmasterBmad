# Web Login with Google Auth (Mock) - System Architecture

**Author:** BMad Architecture Workflow
**Date:** 2025-11-11
**Version:** 1.0
**Status:** Draft

---

## Executive Summary

This document outlines the technical architecture for the Web Login with Google Auth (Mock) system, a Next.js-based authentication demonstration project. The architecture prioritizes simplicity, rapid development, and professional user experience while maintaining clean code patterns and security best practices.

### Architecture Principles

1. **Simplicity First**: Minimal dependencies and straightforward implementation patterns
2. **Mock Realism**: Authentic user experience despite using mock authentication
3. **Rapid Development**: 1-2 hour implementation timeline
4. **Extensibility**: Clean architecture that can evolve to production requirements
5. **Security by Design**: Proper security practices even in mock implementation

---

## System Overview

### High-Level Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User Browser  │────│   Next.js App    │────│  NextAuth.js    │
│                 │    │                  │    │   (Mock Mode)   │
│ - React UI      │    │ - App Router     │    │                 │
│ - Session Mgmt  │    │ - Route Guards   │    │ - Mock Provider │
│ - State Mgmt    │    │ - API Routes     │    │ - Session Store │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Technology Stack

- **Frontend**: Next.js 14+ (App Router)
- **Authentication**: NextAuth.js v5 (Mock Mode)
- **Styling**: Tailwind CSS (for rapid development)
- **State Management**: React Context + NextAuth Session Provider
- **Deployment**: Vercel/Netlify (Static hosting compatible)

---

## Component Architecture

### 1. Application Structure

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
│   │   ├── LoginForm.tsx
│   │   ├── UserProfile.tsx
│   │   └── LogoutButton.tsx
│   └── layout/                  # Layout components
│       ├── Header.tsx
│       └── Navbar.tsx
├── lib/                         # Utility functions and configurations
│   ├── auth.ts                  # NextAuth configuration
│   ├── types.ts                 # TypeScript type definitions
│   └── utils.ts                 # General utilities
└── styles/                      # Global styles and configurations
    └── globals.css
```

### 2. Core Components

#### Authentication Components

**LoginForm Component**
```typescript
interface LoginFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

// Features:
// - Google-style login button
// - Loading state during authentication
// - Error handling and display
// - Redirect after successful login
```

**UserProfile Component**
```typescript
interface UserProfileProps {
  user: User;
  showLogout?: boolean;
}

// Features:
// - User avatar display
// - Name and email display
// - Session status indicator
// - Optional logout button
```

**LogoutButton Component**
```typescript
interface LogoutButtonProps {
  onLogout?: () => void;
  variant?: 'primary' | 'secondary';
}

// Features:
// - Click to logout functionality
// - Confirmation dialog (optional)
// - Loading state during logout
```

### 3. Layout Architecture

#### Root Layout (`app/layout.tsx`)
- **SessionProvider**: Wraps entire application with auth context
- **Theme Provider**: Supports light/dark mode (future enhancement)
- **Base HTML Structure**: Metadata and global styles
- **Error Boundaries**: Graceful error handling

#### Route Protection Strategy
```typescript
// Middleware-based route protection
// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/login', request.url));
  }
}

// Protected routes: /dashboard/*
// Public routes: /, /login
```

---

## Data Flow Architecture

### 1. Authentication Flow

```
User clicks "Login with Google"
        ↓
LoginForm Component
        ↓
NextAuth.js signIn('google')
        ↓
Mock Provider Response
        ↓
Session Created (JWT + Cookie)
        ↓
Redirect to /dashboard
        ↓
Dashboard renders with user data
```

### 2. Session Management Flow

```
SessionProvider Context
        ↓
useSession() Hook
        ↓
Component State Updates
        ↓
UI Re-renders with auth state
        ↓
Route protection checks
        ↓
Navigation state updates
```

### 3. Data Flow Patterns

#### Client-Side Data Flow
```typescript
// 1. Session State
const { data: session, status } = useSession();

// 2. Loading States
if (status === 'loading') return <LoadingSpinner />;

// 3. Authentication Checks
if (!session) return <LoginForm />;

// 4. Authenticated Content
return <UserProfile user={session.user} />;
```

#### Server-Side Data Flow
```typescript
// Server components with session data
export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return <DashboardContent user={session.user} />;
}
```

---

## Security Architecture

### 1. Session Security

#### JWT Token Management
```typescript
// NextAuth.js Configuration
const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    maxAge: 24 * 60 * 60,
  },
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      },
    },
  },
};
```

#### Security Headers
```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];
```

### 2. Mock Provider Security

#### Safe Mock Implementation
```typescript
// Mock Google Provider
const GoogleProvider = {
  id: 'google',
  name: 'Google',
  type: 'oauth',

  // Mock profile data (static for demo)
  profile: (profile: any) => ({
    id: '123456789',
    name: 'Demo User',
    email: 'demo@example.com',
    image: 'https://via.placeholder.com/150',
  }),

  // Mock authorization
  authorization: {
    params: {
      prompt: 'consent',
      access_type: 'offline',
      response_type: 'code',
    },
  },
};
```

### 3. Input Validation

#### Client-Side Validation
```typescript
// Form validation helpers
const validateLoginForm = (email: string, password: string) => {
  const errors: Record<string, string> = {};

  if (!email || !email.includes('@')) {
    errors.email = 'Valid email required';
  }

  return Object.keys(errors).length === 0 ? null : errors;
};
```

#### Server-Side Sanitization
```typescript
// API route input sanitization
import { z } from 'zod';

const authSchema = z.object({
  email: z.string().email(),
  callbackUrl: z.string().url().optional(),
});

// Validate all incoming authentication requests
```

---

## Performance Architecture

### 1. Bundle Optimization

#### Code Splitting Strategy
```typescript
// Dynamic imports for heavy components
const DashboardChart = dynamic(() => import('@/components/DashboardChart'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

// Route-based splitting automatic with Next.js App Router
```

#### Bundle Size Targets
- **Initial Load**: < 200KB gzipped
- **Login Page**: < 100KB gzipped
- **Dashboard**: < 150KB gzipped
- **Total Bundle**: < 400KB gzipped

### 2. Caching Strategy

#### Static Asset Caching
```typescript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['example.com'],
    loader: 'default',
  },
};
```

#### API Response Caching
```typescript
// Session data caching
const sessionCache = new Map<string, any>();

// Cache session data for 5 minutes
const cacheKey = `session:${session?.user?.email}`;
const cachedData = sessionCache.get(cacheKey);
```

### 3. Loading States

#### Progressive Loading
```typescript
// Skeleton components for better UX
const UserProfileSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
    <div className="h-4 bg-gray-300 rounded w-48 mt-4"></div>
  </div>
);
```

---

## Development Architecture

### 1. Development Environment Setup

#### Required Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "next-auth": "^5.0.0",
    "tailwindcss": "^3.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

#### Environment Configuration
```bash
# .env.local
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
NODE_ENV=development
```

### 2. Code Organization Patterns

#### Component Pattern Standards
```typescript
// Consistent component structure
interface ComponentProps {
  // Prop definitions with TypeScript
}

export const ComponentName: React.FC<ComponentProps> = ({
  // Destructured props
}) => {
  // 1. Hooks (useState, useEffect, etc.)
  // 2. Event handlers
  // 3. Derived state
  // 4. JSX return

  return (
    <div className="component-styles">
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

#### Custom Hook Patterns
```typescript
// Custom hooks for complex logic
export const useAuthStatus = () => {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';
  const isAuthenticated = status === 'authenticated';

  return { session, isLoading, isAuthenticated };
};
```

### 3. Testing Architecture

#### Component Testing Strategy
```typescript
// Jest + React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';

// Mock session provider wrapper
const withSessionProvider = (component: React.ReactElement) => (
  <SessionProvider session={mockSession}>
    {component}
  </SessionProvider>
);
```

---

## Implementation Roadmap

### Phase 1: Core Infrastructure (45 minutes)

#### 1.1 Project Setup (10 minutes)
- [ ] Initialize Next.js project with TypeScript
- [ ] Install NextAuth.js and Tailwind CSS
- [ ] Configure development environment
- [ ] Set up basic folder structure

#### 1.2 Authentication Configuration (15 minutes)
- [ ] Configure NextAuth.js with mock Google provider
- [ ] Set up API routes for authentication
- [ ] Create basic middleware for route protection
- [ ] Test authentication flow

#### 1.3 Basic UI Components (20 minutes)
- [ ] Create base UI components (Button, Card, Loading)
- [ ] Implement login page with Google-style button
- [ ] Create basic dashboard layout
- [ ] Set up routing and navigation

### Phase 2: User Experience (30 minutes)

#### 2.1 Session Management (15 minutes)
- [ ] Implement SessionProvider in root layout
- [ ] Create user profile display component
- [ ] Add logout functionality
- [ ] Handle loading and error states

#### 2.2 Route Protection (15 minutes)
- [ ] Implement middleware-based route protection
- [ ] Create proper redirects for unauthenticated users
- [ ] Add session persistence across page refreshes
- [ ] Test complete authentication flow

### Phase 3: Polish & Enhancement (45 minutes)

#### 3.1 Styling & UX (20 minutes)
- [ ] Refine UI with Tailwind CSS
- [ ] Add responsive design for mobile
- [ ] Implement loading states and transitions
- [ ] Add error handling and user feedback

#### 3.2 Performance & Security (15 minutes)
- [ ] Optimize bundle size and loading performance
- [ ] Implement security headers and best practices
- [ ] Add input validation and sanitization
- [ ] Test accessibility features

#### 3.3 Testing & Documentation (10 minutes)
- [ ] Test complete user flow
- [ ] Document key implementation decisions
- [ ] Prepare deployment configuration
- [ ] Final code review and cleanup

---

## File Structure Recommendations

### 1. Production-Ready Structure

```
web-login-mock/
├── public/                      # Static assets
│   ├── icons/
│   │   └── google.svg
│   └── images/
│       └── placeholder-avatar.png
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (auth)/             # Auth route group
│   │   │   └── login/
│   │   │       └── page.tsx
│   │   ├── dashboard/          # Protected routes
│   │   │   ├── loading.tsx     # Loading state
│   │   │   ├── layout.tsx      # Dashboard layout
│   │   │   └── page.tsx
│   │   ├── api/auth/           # Authentication API
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable components
│   │   ├── ui/                # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── index.ts
│   │   ├── auth/              # Auth-specific components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── LogoutButton.tsx
│   │   │   ├── UserProfile.tsx
│   │   │   └── index.ts
│   │   └── layout/            # Layout components
│   │       ├── Header.tsx
│   │       ├── Navbar.tsx
│   │       └── index.ts
│   ├── lib/                   # Configuration and utilities
│   │   ├── auth.ts           # NextAuth configuration
│   │   ├── types.ts          # TypeScript definitions
│   │   ├── utils.ts          # Utility functions
│   │   └── constants.ts      # App constants
│   └── hooks/                # Custom React hooks
│       ├── useAuthStatus.ts
│       ├── useRequireAuth.ts
│       └── index.ts
├── styles/                   # Additional styles
│   └── globals.css
├── tests/                    # Test files
│   ├── components/
│   └── __mocks__/
├── .env.local               # Environment variables
├── .eslintrc.json          # ESLint configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

### 2. Component Organization Strategy

#### UI Component Library (`components/ui/`)
```typescript
// components/ui/index.ts - Barrel exports
export { Button } from './Button';
export { Card } from './Card';
export { Loading } from './Loading';
export { Input } from './Input';
export { Modal } from './Modal';
```

#### Authentication Components (`components/auth/`)
```typescript
// components/auth/index.ts
export { LoginForm } from './LoginForm';
export { UserProfile } from './UserProfile';
export { LogoutButton } from './LogoutButton';
export { AuthGuard } from './AuthGuard';
```

### 3. Configuration Files

#### NextAuth Configuration (`lib/auth.ts`)
```typescript
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // ... rest of configuration
};
```

#### Type Definitions (`lib/types.ts`)
```typescript
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image: string;
}
```

---

## Best Practices & Guidelines

### 1. Code Quality

#### TypeScript Standards
- **Strict mode enabled**: `strict: true` in tsconfig.json
- **Type safety**: No `any` types allowed
- **Interface definitions**: All props typed explicitly
- **Component patterns**: Consistent React.FC usage

#### Code Organization
- **Single responsibility**: Each component has one clear purpose
- **Consistent naming**: kebab-case for files, PascalCase for components
- **Barrel exports**: Index files for clean imports
- **Custom hooks**: Complex logic extracted into reusable hooks

### 2. Performance Best Practices

#### Optimization Techniques
```typescript
// Dynamic imports for code splitting
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
});

// Memoization for expensive computations
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => processData(data), [data]);
  return <div>{processedData}</div>;
});

// Callback optimization
const handleClick = useCallback((id: string) => {
  onClick(id);
}, [onClick]);
```

#### Bundle Optimization
- **Tree shaking**: Unused code eliminated
- **Image optimization**: Next.js Image component
- **Font optimization**: Next.js Font optimization
- **CSS optimization**: Tailwind CSS purging

### 3. Security Best Practices

#### Input Validation
```typescript
// Zod schema validation
const userSchema = z.object({
  email: z.string().email('Invalid email format'),
  name: z.string().min(1, 'Name is required'),
});

// Server-side validation
const validatedData = userSchema.parse(requestBody);
```

#### Session Security
- **HTTP-only cookies**: Prevent XSS attacks
- **Secure flag**: HTTPS-only in production
- **SameSite policy**: CSRF protection
- **Short token lifetimes**: Reduced exposure window

### 4. Testing Guidelines

#### Component Testing
```typescript
// Example test structure
describe('LoginForm', () => {
  it('renders login button', () => {
    render(<LoginForm />);
    expect(screen.getByRole('button', { name: /login with google/i })).toBeInTheDocument();
  });

  it('calls signIn when button clicked', async () => {
    const mockSignIn = jest.fn();
    render(<LoginForm onSignIn={mockSignIn} />);

    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(mockSignIn).toHaveBeenCalledWith('google'));
  });
});
```

#### Integration Testing
- **Authentication flow**: End-to-end login/logout testing
- **Route protection**: Unauthorized access testing
- **Session persistence**: Page refresh behavior testing

---

## Deployment Architecture

### 1. Deployment Options

#### Vercel (Recommended)
```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "env": {
    "NEXTAUTH_URL": "@nextauth_url",
    "NEXTAUTH_SECRET": "@nextauth_secret"
  }
}
```

#### Netlify
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

### 2. Environment Configuration

#### Production Environment Variables
```bash
# Production .env
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-secret-key
NODE_ENV=production
```

#### Development Environment Variables
```bash
# Development .env.local
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-development-secret-key
NODE_ENV=development
```

---

## Monitoring & Analytics

### 1. Performance Monitoring

#### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### Custom Metrics
```typescript
// Performance tracking
const trackPageView = (url: string) => {
  // Analytics implementation
};

const trackAuthEvent = (event: string, properties?: Record<string, any>) => {
  // Authentication event tracking
};
```

### 2. Error Monitoring

#### Error Boundary Implementation
```typescript
// Error boundary for graceful error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
```

---

## Future Extensibility

### 1. Production Migration Path

#### Real Google OAuth Integration
```typescript
// Replace mock provider with real Google OAuth
const GoogleProvider = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  authorization: {
    params: {
      prompt: 'consent',
      access_type: 'offline',
      response_type: 'code',
    },
  },
};
```

#### Database Integration
```typescript
// Database adapter for session persistence
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from './lib/mongodb';

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  // ... rest of configuration
};
```

### 2. Feature Expansion

#### Multi-Provider Support
- GitHub OAuth
- Microsoft OAuth
- Email/password authentication
- SSO integration

#### Advanced Features
- Two-factor authentication
- User profile management
- Role-based access control
- Audit logging

---

## Conclusion

This architecture provides a solid foundation for the Web Login with Google Auth (Mock) project that balances:

- **Rapid Development**: 1-2 hour implementation timeline
- **Code Quality**: Clean, maintainable, and extensible code
- **Security**: Proper security practices even in mock mode
- **User Experience**: Professional and polished interface
- **Future Growth**: Clear path to production-ready features

The architecture follows Next.js 14+ best practices, implements proper authentication patterns, and provides a solid foundation for demonstrating the integration capabilities of Taskmaster and BMAD workflow tools.

---

## Implementation Checklist

### Pre-Development Setup
- [ ] Review and approve architecture document
- [ ] Set up development environment
- [ ] Install required dependencies
- [ ] Configure version control

### Development Phase 1
- [ ] Initialize Next.js project
- [ ] Configure NextAuth.js with mock provider
- [ ] Create basic folder structure
- [ ] Set up routing and navigation

### Development Phase 2
- [ ] Implement login page and form
- [ ] Create dashboard with user profile
- [ ] Add route protection and middleware
- [ ] Implement session management

### Development Phase 3
- [ ] Style components with Tailwind CSS
- [ ] Add loading states and error handling
- [ ] Implement responsive design
- [ ] Test complete authentication flow

### Post-Development
- [ ] Performance optimization
- [ ] Security audit
- [ ] Documentation updates
- [ ] Deployment preparation

---

*This architecture document serves as the technical foundation for implementing the Web Login with Google Auth (Mock) system, providing clear guidance for rapid development while maintaining high code quality and security standards.*