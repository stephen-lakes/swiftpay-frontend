import React, { useState } from "react";
import EyeOnIcon from "../../assets/svg/eyeson-outlined.svg";
import EyeOffIcon from "../../assets/svg/eyesoff-outlined.svg";

interface SwiftPayAccountBalanceCardProp {
  balance: string;
}

const SwiftPayAccountBalanceCard: React.FC<SwiftPayAccountBalanceCardProp> = ({ balance }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <div className="bg-purple-400 text-white flex flex-col rounded-lg">
      <div className="flex gap-2 items-center">
        <p className="pl-3 py-3">Available Balance</p>
        <div className="">
          <img 
            className="cursor-pointer"
            onClick={toggleBalanceVisibility}
            src={isBalanceVisible ? EyeOnIcon : EyeOffIcon}
            alt={isBalanceVisible ? "Hide Balance" : "Show Balance"}
           />
        </div>
      </div>
      <div>
        <p className="p-3 text-2xl">
          {isBalanceVisible ? `₦${balance}` : `***`}
        </p>
      </div>
    </div>
  );
};

export default SwiftPayAccountBalanceCard;
