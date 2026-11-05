import react from '@astrojs/react';
import {defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://earendil-works.github.io',
  output: 'static',
  integrations: [react()],
});
