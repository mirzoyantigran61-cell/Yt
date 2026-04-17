import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

const NotFound = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        <div className="text-8xl font-orbitron font-bold bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent mb-4">404</div>
        <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
        <p className="text-text-muted mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-premium inline-block">Back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound
