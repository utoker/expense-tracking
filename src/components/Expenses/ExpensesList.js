import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((el) => (
        <ExpenseItem
          title={el.title}
          amount={el.amount}
          date={el.date}
          key={el.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
