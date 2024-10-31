# Budget Expense App

A simple, user-friendly budget management application that allows users to track income and expenses. This project is built to practice using the Context API for state management in React and is a perfect starting point for beginners learning global state management.

## Features
- **Add Transaction**: Log income and expense transactions.
- **Track Balance**: View your current balance, total income, and total expenses.
- **Global State Management**: State is managed across components using Context API and `useReducer`.
  
## Technologies
- **Frontend**:
  - React
  - Context API for global state management
  - CSS for basic styling

## Code Structure
- **`App.js`**: Main component that wraps components with the `GlobalProvider` to access global state.
- **Components**:
  - `Header`: Displays the app title.
  - `Balance`: Shows the current balance.
  - `IncomeExpenses`: Displays income and expense totals.
  - `TransactionList`: Lists all transactions.
  - `AddTransaction`: Form to add new transactions.
- **Context and Reducer**:
  - `GlobalState`: Contains the global context, provider, and reducer logic for managing state changes.
  
## Planned Upgrades
This app will be expanded into a full-stack application using the **MERN stack**:
1. **MongoDB**: Database to store user transactions.
2. **Express & Node.js**: Backend to handle RESTful API requests.
3. **React**: Frontend will remain in React but will connect to the backend for persistent data storage.
4. **Authentication**: Add user authentication for personal budget tracking.

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/budget-expense-app.git
   cd budget-expense-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```
   
Visit `http://localhost:3000` to view the app in the browser.

---

This project is an ideal practice app for understanding React Context API and is well-suited for upgrading to a full-stack MERN application.
