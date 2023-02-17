import type { App } from 'vue';
import i18n from '@/locales';

export function loadVueI18n(app: App) {
  app.use(i18n);
}
