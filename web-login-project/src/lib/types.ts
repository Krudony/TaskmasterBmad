import { DefaultSession } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    picture?: string;
  }
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface AuthConfig {
  providers: any[];
  session: {
    strategy: 'jwt';
    maxAge: number;
  };
  secret: string;
}