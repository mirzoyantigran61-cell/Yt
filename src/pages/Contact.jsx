import React, { useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useImageManager } from '../hooks/useImageManager'
import QRCode from 'qrcode'

const Contact = () => {
  const { t } = useLanguage()
  const { getImage } = useImageManager()
  const telegramRef = useRef(null)
  const instagramRef = useRef(null)
  const whatsappRef = useRef(null)
  
  const bannerImage = getImage('contactBanner') || 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600'

  const contacts = [
    { icon: 'fa-envelope', label: 'Email', value: 'mirzoyantigran61@gmail.com', action: 'mailto:mirzoyantigran61@gmail.com' },
    { icon: 'fa-telegram', label: 'Telegram', value: '@YourTigranmods', action: 'https://t.me/YourTigranmods' },
    { icon: 'fa-whatsapp', label: 'WhatsApp', value: '+374 99 123 456', action: 'https://wa.me/37499123456' },
    { icon: 'fa-instagram', label: 'Instagram', value: '@armffsoft', action: 'https://instagram.com/armffsoft' },
    { icon: 'fa-youtube', label: 'YouTube', value: '@speedmak01', action: 'https://youtube.com/@speedmak01' },
    { icon: 'fa-tiktok', label: 'TikTok', value: '@armffsoft_444', action: 'https://tiktok.com/@armffsoft_444' },
  ]

  useEffect(() => {
    if (telegramRef.current) {
      QRCode.toCanvas(telegramRef.current, 'https://t.me/YourTigranmods', { width: 120, color: { dark: '#00F0FF', light: '#ffffff' } })
    }
    if (instagramRef.current) {
      QRCode.toCanvas(instagramRef.current, 'https://instagram.com/armffsoft', { width: 120, color: { dark: '#00F0FF', light: '#ffffff' } })
    }
    if (whatsappRef.current) {
      QRCode.toCanvas(whatsappRef.current, 'https://wa.me/37499123456', { width: 120, color: { dark: '#00F0FF', light: '#ffffff' } })
    }
  }, [])

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative rounded-2xl overflow-hidden mb-12">
        <img src={bannerImage} alt="Contact Banner" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/80 to-transparent flex items-center px-8">
          <h1 className="text-4xl font-orbitron font-bold">{t('contact_title')}</h1>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Cards */}
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-4">
            {contacts.map((contact, idx) => (
              <div key={idx} className="card-premium">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                    <i className={`fab ${contact.icon} text-neon-cyan`}></i>
                  </div>
                  <h3 className="font-semibold">{contact.label}</h3>
                </div>
                <p className="text-neon-cyan font-mono text-sm mb-3 break-all">{contact.value}</p>
                <div className="flex gap-2">
                  <button onClick={() => window.open(contact.action, '_blank')} className="btn-outline-premium !py-2 !px-4 text-sm">
                    <i className="fab fa-telegram mr-1"></i> Contact
                  </button>
                  <button onClick={() => copyToClipboard(contact.value)} className="btn-outline-premium !py-2 !px-4 text-sm">
                    <i className="fas fa-copy mr-1"></i> Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* QR Codes */}
        <div className="space-y-6">
          <div className="card-premium text-center">
            <h3 className="font-semibold mb-4">Telegram QR</h3>
            <canvas ref={telegramRef} className="mx-auto bg-white p-2 rounded-xl"></canvas>
            <p className="text-text-muted text-sm mt-3">Scan to join our Telegram</p>
          </div>
          <div className="card-premium text-center">
            <h3 className="font-semibold mb-4">Instagram QR</h3>
            <canvas ref={instagramRef} className="mx-auto bg-white p-2 rounded-xl"></canvas>
            <p className="text-text-muted text-sm mt-3">Follow us on Instagram</p>
          </div>
          <div className="card-premium text-center">
            <h3 className="font-semibold mb-4">WhatsApp QR</h3>
            <canvas ref={whatsappRef} className="mx-auto bg-white p-2 rounded-xl"></canvas>
            <p className="text-text-muted text-sm mt-3">Chat on WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
