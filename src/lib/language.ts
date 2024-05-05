
import { dictionary, locale, _ } from 'svelte-i18n';

function setupI18n({ withLocale: _locale } = { withLocale: 'de' }) {
    dictionary.set({
        en: {
            greeting: {
                title: 'Welcome',
                start: 'Thank you so much for participating in this study! <br>' +
                    'This survey will take approximately 10 minutes to complete.',
                comfy: 'Before starting, make sure you are in a comfortable and relaxed environment ' +
                    'and can take the survey without any interruption',
                comfy_button: 'I am currently in a relaxed environment',
                camera: 'The survey consists of multiple segments where you will be shown a video. ' +
                    'During these segments your camera will be recording, which is indicated by this icon in the header:',
                camera_active: 'Active',
                camera_inactive: 'Inactive',
                camera_question: 'Are you okay with being recorded during the survey?',
                camera_button: 'I understand and agree to the camera recording',
                emotions: 'The videos of each segment will trigger different emotional reactions, with the maximum rating following the Motion Picture Association film rating system being PG-13'
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
            greeting: {
                title: 'Willkommen',
                start: 'Vielen Dank, dass Sie an dieser Studie teilnehmen! <br>' +
                    'Die Umfrage wird etwa 10 Minuten in Anspruch nehmen.',
                comfy: 'Bevor Sie beginnen, stellen Sie sicher, dass Sie sich in einer bequemen und entspannten Umgebung befinden ' +
                    'und die Umfrage ohne Unterbrechungen durchführen können',
                comfy_button: 'Ich befinde mich aktuell in einem entspannten Umfeld',
                camera: 'Die Umfrage besteht aus mehreren Segmenten, in denen Ihnen ein Video gezeigt wird. ' +
                    'Während dieser Segmente wird Ihre Kamera aufzeichnen, was durch dieses Symbol in der Kopfzeile angezeigt wird:',
                camera_active: 'Aktiv',
                camera_inactive: 'Inaktiv',
                camera_question: 'Sind Sie damit einverstanden, während der Umfrage aufgezeichnet zu werden?',
                camera_button: 'Ich verstehe und stimme der Kameraaufzeichnung zu',
                emotions: 'Die Videos jedes Segments werden unterschiedliche emotionale Reaktionen auslösen, wobei die maximale Bewertung gemäß dem Film-Bewertungssystem der Motion Picture Association PG-13 entspricht'
            },
            setup: {
                title: 'Einrichtung',
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