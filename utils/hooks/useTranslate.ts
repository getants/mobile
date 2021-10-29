import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import en from '../locales/en.json';
import fi from '../locales/fi.json';
import th from '../locales/th.json';

i18n.fallbacks = true;
i18n.translations = { en, fi, th };
i18n.locale = Localization.locale;

export { i18n };

export const useTranslate = () => ({
  t: (s: string) => i18n.t(s),
  getLocale: async () => Localization.getLocalizationAsync(),
});
