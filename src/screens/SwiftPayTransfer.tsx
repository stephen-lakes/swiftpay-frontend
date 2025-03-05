import React from 'react'
import Loader from '../components/Loader'

const SwiftPayTransfer: React.FC = () => {
  return (
    <>
      <h1>SwiftPayTransfer</h1>
      <form>
        <div className="flex flex-col gap-3">
          <input
              className="p-2 w-full border-2 border-gray-200 rounded-[8px]"
              placeholder='username/email/phone number'
              type="text" 
          />

          <Loader />

          <div className="text-center uppercase">
            James Smith
          </div>

          <div className="p-3 flex items-center justify-center bg-amber-400 text-white">
            CONFIRM
          </div>

        </div>
      </form>


      <div className="pin keyboard">
        Key board comes up to comfirm
        transaction with PIN.
        This component can be moved to its component
      </div>
    </>
  )
}

export default SwiftPayTransfer