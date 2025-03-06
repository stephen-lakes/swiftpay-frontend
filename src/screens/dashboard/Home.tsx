import SendIcon from ".././../assets/svg/send.svg"
import BankIcon from ".././../assets/svg/bank.svg"
import SwiftPayMiniCard from "../../components/cards/SwiftPayMiniCard"
import SwiftPayAccountBalanceCard from "../../components/cards/SwiftPayAccountBalanceCard"
import React from "react"


const Home:React.FC = () => {
  return (
    <>
      <div>
        <div className="py-3 font-light">Hi, <span className="font-mono">Stephen</span></div>

        <SwiftPayAccountBalanceCard balance="200,000" />

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-10">
          <SwiftPayMiniCard icon={SendIcon} title="transfer" nextPage="transfer" />
          <SwiftPayMiniCard icon={BankIcon} title="bank" nextPage="bank-transfer" />
          <SwiftPayMiniCard icon={BankIcon} title="airtime" nextPage="airtime" />
          <SwiftPayMiniCard icon={BankIcon} title="data" nextPage="data" />
          <SwiftPayMiniCard icon={BankIcon} title="electricity" nextPage="electricity" />
        </div>

      </div>
    </>
  )
}

export default Home