import React , {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const {addItem} = useContext(GlobalContext)
    const onSubmit = (e) => {
      e.preventDefault()

      const newItem = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: parseInt(amount)
      }

      addItem(newItem)
    }

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

  return (
    <>
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label>
        <input onChange={(e) => setAmount(e.target.value)} value={amount} type="number" placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
    </>
  )
}

export default AddTransaction
