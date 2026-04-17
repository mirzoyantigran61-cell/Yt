import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../hooks/useLanguage'

const DashboardLayout = () => {
  const { user, logout } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { icon: 'fa-chart-line', label: t('overview'), path: '/dashboard' },
    { icon: 'fa-shopping-cart', label: t('orders'), path: '/dashboard#orders' },
    { icon: 'fa-box', label: t('products'), path: '/products' },
    { icon: 'fa-user', label: t('profile'), path: '/profile' },
    ...(user?.role === 'owner' || user?.role === 'admin' ? [{ icon: 'fa-crown', label: t('admin'), path: '/admin' }] : [])
  ]

  return (
    <div className="flex min-h-screen bg-bg-deep">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-20 h-full w-72 bg-bg-card backdrop-blur-2xl border-r border-white/5 transform transition-transform duration-300 z-40 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet flex items-center justify-center">
              <i className="fas fa-user text-bg-deep"></i>
            </div>
            <div>
              <p className="font-semibold">{user?.username}</p>
              <p className="text-xs text-text-muted">{user?.role}</p>
            </div>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { navigate(item.path); setSidebarOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:text-neon-cyan hover:bg-white/5 transition-all"
              >
                <i className={`fas ${item.icon} w-5`}></i>
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => { logout(); navigate('/'); }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-error hover:bg-error/10 transition-all mt-4"
            >
              <i className="fas fa-sign-out-alt w-5"></i>
              <span>{t('logout')}</span>
            </button>
          </nav>
        </div>
      </aside>
      
      {/* Mobile sidebar toggle */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-neon-cyan text-bg-deep flex items-center justify-center shadow-glow">
        <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      
      {/* Main content */}
      <main className="flex-1 lg:ml-72 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
