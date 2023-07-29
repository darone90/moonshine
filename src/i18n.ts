import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import processPL from './locale/pl/process.json';
import navigationPL from './locale/pl/navigation.json'

const resources = {
    pl: {
        translation: {
            process: processPL,
            navigation: navigationPL
        }
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng: 'pl',
    fallbackLng:'pl',
    interpolation: {
        escapeValue: false
    }
})

export default i18n
