import React, { useState } from 'react'
import SwiftPayScreenHeader from '../../components/SwiftPayScreenHeader'

const Cards: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCvc] = useState('')

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d{0,16}$/.test(value)) {
      setCardNumber(value)
    }
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^(0[1-9]|1[0-2])\/\d{2}$/.test(value) || value === '') {
      setExpiryDate(value)
    }
  }

  
  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d{0,4}$/.test(value)) {
      setCvc(value)
    }
  }

  return (
    <>
      <SwiftPayScreenHeader screenTitle="Cards" />
      <div className="mt-14">
        <h1 className="text-center text-lg">Virtualize Card</h1>
        <div className="grid grid-cols-1 mt-4">
          <input
            className="border-3 p-3 border-gray-400 rounded-t-lg focus:outline-none"
            type="text"
            placeholder="Card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="grid grid-cols-2">
          <input
            className="border-3 p-3 border-t-0 border-r-0 border-gray-400 rounded-bl-lg focus:outline-none"
            type="text"
            placeholder="MM / YY"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
          <input
            className="border-3 p-3 border-t-0 border-gray-400 rounded-br-lg focus:outline-none"
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={handleCvcChange}
          />
        </div>
        
        <div className="mt-6 p-3 flex items-center justify-center bg-purple-600 text-white uppercase cursor-pointer rounded">
          SAVE
        </div>

      </div>
    </>
  )
}

export default Cards
