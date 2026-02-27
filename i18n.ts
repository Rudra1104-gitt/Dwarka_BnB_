import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "stays": "Stays",
        "guide": "Dwarka Guide",
        "blog": "Blog",
        "host": "Host",
        "wishlist": "Wishlist"
      },
      "hero": {
        "title": "Book Trusted Stays in Dwarka",
        "subtitle": "Find verified hotels, guest houses and homestays in Dwarka. Your spiritual journey starts with a comfortable stay."
      }
    }
  },
  hi: {
    translation: {
      "nav": {
        "home": "होम",
        "stays": "ठहरने की जगह",
        "guide": "द्वारका गाइड",
        "blog": "ब्लॉग",
        "host": "होस्ट बनें",
        "wishlist": "विशलिस्ट"
      },
      "hero": {
        "title": "द्वारका में भरोसेमंद स्टे बुक करें",
        "subtitle": "द्वारका में सत्यापित होटल, गेस्ट हाउस और होमस्टे खोजें। आपकी आध्यात्मिक यात्रा एक आरामदायक प्रवास के साथ शुरू होती है।"
      }
    }
  },
  gu: {
    translation: {
      "nav": {
        "home": "હોમ",
        "stays": "રહેવાની જગ્યા",
        "guide": "દ્વારકા માર્ગદર્શિકા",
        "blog": "બ્લોગ",
        "host": "યજમાન બનો",
        "wishlist": "વિશલિસ્ટ"
      },
      "hero": {
        "title": "દ્વારકા માં વિશ્વાસપાત્ર સ્ટે બુક કરો",
        "subtitle": "દ્વારકા માં ચકાસાયેલ હોટલ, ગેસ્ટ હાઉસ અને હોમસ્ટે શોધો. તમારી આધ્યાત્મિક યાત્રા આરામદાયક રોકાણ સાથે શરૂ થાય છે."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
