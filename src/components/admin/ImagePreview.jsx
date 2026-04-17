import React from 'react'

const ImagePreview = ({ src, alt, className = '' }) => {
  return (
    <div className="relative group">
      <img src={src} alt={alt} className={`${className} object-cover`} />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
        <i className="fas fa-eye text-white"></i>
      </div>
    </div>
  )
}

export default ImagePreview
