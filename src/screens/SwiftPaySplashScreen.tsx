import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SwiftPaySplashScreen: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth/signin')
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="h-screen grid grid-cols-1 place-items-center bg-purple-600">
      <h1 className="text-4xl font-extrabold text-white">SWIFTPAY</h1>
    </div>
  )
}

export default SwiftPaySplashScreen
