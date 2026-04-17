import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../hooks/useLanguage'
import { useImageManager } from '../hooks/useImageManager'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const { user, logout } = useAuth()
  const { t } = useLanguage()
  const { getImage } = useImageManager()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const siteLogo = getImage('siteLogo') || 'https://via.placeholder.com/40x40/00F0FF/090909?text=TM'

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('features'), path: '/features' },
    { name: t('pricing'), path: '/pricing' },
    { name: t('dashboard'), path: '/dashboard' },
    { name: t('support'), path: '/support' },
    { name: t('contact'), path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-deep/85 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={siteLogo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-orbitron text-xl font-bold bg-gradient-to-r from-white to-neon-cyan bg-clip-text text-transparent">
              YourTigranmods
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <Link key={idx} to={link.path} className="text-text-secondary hover:text-neon-cyan transition-colors">
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted">
                  <i className="fas fa-user-circle mr-1"></i>
                  {user.username}
                </span>
                <button onClick={() => { logout(); navigate('/'); }} className="btn-outline-premium !py-2 !px-4 text-sm">
                  {t('logout')}
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <button onClick={() => navigate('/login')} className="btn-outline-premium !py-2 !px-5 text-sm">
                  {t('login')}
                </button>
                <button onClick={() => navigate('/register')} className="btn-premium !py-2 !px-5 text-sm">
                  {t('register')}
                </button>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white text-2xl">
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-x-0 top-20 bg-bg-card backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="flex flex-col gap-4 px-6 pb-6">
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.path} onClick={() => setMobileMenuOpen(false)} className="text-text-secondary hover:text-neon-cyan py-2">
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between py-2">
            <LanguageSwitcher />
          </div>
          {user ? (
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <span className="text-text-muted"><i className="fas fa-user-circle mr-2"></i>{user.username}</span>
              <button onClick={() => { logout(); navigate('/'); setMobileMenuOpen(false); }} className="btn-outline-premium !py-2">
                {t('logout')}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <button onClick={() => { navigate('/login'); setMobileMenuOpen(false); }} className="btn-outline-premium !py-2">
                {t('login')}
              </button>
              <button onClick={() => { navigate('/register'); setMobileMenuOpen(false); }} className="btn-premium !py-2">
                {t('register')}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
