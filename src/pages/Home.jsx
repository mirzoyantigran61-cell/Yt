import React from 'react'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import FeatureCards from '../components/FeatureCards'
import PricingCards from '../components/PricingCards'
import { useLanguage } from '../hooks/useLanguage'
import faqData from '../data/faq'
import testimonialsData from '../data/testimonials'

const Home = () => {
  const { t } = useLanguage()

  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatsSection />
        <FeatureCards />
        <PricingCards />
        
        {/* Testimonials */}
        <div className="py-16">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial, idx) => (
              <div key={idx} className="card-premium">
                <div className="flex items-center gap-3 mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-text-muted text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm italic">"{testimonial.content}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-neon-cyan text-xs"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ */}
        <div className="py-16">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12">{t('faq_title')}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item, idx) => (
              <div key={idx} className="faq-item bg-bg-card rounded-xl p-5 border border-white/10 hover:border-neon-cyan/30 transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{item.question}</h3>
                  <i className="fas fa-chevron-down text-text-muted transition-transform"></i>
                </div>
                <div className="faq-answer hidden mt-3 text-text-muted text-sm">
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
