import {createI18n} from 'vue-i18n';
import { Settings } from 'luxon';
import {config} from "@/config";

export const defaultLocale = import.meta.env.VITE_DEFAULT_LOCALE || 'es-ES';
export const availableLocales = config.localization.locales || ['es_ES'];
export const userPreferredLocaleStorageKey = 'user-lcid';

const localeAliasMap: Record<string, string> = {
    ca: 'ca_ES',
    es: 'es_ES',
    en: 'en_GB',
    fr: 'fr_FR',
    it: 'it_IT'
};

const resolveInitialLocale = (): string => {

    const savedLang = localStorage.getItem(userPreferredLocaleStorageKey);

    if (savedLang && availableLocales.includes(savedLang)) {
        return savedLang;
    }

    const browserLocales = navigator.languages ?? [];

    for (const rawLocale of browserLocales) {

        if (availableLocales.includes(rawLocale)) {
            return rawLocale;
        }

        const mappedLocale = localeAliasMap[rawLocale];

        if (mappedLocale && availableLocales.includes(mappedLocale)) {
            return mappedLocale;
        }
    }

    return defaultLocale;
};

const locale = resolveInitialLocale();

// Configura Luxon
Settings.defaultLocale = locale;


const loadMessages = async (locale: string) => {
    document.documentElement.setAttribute('lang', locale.replace(/_/g, '-'));
    return await import(`@/i18n/locales/${locale}.ts`);
};

export const i18n = createI18n({
    locale,
    fallbackLocale: defaultLocale,
    messages: {},
});

loadMessages(locale).then(module => {
    i18n.global.setLocaleMessage(locale, module.default);
});