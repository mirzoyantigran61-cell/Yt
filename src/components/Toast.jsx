import React, { useEffect } from 'react'
import { useToast } from '../hooks/useToast'

const Toast = () => {
  const { toasts, removeToast } = useToast()

  useEffect(() => {
    const timers = toasts.map(toast => setTimeout(() => removeToast(toast.id), 3000))
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [toasts, removeToast])

  if (toasts.length === 0) return null

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`glass-premium px-4 py-3 rounded-xl flex items-center gap-3 min-w-[280px] animate-fade-in-up border-l-4 ${
            toast.type === 'success' ? 'border-l-neon-green' : toast.type === 'error' ? 'border-l-error' : 'border-l-neon-cyan'
          }`}
        >
          <i className={`fas ${toast.type === 'success' ? 'fa-check-circle text-neon-green' : toast.type === 'error' ? 'fa-exclamation-circle text-error' : 'fa-info-circle text-neon-cyan'}`}></i>
          <span className="text-sm">{toast.message}</span>
        </div>
      ))}
    </div>
  )
}

export default Toast
