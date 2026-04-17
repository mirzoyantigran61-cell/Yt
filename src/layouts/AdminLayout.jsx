import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../hooks/useLanguage'

const AdminLayout = () => {
  const { user } = useAuth()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-bg-deep">
      <div className="sticky top-20 z-30 bg-bg-card/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-orbitron font-bold bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">Admin Control Center</h1>
            <p className="text-sm text-text-muted mt-1">Manage your platform</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-semibold">
              <i className="fas fa-shield-alt mr-2"></i>{user?.role?.toUpperCase()} Access
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
