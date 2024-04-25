
import { dictionary, locale, _ } from 'svelte-i18n';

function setupI18n({ withLocale: _locale } = { withLocale: 'de' }) {
    dictionary.set({
        en: {
            greeting: {
                title: 'Welcome',
                start: 'Thank you so much for participating in this study! <br>' +
                    'This survey will take approximately 10 minutes to complete.',
                comfy: 'Before starting, make sure you are in a comfortable and relaxed environment ' +
                    'and can take the survey without any interruption <br>',
                comfy_button: 'I am currently in a relaxed environment',
                camera: 'The survey consists of multiple segments where you will be shown a video. ' +
                    'During these segments your camera will be recording, which is indicated by this icon in the header:',
                camera_question: 'Are you okay with beeing recorded by the camera during the survey?',
                camera_button: 'I understand and agree to the camera recording',
                emotions: 'The videos of each segment will trigger different emotional reactions, the maximum rating following the Motion Picture Association film rating system is PG-13'
            },
            setup: {
                title: 'Setup',
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