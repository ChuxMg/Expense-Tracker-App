import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     description: "Bought sum fruits",
//     amount: 69.99,
//     date: new Date("2023-12-14"),
//   },
//   {
//     id: "e2",
//     description: "Bought a pair of shoe",
//     amount: 80.0,
//     date: new Date("2023-12-14"),
//   },
//   {
//     id: "e3",
//     description: "Bought a pair of shoe",
//     amount: 55.99,
//     date: new Date("2023-07-10"),
//   },
//   {
//     id: "e4",
//     description: "Stationaries",
//     amount: 18.99,
//     date: new Date("2023-03-14"),
//   },
//   {
//     id: "e5",
//     description: "Some More Stationaries",
//     amount: 14.75,
//     date: new Date("2023-02-19"),
//   },
//   {
//     id: "e6",
//     description: "Bought sum fruits",
//     amount: 69.99,
//     date: new Date("2023-12-14"),
//   },
//   {
//     id: "e7",
//     description: "Bought a pair of shoe",
//     amount: 80.0,
//     date: new Date("2023-12-14"),
//   },
//   {
//     id: "e8",
//     description: "Bought a pair of shoe",
//     amount: 55.99,
//     date: new Date("2023-07-10"),
//   },
//   {
//     id: "e9",
//     description: "Stationaries",
//     amount: 18.99,
//     date: new Date("2023-03-14"),
//   },
//   {
//     id: "e10",
//     description: "Some More Stationaries",
//     amount: 14.75,
//     date: new Date("2023-02-19"),
//   },
//   {
//     id: "e11",
//     description: "Purchase Pencils",
//     amount: 9.76,
//     date: new Date("2024-06-16"),
//   },
// ];

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      // const id = new Date().toString() + Math.random().toString();
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
