import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transactions( { transactions, id } ) {

    const { deleteItem } = useContext(GlobalContext)
    
    
    const sign = transactions.amount > 0 ? '+' : '-'
  return (
    <div>
    <li className={sign === "+" ? 'plus' : 'minus'}>
        {transactions.text} 
    <span>{sign}${Math.abs(transactions.amount)}</span>
    <button onClick={() => deleteItem(transactions.id)} className="delete-btn">x</button>
  </li> 
    </div>
  )
}

export default Transactions