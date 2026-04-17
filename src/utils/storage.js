export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    console.error('Storage save error:', e)
    return false
  }
}

export const loadFromLocalStorage = (key, defaultValue = null) => {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : defaultValue
  } catch (e) {
    console.error('Storage load error:', e)
    return defaultValue
  }
}

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key)
}
