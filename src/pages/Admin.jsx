import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../hooks/useLanguage'
import { useImageManager } from '../hooks/useImageManager'
import ImageSlotCard from '../components/admin/ImageSlotCard'
import ProtectedAdminBlock from '../components/admin/ProtectedAdminBlock'

const Admin = () => {
  const { user } = useAuth()
  const { t } = useLanguage()
  const { images, resetAllImages } = useImageManager()
  const [activeSection, setActiveSection] = useState('images')

  // Image slots definition
  const imageSlots = [
    { id: 'siteLogo', label: 'Site Logo', description: 'Main logo displayed in navigation bar', defaultImage: null },
    { id: 'heroImage', label: 'Hero Image', description: 'Main hero section background image', defaultImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600' },
    { id: 'featureBanner', label: 'Feature Banner', description: 'Banner image for features section', defaultImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400' },
    { id: 'pricingBanner', label: 'Pricing Banner', description: 'Banner image for pricing section', defaultImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400' },
    { id: 'dashboardHeader', label: 'Dashboard Header', description: 'Header image for user dashboard', defaultImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800' },
    { id: 'contactBanner', label: 'Contact Banner', description: 'Banner image for contact page', defaultImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600' },
  ]

  // Mock users data for admin table
  const adminUsers = [
    { id: 1, username: 'admin', email: 'admin@yourtigranmods.com', telegram: '@admin', role: 'owner', status: 'active', createdAt: '2024-01-15' },
    { id: 2, username: 'editor', email: 'editor@yourtigranmods.com', telegram: '@editor', role: 'admin', status: 'active', createdAt: '2024-02-10' },
    { id: 3, username: 'partner1', email: 'partner@example.com', telegram: '@partner', role: 'partner', status: 'active', createdAt: '2024-03-01' },
  ]

  return (
    <ProtectedAdminBlock>
      <div className="space-y-8">
        {/* Admin Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-bg-surface rounded-xl p-4 border border-white/10">
            <p className="text-text-muted text-sm">Total Users</p>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div className="bg-bg-surface rounded-xl p-4 border border-white/10">
            <p className="text-text-muted text-sm">Total Revenue</p>
            <p className="text-2xl font-bold">$45,678</p>
          </div>
          <div className="bg-bg-surface rounded-xl p-4 border border-white/10">
            <p className="text-text-muted text-sm">Active Sessions</p>
            <p className="text-2xl font-bold">42</p>
          </div>
          <div className="bg-bg-surface rounded-xl p-4 border border-white/10">
            <p className="text-text-muted text-sm">Uploaded Images</p>
            <p className="text-2xl font-bold">{Object.values(images).filter(img => img && img !== null).length}</p>
          </div>
        </div>
        
        {/* Admin Tabs */}
        <div className="flex gap-2 border-b border-white/10 pb-2">
          <button onClick={() => setActiveSection('images')} className={`px-4 py-2 rounded-lg transition ${activeSection === 'images' ? 'bg-neon-cyan/20 text-neon-cyan' : 'text-text-muted hover:text-white'}`}>
            <i className="fas fa-images mr-2"></i> Image Manager
          </button>
          <button onClick={() => setActiveSection('users')} className={`px-4 py-2 rounded-lg transition ${activeSection === 'users' ? 'bg-neon-cyan/20 text-neon-cyan' : 'text-text-muted hover:text-white'}`}>
            <i className="fas fa-users mr-2"></i> User Management
          </button>
          <button onClick={() => setActiveSection('products')} className={`px-4 py-2 rounded-lg transition ${activeSection === 'products' ? 'bg-neon-cyan/20 text-neon-cyan' : 'text-text-muted hover:text-white'}`}>
            <i className="fas fa-box mr-2"></i> Products
          </button>
        </div>
        
        {/* Image Manager Section */}
        {activeSection === 'images' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Image Slots Manager</h3>
              <button onClick={resetAllImages} className="text-sm text-error hover:underline">Reset All Images</button>
            </div>
            <div className="space-y-4">
              {imageSlots.map((slot) => (
                <ImageSlotCard key={slot.id} slot={slot} />
              ))}
            </div>
          </div>
        )}
        
        {/* User Management Section */}
        {activeSection === 'users' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">User Management</h3>
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Telegram</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adminUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.telegram}</td>
                      <td><span className="badge-success text-xs">{user.role}</span></td>
                      <td><span className="badge-success text-xs">{user.status}</span></td>
                      <td>{user.createdAt}</td>
                      <td>
                        <button className="text-neon-cyan text-sm mr-2"><i className="fas fa-edit"></i></button>
                        <button className="text-error text-sm"><i className="fas fa-trash"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Products Section */}
        {activeSection === 'products' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Product Management</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {['ESP32 Premium SDK', 'Security Bundle', 'AI Assistant Pro'].map((product, idx) => (
                <div key={idx} className="bg-bg-surface rounded-xl p-4 border border-white/10 flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{product}</h4>
                    <p className="text-text-muted text-sm">Active</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-neon-cyan/10 text-neon-cyan"><i className="fas fa-edit"></i></button>
                    <button className="p-2 rounded-lg bg-error/10 text-error"><i className="fas fa-trash"></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ProtectedAdminBlock>
  )
}

export default Admin
