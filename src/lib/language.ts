
import { dictionary, locale, _ } from 'svelte-i18n';
import {derived, readable} from "svelte/store";

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
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
                emotion: 'The videos of each segment will trigger different emotional reactions, with the maximum rating following the Motion Picture Association film rating system being PG-13',
                emotion_button: 'I understand and agree to partake in this study'
            },
            setup: {
                title: 'Setup',
                camera: 'First we need to ensure your camera is working correctly.',
                button: 'Allow camera',
                success: 'Perfect, your camera is working, please ensure you are visible in the camera frame and the room is well lit',
                confirm: 'I am visible and the lights are turned on',
            },
            emotions: {
                neutral: 'Neutral',
                fear: 'Fear',
                anger: 'Anger',
                disgust: 'Disgust',
                happiness: 'Happiness',
                sadness: 'Sadness',
                surprise: 'Surprise',
            },
            demographic: {
                title: 'Demographics',
                age: 'How old are you?',
                gender: 'What gender do you identify as?',
                gender_placeholder: 'Please select',
                gender_male: 'male',
                gender_female: 'female',
                gender_other: 'other',
            },
            bias: {
                title: 'Emotionality',
                strength: 'How strongly do you feel the following emotions?',
                strength_pre: 'very weak',
                strength_post: 'very strong',
            },
            reaction: {
                title: 'Video',
                loading: 'starting...',

                valence_question: 'To what extent did this make you feel pleasant?',
                valence_left: 'very unpleasant',
                valence_right: 'very pleasant',

                arousal_question: 'To what extent did this make you feel stimulated?',
                arousal_left: 'more subdued',
                arousal_right: 'more stimulated',

                intensity_question: 'How intense was the felt emotion?',
                intensity_left: 'very weak',
                intensity_right: 'very strong',

                class_question: 'Which word would you use to describe the emotion?',
            },
            stepper: {
                step: 'Step',
                next: 'Next',
                back: 'Back',
                complete: 'Complete',
            },
            finalize: {
                title: 'Finalization',
                upload: 'Thank you for your time! <br>' +
                    'Please wait while your data is being uploaded.',
                finished: 'Your data has been successfully uploaded. <br>' +
                    'You can now close this tab.',
                thanks: 'Thank you so much for participating in this study!'
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
                emotion: 'Die Videos jedes Segments werden unterschiedliche emotionale Reaktionen auslösen, wobei die maximale Bewertung gemäß dem Film-Bewertungssystem der Motion Picture Association PG-13 entspricht',
                emotion_button: 'Ich verstehe und stimme zu an dieser Studie teilzunehmen'
            },
            setup: {
                title: 'Einrichtung',
                camera: 'Zuerst müssen wir sicherstellen, dass Ihre Kamera korrekt funktioniert.',
                button: 'Kamera freigeben',
                success: 'Perfekt, Ihre Kamera funktioniert, bitte stellen Sie sicher, dass Sie im Kamerarahmen sichtbar sind und der Raum gut beleuchtet ist',
                confirm: 'Ich bin sichtbar und das Licht ist eingeschaltet',
            },
            emotions: {
                neutral: 'Neutral',
                fear: 'Angst',
                anger: 'Wut',
                disgust: 'Ekel',
                happiness: 'Fröhlichkeit',
                sadness: 'Traurigkeit',
                surprise: 'Überraschung',
            },
            demographic: {
                title: 'Demographie',
                age: 'Wie alt sind Sie?',
                gender: 'Mit welchem Geschlecht identifizieren Sie sich?',
                gender_placeholder: 'Bitte auswählen',
                gender_male: 'Männlich',
                gender_female: 'Weiblich',
                gender_other: 'Divers',
            },
            bias: {
                title: 'Emotionalität',
                strength: 'Wie stark fühlen Sie die folgenden Emotionen?',
                strength_pre: 'sehr schwach',
                strength_post: 'sehr stark',
            },
            reaction: {
                title: 'Video',
                loading: 'startet...',

                valence_question: 'Zu welchem Ausmaß hat Sie das Video angenehm fühlen lassen?',
                valence_left: 'sehr unangenehm',
                valence_right: 'sehr angenehm',

                arousal_question: 'Zu welchem Ausmaß hat Sie das Video angeregt?',
                arousal_left: 'mehr gedämpft',
                arousal_right: 'mehr angeregt',

                intensity_question: 'Wie intensiv war die gefühlte Emotion?',
                intensity_left: 'sehr schwach',
                intensity_right: 'sehr stark',

                class_question: 'Welches Wort würden Sie verwenden, um die Emotion zu beschreiben?',
            },
            stepper: {
                step: 'Schritt',
                next: 'Weiter',
                back: 'Zurück',
                complete: 'Fertig',
            },
            finalize: {
                title: 'Finalisierung',
                upload: 'Vielen Dank für Ihre Zeit! <br>' +
                    'Bitte warten Sie, während Ihre Daten hochgeladen werden.',
                finished: 'Ihre Daten wurden erfolgreich hochgeladen. <br>' +
                    'Sie können jetzt diesen Tab schließen.',
                thanks: 'Vielen Dank, dass Sie an dieser Studie teilgenommen haben!'
            }
        },
    });
    locale.set(_locale);
}

export { _, setupI18n };