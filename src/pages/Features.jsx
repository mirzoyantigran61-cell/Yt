import React from 'react'
import FeatureCards from '../components/FeatureCards'
import { useLanguage } from '../hooks/useLanguage'

const Features = () => {
  const { t } = useLanguage()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-orbitron font-bold">{t('features_title')}</h1>
        <p className="text-text-muted mt-4 max-w-2xl mx-auto">{t('features_subtitle')}</p>
      </div>
      <FeatureCards />
    </div>
  )
}

export default Features
