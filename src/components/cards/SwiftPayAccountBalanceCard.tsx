import EyeOnIcon from "../../assets/svg/eyeson-outlined.svg"
import EyeOffIcon from "../../assets/svg/eyesoff-outlined.svg"

import React, { useState } from "react";

interface SwiftPayAccountBalanceCardProp {
    balance:string;
}
const SwiftPayAccountBalanceCard: React.FC<SwiftPayAccountBalanceCardProp> = ({ balance }) => {
    const [isBalanceVisble, setIsBalanceVisbile] = useState(false);
  return (
    <>
        <div className="bg-green-500 text-white rounded p-3 flex flex-col gap-4">
          
          <div className="flex items-center gap-2">
            <span>
              Available Balance
            </span>
            {isBalanceVisble ? 
              <img className="cursor-pointer" onClick={()=> setIsBalanceVisbile(!isBalanceVisble)} src={EyeOnIcon} alt="" />
              :
              <img className="cursor-pointer" onClick={()=> setIsBalanceVisbile(!isBalanceVisble)} src={EyeOffIcon} alt="" />
            }
          </div>
          <div className="mt-4 text-xl">
            {isBalanceVisble ? `₦${balance}` : `***`}
          </div>
      </div>

    </>
  )
}

export default SwiftPayAccountBalanceCard