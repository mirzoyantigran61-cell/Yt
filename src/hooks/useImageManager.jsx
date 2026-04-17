import React, { createContext, useContext, useState, useEffect } from 'react'

const ImageManagerContext = createContext()

const STORAGE_KEY = 'yourtigranmods_images'

// Default images
const DEFAULT_IMAGES = {
  siteLogo: null,
  heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600',
  featureBanner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
  pricingBanner: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
  dashboardHeader: null,
  profileAvatar: null,
  contactBanner: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600',
}

export const ImageManagerProvider = ({ children }) => {
  const [images, setImages] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : { ...DEFAULT_IMAGES }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images))
  }, [images])

  const uploadImage = (slotId, imageData) => {
    setImages(prev => ({ ...prev, [slotId]: imageData }))
  }

  const removeImage = (slotId) => {
    setImages(prev => ({ ...prev, [slotId]: DEFAULT_IMAGES[slotId] || null }))
  }

  const getImage = (slotId) => {
    return images[slotId] || DEFAULT_IMAGES[slotId]
  }

  const resetAllImages = () => {
    setImages({ ...DEFAULT_IMAGES })
  }

  return (
    <ImageManagerContext.Provider value={{ images, uploadImage, removeImage, getImage, resetAllImages }}>
      {children}
    </ImageManagerContext.Provider>
  )
}

export const useImageManager = () => {
  const context = useContext(ImageManagerContext)
  if (!context) throw new Error('useImageManager must be used within ImageManagerProvider')
  return context
}
