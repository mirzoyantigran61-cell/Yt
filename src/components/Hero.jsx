import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { useImageManager } from '../hooks/useImageManager'
import { useAuth } from '../hooks/useAuth'

const Hero = () => {
  const { t } = useLanguage()
  const { user } = useAuth()
  const { getImage } = useImageManager()
  const navigate = useNavigate()
  
  const heroImage = getImage('heroImage') || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600'

  return (
    <div className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-violet/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-text-secondary text-lg mt-4 max-w-lg mx-auto lg:mx-0">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
              <button onClick={() => user ? navigate('/dashboard') : navigate('/register')} className="btn-premium">
                {t('cta_start')}
              </button>
              <button onClick={() => navigate('/contact')} className="btn-outline-premium">
                {t('cta_contact')}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="glass-premium p-2 rounded-2xl shadow-2xl">
              <img src={heroImage} alt="Platform Preview" className="w-full h-auto rounded-xl" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-cyan/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-violet/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
