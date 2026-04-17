import React, { useState } from 'react'
import AdminImageUploader from './AdminImageUploader'
import ImagePreview from './ImagePreview'
import { useImageManager } from '../../hooks/useImageManager'

const ImageSlotCard = ({ slot }) => {
  const { getImage } = useImageManager()
  const [refresh, setRefresh] = useState(0)
  const currentImage = getImage(slot.id)

  const handleUploadComplete = () => {
    setRefresh(prev => prev + 1)
  }

  return (
    <div className="bg-bg-surface rounded-xl p-4 border border-white/10 hover:border-neon-cyan/30 transition">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-32 h-32 flex-shrink-0">
          <ImagePreview src={currentImage || slot.defaultImage} alt={slot.label} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-lg">{slot.label}</h4>
          <p className="text-text-muted text-sm mb-3">{slot.description}</p>
          <AdminImageUploader slotId={slot.id} onUploadComplete={handleUploadComplete} />
        </div>
      </div>
    </div>
  )
}

export default ImageSlotCard
