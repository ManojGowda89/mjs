const isBrowser = typeof window !== 'undefined';

export const VITE_API_URL = isBrowser
  ? import.meta.env.VITE_API_URL
  : process.env.VITE_API_URL;

export const PORT = isBrowser
  ? undefined
  : parseInt(process.env.PORT, 10) || 3000;

export const SECRET_KEY = isBrowser
  ? undefined
  : process.env.SECRET_KEY;
