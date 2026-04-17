import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useImageManager } from '../hooks/useImageManager'

const FeatureCards = () => {
  const { t } = useLanguage()
  const { getImage } = useImageManager()
  const bannerImage = getImage('featureBanner') || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400'

  const features = [
    { icon: 'fa-bolt', title: t('feature_fast'), desc: t('feature_fast_desc') },
    { icon: 'fa-shield-alt', title: t('feature_security'), desc: t('feature_security_desc') },
    { icon: 'fa-headset', title: t('feature_support'), desc: t('feature_support_desc') },
    { icon: 'fa-cloud-upload-alt', title: t('feature_cdn'), desc: t('feature_cdn_desc') },
  ]

  return (
    <div className="py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-orbitron font-bold">{t('features_title')}</h2>
          <p className="text-text-muted mt-4">{t('features_subtitle')}</p>
        </div>
        <div className="glass-premium p-2 rounded-2xl">
          <img src={bannerImage} alt="Features" className="w-full h-48 object-cover rounded-xl" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="card-premium group">
            <div className="w-14 h-14 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-4 group-hover:bg-neon-cyan/20 transition">
              <i className={`fas ${feature.icon} text-2xl text-neon-cyan`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-text-muted text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards
