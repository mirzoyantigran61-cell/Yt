import React from 'react'
import { useAuth } from '../../hooks/useAuth'

const ProtectedAdminBlock = ({ children }) => {
  const { user } = useAuth()
  
  if (!user || (user.role !== 'owner' && user.role !== 'admin')) {
    return null
  }
  
  return <>{children}</>
}

export default ProtectedAdminBlock
