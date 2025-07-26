import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface LoginPageProps {
  onLogin: () => void
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Dummy auth - accepts any login/password
    if (loginId.trim() && password.trim()) {
      onLogin()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Navadhan Platform
          </CardTitle>
          <CardDescription className="text-gray-600">
            Unified Financial Management System
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="loginId">Login ID</Label>
              <Input
                id="loginId"
                type="text"
                placeholder="Enter your login ID"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
            >
              Sign In
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Demo Mode: Use any login ID and password
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage