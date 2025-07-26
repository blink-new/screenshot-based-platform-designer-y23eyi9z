import React, { useState } from 'react'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App