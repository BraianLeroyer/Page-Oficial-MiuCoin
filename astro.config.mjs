import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://astronaut.github.io',
  base: 'my-repo',
  integrations: [tailwind(), icon(), react()]
});