// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  /** Все страницы рендерятся на сервере при каждом запросе */
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    /** Слушать 0.0.0.0, а не localhost: иначе приложение недоступно снаружи контейнера */
    host: true
  }
});
