import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transactions from './Transactions'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <>
    <h3>History</h3>
    <ul className="list">
      {transactions.map((transaction, key) => {
        return (
          <Transactions key={key} transactions={transaction}/>
        )
      })}
    </ul>
    </>
  )
}

export default TransactionList
