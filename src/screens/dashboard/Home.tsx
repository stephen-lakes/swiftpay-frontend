import React from "react"
import SendIcon from ".././../assets/svg/send.svg"
import BankIcon from ".././../assets/svg/bank.svg"
import ElectricityIcon from ".././../assets/svg/electricity.svg"
import WifiIcon from ".././../assets/svg/wifi.svg"
import SwiftPayMiniCard from "../../components/cards/SwiftPayMiniCard"
import SwiftPayAccountBalanceCard from "../../components/cards/SwiftPayAccountBalanceCard"
import SwiftPayTransactionHistoryList from "../../components/cards/SwiftPayTransactionHistoryCard"


const Home:React.FC = () => {
  return (
    <>
      <div>
        <div className="py-3 font-light">Hi, <span className="font-mono">Stephen</span></div>

        <SwiftPayAccountBalanceCard balance="200,000,000" />

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-4 place-items-center">
          <SwiftPayMiniCard icon={SendIcon} title="transfer" nextPage="transfer" />
          <SwiftPayMiniCard icon={BankIcon} title="bank" nextPage="bank-transfer" />
          <SwiftPayMiniCard icon={WifiIcon} title="airtime" nextPage="airtime" />
          <SwiftPayMiniCard icon={WifiIcon} title="data" nextPage="data" />
          <SwiftPayMiniCard icon={ElectricityIcon} title="electricity" nextPage="electricity" />
        </div>

        <div className="transactions pb-24 p-2">
          <header className="recent-transactions-header mt-6 flex">
            <h1 className="text-xl">Recent Transactions</h1>
            <div className="ml-auto cursor-pointer">See All</div>
          </header>
          <input 
            className="my-2 appearance-none text-gray-700 focus:outline-none focus:shadow-outline focus:border-blue-400 p-2 w-full border-2 border-gray-200 rounded-[8px]"
            placeholder="Search with name..." type="text" name="" id="" 
          />

         <SwiftPayTransactionHistoryList />
        </div>
      </div>
    </>
  )
}

export default Home