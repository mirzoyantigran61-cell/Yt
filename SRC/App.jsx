import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { ToastProvider } from './hooks/useToast'
import { LanguageProvider } from './hooks/useLanguage'
import { ImageManagerProvider } from './hooks/useImageManager'
import ProtectedRoute from './components/ProtectedRoute'
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import AdminLayout from './layouts/AdminLayout'

// Pages
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Support from './pages/Support'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <ToastProvider>
          <ImageManagerProvider>
            <Routes>
              {/* Public routes with main layout */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/support" element={<Support />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              
              {/* Protected dashboard routes */}
              <Route element={<ProtectedRoute />}>
                <Route element={<DashboardLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>
              </Route>
              
              {/* Admin only routes */}
              <Route element={<ProtectedRoute requiredRole={['owner', 'admin']} />}>
                <Route element={<AdminLayout />}>
                  <Route path="/admin" element={<Admin />} />
                </Route>
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ImageManagerProvider>
        </ToastProvider>
      </AuthProvider>
    </LanguageProvider>
  )
}

export default App
