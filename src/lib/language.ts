
import { dictionary, locale, _ } from 'svelte-i18n';

function setupI18n({ withLocale: _locale } = { withLocale: 'de' }) {
    dictionary.set({
        en: {
            setup: {
                title: 'Setup',
                greeting: 'Thank you so much for participating in this study!',
                camera: 'First we need to ensure your camera is working correctly.',
                button: 'Allow camera',
                success: 'Perfect, your camera is working perfectly!',
            },
            stepper: {
                step: 'Step',
                next: 'Next',
                back: 'Back',
                complete: 'Complete',
            }
        },
        de: {
            setup: {
                title: 'Einrichtung',
                greeting: 'Vielen Dank, dass Sie an dieser Studie teilnehmen!',
                camera: 'Zuerst müssen wir sicherstellen, dass Ihre Kamera korrekt funktioniert.',
                button: 'Kamera freigeben',

                success: 'Perfekt, Ihre Kamera funktioniert einwandfrei!',
            },
            stepper: {
                step: 'Schritt',
                next: 'Weiter',
                back: 'Zurück',
                complete: 'Fertig',
            }
        },
    });
    locale.set(_locale);
}

export { _, setupI18n };