import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = ({ onAddExpense }) => {
  const [showNewExpense, setShowNewExpense] = useState(false);
  const onCancel = () => {
    setShowNewExpense(false);
  };

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {showNewExpense ? (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={onCancel}
        />
      ) : (
        <button onClick={() => setShowNewExpense(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
