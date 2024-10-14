import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: '/music03/',
  },
  html: {
    title: 'ndzy',
    favicon: 'https://cdn.jsdelivr.net/gh/ndzy01/img/ndzy.png',
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-module',
    },
  },
});
