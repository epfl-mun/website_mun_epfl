import { createI18n } from 'vue-i18n';

// Import the messages for each page
import homeEn from './locales/en/home.json';
import homeFr from './locales/fr/home.json';
import aboutEn from './locales/en/about.json';
import aboutFr from './locales/fr/about.json';
import EventsEn from './locales/en/events.json';
import EventsFr from './locales/fr/events.json';
import teamEn from './locales/en/team.json';
import teamFr from './locales/fr/team.json';
import conferenceEn from './locales/en/conference.json';
import conferenceFr from './locales/fr/conference.json';
import conference2024En from './locales/en/conference_2024.json';
import conference2024Fr from './locales/fr/conference_2024.json';
import navbarEn from './locales/en/navbar.json';
import navbarFr from './locales/fr/navbar.json';

// Define the messages for each language
const messages = {
  en: {
    home: homeEn,
    about: aboutEn,
    events: EventsEn,
    team: teamEn,
    conference: conferenceEn,
    conference_2024: conference2024En,
    navbar: navbarEn,

    // Add other pages as needed
  },
  fr: {
    home: homeFr,
    about: aboutFr,
    events: EventsFr,
    team: teamFr,
    conference: conferenceFr,
    conference_2024: conference2024Fr,
    navbar: navbarFr,

    // Add other pages as needed
  }
};

// Create the i18n instance
const i18n = createI18n({
  locale: 'en', // Set the default locale
  fallbackLocale: 'en', // Set the fallback locale
  messages, // Set the messages
});

export default i18n;