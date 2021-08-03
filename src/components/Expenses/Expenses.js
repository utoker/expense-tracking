import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const saveFilterChange = (enteredFilterData) => {
    setFilteredYear(enteredFilterData);
  };
  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={saveFilterChange}
          value={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
