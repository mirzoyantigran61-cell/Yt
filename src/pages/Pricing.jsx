import React from 'react'
import PricingCards from '../components/PricingCards'
import { useLanguage } from '../hooks/useLanguage'

const Pricing = () => {
  const { t } = useLanguage()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-orbitron font-bold">{t('pricing_title')}</h1>
        <p className="text-text-muted mt-4 max-w-2xl mx-auto">{t('pricing_subtitle')}</p>
      </div>
      <PricingCards />
    </div>
  )
}

export default Pricing
