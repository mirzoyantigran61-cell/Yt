import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { useImageManager } from '../hooks/useImageManager'
import productsData from '../data/products'

const PricingCards = () => {
  const { t } = useLanguage()
  const { getImage } = useImageManager()
  const navigate = useNavigate()
  const bannerImage = getImage('pricingBanner') || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400'

  return (
    <div className="py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1 glass-premium p-2 rounded-2xl">
          <img src={bannerImage} alt="Pricing" className="w-full h-48 object-cover rounded-xl" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-orbitron font-bold">{t('pricing_title')}</h2>
          <p className="text-text-muted mt-4">{t('pricing_subtitle')}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {productsData.map((product, idx) => (
          <div key={idx} className={`card-premium ${product.popular ? 'border-2 border-neon-cyan relative' : ''}`}>
            {product.popular && (
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-neon-cyan text-bg-deep text-xs font-bold">
                {t('most_popular')}
              </div>
            )}
            <h3 className="text-2xl font-orbitron font-bold">{product.name}</h3>
            <p className="text-text-muted text-sm mt-2">{product.description}</p>
            <div className="mt-4">
              <span className="text-3xl font-bold text-neon-cyan">${product.price}</span>
              {product.oldPrice && <span className="text-text-muted line-through ml-2">${product.oldPrice}</span>}
              <span className="text-text-muted text-sm ml-1">/{product.period}</span>
            </div>
            <ul className="mt-6 space-y-2">
              {product.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2 text-text-secondary text-sm">
                  <i className="fas fa-check text-neon-cyan text-xs"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => navigate('/register')} className="w-full mt-8 btn-premium !py-3">
              {t('get_started')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingCards
