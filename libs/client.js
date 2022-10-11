import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'tfkx3y4kgp',
  apiKey: process.env.API_KEY,
});