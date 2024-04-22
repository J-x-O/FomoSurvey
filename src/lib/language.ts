
import { dictionary, locale, _ } from 'svelte-i18n';

function setupI18n({ withLocale: _locale } = { withLocale: 'de' }) {
    dictionary.set({
        en: {
            setup: {
                greeting: 'Thank you so much for participating in this study!',
                camera: 'First we need to ensure your camera is working correctly.',
                success: 'Perfect, your camera is working perfectly!',
            }
        },
        de: {
            setup: {
                greeting: 'Vielen Dank, dass Sie an dieser Studie teilnehmen!',
                camera: 'Zuerst müssen wir sicherstellen, dass Ihre Kamera korrekt funktioniert.',

                success: 'Perfekt, Ihre Kamera funktioniert einwandfrei!',
            }
        },
    });
    locale.set(_locale);
}

export { _, setupI18n };