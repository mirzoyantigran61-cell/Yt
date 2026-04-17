import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

const Footer = () => {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-bg-surface border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-orbitron text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent mb-4">
              YourTigranmods
            </h3>
            <p className="text-text-muted text-sm">Premium digital services platform</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('product')}</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li><Link to="/features" className="hover:text-neon-cyan transition">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-neon-cyan transition">Pricing</Link></li>
              <li><Link to="/support" className="hover:text-neon-cyan transition">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('company')}</h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li><Link to="/contact" className="hover:text-neon-cyan transition">Contact</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition">About</Link></li>
              <li><Link to="#" className="hover:text-neon-cyan transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('social')}</h4>
            <div className="flex gap-4">
              <a href="https://t.me/YourTigranmods" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan/20 hover:text-neon-cyan transition">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://instagram.com/armffsoft" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan/20 hover:text-neon-cyan transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/37499123456" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan/20 hover:text-neon-cyan transition">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://youtube.com/@speedmak01" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan/20 hover:text-neon-cyan transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-text-muted text-sm">
          <p>&copy; 2024 YourTigranmods Official. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
