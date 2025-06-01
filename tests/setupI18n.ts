import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            doctor_contact: {
                title: 'Doctor Contact Title',
                call_action: 'Call Doctor'
            }
        }
    }
});