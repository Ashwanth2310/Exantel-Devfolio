declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
      CLERK_SECRET_KEY: string;
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string;
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string;
    }
  }

  var mongoose: {
    conn: any | null;
    promise: Promise<any> | null;
  };
} 