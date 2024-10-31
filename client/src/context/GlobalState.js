import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

// Create Context
export const GlobalContext = createContext(initialState)

// Set Up Providers
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteItem(id){
    dispatch({
      type: 'DELETE_ITEM',
      payload: id,
    })
  }

  function addItem(transaction){
    dispatch({
      type: 'ADD_ITEM',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider value={{ 
      transactions: state.transactions,
      deleteItem,
      addItem
   }}>
        {children}
    </GlobalContext.Provider>
  )
}