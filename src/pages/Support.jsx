import React, { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useToast } from '../hooks/useToast'
import faqData from '../data/faq'

const Support = () => {
  const { t } = useLanguage()
  const { addToast } = useToast()
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!subject || !message) {
      addToast('Please fill in all fields', 'error')
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      addToast('Ticket created successfully! We will respond within 24 hours.', 'success')
      setSubject('')
      setMessage('')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-orbitron font-bold text-center mb-4">{t('support_title')}</h1>
      <p className="text-text-muted text-center mb-12">We're here to help 24/7</p>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Create Ticket Form */}
        <div className="card-premium">
          <h3 className="text-xl font-semibold mb-4">Create Support Ticket</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-input" placeholder="Subject" required />
            <textarea rows="6" value={message} onChange={(e) => setMessage(e.target.value)} className="form-input" placeholder="Describe your issue..." required></textarea>
            <button type="submit" disabled={isSubmitting} className="btn-premium w-full !py-3">
              {isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : 'Submit Ticket'}
            </button>
          </form>
        </div>
        
        {/* Quick Contact */}
        <div className="space-y-6">
          <div className="card-premium">
            <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <i className="fab fa-telegram text-2xl text-neon-cyan"></i>
                <div>
                  <p className="text-sm text-text-muted">Telegram</p>
                  <p className="font-mono text-neon-cyan">@YourTigranmods</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <i className="fas fa-envelope text-2xl text-neon-cyan"></i>
                <div>
                  <p className="text-sm text-text-muted">Email</p>
                  <p className="font-mono text-neon-cyan">mirzoyantigran61@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <i className="fab fa-whatsapp text-2xl text-neon-cyan"></i>
                <div>
                  <p className="text-sm text-text-muted">WhatsApp</p>
                  <p className="font-mono text-neon-cyan">+374 99 123 456</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Preview */}
          <div className="card-premium">
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqData.slice(0, 3).map((item, idx) => (
                <div key={idx} className="faq-item cursor-pointer">
                  <div className="flex justify-between items-center py-2">
                    <h4 className="text-sm font-medium">{item.question}</h4>
                    <i className="fas fa-chevron-down text-text-muted text-xs"></i>
                  </div>
                  <div className="faq-answer hidden text-text-muted text-xs mt-2">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Full FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-orbitron font-bold text-center mb-8">{t('faq_title')}</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="faq-item bg-bg-card rounded-xl p-5 border border-white/10 hover:border-neon-cyan/30 transition cursor-pointer">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{item.question}</h3>
                <i className="fas fa-chevron-down text-text-muted transition-transform"></i>
              </div>
              <div className="faq-answer hidden mt-3 text-text-muted text-sm">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Support
