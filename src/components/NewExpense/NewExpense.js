import { useState } from 'react';
import Button from '../Layout/Button';
import ExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.scss';

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmitExpense = expenseData => {
    const expense = {
      ...expenseData,
      id: String(Math.floor(Math.random() * 1000) + 1),
    };
    onAddExpense(expense);
  };

  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  return (
    <div className={styles.container}>
      {!showForm ? (
        <Button onClick={handleShowForm}>Add New Expense</Button>
      ) : (
        <ExpenseForm
          onSubmitExpense={handleSubmitExpense}
          onHideForm={handleHideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
