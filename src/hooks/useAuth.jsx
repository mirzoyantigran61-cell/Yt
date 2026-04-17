import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const STORAGE_KEY = 'yourtigranmods_user'

// Mock users database
const USERS = [
  { id: 1, username: 'admin', email: 'admin@yourtigranmods.com', telegram: '@admin', password: 'admin123', role: 'owner', status: 'active', createdAt: '2024-01-15', avatar: null },
  { id: 2, username: 'editor', email: 'editor@yourtigranmods.com', telegram: '@editor', password: 'editor123', role: 'admin', status: 'active', createdAt: '2024-02-10', avatar: null },
  { id: 3, username: 'user', email: 'user@example.com', telegram: '@user', password: 'user123', role: 'user', status: 'active', createdAt: '2024-03-01', avatar: null },
]

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setUser(parsed)
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    setIsLoading(false)
  }, [])

  const login = (email, password) => {
    const found = USERS.find(u => u.email === email && u.password === password)
    if (found) {
      const { password: _, ...userWithoutPassword } = found
      setUser(userWithoutPassword)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userWithoutPassword))
      return { success: true, user: userWithoutPassword }
    }
    return { success: false, error: 'Invalid email or password' }
  }

  const register = (userData) => {
    const existing = USERS.find(u => u.email === userData.email)
    if (existing) {
      return { success: false, error: 'Email already registered' }
    }
    const newUser = {
      id: USERS.length + 1,
      ...userData,
      role: userData.role || 'user',
      status: 'active',
      createdAt: new Date().toISOString().split('T')[0],
      avatar: null,
    }
    USERS.push(newUser)
    const { password, ...userWithoutPassword } = newUser
    return { success: true, user: userWithoutPassword }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const updateUser = (updates) => {
    if (user) {
      const updated = { ...user, ...updates }
      setUser(updated)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
