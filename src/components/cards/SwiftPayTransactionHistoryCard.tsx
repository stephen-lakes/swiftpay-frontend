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
        <div className="flex items-center gap-2 transaction-list-item py-2">
          <div className={`${type ==="debit" ? "bg-[#FDE8EA]": "bg-[#E8F1FD]"} w-10 h-10 flex items-center justify-center rounded-xs`}>A</div>
          <div className="text-xs font-light">
            <p className={`text-sm font-semibold ${service.toLocaleLowerCase() === "transfer" ? "uppercase": ""}`}>{naration}</p>
            <p>{date}</p>
            <p>{time}</p>
          </div>

          <div className="ml-auto">
            <div className={`${type==="debit"? "text-[#ED2F46]": "text-[#2F80ED]"} text-sm font-semibold`}>{`${type==="debit" ? "-" : type==="credit" ? "+" : ""}`}₦{amount}</div>
            <p className="text-xs text-right font-light capitalize">{service}</p>
          </div>
          
        </div>
    </>
  )
}

const transactions = [
  {
    id: 1,
    naration: 'MTN Data',
    date: 'March 5, 2025',
    time: '5:12:34 AM',
    amount: '1500',
    type: 'debit',
    service: 'Data',
  },
  {
    id: 2,
    naration: 'STEPHEN OLAMILEKAKN',
    date: 'March 5, 2025',
    time: '5:12:15 AM',
    amount: '1500',
    type: 'credit',
    service: 'transfer',
  },
  {
    id: 3,
    naration: 'STEPHEN OLAMILEKAKN',
    date: 'February 14, 2025',
    time: '9:17:42 AM',
    amount: '250',
    type: 'credit',
    service: 'transfer',
  },
]


const SwiftPayTransactionHistoryList: React.FC= () => {
  return(
    <>
      {transactions.map(transaction => <SwiftPayTransactionHistoryCard key={transaction.id} naration={transaction.naration} date={transaction.date} time={transaction.time} amount={transaction.amount} type={transaction.type} service={transaction.service} />)}
    </>
  )
}

export default SwiftPayTransactionHistoryList