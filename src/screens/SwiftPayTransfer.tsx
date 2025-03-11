import React, { useState } from 'react'
import Loader from '../components/Loader'
import SwiftPayScreenHeader from '../components/SwiftPayScreenHeader';

const SwiftPayTransfer: React.FC = () => {
  const [verifyReceiver, setVerifyReceiver] = useState(false);
  return (
    <>
      <SwiftPayScreenHeader screenTitle="Swiftpay Transfer"/>

      <form>
        <div className="flex flex-col gap-3 px-3">
          <input
              className="p-2 w-full border-2 border-gray-200 rounded-[8px]"
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
                className="p-2 w-full border-2 border-gray-200 rounded-[8px]"
                type="text" 
            />
          </div>


          <div className="p-3 flex items-center justify-center bg-purple-600 text-white uppercase cursor-pointer rounded">
            PROCEED
          </div>

        </div>
      </form>

    </>
  )
}

export default SwiftPayTransfer