import { useState } from 'react';
import Card from '../Layout/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import styles from './Expenses.module.scss';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const handleFilter = filter => setFilteredYear(filter);

  const filteredExpenses = expenses.filter(
    e => e.date.getFullYear() === +filteredYear
  );

  return (
    <Card className={styles.card}>
      <ExpensesFilter filteredYear={filteredYear} onFilter={handleFilter} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
