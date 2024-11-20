import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from 'expo-localization';
import { format as formatDate } from 'date-fns';
import * as formatLocales from 'date-fns/locale'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

let shortLocale = Localization.locale.split('-')[0];

// import { LocaleConfig } from 'react-native-calendars';

// LocaleConfig.locales['de'] = {
//   monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
//   monthNamesShort: ['Jan','Feb','Mär','Apr','Mai', 'Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
//   dayNames: ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'],
//   dayNamesShort: ['Mo','Di','Mi','Do','Fr','Sa','So'],
//   today: 'Heute'
// };

// console.log(Localization.locale, shortLocale)

// LocaleConfig.defaultLocale = shortLocale;

export const format = (date, format) => {
  return formatDate(date, format, { locale: formatLocales[shortLocale] })
}

export const resources = {
  en: {
    translation: {
      "common_skip": "Skip",
      "common_next": "Next",
      "common_back": "Back",
      "common_done": "Done",
      "common_save": "Save",
      "common_fertility": "Fertility",
      "common_period": "Period",
      "common_average_cycle_length": "Average Cycle Length",
      "common_average_period_length": "Average Period Length",
      "common_cycle_length_status_0": "Unknown",
      "common_cycle_length_status_1": "Abnormal",
      "common_cycle_length_status_2": "Normal",
      "common_period_length_status_0": "Unknown",
      "common_period_length_status_1": "Abnormal",
      "common_period_length_status_2": "Normal",
      "common_cycle_status_0": "Unknown",
      "common_cycle_status_1": "Menstruation",
      "common_cycle_status_2": "Post-Menstruation",
      "common_cycle_status_3": "Fertility Window",
      "common_cycle_status_4": "Ovulation",
      "common_cycle_status_5": "Pre-Menstruation",
      "common_cycle_status_6": "Late Menstruation",
      "common_unit_day": "day",
      "common_unit_days": "days",
      "common_unknown_predicted": "Unknown predicted",
      "common_fertility_predicted": "Fertility predicted",
      "common_period_predicted": "Period predicted",
      "common_pms_predicted": "PMS predicted",
      "common_symptoms": "Symptoms",
      "common_fertility_0": "Unknown",
      "common_fertility_1": "Lowest chance of getting pregnant.",
      "common_fertility_2": "Low chance of getting pregnant.",
      "common_fertility_3": "High chance of getting pregnant.",
      "common_fertility_4": "Highest chance of getting pregnant.",
      "common_fertility_5": "Higher chance of getting pregnant.",
      "common_cycle_next_up_period_end": "Menstruation\nends in {{days}} days",
      "common_cycle_next_up_period_end_tomorrow": "Menstruation\nends tomorrow",
      "common_cycle_next_up_period_end_today": "Menstruation\nends today",
      "common_cycle_next_up_fertility_window_start": "Ferility Window\nstarts in {{days}} days",
      "common_cycle_next_up_fertility_window_start_tomorrow": "Ferility Window\nstarts tomorrow",
      "common_cycle_next_up_fertility_window_start_today": "Ferility Window\nstarts today",
      "common_cycle_next_up_ovulation_start": "Ovulation\n in {{days}} days",
      "common_cycle_next_up_ovulation_start_tomorrow": "Ovulation\ntomorrow",
      "common_cycle_next_up_ovulation_start_today": "Ovulation\n today",
      "common_cycle_next_up_fertility_window_end": "Fertility Windows\n ends in {{days}} days",
      "common_cycle_next_up_fertility_window_end_today": "Fertility Windows\n ends today",
      "common_cycle_next_up_fertility_window_end_tomorrow": "Fertility Windows\n ends tomorrow",
      "common_cycle_next_up_period_start": "Menstruation\nstarts in {{days}} days",
      "common_cycle_next_up_period_start_tomorrow": "Menstruation\nstarts tomorrow",
      "common_cycle_next_up_period_start_today": "Menstruation\nstarts today",
      "common_cycle_next_up_period_late": "Menstruation\nis late by {{days}} days",
      "common_period_start_in": "Next period starts in {{days}} days",
      "common_period_start_in_tomorrow": "Next period starts tomorrow",
      "common_tracking_option_bleeding_headline": "Period",
      "common_tracking_option_bleeding_1": "Light",
      "common_tracking_option_bleeding_2": "Medium",
      "common_tracking_option_bleeding_3": "Strong",
      "common_tracking_option_bleeding_4": "Spotting",
      "common_tracking_option_emotion_headline": "Emotion",
      "common_tracking_option_emotion_1": "Happy",
      "common_tracking_option_emotion_2": "Sad",
      "common_tracking_option_emotion_3": "Sensitive",
      "common_tracking_option_emotion_4": "PMS",
      "common_tracking_option_intercourse_headline": "Intercourse",
      "common_tracking_option_intercourse_1": "Unprotected",
      "common_tracking_option_intercourse_2": "Protected",
      "common_tracking_option_intercourse_3": "High Sex Drive",
      "common_tracking_option_intercourse_4": "Masturbation",
      "common_tracking_option_pain_headline": "Pain",
      "common_tracking_option_pain_1": "Cramps",
      "common_tracking_option_pain_2": "Headache",
      "common_tracking_option_pain_3": "Breast Tenderness",
      "common_tracking_option_pain_4": "Bloating",
      
      "screens_overview_title": "Overview",
      "screens_overview_tabTitle": "Overview",
      "screens_overview_go_back_to_today": "Go back to Today",
      "screens_overview_track_period_title": "Your Cycle Status",
      "screens_overview_track_period_body": "Add at least 2 days of your latest period to see your cycle status",
      "screens_overview_track_period_button": "Log Period",
      "screens_overview_add_period": "Add Period",
      
      "screens_calendar_title": "Calendar",
      "screens_calendar_tabTitle": "Calendar",
      "screens_calendar_no_symptoms_tracked": "No symptoms tracked.",
      "screens_calendar_add_symptoms": "Add symptoms",
      "screens_calendar_edit_symptoms": "Edit symptoms",
      
      "screens_settings_title": "Settings",
      "screens_settings_tabTitle": "Settings",
      "screens_settings_your_cycles": "Your Cycle",
      "screens_settings_your_data": "Your Data",
      "screens_settings_your_data_export": "Export",
      "screens_settings_your_data_import": "Import",
      "screens_settings_your_data_delete_data": "Reset data",
      "screens_settings_delete_data_modal_title": "Reset data",
      "screens_settings_delete_data_modal_body": "All tracked data including periods, symptoms and other features wseill be permanently deleted.",
      "screens_settings_delete_data_modal_notification": "Successfully deleted all data.",
      "screens_settings_delete_data_modal_confirm": "Reset data",
      "screens_settings_delete_data_modal_cancel": "Cancel",
      "screens_settings_help": "Help",
      "screens_settings_help_faq": "Frequently Asked Questions",
      "screens_settings_help_restart_intro": "Restart Intro",
      "screens_settings_about": "About",
      "screens_settings_about_tos": "Terms of use",
      "screens_settings_about_privacy": "Privacy Policy",
      "screens_settings_app_version": "App Version",

      "intro_welcome_title": "Welcome",
      "intro_welcome_body": "This is the Welcome",
      "intro_period_start_title": "When did your last period start?",
      "intro_period_start_body": "",
      "intro_period_start_hint": "",
      "intro_period_length_title": "How long does your period usually last?",
      "intro_period_length_body": "",
      "intro_period_length_hint": "",
      "intro_cycle_length_title": "How long is your typical cycle?",
      "intro_cycle_length_body": "",
      "intro_cycle_length_hint": "",
      "intro_predictions_title": "What prediction do you want to use?",
      "intro_predictions_body": "",
      "intro_predictions_hint": "",
      "intro_predictions_fertility_title": "Fertility",
      "intro_predictions_fertility_hint": "Shows possible fertility windows in the future.",
      "intro_predictions_period_title": "Period",
      "intro_predictions_period_hint": "Shows possible periods in the future.",
      "intro_predictions_pms_title": "PMS",
      "intro_predictions_pms_hint": "Shows possible PMS in the future.",
      
      "links_terms_of_use": "https://palila-app.notion.site/Terms-of-Use-7ed69653aa9742b5b8786200a066ba23",
      "links_privacy_policy": "https://palila-app.notion.site/Privacy-Policy-00655387c3d6485caaf6cf03b2642320",
      "links_faq": "https://palila-app.notion.site/FAQ-203ea667afd34096a8382a5c8fe18408",
      "links_cycle_length": "https://palila-app.notion.site/Cycle-Length-7a680ddc135841828ac9cb34de722ec2",
      "links_period_length": "https://palila-app.notion.site/Perid-Length-494d682b923f4d0a9d92bb07ad4a8395",
      "links_fertility": "https://palila-app.notion.site/Fertility-d44e83ae304640e3ba88977c212d5a8a",
    }
  },
  de: {
    translation: {
      "common_skip": "Überspringen",
      "common_next": "Weiter",
      "common_back": "Zurück",
      "common_done": "Abschließen",
      "common_save": "Speichern",
      "common_fertility": "Fruchtbarkeit",
      "common_period": "Periode",
      "common_average_cycle_length": "Durchschnittliche Zykluslänge",
      "common_average_period_length": "Durchschnittliche Periodenlänge",
      "common_cycle_length_status_0": "Unbekannt",
      "common_cycle_length_status_1": "Abnormal",
      "common_cycle_length_status_2": "Normal",
      "common_period_length_status_0": "Unbekannt",
      "common_period_length_status_1": "Abnormal",
      "common_period_length_status_2": "Normal",
      "common_cycle_status_0": "Unbekannt",
      "common_cycle_status_1": "Menstruation",
      "common_cycle_status_2": "Nach der Menstruation",
      "common_cycle_status_3": "Fruchtbarkeitsfenster",
      "common_cycle_status_4": "Eisprung",
      "common_cycle_status_5": "Vor der Menstruation",
      "common_cycle_status_6": "Menstruation verspätet",
      "common_unit_day": "Tag",
      "common_unit_days": "Tage",
      "common_unknown_predicted": "Unbekannt vorausgesagt",
      "common_fertility_predicted": "Fruchtbarkeit vorhergesagt",
      "common_period_predicted": "Periode vorhergesagt",
      "common_pms_predicted": "PMS vorhergesagt",
      "common_symptoms": "Symptome",
      "common_fertility_0": "Unbekannt",
      "common_fertility_1": "Geringe Chance, schwanger zu werden (am wenigsten fruchtbare Phase)",
      "common_fertility_2": "Geringe Chance, schwanger zu werden (weniger fruchtbare Phase).",
      "common_fertility_3": "Es ist möglich, schwanger zu werden.",
      "common_fertility_4": "Höchste Chance, schwanger zu werden.",
      "common_fertility_5": "Erhöhte Chance, schwanger zu werden.",
      "common_cycle_next_up_period_end": "Menstruation\nendet in {{days}} Tagen",
      "common_cycle_next_up_period_end_today": "Menstruation\nendet heute",
      "common_cycle_next_up_period_end_tomorrow": "Menstruation\nendet morgen",
      "common_cycle_next_up_fertility_window_start": "Fruchtbarkeit\nbeginnt in {{days}} Tagen",
      "common_cycle_next_up_fertility_window_start_tomorrow": "Fruchtbarkeit\nbeginnt morgen",
      "common_cycle_next_up_fertility_window_start_today": "Fruchtbarkeit\nbeginnt heute",
      "common_cycle_next_up_ovulation_start": "Eisprung\nin {{days}} Tagen",
      "common_cycle_next_up_ovulation_start_tomorrow": "Eisprung\ morgen",
      "common_cycle_next_up_fertility_window_end": "Fruchtbarkeit\nendet in {{days}} Tagen",
      "common_cycle_next_up_fertility_window_end_tomorrow": "Fruchtbarkeit\nendet morgen",
      "common_cycle_next_up_fertility_window_end_today": "Fruchtbarkeit\nendet heute",
      "common_cycle_next_up_period_start": "Menstruation\nbeginnt in {{days}} Tagen",
      "common_cycle_next_up_period_start_tomorrow": "Menstruation\nbeginnt morgen",
      "common_cycle_next_up_period_start_today": "Menstruation\nbeginnt morgen",
      "common_cycle_next_up_period_late": "Menstruation\nist {{days}} Tage verspätet",
      "common_period_start_in": "Nächste Periode beginnt in {{days}} Tagen",
      "common_period_start_in_tomorrow": "Nächste Periode beginnt morgen",
      "common_tracking_option_bleeding_headline": "Zeitraum",
      "common_tracking_option_bleeding_1": "Leicht",
      "common_tracking_option_bleeding_2": "Mittel",
      "common_tracking_option_bleeding_3": "Stark",
      "common_tracking_option_bleeding_4": "Tüpfelnd",
      "common_tracking_option_emotion_headline": "Emotion",
      "common_tracking_option_emotion_1": "Glücklich",
      "common_tracking_option_emotion_2": "Traurig",
      "common_tracking_option_emotion_3": "Empfindlich",
      "common_tracking_option_emotion_4": "PMS",
      "common_tracking_option_intercourse_headline": "Verkehr",
      "common_tracking_option_intercourse_1": "Ungeschützt",
      "common_tracking_option_intercourse_2": "Geschützt",
      "common_tracking_option_intercourse_3": "Hoher Sexualtrieb",
      "common_tracking_option_intercourse_4": "Selbstbefriedigung",
      "common_tracking_option_pain_headline": "Schmerz",
      "common_tracking_option_pain_1": "Krämpfe",
      "common_tracking_option_pain_2": "Kopfschmerzen",
      "common_tracking_option_pain_3": "Brustspannen",
      "common_tracking_option_pain_4": "Blähungen",
      
      "screens_overview_title": "Übersicht",
      "screens_overview_tabTitle": "Übersicht",
      "screens_overview_go_back_to_today": "Zurück zu Heute",
      "screens_overview_track_period_button": "Periode hinzufügen",
      "screens_overview_track_period_title": "Dein Zyklusstatus",
      "screens_overview_track_period_body": "Fügen Sie mindestens 3 Tage Ihrer letzten Periode hinzu, um Ihren Zyklusstatus zu sehen",
      "screens_overview_add_period": "Periode hinzufügen",
      
      "screens_calendar_title": "Kalender",
      "screens_calendar_tabTitle": "Kalender",
      "screens_calendar_no_symptoms_tracked": "Keine Symptome verfolgt.",
      "screens_calendar_add_symptoms": "Symptome hinzufügen",
      "screens_calendar_edit_symptoms": "Symptome bearbeiten",
      
      "screens_settings_title": "Einstellungen",
      "screens_settings_tabTitle": "Einstellungen",
      "screens_settings_your_cycles": "Dein Zyklus",
      "screens_settings_your_data": "Deine Daten",
      "screens_settings_your_data_export": "Exportieren",
      "screens_settings_your_data_import": "Importieren",
      "screens_settings_your_data_delete_data": "Daten zurücksetzen",
      "screens_settings_delete_data_modal_title": "Daten zurücksetzen",
      "screens_settings_delete_data_modal_body": "Alle aufgezeichneten Daten, einschließlich Perioden, Symptome und andere Merkmale, werden dauerhaft gelöscht",
      "screens_settings_delete_data_modal_notification": "Alle Daten wurden erfolgreich gelöscht.",
      "screens_settings_delete_data_modal_confirm": "Daten zurücksetzen",
      "screens_settings_delete_data_modal_cancel": "Abbrechen",
      "screens_settings_help": "Hilfe",
      "screens_settings_help_faq": "Häufig gestellte Fragen",
      "screens_settings_help_restart_intro": "Intro neustarten",
      "screens_settings_about": "Über",
      "screens_settings_about_tos": "Nutzungsbedingungen",
      "screens_settings_about_privacy": "Datenschutz",
      "screens_settings_app_version": "App-Version",
      
      "intro_welcome_title": "Willkommen",
      "intro_welcome_body": "Dies ist die Begrüßung",
      "intro_period_start_title": "Wann hat deine letzte Periode begonnen?",
      "intro_period_start_body": "",
      "intro_period_start_hint": "",
      "intro_period_length_title": "Wie lange dauert deine Periode normalerweise?",
      "intro_period_length_body": "",
      "intro_period_length_hint": "",
      "intro_cycle_length_title": "Wie lang ist dein typischer Zyklus?",
      "intro_cycle_length_body": "",
      "intro_cycle_length_hint": "",
      "intro_predictions_title": "Welche Vorhersage möchtest du verwenden?",
      "intro_predictions_body": "",
      "intro_predictions_hint": "",
      "intro_predictions_fertility_title": "Fruchtbarkeit",
      "intro_predictions_fertility_hint": "Zeigt mögliche Fruchtbarkeitsfenster in der Zukunft.",
      "intro_predictions_period_title": "Periode",
      "intro_predictions_period_hint": "Zeigt mögliche Perioden in der Zukunft.",
      "intro_predictions_pms_title": "PMS",
      "intro_predictions_pms_hint": "Zeigt mögliche PMS in der Zukunft.",

      "links_terms_of_use": "https://palila-app.notion.site/Terms-of-Use-7ed69653aa9742b5b8786200a066ba23",
      "links_privacy_policy": "https://palila-app.notion.site/Privacy-Policy-00655387c3d6485caaf6cf03b2642320",
      "links_faq": "https://palila-app.notion.site/FAQ-203ea667afd34096a8382a5c8fe18408",
      "links_cycle_length": "https://palila-app.notion.site/Cycle-Length-7a680ddc135841828ac9cb34de722ec2",
      "links_period_length": "https://palila-app.notion.site/Perid-Length-494d682b923f4d0a9d92bb07ad4a8395",
      "links_fertility": "https://palila-app.notion.site/Fertility-d44e83ae304640e3ba88977c212d5a8a",
    }
  }
};

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources,
  lng: Localization.locale || 'en',
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;