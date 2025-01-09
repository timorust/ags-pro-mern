import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation() // hook של i18next
	const [language, setLanguage] = useState(i18n.language)

	const toggleLanguage = () => {
		const newLanguage = language === 'en' ? 'az' : 'en'
		i18n.changeLanguage(newLanguage)
		setLanguage(newLanguage)
	}

	return (
		<div className='language-switcher'>
			<button onClick={toggleLanguage} className='flex items-center'>
				<span>{language === 'en' ? 'EN' : 'AZ'}</span>
				{/* <svg
					xmlns='http://www.w3.org/2000/svg'
					className='w-6 h-6 ml-2'
					viewBox='0 0 24 24'
					fill='currentColor'
					stroke='currentColor'
				>
					<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' />
				</svg> */}
			</button>
		</div>
	)
}

export default LanguageSwitcher
