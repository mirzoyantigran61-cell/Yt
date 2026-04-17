import React from 'react'
import { useLanguage } from '../hooks/useLanguage'

const LanguageSwitcher = () => {
  const { language, setLanguage, languages } = useLanguage()

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm transition-all ${language === lang.code ? 'bg-neon-cyan text-bg-deep' : 'bg-white/5 text-text-secondary hover:bg-white/10'}`}
        >
          {lang.flag} {lang.name}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
