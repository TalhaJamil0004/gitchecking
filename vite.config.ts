import { defineConfig } from 'vite';

import sassDts from 'vite-plugin-sass-dts';

export default defineConfig({
  plugins: [ sassDts()], // Remove `vue()` if not using Vue

});
