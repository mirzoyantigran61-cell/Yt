import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../hooks/useLanguage'
import { useImageManager } from '../hooks/useImageManager'

const Dashboard = () => {
  const { user } = useAuth()
  const { t } = useLanguage()
  const { getImage } = useImageManager()
  const [activeTab, setActiveTab] = useState('overview')
  
  const headerImage = getImage('dashboardHeader') || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
  
  // Mock orders data
  const orders = [
    { id: 'ORD-001', date: '2024-03-15', total: 299, status: 'completed', items: ['ESP32 Premium SDK'] },
    { id: 'ORD-002', date: '2024-03-20', total: 199, status: 'pending', items: ['Security Bundle'] },
  ]

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img src={headerImage} alt="Dashboard Header" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/80 to-transparent flex items-center px-8">
          <div>
            <h1 className="text-3xl font-orbitron font-bold">{t('dashboard')}</h1>
            <p className="text-text-muted">Welcome back, {user?.username}</p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card-premium">
          <i className="fas fa-wallet text-2xl text-neon-cyan mb-3"></i>
          <h3 className="text-text-muted text-sm">{t('balance')}</h3>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="card-premium">
          <i className="fas fa-tag text-2xl text-neon-cyan mb-3"></i>
          <h3 className="text-text-muted text-sm">{t('subscription')}</h3>
          <p className="text-2xl font-bold">Free Tier</p>
        </div>
        <div className="card-premium">
          <i className="fas fa-calendar text-2xl text-neon-cyan mb-3"></i>
          <h3 className="text-text-muted text-sm">Member Since</h3>
          <p className="text-2xl font-bold">{user?.createdAt}</p>
        </div>
      </div>
      
      <div className="card-premium">
        <h3 className="text-xl font-semibold mb-4">{t('order_history')}</h3>
        <div className="overflow-x-auto">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.items.join(', ')}</td>
                  <td>${order.total}</td>
                  <td><span className={`badge-${order.status === 'completed' ? 'success' : 'warning'}`}>{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
