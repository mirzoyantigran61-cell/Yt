import React, { useRef } from 'react'
import { useToast } from '../../hooks/useToast'
import { useImageManager } from '../../hooks/useImageManager'

const AdminImageUploader = ({ slotId, onUploadComplete }) => {
  const fileInputRef = useRef(null)
  const { addToast } = useToast()
  const { uploadImage, removeImage, getImage } = useImageManager()
  const currentImage = getImage(slotId)

  const validateFile = (file) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      addToast('Only PNG, JPG, JPEG, WEBP files are allowed!', 'error')
      return false
    }
    if (file.size > 5 * 1024 * 1024) {
      addToast('File size must be less than 5MB', 'error')
      return false
    }
    return true
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (!validateFile(file)) return

    const reader = new FileReader()
    reader.onload = (event) => {
      uploadImage(slotId, event.target.result)
      addToast('Image uploaded successfully!', 'success')
      if (onUploadComplete) onUploadComplete()
    }
    reader.readAsDataURL(file)
  }

  const handleRemove = () => {
    removeImage(slotId)
    addToast('Image removed', 'info')
    if (onUploadComplete) onUploadComplete()
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="space-y-3">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/png,image/jpeg,image/jpg,image/webp" className="hidden" />
      <div className="flex gap-2">
        <button onClick={triggerFileInput} className="px-3 py-1.5 rounded-lg bg-neon-cyan/10 text-neon-cyan text-sm hover:bg-neon-cyan/20 transition">
          <i className="fas fa-upload mr-1"></i> Upload
        </button>
        {currentImage && (
          <button onClick={handleRemove} className="px-3 py-1.5 rounded-lg bg-error/10 text-error text-sm hover:bg-error/20 transition">
            <i className="fas fa-trash mr-1"></i> Remove
          </button>
        )}
      </div>
    </div>
  )
}

export default AdminImageUploader
