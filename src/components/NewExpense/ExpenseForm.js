import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    onSaveExpenseData(expenseData);
    onCancel();
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };
  const expenseData = {
    title: userInput.enteredTitle,
    amount: +userInput.enteredAmount,
    date: new Date(userInput.enteredDate),
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            value={userInput.enteredTitle}
            type="text"
            onChange={(e) =>
              setUserInput((prevState) => ({
                ...prevState,
                enteredTitle: e.target.value,
              }))
            }
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            value={userInput.enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) =>
              setUserInput((prevState) => ({
                ...prevState,
                enteredAmount: e.target.value,
              }))
            }
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) =>
              setUserInput((prevState) => ({
                ...prevState,
                enteredDate: e.target.value,
              }))
            }
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={() => onCancel()}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
