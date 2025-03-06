import React, { useState } from "react";
import EyeOnIcon from "../../assets/svg/eyeson-outlined.svg";
import EyeOffIcon from "../../assets/svg/eyesoff-outlined.svg";

interface SwiftPayAccountBalanceCardProp {
  balance: string;
}

const SwiftPayAccountBalanceCard: React.FC<SwiftPayAccountBalanceCardProp> = ({ balance }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <div className="bg-green-500 text-white rounded p-3 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span>Available Balance</span>
        <img
          className="cursor-pointer"
          onClick={toggleBalanceVisibility}
          src={isBalanceVisible ? EyeOnIcon : EyeOffIcon}
          alt={isBalanceVisible ? "Hide Balance" : "Show Balance"}
        />
      </div>
      <div className="mt-4 text-xl">
        {isBalanceVisible ? `₦${balance}` : `***`}
      </div>
    </div>
  );
};

export default SwiftPayAccountBalanceCard;
