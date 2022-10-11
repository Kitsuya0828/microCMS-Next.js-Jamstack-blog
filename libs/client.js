import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'tfkx3y4kgp',
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});