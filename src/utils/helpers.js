export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString()
}

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (e) {
    console.error('Copy failed:', e)
    return false
  }
}
