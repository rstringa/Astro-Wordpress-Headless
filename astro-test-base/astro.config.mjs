import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
// import node from '@astrojs/node';

// export default defineConfig({
//   output: 'server',
//   adapter: node({
//     mode: 'standalone',
//   }),
//   })
