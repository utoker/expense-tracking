import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div>
        <h2 className="expense-item__description">{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
