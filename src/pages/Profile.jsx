import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../hooks/useLanguage'
import { useToast } from '../hooks/useToast'
import { useImageManager } from '../hooks/useImageManager'

const Profile = () => {
  const { user, updateUser } = useAuth()
  const { t } = useLanguage()
  const { addToast } = useToast()
  const { getImage } = useImageManager()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    telegram: user?.telegram || '',
  })
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  })

  const avatarImage = getImage('profileAvatar') || 'https://randomuser.me/api/portraits/men/1.jpg'

  const handleProfileUpdate = () => {
    updateUser(formData)
    setIsEditing(false)
    addToast('Profile updated successfully!', 'success')
  }

  const handlePasswordUpdate = () => {
    if (passwordData.new !== passwordData.confirm) {
      addToast('New passwords do not match', 'error')
      return
    }
    if (passwordData.new.length < 6) {
      addToast('Password must be at least 6 characters', 'error')
      return
    }
    addToast('Password updated successfully!', 'success')
    setPasswordData({ current: '', new: '', confirm: '' })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card-premium">
        <div className="flex items-center gap-6 mb-8 pb-6 border-b border-white/10">
          <img src={avatarImage} alt="Avatar" className="w-24 h-24 rounded-full object-cover" />
          <div>
            <h2 className="text-2xl font-orbitron font-bold">{user?.username}</h2>
            <p className="text-text-muted">{user?.role}</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">{t('profile_settings')}</h3>
        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm text-text-muted mb-1">Username</label>
            <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="form-input" disabled={!isEditing} />
          </div>
          <div>
            <label className="block text-sm text-text-muted mb-1">Email</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-input" disabled={!isEditing} />
          </div>
          <div>
            <label className="block text-sm text-text-muted mb-1">Telegram</label>
            <input type="text" value={formData.telegram} onChange={(e) => setFormData({ ...formData, telegram: e.target.value })} className="form-input" disabled={!isEditing} />
          </div>
          {isEditing ? (
            <div className="flex gap-3">
              <button onClick={handleProfileUpdate} className="btn-premium !py-2">Save Changes</button>
              <button onClick={() => setIsEditing(false)} className="btn-outline-premium !py-2">Cancel</button>
            </div>
          ) : (
            <button onClick={() => setIsEditing(true)} className="btn-outline-premium !py-2">Edit Profile</button>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-4">{t('change_password')}</h3>
        <div className="space-y-4">
          <input type="password" placeholder="Current Password" value={passwordData.current} onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })} className="form-input" />
          <input type="password" placeholder="New Password" value={passwordData.new} onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })} className="form-input" />
          <input type="password" placeholder="Confirm New Password" value={passwordData.confirm} onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })} className="form-input" />
          <button onClick={handlePasswordUpdate} className="btn-premium !py-2">Update Password</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
