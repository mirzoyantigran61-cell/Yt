import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useToast } from '../hooks/useToast'
import { useLanguage } from '../hooks/useLanguage'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    telegram: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const { addToast } = useToast()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      addToast('Passwords do not match', 'error')
      return
    }
    if (formData.password.length < 6) {
      addToast('Password must be at least 6 characters', 'error')
      return
    }
    setIsLoading(true)
    const result = register({
      username: formData.username,
      email: formData.email,
      telegram: formData.telegram,
      password: formData.password,
      role: formData.role,
    })
    if (result.success) {
      addToast('Registration successful! Please login.', 'success')
      navigate('/login')
    } else {
      addToast(result.error, 'error')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="glass-premium rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-orbitron font-bold">{t('register')}</h2>
          <p className="text-text-muted text-sm mt-2">Create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-input" placeholder="Username" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Email" required />
          <input type="text" name="telegram" value={formData.telegram} onChange={handleChange} className="form-input" placeholder="Telegram Username" required />
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} className="form-input pr-10" placeholder="Password" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-input" placeholder="Confirm Password" required />
          <select name="role" value={formData.role} onChange={handleChange} className="form-input">
            <option value="user">Customer</option>
            <option value="partner">Partner</option>
          </select>
          <button type="submit" disabled={isLoading} className="btn-premium w-full !py-3">
            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : t('register')}
          </button>
        </form>
        <p className="text-center text-sm text-text-muted mt-6">
          Already have an account? <Link to="/login" className="text-neon-cyan hover:underline">{t('login')}</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
