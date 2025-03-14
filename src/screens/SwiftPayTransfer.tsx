import React, { useState } from 'react'
import Loader from '../components/Loader'
import SwiftPayScreenHeader from '../components/SwiftPayScreenHeader';

const SwiftPayTransfer: React.FC = () => {
  const [verifyReceiver] = useState(false);
  return (
    <>
      <SwiftPayScreenHeader screenTitle="Swiftpay Transfer"/>

      <form className='mt-16 p-3'>
        <div className="flex flex-col gap-3 px-3">
          <input
              // className="p-2 w-full border-2 border-gray-200 rounded-[8px]"
              className="appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-purple-400 p-2 w-full border-2 border-gray-200 rounded-[8px]"
              placeholder='account number or email or phone number'
              type="text" 
          />

          {verifyReceiver && <Loader />}


          <div className="text-center uppercase">
            James Smith
          </div>

          <div>
            REMARK(Optional)
            <input
                className="p-2 w-full border-2 active:border-gray-200 border-gray-200 rounded-[8px]"
                type="text" 
            />
          </div>


          <div className="mt-10 h-10 p-3 flex items-center justify-center bg-purple-600 text-white uppercase cursor-pointer rounded">
            PROCEED
          </div>

        </div>
      </form>

    </>
  )
}

export default SwiftPayTransfer