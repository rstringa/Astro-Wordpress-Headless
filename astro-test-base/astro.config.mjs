import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import auth from 'auth-astro';
import icon from "astro-icon";

export default defineConfig({
  prefetch: true,
  integrations:[auth(),icon()],
  output: 'server',
  adapter: vercel()

});
// import node from '@astrojs/node';

// export default defineConfig({
//   output: 'server',
//   adapter: node({
//     mode: 'standalone',
//   }),
//   })
