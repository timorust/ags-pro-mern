import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: {
			welcome: "Welcome",
			// תרגומים נוספים באנגלית
		}
	},
	az: {
		translation: {
			welcome: "Xoş gəlmisiniz",
			// תרגומים נוספים באזרית
		}
	}
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en', // ברירת מחדל (התחלתית)
		interpolation: {
			escapeValue: false // לא נדרש עבור React
		}
	})

export default i18n
