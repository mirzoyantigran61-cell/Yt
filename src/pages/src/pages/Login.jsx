import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useToast } from '../hooks/useToast'
import { useLanguage } from '../hooks/useLanguage'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const { addToast } = useToast()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      addToast('Please fill in all fields', 'error')
      return
    }
    setIsLoading(true)
    const result = login(email, password)
    if (result.success) {
      addToast(`Welcome back, ${result.user.username}!`, 'success')
      navigate('/dashboard')
    } else {
      addToast(result.error, 'error')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="glass-premium rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-orbitron font-bold">{t('login')}</h2>
          <p className="text-text-muted text-sm mt-2">Welcome back! Please enter your details</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="form-input pr-10" placeholder="Enter your password" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded border-white/20" /> Remember me
            </label>
            <Link to="/forgot-password" className="text-sm text-neon-cyan hover:underline">Forgot password?</Link>
          </div>
          <button type="submit" disabled={isLoading} className="btn-premium w-full !py-3">
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : t('login')}
          </button>
        </form>
        <p className="text-center text-sm text-text-muted mt-6">
          Don't have an account? <Link to="/register" className="text-neon-cyan hover:underline">{t('register')}</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
