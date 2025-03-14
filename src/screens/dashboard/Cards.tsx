import React, { useState } from 'react'
import SwiftPayScreenHeader from '../../components/SwiftPayScreenHeader'

// import Item1 from "../../assets/img/37e70a3a-9571-4045-9eb6-5718b13dc1fd.jpeg"
// import Item2 from "../../assets/img/5a4b8d59-10af-4ab4-9c5d-b6591f8c6449.jpeg"
// import Item3 from "../../assets/img/60644b0c-8750-48ba-9224-06afb56bfd3e.avif"
// import Item4 from "../../assets/img/a56c012a-36e1-406c-95e7-b090bfccb288.avif"
// import Item5 from "../../assets/img/ac3aabde-10bf-449f-9839-c7983cef4efc.jpeg"
// import Carousel from '../../components/Carousel'


const Cards: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCvc] = useState('')

  const [virtualCardCreationFormVisibility, setVirtualCardCreationFormVisibility] = useState(false)

  const toggleVirtualCardCreationForm = () => {
    setVirtualCardCreationFormVisibility(!virtualCardCreationFormVisibility)
  }

  const save = () => {
    toggleVirtualCardCreationForm();
  }

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
        <h1 className="text-center text-lg">Virtual Cards</h1>

        <div className="vCardsList">
          VCard List

          {/* <Carousel items={[Item1, Item2, Item3, Item4, Item5]} /> */}
          
        </div>

        <div onClick={() => toggleVirtualCardCreationForm() } className='text-right text-purple-500 cursor-pointer'>+ New virtual card</div>
        {
          virtualCardCreationFormVisibility && 
          <div className='vCardForm'>
            <div className="grid grid-cols-1 mt-4">
              <input
                className="border-1 p-3 border-gray-400 rounded-t-lg focus:outline-none"
                type="text"
                placeholder="Card number"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
            <div className="grid grid-cols-2">
              <input
                className="border-1 p-3 border-t-0 border-r-0 border-gray-400 rounded-bl-lg focus:outline-none"
                type="text"
                placeholder="MM / YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
              <input
                className="border-1 p-3 border-t-0 border-gray-400 rounded-br-lg focus:outline-none"
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={handleCvcChange}
              />
            </div>

            <div onClick={save} className="mt-3 h-10 flex items-center justify-center bg-purple-600 text-white uppercase cursor-pointer rounded">
              SAVE
            </div>
          </div>

        }


      </div>
    </>
  )
}

export default Cards



// const Carousel:React.FC = () => {
//   return (
//     <div id="default-carousel wrapper" className="relative w-full">
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96 container">
//         <div className="duration-700 ease-in-out item">
//           <img
//             src={Item1}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>

//         <div className="duration-700 ease-in-out item">
//           <img
//             src={Item2}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>

//         <div className="duration-700 ease-in-out item">
//           <img
//             src={Item3}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
        
//       </div>
      
//     </div>
//   )
// }


