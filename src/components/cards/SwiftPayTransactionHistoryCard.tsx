import React from 'react'

interface SwiftPayTransactionHistoryCardProp {
  naration: string;
  date: string;
  time: string;
  amount: string;
  type: string;
  service: string;
}

const SwiftPayTransactionHistoryCard: React.FC<SwiftPayTransactionHistoryCardProp> = ({naration, date, time, amount, type, service}) => {
  return (
    <>
        <div className="flex items-center gap-2 transaction-list-item">
          <div className={`${type ==="debit" ? "bg-red-300": "bg-green-300"} w-10 h-10 flex items-center justify-center rounded-xs`}>A</div>
          <div className="text-xs font-light">
            <p className={`text-sm font-semibold ${service.toLocaleLowerCase() === "transfer" ? "uppercase": ""}`}>{naration}</p>
            <p>{date}</p>
            <p>{time}</p>
          </div>

          <div className="ml-auto">
            <div className="text-sm font-semibold">{`${type==="debit" ? "-" : type==="credit" ? "+" : ""}`}₦{amount}</div>
            <p className="text-xs text-right font-light capitalize">{service}</p>
          </div>
          
        </div>
    </>
  )
}

export default SwiftPayTransactionHistoryCard