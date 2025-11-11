import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// Mock user data for demonstration
const mockUser = {
  id: 'demo-user-123',
  name: 'Demo User',
  email: 'demo@example.com',
  image: 'https://ui-avatars.com/api/?name=Demo+User&background=4285f4&color=fff&size=128',
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'mock-client-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'mock-client-secret',
      // Mock authorization for development
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET || 'development-secret-key',
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    // JWT callback to add user ID to token
    async jwt({ token, user, account }) {
      // Initial sign in - add user info to token
      if (user && account) {
        // For mock mode, use our demo user data
        if (process.env.NODE_ENV === 'development' || !process.env.GOOGLE_CLIENT_ID) {
          return {
            ...token,
            id: mockUser.id,
            name: mockUser.name,
            email: mockUser.email,
            picture: mockUser.image,
          }
        }
        // For real Google OAuth (when configured)
        return {
          ...token,
          id: user.id,
          picture: user.image,
        }
      }
      return token
    },
    // Session callback to add user info to session
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.name = token.name as string
        session.user.email = token.email as string
        session.user.image = token.picture as string
      }
      return session
    },
    // Redirect callback to handle post-authentication redirects
    async redirect({ url, baseUrl }) {
      // If the URL is relative, prepend the base URL
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`
      }
      // If the URL is on the same domain, allow it
      if (new URL(url).origin === baseUrl) {
        return url
      }
      // Default to dashboard after successful login
      return `${baseUrl}/dashboard`
    },
  },
  // Debug mode for development
  debug: process.env.NODE_ENV === 'development',
  // Configure secure cookies for production
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
}