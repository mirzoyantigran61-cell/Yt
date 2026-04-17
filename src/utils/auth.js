export const hasRole = (user, allowedRoles) => {
  if (!user) return false
  return allowedRoles.includes(user.role)
}

export const isAdmin = (user) => {
  return user && (user.role === 'owner' || user.role === 'admin')
}

export const isOwner = (user) => {
  return user && user.role === 'owner'
}

export const canEditContent = (user) => {
  return user && (user.role === 'owner' || user.role === 'admin' || user.role === 'editor')
}
